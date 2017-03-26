// Class: thx.ArrayInts

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_Options = require("./../thx/Options");
var thx_Arrays = require("./../thx/Arrays");
var thx_Ints = require("./../thx/Ints");

// Definition

var ArrayInts = function(){}

ArrayInts.__name__ = true;
ArrayInts.prototype = {
	
};

ArrayInts.average = function(arr) {
	return ArrayInts.sum(arr) / arr.length;
}
ArrayInts.max = function(arr) {
	return thx_Options.default.get(thx_Arrays.default.maxBy(arr,thx_Ints.default.order));
}
ArrayInts.min = function(arr) {
	return thx_Options.default.get(thx_Arrays.default.minBy(arr,thx_Ints.default.order));
}
ArrayInts.resize = function(array,length,fill) {
	if(fill == null) {
		fill = 0;
	}
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
}
ArrayInts.resized = function(array,length,fill) {
	if(fill == null) {
		fill = 0;
	}
	array = array.slice();
	return ArrayInts.resize(array,length,fill);
}
ArrayInts.sum = function(arr) {
	return thx_Arrays.default.reduce(arr,function(tot,v) {
		return tot + v;
	},0);
}



exports.default = ArrayInts;