Feature: Check service response

Background:
    Given I have service up and running

Scenario Outline: search product
    When I get to search endpoint with data "<search>"
    Then I can see code "<code>"

    Examples:
      | search  | code          |
      |         | BODY_ERROR    |
      | -1      | BODY_ERROR    |
      | 127     | BODY_ERROR    |
      | 22      | BODY_ERROR    |
      | blabla  | BODY_ERROR    |
      | 75      | BODY_ERROR    |
      | 119     | BODY_ERROR    |
