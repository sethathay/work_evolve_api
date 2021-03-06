/**
 * workEvolve API
 * workEvolve Restful API generated by Swagger
 *
 * OpenAPI spec version: 0.1.0
 * Contact: development@workevolve.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WorkEvolveApi);
  }
}(this, function(expect, WorkEvolveApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WorkEvolveApi.AddressBookApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AddressBookApi', function() {
    describe('getAddressBookById', function() {
      it('should call getAddressBookById successfully', function(done) {
        //uncomment below and update the code to test getAddressBookById
        //instance.getAddressBookById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllAddressBooks', function() {
      it('should call getAllAddressBooks successfully', function(done) {
        //uncomment below and update the code to test getAllAddressBooks
        //instance.getAllAddressBooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAddressBookById', function() {
      it('should call removeAddressBookById successfully', function(done) {
        //uncomment below and update the code to test removeAddressBookById
        //instance.removeAddressBookById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveAddressBook', function() {
      it('should call saveAddressBook successfully', function(done) {
        //uncomment below and update the code to test saveAddressBook
        //instance.saveAddressBook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAddressBook', function() {
      it('should call updateAddressBook successfully', function(done) {
        //uncomment below and update the code to test updateAddressBook
        //instance.updateAddressBook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
