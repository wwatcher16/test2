'use strict';

const chai   = require('chai');
chai.use(require('chai-as-promised'));
chai.should();
const expect = chai.expect;

require('./lib/test-helper');

const until = protractor.ExpectedConditions;

describe('App', function() {

  it('should bring up components on load', function() {
    browser.get(`http://localhost:${process.env.PORT}`);
    browser.wait(until.titleContains('JS Complexity'), 500);
    browser.wait(until.presenceOf(browser.element(by.id('js-complexity-app'))), 500);
  });

  it('should bring main history div on execute button click', function () {
  	browser.get(`http://localhost:${process.env.PORT}`);
  	browser.wait(until.presenceOf(browser.element(by.id('evaluate'))), 500);
  	browser.element(by.id("evaluate")).click();
  	browser.wait(until.presenceOf(browser.element(by.id('main-history'))), 500);
  });

  it('should evaluate default sample code to a complexity of 3', function() {
    browser.get(`http://localhost:${process.env.PORT}`);
    browser.element(by.id("evaluate")).click();
    browser.element(by.id("result-number")).getText().then(function(value){
      expect(value).to.equal('3');
  	)};
  });

  it('should remove history div on clear history button click', function () {
  	browser.get(`http://localhost:${process.env.PORT}`);
  	browser.wait(until.presenceOf(browser.element(by.id('evaluate'))), 500);
  	browser.element(by.id("evaluate")).click();
  	browser.element(by.id("clear-history")).click();
  	browser.element(by.id("result-number")).getText().then(function(value){
      expect(value).to.equal('3');
  	)};
  	browser.wait(until.presenceOf(browser.element(by.id('main-history'))), 500);
  });

});

