Feature: Check if service is up and running

  Background:
    Given I have service up and running

  Scenario Outline: Display that service is running correctly
    When I go to "<serviceUrl>"
    Then I can see "<serviceResponse>"

    Examples:
      | serviceUrl                            | serviceResponse                  |
      | http://localhost:3001/products/health | products up and running on local |