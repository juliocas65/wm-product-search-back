Feature: Check service response

Background:
    Given I have service up and running

Scenario Outline: crear endpoint
    When I post to crear endpoint with ref data "<payday>", "<refNames>", "<refDep>", "<refCity>", "<refRelationship>", "<refPhone>", "<refPaternalSurname>"
    Then I can see error code "<code>" and verify "<variable>"

    Examples:
      | variable           | payday | refNames       | refDep   | refCity | refRelationship | refPhone    | refPaternalSurname | code          |
      | payday             | vacio  | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | payday             |        | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | payday             | 0      | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | payday             | 65404  | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | payday             | dsfas  | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refNames           | 05     | vacio          | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refNames           | 05     |                | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refNames           | 05     | sdf0 125e      | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refNames           | 05     | @#~Carlitos    | 5000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refDep             | 05     | Carlos Alberto | vacio    | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refDep             | 05     | Carlos Alberto |          | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refDep             | 05     | Carlos Alberto | 1000     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refDep             | 05     | Carlos Alberto | 123456   | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refDep             | 05     | Carlos Alberto | blabla   | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refDep             | 05     | Carlos Alberto | 5001     | 5201    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refCity            | 05     | Carlos Alberto | 5000     | vacio   | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refCity            | 05     | Carlos Alberto | 5000     |         | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refCity            | 05     | Carlos Alberto | 5000     | 1000    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refCity            | 05     | Carlos Alberto | 5000     | 123456  | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refCity            | 05     | Carlos Alberto | 5000     | balbl   | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refCity            | 05     | Carlos Alberto | 5000     | 5000    | 1               | 3123456789  | Galaz              | BODY_ERROR    |
      | refRelationship    | 05     | Carlos Alberto | 5000     | 5201    | vacio           | 3123456789  | Galaz              | BODY_ERROR    |
      | refRelationship    | 05     | Carlos Alberto | 5000     | 5201    |                 | 3123456789  | Galaz              | BODY_ERROR    |
      | refRelationship    | 05     | Carlos Alberto | 5000     | 5201    | primo           | 3123456789  | Galaz              | BODY_ERROR    |
      | refRelationship    | 05     | Carlos Alberto | 5000     | 5201    | 0               | 3123456789  | Galaz              | BODY_ERROR    |
      | refRelationship    | 05     | Carlos Alberto | 5000     | 5201    | 12              | 3123456789  | Galaz              | BODY_ERROR    |
      | refPhone           | 05     | Carlos Alberto | 5000     | 5201    | 1               | vacio       | Galaz              | BODY_ERROR    |
      | refPhone           | 05     | Carlos Alberto | 5000     | 5201    | 1               |             | Galaz              | BODY_ERROR    |
      | refPhone           | 05     | Carlos Alberto | 5000     | 5201    | 1               | sdfdasfdas  | Galaz              | BODY_ERROR    |
      | refPhone           | 05     | Carlos Alberto | 5000     | 5201    | 1               | 1123456789  | Galaz              | BODY_ERROR    |
      | refPhone           | 05     | Carlos Alberto | 5000     | 5201    | 1               | 31234567890 | Galaz              | BODY_ERROR    |
      | refPhone           | 05     | Carlos Alberto | 5000     | 5201    | 1               | 3123456s89  | Galaz              | BODY_ERROR    |
      | refPhone           | 05     | Carlos Alberto | 5000     | 5201    | 1               | 3123456789a | Galaz              | BODY_ERROR    |
      | refPhone           | 05     | Carlos Alberto | 5000     | 5201    | 1               | 312345678a  | Galaz              | BODY_ERROR    |
      | refPaternalSurname | 05     | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  | vacio              | BODY_ERROR    |
      | refPaternalSurname | 05     | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  |                    | BODY_ERROR    |
      | refPaternalSurname | 05     | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  | 12sfdafdas         | BODY_ERROR    |
      | refPaternalSurname | 05     | Carlos Alberto | 5000     | 5201    | 1               | 3123456789  | @#~@#asd           | BODY_ERROR    |