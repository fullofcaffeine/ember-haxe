// Class: Std

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./import_stub").default;
var js_Boot = require("./js/Boot");
var HxOverrides = require("./HxOverrides");

// Definition

var Std = function(){}

Std.__name__ = true;
Std.prototype = {
	
};

Std.string = function(s) {
	return js_Boot.default.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.default.cca(x,1) == 120 || HxOverrides.default.cca(x,1) == 88)) {
		v = parseInt(x);
	}
	if(isNaN(v)) {
		return null;
	}
	return v;
}
Std.random = function(x) {
	if(x <= 0) {
		return 0;
	} else {
		return Math.floor(Math.random() * x);
	}
}

{
	String.prototype.__class__ = String
	String.__name__ = ["String"];
	Array.__name__ = ["Array"];
	Date.prototype.__class__ = Date;
	Date.__name__ = ["Date"];
	var Int = { __name__ : ["Int"]};
	var Dynamic = { __name__ : ["Dynamic"]};
	var Float = Number;
	Float.__name__ = ["Float"];
	var Bool = Boolean;
	Bool.__ename__ = ["Bool"];
	var Class = { __name__ : ["Class"]};
	var Enum = { };
};

exports.default = Std;