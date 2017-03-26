// Class: thx.Enums

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_Dynamics = require("./../thx/Dynamics");
var thx_Ints = require("./../thx/Ints");
var thx_Arrays = require("./../thx/Arrays");

// Definition

var Enums = function(){}

Enums.__name__ = true;
Enums.prototype = {
	
};

Enums.string = function(e) {
	var cons = e[0];
	var params = [];
	var _g = 0;
	var _g1 = e.slice(2);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		params.push(thx_Dynamics.default.string(param));
	}
	return cons + (params.length == 0 ? "" : "(" + params.join(", ") + ")");
}
Enums.compare = function(a,b) {
	var v = thx_Ints.default.compare(a[1],b[1]);
	if(v != 0) {
		return v;
	}
	return thx_Arrays.default.compare(a.slice(2),b.slice(2));
}
Enums.sameConstructor = function(a,b) {
	return a[1] == b[1];
}
Enums.min = function(a,b) {
	if(Enums.compare(a,b) < 0) {
		return a;
	} else {
		return b;
	}
}
Enums.max = function(a,b) {
	if(Enums.compare(a,b) > 0) {
		return a;
	} else {
		return b;
	}
}



exports.default = Enums;