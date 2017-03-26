// Class: Lambda

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $iterator = require("./iterator_stub").default;

// Definition

var Lambda = function(){}

Lambda.__name__ = true;
Lambda.prototype = {
	
};

Lambda.has = function(it,elt) {
	var x = $iterator(it)();
	while(x.hasNext()) {
		var x1 = x.next();
		if(x1 == elt) {
			return true;
		}
	}
	return false;
}



exports.default = Lambda;