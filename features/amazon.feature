Feature: Sample Test Cases for WebDriverIo With Cucumber  

Scenario Outline: As a user, I am able to add Amazonbasics products to the cart
    Given I am on the home page
    When I search for <category>
    And I select our brands check box
    And I select product <product>
    Then I should see selected product <product> page
    And I should see proper size <size> is selected
    When I click on add_to_cart button
    Then I should see item count 1 in cart

    Examples:
      | category | product | size |
      | amazonbasics |Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon|8 Sheet|
