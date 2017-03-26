// Class: thx.Functions11

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions11 = function(){}

Functions11.__name__ = true;
Functions11.prototype = {
	
};

Functions11.curry = function(f) {
	return function(a,b,c,d,e,f0,g,h,i,j) {
		return function(k) {
			return f(a,b,c,d,e,f0,g,h,i,j,k);
		};
	};
}



exports.default = Functions11;