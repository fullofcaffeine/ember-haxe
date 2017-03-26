// Class: Type

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./import_stub").default;
var js__$Boot_HaxeError = require("./js/_Boot/HaxeError");
var HxOverrides = require("./HxOverrides");
var ValueType = require("./ValueType");
var js_Boot = require("./js/Boot");

// Definition

var Type = function(){}

Type.__name__ = true;
Type.prototype = {
	
};

Type.getEnum = function(o) {
	if(o == null) {
		return null;
	}
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) {
		return null;
	}
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	case 9:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8]);
	case 10:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9]);
	case 11:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10]);
	case 12:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11]);
	case 13:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12]);
	case 14:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12],args[13]);
	default:
		throw new js__$Boot_HaxeError.default("Too many arguments");
	}
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.default.remove(a,"__class__");
	HxOverrides.default.remove(a,"__properties__");
	return a;
}
Type.typeof = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.default.TBool;
	case "function":
		if(v.__name__ || v.__ename__) {
			return ValueType.default.TObject;
		}
		return ValueType.default.TFunction;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			return ValueType.default.TInt;
		}
		return ValueType.default.TFloat;
	case "object":
		if(v == null) {
			return ValueType.default.TNull;
		}
		var e = v.__enum__;
		if(e != null) {
			return ValueType.default.TEnum(e);
		}
		var c = js_Boot.default.getClass(v);
		if(c != null) {
			return ValueType.default.TClass(c);
		}
		return ValueType.default.TObject;
	case "string":
		return ValueType.default.TClass(String);
	case "undefined":
		return ValueType.default.TNull;
	default:
		return ValueType.default.TUnknown;
	}
}



exports.default = Type;