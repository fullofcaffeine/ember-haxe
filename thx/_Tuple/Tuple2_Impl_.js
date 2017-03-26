// Class: thx._Tuple.Tuple2_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var Std = require("./../../Std");

// Definition

var Tuple2_Impl_ = function(){}

Tuple2_Impl_.__name__ = true;
Tuple2_Impl_.prototype = {
	
};

Tuple2_Impl_.of = function(_0,_1) {
	var this1 = { _0 : _0, _1 : _1};
	return this1;
}
Tuple2_Impl_._new = function(_0,_1) {
	var this1 = { _0 : _0, _1 : _1};
	return this1;
}
Tuple2_Impl_.get_left = function(this1) {
	return this1._0;
}
Tuple2_Impl_.get_right = function(this1) {
	return this1._1;
}
Tuple2_Impl_.flip = function(this1) {
	return { _0 : this1._1, _1 : this1._0};
}
Tuple2_Impl_.dropLeft = function(this1) {
	var this2 = this1._1;
	return this2;
}
Tuple2_Impl_.dropRight = function(this1) {
	var this2 = this1._0;
	return this2;
}
Tuple2_Impl_.with = function(this1,v) {
	var this2 = { _0 : this1._0, _1 : this1._1, _2 : v};
	return this2;
}
Tuple2_Impl_.toString = function(this1) {
	return "Tuple2(" + Std.default.string(this1._0) + "," + Std.default.string(this1._1) + ")";
}
Tuple2_Impl_.map = function(this1,f) {
	var this2 = { _0 : this1._0, _1 : f(this1._1)};
	return this2;
}
Tuple2_Impl_.squeeze = function(f) {
	return function(tp) {
		return f(tp._0,tp._1);
	};
}
Tuple2_Impl_.arrayToTuple2 = function(v) {
	var this1 = { _0 : v[0], _1 : v[1]};
	return this1;
}



exports.default = Tuple2_Impl_;