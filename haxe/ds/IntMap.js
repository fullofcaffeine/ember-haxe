// Class: haxe.ds.IntMap

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var HxOverrides = require("./../../HxOverrides");

// Definition

var IntMap = function() {
	this.h = { };
}

IntMap.__name__ = true;
IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	},
	get: function(key) {
		return this.h[key];
	},
	exists: function(key) {
		return this.h.hasOwnProperty(key);
	},
	remove: function(key) {
		if(!this.h.hasOwnProperty(key)) {
			return false;
		}
		delete(this.h[key]);
		return true;
	},
	keys: function() {
		var a = [];
		for( var key in this.h ) if(this.h.hasOwnProperty(key)) {
			a.push(key | 0);
		}
		return HxOverrides.default.iter(a);
	},
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
};





exports.default = IntMap;