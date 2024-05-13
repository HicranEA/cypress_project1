/// <reference types="cypress"/>

describe('Project01 - Validate Form Elements', () => {

  beforeEach(() => { 
      cy.visit('https://techglobal-training.com/frontend/project-1');

    });

    it('Test Case 01: Validate the Contact Us Information', () => {
      cy.get('.is-size-3').should('have.text', 'Contact Us');
      cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
      cy.get('#email').should('have.text', 'info@techglobalschool.com');
      cy.get('#phone-number').should('have.text', '(224) 580-2150');
     
    })

    it('Test Case 02 - Validate the Full Name Input Box', () => {
      cy.get('.input').first().should('be.visible')
      cy.get('.input').first().should('have.attr', 'required')
      cy.get('.label').first().should('have.text','Full name *')
      cy.get('.input').first().should('have.attr', 'placeholder', 'Enter your full name')
   



  });


})