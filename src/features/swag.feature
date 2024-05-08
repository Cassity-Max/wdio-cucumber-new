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
