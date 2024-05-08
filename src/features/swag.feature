Feature: The Swag Labs Website

  Scenario Outline: As a user, an error message will be displayed when I entered incorrect credentials
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an error message on the login page saying <message>

    Examples: 
      | username        | password     | message                                                     |
      | random_user     | secret_sauce | Username and password do not match any user in this service |
      | standard_user   | barfoo       | Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Sorry, this user has been locked out                        |

  Scenario Outline: As a user, I can log into the inventory page
    Given I am on the login page
    When I login with <username> and <password>
    Then I should be redirected to the inventory page

    Examples: 
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

  Scenario: As a user, I can short the products by price
    Given I am on the inventory page
    When I click on the price filter
    Then I should see the products sorted by price from low to high

  Scenario: As a user, I can add a product to the cart
    Given I am on the inventory page
    When I click on the add to cart button for the first two products
    Then I should see the cart badge with 2 items

  Scenario: As a user, I add customer information
    Given I am on the customerdata page
    When I enter the customer information
    Then I should see the customer information filled in
    Then I click on the continue button

  Scenario: As a user, I can checkout
    Given I am on the checkout page
    When I click on the finish button
    Then I should see the finish page

  Scenario: As a user, I can finish the checkout
    Given I am on the complete page
    When I click on the "backHome" button
    Then I should see the home page
