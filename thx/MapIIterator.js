// Class: thx.MapIIterator

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var MapIIterator = function(base,f) {
	this.i = 0;
	this.base = base;
	this.f = f;
}

MapIIterator.__name__ = true;
MapIIterator.prototype = {
	next: function() {
		var result = this.f(this.base.next(),this.i);
		this.i++;
		return result;
	},
	hasNext: function() {
		return this.base.hasNext();
	}
};





exports.default = MapIIterator;