// Class: thx.Functions1

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var Std = require("./../Std");
var haxe_ds_StringMap = require("./../haxe/ds/StringMap");
var thx_Ints = require("./../thx/Ints");

// Definition

var Functions1 = function(){}

Functions1.__name__ = true;
Functions1.prototype = {
	
};

Functions1.compose = function(fa,fb) {
	return function(v) {
		var tmp = fb(v);
		return fa(tmp);
	};
}
Functions1.map = function(fab,fbc) {
	return function(a) {
		var tmp = fab(a);
		return fbc(tmp);
	};
}
Functions1.contramap = function(fbc,fab) {
	return function(a) {
		var tmp = fab(a);
		return fbc(tmp);
	};
}
Functions1.join = function(fa,fb) {
	return function(v) {
		fa(v);
		fb(v);
	};
}
Functions1.memoize = function(callback,resolver) {
	if(null == resolver) {
		resolver = function(v) {
			return "" + Std.default.string(v);
		};
	}
	var map = new haxe_ds_StringMap.default();
	return function(v1) {
		var key = resolver(v1);
		if(__map_reserved[key] != null ? map.existsReserved(key) : map.h.hasOwnProperty(key)) {
			return __map_reserved[key] != null ? map.getReserved(key) : map.h[key];
		}
		var result = callback(v1);
		if(__map_reserved[key] != null) {
			map.setReserved(key,result);
		} else {
			map.h[key] = result;
		}
		return result;
	};
}
Functions1.negate = function(callback) {
	return function(v) {
		return !callback(v);
	};
}
Functions1.noop = function(_) {
}
Functions1.times = function(n,callback) {
	return function(value) {
		return thx_Ints.default.range(n).map(function(_) {
			return callback(value);
		});
	};
}
Functions1.timesi = function(n,callback) {
	return function(value) {
		return thx_Ints.default.range(n).map(function(i) {
			return callback(value,i);
		});
	};
}
Functions1.swapArguments = function(callback) {
	return function(a2,a1) {
		return callback(a1,a2);
	};
}



exports.default = Functions1;