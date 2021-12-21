Feature: Sample Test Cases for pairsoft 

Scenario Outline: Perform pairsoft sample task
   Given I am on the home page
   When I perform login <username> <password>
   And I select Entered option
   And I select row <row value> from table
   And Hover over download button and download file
   Then I should print column values for selected row <row value>
   Examples:
   |username|password|row value|
   |rsharma|abc123$$$|2|
