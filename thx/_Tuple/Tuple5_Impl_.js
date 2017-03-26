// Class: thx._Tuple.Tuple5_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var Std = require("./../../Std");

// Definition

var Tuple5_Impl_ = function(){}

Tuple5_Impl_.__name__ = true;
Tuple5_Impl_.prototype = {
	
};

Tuple5_Impl_.of = function(_0,_1,_2,_3,_4) {
	var this1 = { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4};
	return this1;
}
Tuple5_Impl_._new = function(_0,_1,_2,_3,_4) {
	var this1 = { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4};
	return this1;
}
Tuple5_Impl_.flip = function(this1) {
	return { _0 : this1._4, _1 : this1._3, _2 : this1._2, _3 : this1._1, _4 : this1._0};
}
Tuple5_Impl_.dropLeft = function(this1) {
	var this2 = { _0 : this1._1, _1 : this1._2, _2 : this1._3, _3 : this1._4};
	return this2;
}
Tuple5_Impl_.dropRight = function(this1) {
	var this2 = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3};
	return this2;
}
Tuple5_Impl_.with = function(this1,v) {
	var this2 = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : this1._4, _5 : v};
	return this2;
}
Tuple5_Impl_.toString = function(this1) {
	return "Tuple5(" + Std.default.string(this1._0) + "," + Std.default.string(this1._1) + "," + Std.default.string(this1._2) + "," + Std.default.string(this1._3) + "," + Std.default.string(this1._4) + ")";
}
Tuple5_Impl_.arrayToTuple5 = function(v) {
	var this1 = { _0 : v[0], _1 : v[1], _2 : v[2], _3 : v[3], _4 : v[4]};
	return this1;
}



exports.default = Tuple5_Impl_;