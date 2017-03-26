// Class: thx._Tuple.Tuple3_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var Std = require("./../../Std");

// Definition

var Tuple3_Impl_ = function(){}

Tuple3_Impl_.__name__ = true;
Tuple3_Impl_.prototype = {
	
};

Tuple3_Impl_.of = function(_0,_1,_2) {
	var this1 = { _0 : _0, _1 : _1, _2 : _2};
	return this1;
}
Tuple3_Impl_._new = function(_0,_1,_2) {
	var this1 = { _0 : _0, _1 : _1, _2 : _2};
	return this1;
}
Tuple3_Impl_.flip = function(this1) {
	return { _0 : this1._2, _1 : this1._1, _2 : this1._0};
}
Tuple3_Impl_.dropLeft = function(this1) {
	var this2 = { _0 : this1._1, _1 : this1._2};
	return this2;
}
Tuple3_Impl_.dropRight = function(this1) {
	var this2 = { _0 : this1._0, _1 : this1._1};
	return this2;
}
Tuple3_Impl_.with = function(this1,v) {
	var this2 = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : v};
	return this2;
}
Tuple3_Impl_.toString = function(this1) {
	return "Tuple3(" + Std.default.string(this1._0) + "," + Std.default.string(this1._1) + "," + Std.default.string(this1._2) + ")";
}
Tuple3_Impl_.arrayToTuple3 = function(v) {
	var this1 = { _0 : v[0], _1 : v[1], _2 : v[2]};
	return this1;
}
Tuple3_Impl_.map = function(this1,f) {
	var this2 = { _0 : this1._0, _1 : this1._1, _2 : f(this1._2)};
	return this2;
}



exports.default = Tuple3_Impl_;