// Class: thx.AnonymousMap

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var Reflect = require("./../Reflect");
var haxe_ds_Option = require("./../haxe/ds/Option");
var HxOverrides = require("./../HxOverrides");
var thx_Iterators = require("./../thx/Iterators");
var thx_Maps = require("./../thx/Maps");
var Std = require("./../Std");

// Definition

var AnonymousMap = function(o) {
	this.o = o;
}

AnonymousMap.__name__ = true;
AnonymousMap.prototype = {
	get: function(k) {
		return Reflect.default.field(this.o,k);
	},
	getOption: function(k) {
		var value = this.get(k);
		if(null == value) {
			return haxe_ds_Option.default.None;
		} else {
			return haxe_ds_Option.default.Some(value);
		}
	},
	getObject: function() {
		return this.o;
	},
	set: function(k,v) {
		this.o[k] = v;
	},
	exists: function(k) {
		return Object.prototype.hasOwnProperty.call(this.o,k);
	},
	remove: function(k) {
		return Reflect.default.deleteField(this.o,k);
	},
	keys: function() {
		return HxOverrides.default.iter(Reflect.default.fields(this.o));
	},
	iterator: function() {
		var tmp = this.keys();
		var o = this.o;
		return thx_Iterators.default.fmap(tmp,function(a1) {
			return Reflect.default.field(o,a1);
		});
	},
	toString: function() {
		return "{ " + thx_Maps.default.tuples(this).map(function(t) {
			return t._0 + " => " + Std.default.string(t._1);
		}).join(", ") + " }";
	}
};





exports.default = AnonymousMap;