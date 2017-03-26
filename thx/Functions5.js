// Class: thx.Functions5

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions5 = function(){}

Functions5.__name__ = true;
Functions5.prototype = {
	
};

Functions5.curry = function(f) {
	return function(a,b,c,d) {
		return function(e) {
			return f(a,b,c,d,e);
		};
	};
}



exports.default = Functions5;