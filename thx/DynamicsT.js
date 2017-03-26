// Class: thx.DynamicsT

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var Reflect = require("./../Reflect");

// Definition

var DynamicsT = function(){}

DynamicsT.__name__ = true;
DynamicsT.prototype = {
	
};

DynamicsT.isEmpty = function(o) {
	return Reflect.default.fields(o).length == 0;
}
DynamicsT.exists = function(o,name) {
	return Object.prototype.hasOwnProperty.call(o,name);
}
DynamicsT.fields = function(o) {
	return Reflect.default.fields(o);
}
DynamicsT.merge = function(to,from,replacef) {
	if(null == replacef) {
		replacef = function(field,oldv,newv) {
			return newv;
		};
	}
	var _g = 0;
	var _g1 = Reflect.default.fields(from);
	while(_g < _g1.length) {
		var field1 = _g1[_g];
		++_g;
		var newv1 = Reflect.default.field(from,field1);
		if(Object.prototype.hasOwnProperty.call(to,field1)) {
			to[field1] = replacef(field1,Reflect.default.field(to,field1),newv1);
		} else {
			to[field1] = newv1;
		}
	}
	return to;
}
DynamicsT.size = function(o) {
	return Reflect.default.fields(o).length;
}
DynamicsT.values = function(o) {
	return Reflect.default.fields(o).map(function(key) {
		return Reflect.default.field(o,key);
	});
}
DynamicsT.tuples = function(o) {
	return Reflect.default.fields(o).map(function(key) {
		var this1 = { _0 : key, _1 : Reflect.default.field(o,key)};
		return this1;
	});
}



exports.default = DynamicsT;