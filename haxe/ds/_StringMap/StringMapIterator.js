// Class: haxe.ds._StringMap.StringMapIterator

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
}

StringMapIterator.__name__ = true;
StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	},
	next: function() {
		var _this = this.map;
		var key = this.keys[this.index++];
		if(__map_reserved[key] != null) {
			return _this.getReserved(key);
		} else {
			return _this.h[key];
		}
	}
};





exports.default = StringMapIterator;