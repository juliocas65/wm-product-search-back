Feature: Check service response

Background:
    Given I have service up and running

Scenario Outline: crear endpoint
    When I post to crear endpoint with financial data "<codOccupation>", "<income>", "<expenses>", "<assets>", "<liabilities>"
    Then I can see error code "<code>" and verify "<variable>"

    Examples:
      | variable      | codOccupation | income    | expenses  | assets   | liabilities | code        |
      | codOccupation | vacio         | 10000000  | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | codOccupation |               | 10000000  | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | codOccupation | bla           | 10000000  | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | codOccupation | 0             | 10000000  | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | codOccupation | 15            | 10000000  | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | income        | 1             | vacio     | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | income        | 1             |           | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | income        | 1             | blabla    | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | income        | 1             | 1000000a  | 4000000   | 5000000  | 6000000     | BODY_ERROR  |
      | expenses      | 1             | 10000000  | vacio     | 5000000  | 6000000     | BODY_ERROR  |
      | expenses      | 1             | 10000000  |           | 5000000  | 6000000     | BODY_ERROR  |
      | expenses      | 1             | 10000000  | blabla    | 5000000  | 6000000     | BODY_ERROR  |
      | expenses      | 1             | 10000000  | 400000a   | 5000000  | 6000000     | BODY_ERROR  |
      | assets        | 1             | 10000000  | 4000000   | vacio    | 6000000     | BODY_ERROR  |
      | assets        | 1             | 10000000  | 4000000   |          | 6000000     | BODY_ERROR  |
      | assets        | 1             | 10000000  | 4000000   | blabla   | 6000000     | BODY_ERROR  |
      | assets        | 1             | 10000000  | 4000000   | 500000a  | 6000000     | BODY_ERROR  |
      | liabilities   | 1             | 10000000  | 4000000   | 5000000  | vacio       | BODY_ERROR  |
      | liabilities   | 1             | 10000000  | 4000000   | 5000000  |             | BODY_ERROR  |
      | liabilities   | 1             | 10000000  | 4000000   | 5000000  | blabla      | BODY_ERROR  |
      | liabilities   | 1             | 10000000  | 4000000   | 5000000  | 600000a     | BODY_ERROR  |
