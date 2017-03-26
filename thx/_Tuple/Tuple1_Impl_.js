// Class: thx._Tuple.Tuple1_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var Std = require("./../../Std");

// Definition

var Tuple1_Impl_ = function(){}

Tuple1_Impl_.__name__ = true;
Tuple1_Impl_.prototype = {
	
};

Tuple1_Impl_._new = function(_0) {
	var this1 = _0;
	return this1;
}
Tuple1_Impl_.get__0 = function(this1) {
	return this1;
}
Tuple1_Impl_.with = function(this1,v) {
	var this2 = { _0 : this1, _1 : v};
	return this2;
}
Tuple1_Impl_.toString = function(this1) {
	return "Tuple1(" + Std.default.string(this1) + ")";
}
Tuple1_Impl_.arrayToTuple = function(v) {
	var this1 = v[0];
	return this1;
}



exports.default = Tuple1_Impl_;