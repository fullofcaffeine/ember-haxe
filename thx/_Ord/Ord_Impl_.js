// Class: thx._Ord.Ord_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var thx_OrderingImpl = require("./../../thx/OrderingImpl");
var thx__$Ord_Ordering_$Impl_$ = require("./../../thx/_Ord/Ordering_Impl_");

// Definition

var Ord_Impl_ = function(){}

Ord_Impl_.__name__ = true;
Ord_Impl_.prototype = {
	
};

Ord_Impl_.order = function(this1,a0,a1) {
	return this1(a0,a1);
}
Ord_Impl_.max = function(this1,a0,a1) {
	var _g = this1(a0,a1);
	switch(_g[1]) {
	case 1:
		return a0;
	case 0:case 2:
		return a1;
	}
}
Ord_Impl_.min = function(this1,a0,a1) {
	var _g = this1(a0,a1);
	switch(_g[1]) {
	case 1:
		return a1;
	case 0:case 2:
		return a0;
	}
}
Ord_Impl_.equal = function(this1,a0,a1) {
	return this1(a0,a1) == thx_OrderingImpl.default.EQ;
}
Ord_Impl_.contramap = function(this1,f) {
	return function(b0,b1) {
		var tmp = f(b0);
		var tmp1 = f(b1);
		return this1(tmp,tmp1);
	};
}
Ord_Impl_.inverse = function(this1) {
	return function(a0,a1) {
		return this1(a1,a0);
	};
}
Ord_Impl_.intComparison = function(this1,a0,a1) {
	var _g = this1(a0,a1);
	switch(_g[1]) {
	case 0:
		return -1;
	case 1:
		return 1;
	case 2:
		return 0;
	}
}
Ord_Impl_.fromIntComparison = function(f) {
	return function(a,b) {
		return thx__$Ord_Ordering_$Impl_$.default.fromInt(f(a,b));
	};
}
Ord_Impl_.forComparable = function() {
	return function(a,b) {
		return thx__$Ord_Ordering_$Impl_$.default.fromInt(a.compareTo(b));
	};
}
Ord_Impl_.forComparableOrd = function() {
	return function(a,b) {
		return a.compareTo(b);
	};
}



exports.default = Ord_Impl_;