// Class: thx.Eithers

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var haxe_ds_Option = require("./../haxe/ds/Option");
var thx_Either = require("./../thx/Either");
var thx_Error = require("./../thx/Error");
var Std = require("./../Std");
var thx__$Nel_Nel_$Impl_$ = require("./../thx/_Nel/Nel_Impl_");

// Definition

var Eithers = function(){}

Eithers.__name__ = true;
Eithers.prototype = {
	
};

Eithers.isLeft = function(either) {
	switch(either[1]) {
	case 0:
		return true;
	case 1:
		return false;
	}
}
Eithers.isRight = function(either) {
	switch(either[1]) {
	case 0:
		return false;
	case 1:
		return true;
	}
}
Eithers.toLeft = function(either) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return haxe_ds_Option.default.Some(v);
	case 1:
		return haxe_ds_Option.default.None;
	}
}
Eithers.toRight = function(either) {
	switch(either[1]) {
	case 0:
		return haxe_ds_Option.default.None;
	case 1:
		var v = either[2];
		return haxe_ds_Option.default.Some(v);
	}
}
Eithers.toLeftUnsafe = function(either) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return v;
	case 1:
		return null;
	}
}
Eithers.toRightUnsafe = function(either) {
	switch(either[1]) {
	case 0:
		return null;
	case 1:
		var v = either[2];
		return v;
	}
}
Eithers.map = function(either,f) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return thx_Either.default.Left(v);
	case 1:
		var v1 = either[2];
		return thx_Either.default.Right(f(v1));
	}
}
Eithers.flatMap = function(either,f) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return thx_Either.default.Left(v);
	case 1:
		var v1 = either[2];
		return f(v1);
	}
}
Eithers.leftMap = function(either,f) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return thx_Either.default.Left(f(v));
	case 1:
		var v1 = either[2];
		return thx_Either.default.Right(v1);
	}
}
Eithers.orThrow = function(either,message) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		throw new thx_Error.default("" + message + ": " + Std.default.string(v),null,{ fileName : "Eithers.hx", lineNumber : 93, className : "thx.Eithers", methodName : "orThrow"});
		break;
	case 1:
		var v1 = either[2];
		return v1;
	}
}
Eithers.toVNel = function(either) {
	switch(either[1]) {
	case 0:
		var e = either[2];
		return thx_Either.default.Left(thx__$Nel_Nel_$Impl_$.default.pure(e));
	case 1:
		var v = either[2];
		return thx_Either.default.Right(v);
	}
}
Eithers.cata = function(either,l,r) {
	switch(either[1]) {
	case 0:
		var l0 = either[2];
		return l(l0);
	case 1:
		var r0 = either[2];
		return r(r0);
	}
}
Eithers.orElse = function(e0,e1) {
	if(e0[1] == 0) {
		var e = e0[2];
		return e1;
	} else {
		var right = e0;
		return right;
	}
}



exports.default = Eithers;