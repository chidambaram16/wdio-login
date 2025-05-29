Feature: Swag Login functionality

  Scenario Outline: Scenario: User logs in with valid credentials

    Given I am on Swag the login page
    When I login with "<username>" and "<password>"
    Then I should be directed to the home page
    And I should see the "<Product>"

    Examples:
     | username      | password     | Product                   |
     | standard_user | secret_sauce | Sauce Labs Backpack       |