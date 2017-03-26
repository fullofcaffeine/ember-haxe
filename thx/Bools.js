// Class: thx.Bools

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var js__$Boot_HaxeError = require("./../js/_Boot/HaxeError");
var haxe_ds_Option = require("./../haxe/ds/Option");

// Definition

var Bools = function(){}

Bools.__name__ = true;
Bools.prototype = {
	
};

Bools.compare = function(a,b) {
	if(a == b) {
		return 0;
	} else if(a) {
		return -1;
	} else {
		return 1;
	}
}
Bools.toInt = function(v) {
	if(v) {
		return 1;
	} else {
		return 0;
	}
}
Bools.canParse = function(v) {
	var _g = v.toLowerCase();
	if(_g == null) {
		return true;
	} else {
		switch(_g) {
		case "0":case "1":case "false":case "off":case "on":case "true":
			return true;
		default:
			return false;
		}
	}
}
Bools.parse = function(v) {
	var _g = v.toLowerCase();
	if(_g == null) {
		return false;
	} else {
		switch(_g) {
		case "1":case "on":case "true":
			return true;
		case "0":case "false":case "off":
			return false;
		default:
			var v1 = _g;
			throw new js__$Boot_HaxeError.default("unable to parse \"" + v1 + "\"");
		}
	}
}
Bools.xor = function(a,b) {
	return a != b;
}
Bools.option = function(cond,a) {
	if(cond) {
		return haxe_ds_Option.default.Some(a);
	} else {
		return haxe_ds_Option.default.None;
	}
}



exports.default = Bools;