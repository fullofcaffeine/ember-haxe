// Class: haxe.ds.ObjectMap

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var HxOverrides = require("./../../HxOverrides");

// Definition

var ObjectMap = function() {
	this.h = { __keys__ : { }};
}

ObjectMap.__name__ = true;
ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	},
	get: function(key) {
		return this.h[key.__id__];
	},
	exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	},
	remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	},
	keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return HxOverrides.default.iter(a);
	},
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
};

ObjectMap.count = 0



exports.default = ObjectMap;