# minWatch
Minimal module to watch javascript object for changes.

## Example
```javascript
	var data = {
		"Key1": "Value1",
		"Key2": 2,
		"ArrayKey": [4,5,6],
		"NestedKey": {
			"SubKey1": "SubValue1",
			"Key2": 2,
			"ArrayKey": [4,5,6],
		}
	};

	minWatch(data, function(object, attr, oldValue, newValue)
	{
		if (attr == "Key2")
		{
			newValue = 4;
		}
		console.log("Chainging ", object, attr, " to ", newValue)
		return newValue;
	});

	data["Key1"] = 'Test';
	data["Key2"] = 3;
```
