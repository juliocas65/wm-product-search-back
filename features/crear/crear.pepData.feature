Feature: Check service response

Background:
    Given I have service up and running

Scenario Outline: crear endpoint
    When I post to crear endpoint with pep data "<pep>", "<pepStartDate>", "<currentlyPep>", "<pepEndDate>", "<pepRelationshipStartDate>", "<currentlyRelatedWithPep>", "<pepRelationshipEndDate>", "<foreignTransactionType>", "<foreignCurrency>", "<foreignAccountNumber>", "<foreignBankName>", "<foreignBankCountry>", "<foreignBankCity>"
    Then I can see error code "<code>" and verify "<variable>"


    Examples:
      | variable                 | pepRelationshipStartDate | currentlyRelatedWithPep | pepRelationshipEndDate | foreignTransactionType  | foreignCurrency   | foreignAccountNumber  | foreignBankName | foreignBankCountry  | foreignBankCity   | code          |
      | pepRelationshipStartDate | 31/02/2005               | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | pepRelationshipStartDate | dsfdasfas                | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | currentlyRelatedWithPep  | 08/02/1989               | vacio                   | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | currentlyRelatedWithPep  | 08/02/1989               |                         | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | currentlyRelatedWithPep  | 08/02/1989               | 2                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | currentlyRelatedWithPep  | 08/02/1989               | fadsf                   | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | pepRelationshipEndDate   | 08/02/1989               | 0                       | vacio                  | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | pepRelationshipEndDate   | 08/02/1989               | 0                       |                        | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | pepRelationshipEndDate   | 08/02/1989               | 0                       | 32/02/1842             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | pepRelationshipEndDate   | 08/02/1989               | 0                       | scvgfdfgdf             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | foreignTransactionType   | 08/02/1989               | 0                       | 25/12/2016             |                         | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | foreignTransactionType   | 08/02/1989               | 0                       | 25/12/2016             | sdafdsafdsf             | Chaucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | foreignCurrency          | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          |                   | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | foreignCurrency          | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Ch_ucha           | 12345678              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | foreignAccountNumber     | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Chaucha           |                       | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | foreignAccountNumber     | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 123456á8              | Banco Falabella | Chile               | Santiago          | BODY_ERROR    |
      | foreignBankName          | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              |                 | Chile               | Santiago          | BODY_ERROR    |
      | foreignBankName          | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Ban_o Falab$ll@ | Chile               | Santiago          | BODY_ERROR    |
      | foreignBankCountry       | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella |                     | Santiago          | BODY_ERROR    |
      | foreignBankCountry       | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | C_il$               | Santiago          | BODY_ERROR    |
      | foreignBankCity          | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               |                   | BODY_ERROR    |
      | foreignBankCity          | 08/02/1989               | 0                       | 25/12/2016             | Transferencias          | Chaucha           | 12345678              | Banco Falabella | Chile               | Sa_t$a#o          | BODY_ERROR    |