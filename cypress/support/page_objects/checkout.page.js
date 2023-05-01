
// NÃO ESTA SENDO UTLIZADO ESTA CLASS PARA INCLUIR OS PRODUTOS!

class CheckoutLoja {

    checkoutteste(){
   
        //ações do método.
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
    }
    
}
export default new CheckoutLoja()
