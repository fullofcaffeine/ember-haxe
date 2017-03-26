// Class: thx.Functions8

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions8 = function(){}

Functions8.__name__ = true;
Functions8.prototype = {
	
};

Functions8.curry = function(f) {
	return function(a,b,c,d,e,f0,g) {
		return function(h) {
			return f(a,b,c,d,e,f0,g,h);
		};
	};
}



exports.default = Functions8;