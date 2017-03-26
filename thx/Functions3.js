// Class: thx.Functions3

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var Std = require("./../Std");
var haxe_ds_StringMap = require("./../haxe/ds/StringMap");

// Definition

var Functions3 = function(){}

Functions3.__name__ = true;
Functions3.prototype = {
	
};

Functions3.memoize = function(callback,resolver) {
	if(null == resolver) {
		resolver = function(v1,v2,v3) {
			return "" + Std.default.string(v1) + ":" + Std.default.string(v2) + ":" + Std.default.string(v3);
		};
	}
	var map = new haxe_ds_StringMap.default();
	return function(v11,v21,v31) {
		var key = resolver(v11,v21,v31);
		if(__map_reserved[key] != null ? map.existsReserved(key) : map.h.hasOwnProperty(key)) {
			return __map_reserved[key] != null ? map.getReserved(key) : map.h[key];
		}
		var result = callback(v11,v21,v31);
		if(__map_reserved[key] != null) {
			map.setReserved(key,result);
		} else {
			map.h[key] = result;
		}
		return result;
	};
}
Functions3.negate = function(callback) {
	return function(v1,v2,v3) {
		return !callback(v1,v2,v3);
	};
}
Functions3.curry = function(f) {
	return function(a,b) {
		return function(c) {
			return f(a,b,c);
		};
	};
}



exports.default = Functions3;