// Class: thx.ArrayStrings

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_Strings = require("./../thx/Strings");
var thx_Options = require("./../thx/Options");
var thx_Arrays = require("./../thx/Arrays");

// Definition

var ArrayStrings = function(){}

ArrayStrings.__name__ = true;
ArrayStrings.prototype = {
	
};

ArrayStrings.compact = function(arr) {
	return arr.filter(function(v) {
		return !thx_Strings.default.isEmpty(v);
	});
}
ArrayStrings.max = function(arr) {
	return thx_Options.default.getOrElse(thx_Arrays.default.maxBy(arr,thx_Strings.default.order),null);
}
ArrayStrings.min = function(arr) {
	return thx_Options.default.getOrElse(thx_Arrays.default.minBy(arr,thx_Strings.default.order),null);
}



exports.default = ArrayStrings;