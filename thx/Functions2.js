// Class: thx.Functions2

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var Std = require("./../Std");
var haxe_ds_StringMap = require("./../haxe/ds/StringMap");

// Definition

var Functions2 = function(){}

Functions2.__name__ = true;
Functions2.prototype = {
	
};

Functions2.memoize = function(callback,resolver) {
	if(null == resolver) {
		resolver = function(v1,v2) {
			return "" + Std.default.string(v1) + ":" + Std.default.string(v2);
		};
	}
	var map = new haxe_ds_StringMap.default();
	return function(v11,v21) {
		var key = resolver(v11,v21);
		if(__map_reserved[key] != null ? map.existsReserved(key) : map.h.hasOwnProperty(key)) {
			return __map_reserved[key] != null ? map.getReserved(key) : map.h[key];
		}
		var result = callback(v11,v21);
		if(__map_reserved[key] != null) {
			map.setReserved(key,result);
		} else {
			map.h[key] = result;
		}
		return result;
	};
}
Functions2.curry = function(f) {
	return function(a) {
		return function(b) {
			return f(a,b);
		};
	};
}
Functions2.join = function(fa,fb) {
	return function(v1,v2) {
		fa(v1,v2);
		fb(v1,v2);
	};
}
Functions2.negate = function(callback) {
	return function(v1,v2) {
		return !callback(v1,v2);
	};
}



exports.default = Functions2;