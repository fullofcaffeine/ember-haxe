// Class: thx.Orderings

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_OrderingImpl = require("./../thx/OrderingImpl");

// Definition

var Orderings = function(){}

Orderings.__name__ = true;
Orderings.prototype = {
	
};

Orderings.monoid = { zero : thx_OrderingImpl.default.EQ, append : function(o0,o1) {
	switch(o0[1]) {
	case 0:
		return thx_OrderingImpl.default.LT;
	case 1:
		return thx_OrderingImpl.default.GT;
	case 2:
		return o1;
	}
}}
Orderings.negate = function(o) {
	switch(o[1]) {
	case 0:
		return thx_OrderingImpl.default.GT;
	case 1:
		return thx_OrderingImpl.default.LT;
	case 2:
		return thx_OrderingImpl.default.EQ;
	}
}



exports.default = Orderings;