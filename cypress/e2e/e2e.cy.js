/// <reference types="cypress" />
/*bibliotica para dados fake, necessário instalar antes.*/
import faker from 'faker';
import ProdutosPage from '../support/page_objects/lista-produtos.page';
//import CheckoutPage from '../support/page_objects/checkout.page';

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

    it('Fazer um pedido na loja Ebac Shop com massa de dados ponta a ponta', () => {
        ProdutosPage.addListaProdutos()

        //Checkout 
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