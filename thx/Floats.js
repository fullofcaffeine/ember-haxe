// Class: thx.Floats

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var EReg = require("./../EReg");
var thx__$Ord_Ord_$Impl_$ = require("./../thx/_Ord/Ord_Impl_");

// Definition

var Floats = function(){}

Floats.__name__ = true;
Floats.prototype = {
	
};

Floats.TOLERANCE = 10e-5
Floats.EPSILON = 1e-9
Floats.pattern_parse = new EReg.default("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","")
Floats.angleDifference = function(a,b,turn) {
	if(turn == null) {
		turn = 360.0;
	}
	var r = (b - a) % turn;
	if(r < 0) {
		r += turn;
	}
	if(r > turn / 2) {
		r -= turn;
	}
	return r;
}
Floats.ceilTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.ceil(f * p) / p;
}
Floats.canParse = function(s) {
	return Floats.pattern_parse.match(s);
}
Floats.clamp = function(v,min,max) {
	if(v < min) {
		return min;
	} else if(v > max) {
		return max;
	} else {
		return v;
	}
}
Floats.clampSym = function(v,max) {
	var min = -max;
	if(v < min) {
		return min;
	} else if(v > max) {
		return max;
	} else {
		return v;
	}
}
Floats.compare = function(a,b) {
	if(a < b) {
		return -1;
	} else if(a > b) {
		return 1;
	} else {
		return 0;
	}
}
Floats.floorTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.floor(f * p) / p;
}
Floats.interpolate = function(f,a,b) {
	return (b - a) * f + a;
}
Floats.interpolateAngle = function(f,a,b,turn) {
	if(turn == null) {
		turn = 360;
	}
	return Floats.wrapCircular(Floats.interpolate(f,a,a + Floats.angleDifference(a,b,turn)),turn);
}
Floats.interpolateAngleWidest = function(f,a,b,turn) {
	if(turn == null) {
		turn = 360;
	}
	return Floats.wrapCircular(Floats.interpolateAngle(f,a,b,turn) - turn / 2,turn);
}
Floats.interpolateAngleCW = function(f,a,b,turn) {
	if(turn == null) {
		turn = 360;
	}
	a = Floats.wrapCircular(a,turn);
	b = Floats.wrapCircular(b,turn);
	if(b < a) {
		b += turn;
	}
	return Floats.wrapCircular(Floats.interpolate(f,a,b),turn);
}
Floats.interpolateAngleCCW = function(f,a,b,turn) {
	if(turn == null) {
		turn = 360;
	}
	a = Floats.wrapCircular(a,turn);
	b = Floats.wrapCircular(b,turn);
	if(b > a) {
		b -= turn;
	}
	return Floats.wrapCircular(Floats.interpolate(f,a,b),turn);
}
Floats.max = function(a,b) {
	if(a > b) {
		return a;
	} else {
		return b;
	}
}
Floats.min = function(a,b) {
	if(a < b) {
		return a;
	} else {
		return b;
	}
}
Floats.nearEquals = function(a,b,tollerance) {
	if(tollerance == null) {
		tollerance = 1e-9;
	}
	if(isFinite(a)) {
		return Math.abs(a - b) <= tollerance;
	}
	if(isNaN(a)) {
		return isNaN(b);
	}
	if(isNaN(b)) {
		return false;
	}
	if(!isFinite(b)) {
		return a > 0 == b > 0;
	}
	return false;
}
Floats.nearEqualAngles = function(a,b,turn,tollerance) {
	if(tollerance == null) {
		tollerance = 1e-9;
	}
	if(turn == null) {
		turn = 360.0;
	}
	return Math.abs(Floats.angleDifference(a,b,turn)) <= tollerance;
}
Floats.nearZero = function(n,tollerance) {
	if(tollerance == null) {
		tollerance = 1e-9;
	}
	return Math.abs(n) <= tollerance;
}
Floats.normalize = function(v) {
	if(v < 0) {
		return 0;
	} else if(v > 1) {
		return 1;
	} else {
		return v;
	}
}
Floats.parse = function(s) {
	if(s.substring(0,1) == "+") {
		s = s.substring(1);
	}
	return parseFloat(s);
}
Floats.root = function(base,index) {
	return Math.pow(base,1 / index);
}
Floats.roundTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.round(f * p) / p;
}
Floats.sign = function(value) {
	if(value < 0) {
		return -1;
	} else {
		return 1;
	}
}
Floats.toString = function(v) {
	return "" + v;
}
Floats.toFloat = function(s) {
	return Floats.parse(s);
}
Floats.trunc = function(value) {
	if(value < 0.0) {
		return Math.ceil(value);
	} else {
		return Math.floor(value);
	}
}
Floats.ftrunc = function(value) {
	if(value < 0.0) {
		return Math.ceil(value);
	} else {
		return Math.floor(value);
	}
}
Floats.wrap = function(v,min,max) {
	var range = max - min + 1;
	if(v < min) {
		v += range * ((min - v) / range + 1);
	}
	return min + (v - min) % range;
}
Floats.wrapCircular = function(v,max) {
	v %= max;
	if(v < 0) {
		v += max;
	}
	return v;
}
Floats.order = thx__$Ord_Ord_$Impl_$.default.fromIntComparison(Floats.compare)
Floats.monoid = { zero : 0.0, append : function(a,b) {
	return a + b;
}}



exports.default = Floats;