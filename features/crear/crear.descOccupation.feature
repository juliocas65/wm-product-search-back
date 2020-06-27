Feature: Check service response

Background:
    Given I have service up and running

Scenario Outline: crear endpoint
    When I post to crear endpoint with occupation data "<codOccupation>", "<companyname>", "<companydir>", "<companytel>", "<descactivity>", "<econactivity>", "<actualposition>"
    Then I can see error code "<code>" and verify "<variable>"


    Examples:
      | variable        | codOccupation | companyname | companydir  | companytel  | descactivity | econactivity | actualposition  | code        |
      | companyname     | 3             | vacio       | Peso 960    | 12345678    | blabla       | 1            | blabla          | BODY_ERROR  |
      | companyname     | 3             |             | Peso 960    | 12345678    | blabla       | 1            | blabla          | BODY_ERROR  |
      | companyname     | 3             | Falab&lla   | Peso 960    | 12345678    | blabla       | 1            | blabla          | BODY_ERROR  |
      | companyname     | 3             | qwertyuiopqwertyuiopqwertyuiopqwerty| Peso 960    | 12345678    | blabla       | 1            | blabla          | BODY_ERROR  |
      | companyname     | 6             | qwertyuiopqwertyuiopqwertyuiopqwertyuiopq| Peso 960    | 12345678    | blabla       | 1            | blabla          | BODY_ERROR  |
      | companydir      | 3             | Falabilla   | vacio       | 12345678    | blabla       | 1            | blabla          | BODY_ERROR  |
      | companydir      | 3             | Falabilla   |             | 12345678    | blabla       | 1            | blabla          | BODY_ERROR  |
      | companytel      | 3             | Falabilla   | Peso 960    | vacio       | blabla       | 1            | blabla          | BODY_ERROR  |
      | companytel      | 3             | Falabilla   | Peso 960    |             | blabla       | 1            | blabla          | BODY_ERROR  |
      | companytel      | 3             | Falabilla   | Peso 960    | 60060060as  | blabla       | 1            | blabla          | BODY_ERROR  |
      | companytel      | 3             | Falabilla   | Peso 960    | asdfg@·~½   | blabla       | 1            | blabla          | BODY_ERROR  |
      | descactivity    | 3             | Falabilla   | Peso 960    | 12345678    | vacio        | 1            | blabla          | BODY_ERROR  |
      | descactivity    | 3             | Falabilla   | Peso 960    | 12345678    |              | 1            | blabla          | BODY_ERROR  |
      | econactivity    | 3             | Falabilla   | Peso 960    | 12345678    | blabla       | vacio        | blabla          | BODY_ERROR  |
      | econactivity    | 3             | Falabilla   | Peso 960    | 12345678    | blabla       |              | blabla          | BODY_ERROR  |
      | econactivity    | 3             | Falabilla   | Peso 960    | 12345678    | blabla       | 0            | blabla          | BODY_ERROR  |
      | econactivity    | 3             | Falabilla   | Peso 960    | 12345678    | blabla       | 244          | blabla          | BODY_ERROR  |
      | econactivity    | 3             | Falabilla   | Peso 960    | 12345678    | blabla       | blabla       | blabla          | BODY_ERROR  |
      | actualposition  | 4             | Falabilla   | Peso 960    | 12345678    | blabla       | 1            | vacio           | BODY_ERROR  |
      | actualposition  | 4             | Falabilla   | Peso 960    | 12345678    | blabla       | 1            |                 | BODY_ERROR  |