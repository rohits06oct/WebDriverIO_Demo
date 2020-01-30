Feature: Performing login and logout in HeroKuApp

   Scenario: Login with a default user
      Given I'm on the login page
      When I login with the default user
      Then I shall be on the secure area page

   Scenario: Logout from the secure area page
      When I click on logout button
      Then I will comeback to login page