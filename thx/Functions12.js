// Class: thx.Functions12

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions12 = function(){}

Functions12.__name__ = true;
Functions12.prototype = {
	
};

Functions12.curry = function(f) {
	return function(a,b,c,d,e,f0,g,h,i,j,k) {
		return function(l) {
			return f(a,b,c,d,e,f0,g,h,i,j,k,l);
		};
	};
}



exports.default = Functions12;