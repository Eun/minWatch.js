/**
 * @license minWatch v1.0.0
 * (c) 2015 Tobias Salzmann. http://github.com/Eun/minWatch.js
 * License: MIT
 */
function minWatch(object, callback) {
	if (Object.defineProperty === undefined) {
		throw "Object.defineProperty not supported!";
	}
	if (Object.keys === undefined) {
		throw "Object.keys not supported!";
	}
	if (object["__minWatch__"] !== undefined) {
		return;
	}
	object["__minWatch__"] = {};
	var keys = Object.keys(object);
	for (var i in keys) {
		var keyname = keys[i];
		if (keyname === "__minWatch__")
			continue;
		object["__minWatch__"][keyname] = object[keyname];
		delete object[keyname];

		Object.defineProperty(object, keyname, function(keyname) {
			return {
				get: function() {
					return this["__minWatch__"][keyname];
				},
				set: function(value)
				{
					this["__minWatch__"][keyname] = callback(this, keyname, this["__minWatch__"][keyname], value);
				}
			}
		}(keyname));
	}
}