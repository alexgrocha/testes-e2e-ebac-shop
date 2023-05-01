Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProdutos', (produto, quantidade) => {
    //primeiro produto
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
    cy.get('#primary-menu > .menu-item-629 > a').click()
});
Cypress.Commands.add('addProdutosP2', (produto, quantidade) => {
    //mudando de pagina
    cy.get('#primary-menu > .active > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()

    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
    cy.get('#primary-menu > .menu-item-629 > a').click()
});
Cypress.Commands.add('checkout', (nomeFaker, sobrenomeFaker, empresa, pais, rua, cidade, estado, cep, telefone, emailFaker) => {
    cy.get('#billing_first_name').type(nomeFaker)
    cy.get('#billing_last_name').type(sobrenomeFaker)
    cy.get('#billing_company').type(empresa)
    cy.get('#select2-billing_country-container').click().type(pais).click()
    cy.get('#billing_address_1').type(rua)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado).click()
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(emailFaker)
    cy.get('#terms').click()
    cy.get('#place_order').click()

    //validando pedido
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands..
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })               