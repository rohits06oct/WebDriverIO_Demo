Feature: Performing Topevents is scrollable or not

    Scenario: Scroll the topevents dropdown menu
        Given I am a user on espn.com
        When I click Top Events button
        Then the dropdown menu appears
        Then the dropdown menu scrollable