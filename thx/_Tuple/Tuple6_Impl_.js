// Class: thx._Tuple.Tuple6_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var Std = require("./../../Std");

// Definition

var Tuple6_Impl_ = function(){}

Tuple6_Impl_.__name__ = true;
Tuple6_Impl_.prototype = {
	
};

Tuple6_Impl_.of = function(_0,_1,_2,_3,_4,_5) {
	var this1 = { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4, _5 : _5};
	return this1;
}
Tuple6_Impl_._new = function(_0,_1,_2,_3,_4,_5) {
	var this1 = { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4, _5 : _5};
	return this1;
}
Tuple6_Impl_.flip = function(this1) {
	return { _0 : this1._5, _1 : this1._4, _2 : this1._3, _3 : this1._2, _4 : this1._1, _5 : this1._0};
}
Tuple6_Impl_.dropLeft = function(this1) {
	var this2 = { _0 : this1._1, _1 : this1._2, _2 : this1._3, _3 : this1._4, _4 : this1._5};
	return this2;
}
Tuple6_Impl_.dropRight = function(this1) {
	var this2 = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : this1._4};
	return this2;
}
Tuple6_Impl_.toString = function(this1) {
	return "Tuple6(" + Std.default.string(this1._0) + "," + Std.default.string(this1._1) + "," + Std.default.string(this1._2) + "," + Std.default.string(this1._3) + "," + Std.default.string(this1._4) + "," + Std.default.string(this1._5) + ")";
}
Tuple6_Impl_.arrayToTuple6 = function(v) {
	var this1 = { _0 : v[0], _1 : v[1], _2 : v[2], _3 : v[3], _4 : v[4], _5 : v[5]};
	return this1;
}



exports.default = Tuple6_Impl_;