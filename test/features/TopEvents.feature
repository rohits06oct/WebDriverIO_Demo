Feature: Performing Topevents is display or not

    Scenario: the topevents dropdown menu
        Given I am a user on espn.com
        When I click Top Events button
        Then the dropdown menu appears