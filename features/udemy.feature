Feature: Sample Test Cases for WebDriverIo With Cucumber  
  
Scenario Outline: As a user, I should be able to select udemy course
    Given I am on google page
    When I search google for <search>
    And I select link containing <link text>
    Then I validate required website opened <link text>
    And I search for course on udemy
    When I select Highest Rated course
    Then Validate course preview is displayed
    And  I close the browser
  Examples:
    | search | link text |
    |Test Automation Learning|udemy|