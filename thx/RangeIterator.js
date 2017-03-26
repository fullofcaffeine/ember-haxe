// Class: thx.RangeIterator

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var RangeIterator = function(start,stop,step) {
	if(step == null) {
		step = 1;
	}
	this.current = start;
	this.stop = stop;
	this.step = step;
}

RangeIterator.__name__ = true;
RangeIterator.prototype = {
	hasNext: function() {
		if(!(this.stop == null || this.step >= 0 && this.current < this.stop)) {
			if(this.step < 0) {
				return this.current > this.stop;
			} else {
				return false;
			}
		} else {
			return true;
		}
	},
	next: function() {
		var result = this.current;
		this.current += this.step;
		return result;
	}
};





exports.default = RangeIterator;