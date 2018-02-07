# WorkEvolveApi.SampleApi

All URIs are relative to *http://localhost:81/l5-swaggers/public/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSample**](SampleApi.md#getSample) | **GET** /sample | Sample


<a name="getSample"></a>
# **getSample**
> getSample()

Sample

### Example
```javascript
var WorkEvolveApi = require('work_evolve_api');

var apiInstance = new WorkEvolveApi.SampleApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSample(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

