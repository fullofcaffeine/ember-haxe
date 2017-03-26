// Class: thx.MapIterator

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var MapIterator = function(base,f) {
	this.base = base;
	this.f = f;
}

MapIterator.__name__ = true;
MapIterator.prototype = {
	next: function() {
		return this.f(this.base.next());
	},
	hasNext: function() {
		return this.base.hasNext();
	}
};





exports.default = MapIterator;