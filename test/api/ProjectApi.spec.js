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
    instance = new WorkEvolveApi.ProjectApi();
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

  describe('ProjectApi', function() {
    describe('getAllProjects', function() {
      it('should call getAllProjects successfully', function(done) {
        //uncomment below and update the code to test getAllProjects
        //instance.getAllProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectById', function() {
      it('should call getProjectById successfully', function(done) {
        //uncomment below and update the code to test getProjectById
        //instance.getProjectById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveProject', function() {
      it('should call saveProject successfully', function(done) {
        //uncomment below and update the code to test saveProject
        //instance.saveProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProject', function() {
      it('should call updateProject successfully', function(done) {
        //uncomment below and update the code to test updateProject
        //instance.updateProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));