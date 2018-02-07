# WorkEvolveApi.ProjectApi

All URIs are relative to *http://localhost:81/l5-swaggers/public/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllProjects**](ProjectApi.md#getAllProjects) | **POST** /tenants/{tenantId}/projects/get | get all projects
[**getProjectById**](ProjectApi.md#getProjectById) | **GET** /tenants/{tenantId}/projects/{projectId} | get project by id
[**saveProject**](ProjectApi.md#saveProject) | **POST** /tenants/{tenantId}/projects | save a new project
[**updateProject**](ProjectApi.md#updateProject) | **POST** /tenants/{tenantId}/projects/{projectId} | update project by id


<a name="getAllProjects"></a>
# **getAllProjects**
> getAllProjects(tenantId, opts)

get all projects

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.ProjectApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var opts = { 
  'filter': null, // Object | filter projects by condition provided
  'offset': 0, // Number | The number of items to skip before starting to collect the result set
  'limit': 25 // Number | The number of items to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAllProjects(tenantId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **filter** | **Object**| filter projects by condition provided | [optional] 
 **offset** | **Number**| The number of items to skip before starting to collect the result set | [optional] [default to 0]
 **limit** | **Number**| The number of items to return | [optional] [default to 25]

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProjectById"></a>
# **getProjectById**
> getProjectById(tenantId, projectId)

get project by id

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.ProjectApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var projectId = "projectId_example"; // String | id of project to filter by


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProjectById(tenantId, projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **projectId** | **String**| id of project to filter by | 

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveProject"></a>
# **saveProject**
> saveProject(tenantId, data)

save a new project

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.ProjectApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var data = null; // Object | provide your project data information to save


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveProject(tenantId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **data** | **Object**| provide your project data information to save | 

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProject"></a>
# **updateProject**
> updateProject(tenantId, projectId, data)

update project by id

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.ProjectApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var projectId = "projectId_example"; // String | id of project to filter by

var data = null; // Object | provide your project data information to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProject(tenantId, projectId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **projectId** | **String**| id of project to filter by | 
 **data** | **Object**| provide your project data information to update | 

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

