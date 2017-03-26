// Class: thx.Functions7

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions7 = function(){}

Functions7.__name__ = true;
Functions7.prototype = {
	
};

Functions7.curry = function(f) {
	return function(a,b,c,d,e,f0) {
		return function(g) {
			return f(a,b,c,d,e,f0,g);
		};
	};
}



exports.default = Functions7;