const request = require('request');
const config = require('../../app/config');
const _ = require('../../app/common/common-lodash');
const assert = require('cucumber-assert');
const getRequest = require('./getRequest');

function crearStep() {
  let globalResponse;
  function makeRequest(bodyIn, callback) {
    const options = {
      headers: {
        'x-country': 'CO',
        'x-channel': 'Web',
        'x-commerce': 'Banco'
      },
      json: bodyIn
    };
    return request.post(config.crearEndpoint, options, (errorPost, response, body) => {
      if (errorPost) {
        return callback(errorPost);
      }
      return callback(null, globalResponse = body);
    });
  }
  function postPersonalData(typeId, numberId, names, paternalSurname, maternalSurname, birthday, email, phone, regionCode, cityCode, birthPlace, civilStatus, nationality, gender, address, callback) {
    const body = getRequest();
    if (typeId === 'vacio') { delete body.typeId; } else { body.typeId = typeId; }
    if (numberId === 'vacio') { delete body.numberId; } else { body.numberId = numberId; }
    if (names === 'vacio') { delete body.names; } else { body.names = names; }
    if (paternalSurname === 'vacio') { delete body.paternalSurname; } else { body.paternalSurname = paternalSurname; }
    if (maternalSurname === 'vacio') { delete body.maternalSurname; } else { body.maternalSurname = maternalSurname; }
    if (birthday === 'vacio') { delete body.birthday; } else { body.birthday = birthday; }
    if (email === 'vacio') { delete body.email; } else { body.email = email; }
    if (phone === 'vacio') { delete body.phone; } else { body.phone = phone; }
    if (regionCode === 'vacio') { delete body.regionCode; } else { body.regionCode = regionCode; }
    if (cityCode === 'vacio') { delete body.cityCode; } else { body.cityCode = cityCode; }
    if (birthPlace === 'vacio') { delete body.birthPlace; } else { body.birthPlace = birthPlace; }
    if (civilStatus === 'vacio') { delete body.civilStatus; } else { body.civilStatus = civilStatus; }
    if (gender === 'vacio') { delete body.gender; } else { body.gender = gender; }
    if (nationality === 'vacio') { delete body.nationality; } else { body.nationality = nationality; }
    if (address === 'vacio') { delete body.address; } else { body.address = address; }
    return makeRequest(body, callback);
  }
  function postFinancialData(codOccupation, income, expenses, assets, liabilities, callback) {
    const body = getRequest();
    if (codOccupation === 'vacio') { delete body.codOccupation; } else { body.codOccupation = codOccupation; }
    if (income === 'vacio') { delete body.income; } else { body.income = income; }
    if (expenses === 'vacio') { delete body.expenses; } else { body.expenses = expenses; }
    if (assets === 'vacio') { delete body.assets; } else { body.assets = assets; }
    if (liabilities === 'vacio') { delete body.liabilities; } else { body.liabilities = liabilities; }
    return makeRequest(body, callback);
  }
  function postDescOccupationData(codOccupation, companyname, companydir, companytel, descactivity, econactivity, actualposition, callback) {
    const body = getRequest();
    if (codOccupation === 'vacio') { delete body.codOccupation; } else { body.codOccupation = codOccupation; }
    if (companyname === 'vacio') { delete body.descOccupation.companyname; } else { body.descOccupation.companyname = companyname; }
    if (companydir === 'vacio') { delete body.descOccupation.companydir; } else { body.descOccupation.companydir = companydir; }
    if (companytel === 'vacio') { delete body.descOccupation.companytel; } else { body.descOccupation.companytel = companytel; }
    if (descactivity === 'vacio') { delete body.descOccupation.descactivity; } else { body.descOccupation.descactivity = descactivity; }
    if (econactivity === 'vacio') { delete body.descOccupation.econactivity; } else { body.descOccupation.econactivity = econactivity; }
    if (actualposition === 'vacio') { delete body.descOccupation.actualposition; } else { body.descOccupation.actualposition = actualposition; }
    return makeRequest(body, callback);
  }
  function postPep(pep, pepStartDate, currentlyPep, pepEndDate, pepRelationshipStartDate, currentlyRelatedWithPep, pepRelationshipEndDate, foreignTransactionType, foreignCurrency, foreignAccountNumber, foreignBankName, foreignBankCountry, foreignBankCity, callback) {
    const body = getRequest();
    if (pep === 'vacio') { delete body.pep; } else { body.pep = pep; }
    if (pepStartDate === 'vacio') { delete body.pepStartDate; } else { body.pepStartDate = pepStartDate; }
    if (currentlyPep === 'vacio') { delete body.currentlyPep; } else { body.currentlyPep = currentlyPep; }
    if (pepEndDate === 'vacio') { delete body.pepEndDate; } else { body.pepEndDate = pepEndDate; }
    if (pepRelationshipStartDate === 'vacio') { delete body.pepRelationshipStartDate; } else { body.pepRelationshipStartDate = pepRelationshipStartDate; }
    if (currentlyRelatedWithPep === 'vacio') { delete body.currentlyRelatedWithPep; } else { body.currentlyRelatedWithPep = currentlyRelatedWithPep; }
    if (pepRelationshipEndDate === 'vacio') { delete body.pepRelationshipEndDate; } else { body.pepRelationshipEndDate = pepRelationshipEndDate; }
    if (foreignTransactionType === 'vacio') { delete body.foreignTransactionType; } else { body.foreignTransactionType = foreignTransactionType; }
    if (foreignCurrency === 'vacio') { delete body.foreignCurrency; } else { body.foreignCurrency = foreignCurrency; }
    if (foreignAccountNumber === 'vacio') { delete body.foreignAccountNumber; } else { body.foreignAccountNumber = foreignAccountNumber; }
    if (foreignBankName === 'vacio') { delete body.foreignBankName; } else { body.foreignBankName = foreignBankName; }
    if (foreignBankCountry === 'vacio') { delete body.foreignBankCountry; } else { body.foreignBankCountry = foreignBankCountry; }
    if (foreignBankCity === 'vacio') { delete body.foreignBankCity; } else { body.foreignBankCity = foreignBankCity; }
    return makeRequest(body, callback);
  }
  function postRef(payday, refNames, refDep, refCity, refRelationship, refPhone, refPaternalSurname, callback) {
    const body = getRequest();
    if (payday === 'vacio') { delete body.payday; } else { body.payday = payday; }
    if (refNames === 'vacio') { delete body.refNames; } else { body.refNames = refNames; }
    if (refDep === 'vacio') { delete body.refDep; } else { body.refDep = refDep; }
    if (refCity === 'vacio') { delete body.refCity; } else { body.refCity = refCity; }
    if (refRelationship === 'vacio') { delete body.refRelationship; } else { body.refRelationship = refRelationship; }
    if (refPhone === 'vacio') { delete body.refPhone; } else { body.refPhone = refPhone; }
    if (refPaternalSurname === 'vacio') { delete body.refPaternalSurname; } else { body.refPaternalSurname = refPaternalSurname; }
    return makeRequest(body, callback);
  }
  function manejarSeeError(code, variable, callback) {
    const stack = _.get(globalResponse, 'stack');
    let containsVariable = true;
    if (stack) {
      containsVariable = stack.indexOf(variable) >= 0;
    }
    const promises = [];
    promises.push(assert.equal(globalResponse.code, code, `Expected ${globalResponse.code} to be equal to ${code}`));
    promises.push(assert.equal(containsVariable, true, `stack should contain ${variable}\n${stack}`));
    assert.all(promises).then(callback).catch(callback);
  }
  this.When(/^I post to crear endpoint with personal data "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, postPersonalData);
  this.When(/^I post to crear endpoint with financial data "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, postFinancialData);
  this.When(/^I post to crear endpoint with occupation data "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, postDescOccupationData);
  this.When(/^I post to crear endpoint with pep data "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, postPep);
  this.When(/^I post to crear endpoint with ref data "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, postRef);
  this.Then(/^I can see error code "([^"]*)" and verify "([^"]*)"$/, manejarSeeError);
}
module.exports = crearStep;
