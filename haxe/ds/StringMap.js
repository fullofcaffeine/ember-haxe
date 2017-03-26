// Class: haxe.ds.StringMap

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var HxOverrides = require("./../../HxOverrides");
var haxe_ds__$StringMap_StringMapIterator = require("./../../haxe/ds/_StringMap/StringMapIterator");

// Definition

var StringMap = function() {
	this.h = { };
}

StringMap.__name__ = true;
StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) {
			this.setReserved(key,value);
		} else {
			this.h[key] = value;
		}
	},
	get: function(key) {
		if(__map_reserved[key] != null) {
			return this.getReserved(key);
		}
		return this.h[key];
	},
	exists: function(key) {
		if(__map_reserved[key] != null) {
			return this.existsReserved(key);
		}
		return this.h.hasOwnProperty(key);
	},
	setReserved: function(key,value) {
		if(this.rh == null) {
			this.rh = { };
		}
		this.rh["$" + key] = value;
	},
	getReserved: function(key) {
		if(this.rh == null) {
			return null;
		} else {
			return this.rh["$" + key];
		}
	},
	existsReserved: function(key) {
		if(this.rh == null) {
			return false;
		}
		return this.rh.hasOwnProperty("$" + key);
	},
	remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) {
				return false;
			}
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) {
				return false;
			}
			delete(this.h[key]);
			return true;
		}
	},
	keys: function() {
		return HxOverrides.default.iter(this.arrayKeys());
	},
	arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) {
			out.push(key);
		}
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) {
				out.push(key.substr(1));
			}
			}
		}
		return out;
	},
	iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator.default(this,this.arrayKeys());
	}
};



var __map_reserved = {};

exports.default = StringMap;