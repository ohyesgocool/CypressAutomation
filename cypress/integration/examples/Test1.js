/// <reference types="Cypress" />

describe('My Test', function()
{
    it('First Test Case', function()
    {
        cy.visit("http://automationpractice.com/index.php")
        cy.get('#search_query_top').type('T Shirt').get('#searchbox > .btn').click()

                cy.get('.content_price').each(($el , index, $list) => {
            
            const price = $el.get('.price product-price').text()
            if (price.includes('16')){ 
                cy.get('.button ajax_add_to_cart_button btn btn-default').click()
            }
              ''          
        })  
   
    })

})

