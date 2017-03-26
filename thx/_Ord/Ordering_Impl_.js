// Class: thx._Ord.Ordering_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var thx_OrderingImpl = require("./../../thx/OrderingImpl");

// Definition

var Ordering_Impl_ = function(){}

Ordering_Impl_.__name__ = true;
Ordering_Impl_.prototype = {
	
};

Ordering_Impl_.fromInt = function(value) {
	if(value < 0) {
		return thx_OrderingImpl.default.LT;
	} else if(value > 0) {
		return thx_OrderingImpl.default.GT;
	} else {
		return thx_OrderingImpl.default.EQ;
	}
}
Ordering_Impl_.fromFloat = function(value) {
	if(value < 0) {
		return thx_OrderingImpl.default.LT;
	} else if(value > 0) {
		return thx_OrderingImpl.default.GT;
	} else {
		return thx_OrderingImpl.default.EQ;
	}
}
Ordering_Impl_.toInt = function(this1) {
	switch(this1[1]) {
	case 0:
		return -1;
	case 1:
		return 1;
	case 2:
		return 0;
	}
}



exports.default = Ordering_Impl_;