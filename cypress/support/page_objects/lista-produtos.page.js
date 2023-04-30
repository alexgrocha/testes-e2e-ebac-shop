class ListaProdutos {

    addListaProdutos() {
        //ações do método.
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
        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', ' “Atlas Fitness Tank” foi adicionado no seu carrinho.').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()        
    
        //terceiro produto
        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-XS').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', ' “Atlas Fitness Tank” foi adicionado no seu carrinho.').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
      
        //mudando de pagina
        cy.get('#primary-menu > .active > a').click() 
        cy.get(':nth-child(2) > .page-numbers').click()

        //quarto produto
        cy.get('[class="product-block grid"]').contains('Atomic Endurance Running Tee (Crew-Neck)').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', ' “Atomic Endurance Running Tee (Crew-Neck)” foi adicionado no seu carrinho.').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
    }
}
export default new ListaProdutos()
