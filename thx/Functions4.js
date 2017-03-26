// Class: thx.Functions4

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions4 = function(){}

Functions4.__name__ = true;
Functions4.prototype = {
	
};

Functions4.curry = function(f) {
	return function(a,b,c) {
		return function(d) {
			return f(a,b,c,d);
		};
	};
}



exports.default = Functions4;