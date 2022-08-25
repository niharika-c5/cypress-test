Feature: Click Get a demo

    Scenario: verify validation message when user clicks get a demo without partner selection

        Given I launch liberis site
        Then  I should be on home page
        When  I click on get a demo button
        Then  I should be on partner selection page
        And   It should display three different types of required partners
        When  I click on get a demo button without selecting partner
        Then  I should see validation message "Please select a type of partner"


