// Class: thx.Functions10

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions10 = function(){}

Functions10.__name__ = true;
Functions10.prototype = {
	
};

Functions10.curry = function(f) {
	return function(a,b,c,d,e,f0,g,h,i) {
		return function(j) {
			return f(a,b,c,d,e,f0,g,h,i,j);
		};
	};
}



exports.default = Functions10;