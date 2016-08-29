// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if  (obj === null) {
    return 'null';
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)) {
  	return "[" + obj.map(function(el) { return stringifyJSON(el); }).join() + "]";
  }

  if (typeof obj === 'object') {
 	var result = [];
 	for (var key in obj) {
 		if (obj[key] !== undefined && typeof obj[key] !== 'function') {
 			result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
 		}	
 	}
    return "{" + result.join() + "}";
  }

};


