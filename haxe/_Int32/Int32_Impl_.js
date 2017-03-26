// Class: haxe._Int32.Int32_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;

// Definition

var Int32_Impl_ = function(){}

Int32_Impl_.__name__ = true;
Int32_Impl_.prototype = {
	
};

Int32_Impl_._mul = Math.imul != null ? Math.imul : function(a,b) {
	return a * (b & 65535) + (a * (b >>> 16) << 16 | 0) | 0;
}



exports.default = Int32_Impl_;