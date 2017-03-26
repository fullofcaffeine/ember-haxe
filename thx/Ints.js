// Class: thx.Ints

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var EReg = require("./../EReg");
var StringTools = require("./../StringTools");
var Std = require("./../Std");
var js__$Boot_HaxeError = require("./../js/_Boot/HaxeError");
var thx_RangeIterator = require("./../thx/RangeIterator");
var thx_OrderingImpl = require("./../thx/OrderingImpl");

// Definition

var Ints = function(){}

Ints.__name__ = true;
Ints.prototype = {
	
};

Ints.pattern_parse = new EReg.default("^[ \t\r\n]*[+-]?(\\d+|0x[0-9A-F]+)","i")
Ints.abs = function(v) {
	if(v < 0) {
		return -v;
	} else {
		return v;
	}
}
Ints.canParse = function(s) {
	return Ints.pattern_parse.match(s);
}
Ints.clamp = function(v,min,max) {
	if(v < min) {
		return min;
	} else if(v > max) {
		return max;
	} else {
		return v;
	}
}
Ints.clampSym = function(v,max) {
	var min = -max;
	if(v < min) {
		return min;
	} else if(v > max) {
		return max;
	} else {
		return v;
	}
}
Ints.compare = function(a,b) {
	return a - b;
}
Ints.gcd = function(m,n) {
	if(m < 0) {
		m = -m;
	} else {
		m = m;
	}
	if(n < 0) {
		n = -n;
	} else {
		n = n;
	}
	if(n == 0) {
		return m;
	}
	return Ints.gcd(n,m % n);
}
Ints.interpolate = function(f,a,b) {
	return Math.round(a + (b - a) * f);
}
Ints.isEven = function(v) {
	return v % 2 == 0;
}
Ints.isOdd = function(v) {
	return v % 2 != 0;
}
Ints.lpad = function(v,pad,len) {
	if(pad == null) {
		pad = "0";
	}
	var neg = false;
	if(v < 0) {
		neg = true;
		v = -v;
	}
	return (neg ? "-" : "") + StringTools.default.lpad("" + v,pad,len);
}
Ints.lcm = function(m,n) {
	if(m < 0) {
		m = -m;
	} else {
		m = m;
	}
	if(n < 0) {
		n = -n;
	} else {
		n = n;
	}
	if(n == 0) {
		return m;
	}
	return m * (n / Ints.gcd(m,n) | 0);
}
Ints.rpad = function(v,pad,len) {
	if(pad == null) {
		pad = "0";
	}
	return StringTools.default.rpad("" + v,pad,len);
}
Ints.max = function(a,b) {
	if(a > b) {
		return a;
	} else {
		return b;
	}
}
Ints.min = function(a,b) {
	if(a < b) {
		return a;
	} else {
		return b;
	}
}
Ints.parse = function(s,base) {
	if(null == base) {
		if(s.substring(0,2) == "0x") {
			base = 16;
		} else {
			base = 10;
		}
	}
	var v = parseInt(s,base);
	if(isNaN(v)) {
		return null;
	} else {
		return v;
	}
}
Ints.random = function(min,max) {
	if(min == null) {
		min = 0;
	}
	return Std.default.random(max - min + 1) + min;
}
Ints.range = function(start,stop,step) {
	if(step == null) {
		step = 1;
	}
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Infinity) {
		throw new js__$Boot_HaxeError.default("infinite range");
	}
	var range = [];
	var i = -1;
	var j;
	if(step < 0) {
		while(true) {
			j = start + step * ++i;
			if(!(j > stop)) {
				break;
			}
			range.push(j);
		}
	} else {
		while(true) {
			j = start + step * ++i;
			if(!(j < stop)) {
				break;
			}
			range.push(j);
		}
	}
	return range;
}
Ints.rangeIter = function(start,stop,step) {
	if(step == null) {
		step = 1;
	}
	return new thx_RangeIterator.default(start,stop,step);
}
Ints.BASE = "0123456789abcdefghijklmnopqrstuvwxyz"
Ints.toString = function(value,base) {
	return value.toString(base);
}
Ints.toBase = function(value,base) {
	return value.toString(base);
}
Ints.toBool = function(v) {
	return v != 0;
}
Ints.toInt = function(s,base) {
	return Ints.parse(s,base);
}
Ints.sign = function(value) {
	if(value < 0) {
		return -1;
	} else {
		return 1;
	}
}
Ints.wrapCircular = function(v,max) {
	v %= max;
	if(v < 0) {
		v += max;
	}
	return v;
}
Ints.order = function(i0,i1) {
	if(i0 > i1) {
		return thx_OrderingImpl.default.GT;
	} else if(i0 == i1) {
		return thx_OrderingImpl.default.EQ;
	} else {
		return thx_OrderingImpl.default.LT;
	}
}
Ints.monoid = { zero : 0, append : function(a,b) {
	return a + b;
}}



exports.default = Ints;