// Class: thx.Functions6

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions6 = function(){}

Functions6.__name__ = true;
Functions6.prototype = {
	
};

Functions6.curry = function(f) {
	return function(a,b,c,d,e) {
		return function(f0) {
			return f(a,b,c,d,e,f0);
		};
	};
}



exports.default = Functions6;