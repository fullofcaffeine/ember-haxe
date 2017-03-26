// Class: thx._Tuple.Tuple4_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var Std = require("./../../Std");

// Definition

var Tuple4_Impl_ = function(){}

Tuple4_Impl_.__name__ = true;
Tuple4_Impl_.prototype = {
	
};

Tuple4_Impl_.of = function(_0,_1,_2,_3) {
	var this1 = { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
	return this1;
}
Tuple4_Impl_._new = function(_0,_1,_2,_3) {
	var this1 = { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
	return this1;
}
Tuple4_Impl_.flip = function(this1) {
	return { _0 : this1._3, _1 : this1._2, _2 : this1._1, _3 : this1._0};
}
Tuple4_Impl_.dropLeft = function(this1) {
	var this2 = { _0 : this1._1, _1 : this1._2, _2 : this1._3};
	return this2;
}
Tuple4_Impl_.dropRight = function(this1) {
	var this2 = { _0 : this1._0, _1 : this1._1, _2 : this1._2};
	return this2;
}
Tuple4_Impl_.with = function(this1,v) {
	var this2 = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : v};
	return this2;
}
Tuple4_Impl_.toString = function(this1) {
	return "Tuple4(" + Std.default.string(this1._0) + "," + Std.default.string(this1._1) + "," + Std.default.string(this1._2) + "," + Std.default.string(this1._3) + ")";
}
Tuple4_Impl_.arrayToTuple4 = function(v) {
	var this1 = { _0 : v[0], _1 : v[1], _2 : v[2], _3 : v[3]};
	return this1;
}



exports.default = Tuple4_Impl_;