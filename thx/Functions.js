// Class: thx.Functions

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Functions = function(){}

Functions.__name__ = true;
Functions.prototype = {
	
};

Functions.equality = function(a,b) {
	return a == b;
}
Functions.identity = function(value) {
	return value;
}
Functions.noop = function() {
}
Functions.lift = function(t,f) {
	return f(t);
}



exports.default = Functions;