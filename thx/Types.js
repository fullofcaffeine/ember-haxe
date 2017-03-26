// Class: thx.Types

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var Reflect = require("./../Reflect");
var js_Boot = require("./../js/Boot");
var Type = require("./../Type");
var js__$Boot_HaxeError = require("./../js/_Boot/HaxeError");
var Std = require("./../Std");
var ValueType = require("./../ValueType");

// Definition

var Types = function(){}

Types.__name__ = true;
Types.prototype = {
	
};

Types.isAnonymousObject = function(v) {
	if(Reflect.default.isObject(v)) {
		var o = v;
		return null == (o == null ? null : js_Boot.default.getClass(o));
	} else {
		return false;
	}
}
Types.isObject = function(v) {
	if(Reflect.default.isObject(v)) {
		return !Types.isPrimitive(v);
	} else {
		return false;
	}
}
Types.isPrimitive = function(v) {
	var _g = Type.default["typeof"](v);
	switch(_g[1]) {
	case 1:case 2:case 3:
		return true;
	case 0:case 4:case 5:case 7:case 8:
		return false;
	case 6:
		var c = _g[2];
		if(Type.default.getClassName(c) == "String") {
			return true;
		} else {
			var c1 = _g[2];
			if(Type.default.getClassName(c1) == "Date") {
				return true;
			} else {
				return false;
			}
		}
		break;
	}
}
Types.isEnumValue = function(v) {
	var _g = Type.default["typeof"](v);
	if(_g[1] == 7) {
		return true;
	} else {
		return false;
	}
}
Types.hasSuperClass = function(cls,sup) {
	while(null != cls) {
		if(cls == sup) {
			return true;
		}
		cls = Type.default.getSuperClass(cls);
	}
	return false;
}
Types.sameType = function(a,b) {
	return Types.toString(Type.default["typeof"](a)) == Types.toString(Type.default["typeof"](b));
}
Types.typeInheritance = function(type) {
	switch(type[1]) {
	case 1:
		return ["Int"];
	case 2:
		return ["Float"];
	case 3:
		return ["Bool"];
	case 4:
		return ["{}"];
	case 5:
		return ["Function"];
	case 6:
		var c = type[2];
		var classes = [];
		while(null != c) {
			classes.push(c);
			c = Type.default.getSuperClass(c);
		}
		return classes.map(Type.default.getClassName);
	case 7:
		var e = type[2];
		return [Type.default.getEnumName(e)];
	default:
		throw new js__$Boot_HaxeError.default("invalid type " + Std.default.string(type));
	}
}
Types.toString = function(type) {
	switch(type[1]) {
	case 0:
		return "Null";
	case 1:
		return "Int";
	case 2:
		return "Float";
	case 3:
		return "Bool";
	case 4:
		return "{}";
	case 5:
		return "Function";
	case 6:
		var c = type[2];
		return Type.default.getClassName(c);
	case 7:
		var e = type[2];
		return Type.default.getEnumName(e);
	default:
		throw new js__$Boot_HaxeError.default("invalid type " + Std.default.string(type));
	}
}
Types.valueTypeInheritance = function(value) {
	return Types.typeInheritance(Type.default["typeof"](value));
}
Types.valueTypeToString = function(value) {
	return Types.toString(Type.default["typeof"](value));
}
Types.anyValueToString = function(value) {
	if(js_Boot.default.__instanceof(value,ValueType.default)) {
		return Types.toString(value);
	}
	if(js_Boot.default.__instanceof(value,null)) {
		return Type.default.getClassName(value);
	}
	if(js_Boot.default.__instanceof(value,null)) {
		return Type.default.getEnumName(value);
	}
	return Types.toString(Type.default["typeof"](value));
}



exports.default = Types;