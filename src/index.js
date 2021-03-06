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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'api/AddressBookApi', 'api/ProjectApi', 'api/SampleApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/AddressBookApi'), require('./api/ProjectApi'), require('./api/SampleApi'));
  }
}(function(ApiClient, AddressBookApi, ProjectApi, SampleApi) {
  'use strict';

  /**
   * workEvolve_Restful_API_generated_by_Swagger.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WorkEvolveApi = require('index'); // See note below*.
   * var xxxSvc = new WorkEvolveApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WorkEvolveApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new WorkEvolveApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new WorkEvolveApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddressBookApi service constructor.
     * @property {module:api/AddressBookApi}
     */
    AddressBookApi: AddressBookApi,
    /**
     * The ProjectApi service constructor.
     * @property {module:api/ProjectApi}
     */
    ProjectApi: ProjectApi,
    /**
     * The SampleApi service constructor.
     * @property {module:api/SampleApi}
     */
    SampleApi: SampleApi
  };

  return exports;
}));
