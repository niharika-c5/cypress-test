import {Given,When,Then} from '@badeball/cypress-cucumber-preprocessor';

Given(/^I launch liberis site$/, () => {
	cy.visit('/')
});

Then(/^I should be on home page$/, () => {
	  cy.title().should('include','Your Global Partner For Embedded Business Finance | Liberis')
});

When(/^I click on get a demo button$/, () => {
	cy.get('.hero-content > .btn').click()

});

Then(/^I should be on partner selection page$/, () => {
	cy.title().should('include','Become A Partner | Liberis')
});

Then(/^It should display three different types of required partners$/, () => {
	cy.get('.radio_container > :nth-child(1) > label').should("have.text","I'm a Broker");
	cy.get('.radio_container > :nth-child(2) > label').should("have.text","I'm an ISO");
	cy.get('.radio_container > :nth-child(3) > label').should("have.text","I'm a Strategic Partner");

});

When(/^I click on get a demo button without selecting partner$/, () => {
	cy.get('.inner-content > .btn').click();
});

Then(/^I should see validation message "([^"]*)"$/, (valText) => {
  
  cy.get('.ph-error-inner').invoke('text').then((text)=>{
	expect(text).to.eq(valText)

  })
});
