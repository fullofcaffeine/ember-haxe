// Class: thx.Functions9

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions9 = function(){}

Functions9.__name__ = true;
Functions9.prototype = {
	
};

Functions9.curry = function(f) {
	return function(a,b,c,d,e,f0,g,h) {
		return function(i) {
			return f(a,b,c,d,e,f0,g,h,i);
		};
	};
}



exports.default = Functions9;