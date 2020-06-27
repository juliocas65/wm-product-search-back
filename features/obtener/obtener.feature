Feature: Check service response

Background:
    Given I have service up and running

Scenario Outline: obtener historico endpoint
    When I post to obtener historico endpoint with data "<estado>"
    Then I can see error code "<code>"

    Examples:
      | estado  | code          |
      |         | BODY_ERROR    |
      | -1      | BODY_ERROR    |
      | 127     | BODY_ERROR    |
      | 22      | BODY_ERROR    |
      | blabla  | BODY_ERROR    |
      | 75      | BODY_ERROR    |
      | 119     | BODY_ERROR    |
