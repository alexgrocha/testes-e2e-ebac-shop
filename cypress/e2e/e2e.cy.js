/// <reference types="cypress" />
/*bibliotica para dados fake, necessário instalar antes*/
import faker from 'faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        var quantidade = 1

        //primeiro produto
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        // antes de incluir a qtd, necessário limpar o campo
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        //retorno esperado, produto adicionado no carrinho
        cy.get('.woocommerce-message').should('contain', ' “Abominable Hoodie” foi adicionado no seu carrinho.')
        //botão comprar parte superior da tela
        cy.get('#primary-menu > .menu-item-629 > a').click()

        //segundo produto
        cy.get('[class="product-block grid"]').contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        //terceiro produto
        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-XS').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', ' “Atlas Fitness Tank” foi adicionado no seu carrinho.')
        
        //mudando de pagina
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click

        //quarto produto
        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
   
        //utilizando dados fakes
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email()

        cy.get('#billing_first_name').type(nomeFaker)
        cy.get('#billing_last_name').type(sobrenomeFaker)
        cy.get('#billing_company').type('EBAC-SHOP')
        cy.get('#select2-billing_country-container').click().type('Brasil').click()
        cy.get('#billing_address_1').type('Av Brasil')
        cy.get('#billing_city').type('Americana')
        cy.get('#select2-billing_state-container').click().type('São Paulo').click()
        cy.get('#billing_postcode').type('13068-875')
        cy.get('#billing_phone').type('9999-9999')
        cy.get('#billing_email').type(emailFaker)
        cy.get('#terms').click()
        cy.get('#place_order').click()
        
        //validando pedido
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
});