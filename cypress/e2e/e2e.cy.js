/// <reference types="cypress" />
/*bibliotica para dados fake, necessário instalar antes.*/
import faker from 'faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    
    // utilizando Hooks, conceito para diminuir a quantidade de linhas iguais, por exemplo para 
    // acessar a pagina de produtos
    beforeEach(() => {
        cy.visit('/produtos')
    });

    it('Fazer um pedido na loja Ebac Shop com massa de dados ponta a ponta', () => {
        //listra de produtos
        //ProdutosPage.addListaProdutos()
        cy.addProdutos('Abominable Hoodie', 1)
        cy.addProdutos('Atlas Fitness Tank', 1)
        cy.addProdutosP2('Atomic Endurance Running Tee (Crew-Neck)', 1)
        cy.addProdutosP2('Augusta Pullover Jacket', 1)
        
        //utilizando dados fakes
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        //Checkout 
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.checkout(nomeFaker, 
                   sobrenomeFaker, 
                   'EBAC-SHOP', 
                   'Brasil', 
                   'Av Brasil', 
                   'Americana', 
                   'São Paulo', 
                   '13068-875', 
                   '9999-9999', 
                   emailFaker)          
    });
});