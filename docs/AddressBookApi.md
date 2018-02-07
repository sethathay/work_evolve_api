# WorkEvolveApi.AddressBookApi

All URIs are relative to *http://localhost:81/l5-swaggers/public/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressBookById**](AddressBookApi.md#getAddressBookById) | **GET** /tenants/{tenantId}/addressbooks/{addressBookId} | get addressbook by id
[**getAllAddressBooks**](AddressBookApi.md#getAllAddressBooks) | **POST** /tenants/{tenantId}/addressbooks/get | get all addressbooks
[**removeAddressBookById**](AddressBookApi.md#removeAddressBookById) | **DELETE** /tenants/{tenantId}/addressbooks/{addressBookId} | delete addressbook by id
[**saveAddressBook**](AddressBookApi.md#saveAddressBook) | **POST** /tenants/{tenantId}/addressbooks | save a new addressbook
[**updateAddressBook**](AddressBookApi.md#updateAddressBook) | **POST** /tenants/{tenantId}/addressbooks/{addressBookId} | update addressbook by id


<a name="getAddressBookById"></a>
# **getAddressBookById**
> getAddressBookById(tenantId, addressBookId)

get addressbook by id

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.AddressBookApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var addressBookId = "addressBookId_example"; // String | id of addressbook to filter by


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAddressBookById(tenantId, addressBookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **addressBookId** | **String**| id of addressbook to filter by | 

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllAddressBooks"></a>
# **getAllAddressBooks**
> getAllAddressBooks(tenantId, opts)

get all addressbooks

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.AddressBookApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var opts = { 
  'filter': null, // Object | filter addressbooks by condition provided
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
apiInstance.getAllAddressBooks(tenantId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **filter** | **Object**| filter addressbooks by condition provided | [optional] 
 **offset** | **Number**| The number of items to skip before starting to collect the result set | [optional] [default to 0]
 **limit** | **Number**| The number of items to return | [optional] [default to 25]

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeAddressBookById"></a>
# **removeAddressBookById**
> removeAddressBookById(tenantId, addressBookId)

delete addressbook by id

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.AddressBookApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var addressBookId = "addressBookId_example"; // String | id of addressbook to filter by


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeAddressBookById(tenantId, addressBookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **addressBookId** | **String**| id of addressbook to filter by | 

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveAddressBook"></a>
# **saveAddressBook**
> saveAddressBook(tenantId, data)

save a new addressbook

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.AddressBookApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var data = null; // Object | provide your addressbook data information to save


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAddressBook(tenantId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **data** | **Object**| provide your addressbook data information to save | 

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAddressBook"></a>
# **updateAddressBook**
> updateAddressBook(tenantId, addressBookId, data)

update addressbook by id

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');
var defaultClient = WorkEvolveApi.ApiClient.instance;

// Configure API key authorization: default
var default = defaultClient.authentications['default'];
default.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//default.apiKeyPrefix = 'Token';

var apiInstance = new WorkEvolveApi.AddressBookApi();

var tenantId = "tenantId_example"; // String | id of tenant to filter by

var addressBookId = "addressBookId_example"; // String | id of addressbook to filter by

var data = null; // Object | provide your addressbook data information to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAddressBook(tenantId, addressBookId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| id of tenant to filter by | 
 **addressBookId** | **String**| id of addressbook to filter by | 
 **data** | **Object**| provide your addressbook data information to update | 

### Return type

null (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

