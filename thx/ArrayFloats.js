// Class: thx.ArrayFloats

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_Options = require("./../thx/Options");
var thx_Arrays = require("./../thx/Arrays");
var thx_Floats = require("./../thx/Floats");

// Definition

var ArrayFloats = function(){}

ArrayFloats.__name__ = true;
ArrayFloats.prototype = {
	
};

ArrayFloats.average = function(arr) {
	return ArrayFloats.sum(arr) / arr.length;
}
ArrayFloats.compact = function(arr) {
	return arr.filter(function(v) {
		if(null != v) {
			return isFinite(v);
		} else {
			return false;
		}
	});
}
ArrayFloats.max = function(arr) {
	return thx_Options.default.get(thx_Arrays.default.maxBy(arr,thx_Floats.default.order));
}
ArrayFloats.min = function(arr) {
	return thx_Options.default.get(thx_Arrays.default.minBy(arr,thx_Floats.default.order));
}
ArrayFloats.resize = function(array,length,fill) {
	if(fill == null) {
		fill = 0.0;
	}
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
}
ArrayFloats.resized = function(array,length,fill) {
	if(fill == null) {
		fill = 0.0;
	}
	array = array.slice();
	return ArrayFloats.resize(array,length,fill);
}
ArrayFloats.standardDeviation = function(array) {
	if(array.length < 2) {
		return 0.0;
	}
	var mean = ArrayFloats.average(array);
	var variance = thx_Arrays.default.reduce(array,function(acc,val) {
		return acc + Math.pow(val - mean,2);
	},0) / (array.length - 1);
	return Math.sqrt(variance);
}
ArrayFloats.sum = function(arr) {
	return thx_Arrays.default.reduce(arr,function(tot,v) {
		return tot + v;
	},0.0);
}



exports.default = ArrayFloats;