// Class: thx.Functions0

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_Functions = require("./../thx/Functions");
var thx_Ints = require("./../thx/Ints");

// Definition

var Functions0 = function(){}

Functions0.__name__ = true;
Functions0.prototype = {
	
};

Functions0.after = function(callback,n) {
	return function() {
		if((n -= 1) == 0) {
			callback();
		}
	};
}
Functions0.join = function(fa,fb) {
	return function() {
		fa();
		fb();
	};
}
Functions0.once = function(f) {
	return function() {
		var t = f;
		f = thx_Functions.default.noop;
		t();
	};
}
Functions0.negate = function(callback) {
	return function() {
		return !callback();
	};
}
Functions0.times = function(n,callback) {
	return function() {
		return thx_Ints.default.range(n).map(function(_) {
			return callback();
		});
	};
}
Functions0.timesi = function(n,callback) {
	return function() {
		return thx_Ints.default.range(n).map(function(i) {
			return callback(i);
		});
	};
}



exports.default = Functions0;