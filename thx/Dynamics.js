// Class: thx.Dynamics

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var $iterator = require("./../iterator_stub").default;
var thx_Types = require("./../thx/Types");
var Type = require("./../Type");
var Reflect = require("./../Reflect");
var HxOverrides = require("./../HxOverrides");
var thx_Iterators = require("./../thx/Iterators");
var thx_Iterables = require("./../thx/Iterables");
var js_Boot = require("./../js/Boot");
var haxe_IMap = require("./../haxe/IMap");
var js__$Boot_HaxeError = require("./../js/_Boot/HaxeError");
var thx_Objects = require("./../thx/Objects");
var haxe_Utf8 = require("./../haxe/Utf8");
var thx_Ints = require("./../thx/Ints");
var thx_Bools = require("./../thx/Bools");
var thx_Arrays = require("./../thx/Arrays");
var thx_Dates = require("./../thx/Dates");
var Std = require("./../Std");
var thx_Enums = require("./../thx/Enums");
var thx_Maps = require("./../thx/Maps");

// Definition

var Dynamics = function(){}

Dynamics.__name__ = true;
Dynamics.prototype = {
	
};

Dynamics.equals = function(a,b) {
	if(!thx_Types.default.sameType(a,b)) {
		return false;
	}
	if(a == b) {
		return true;
	}
	var _g = Type.default["typeof"](a);
	switch(_g[1]) {
	case 0:case 1:case 2:case 3:
		return false;
	case 4:
		var fa = Reflect.default.fields(a);
		var fb = Reflect.default.fields(b);
		var _g1 = 0;
		while(_g1 < fa.length) {
			var field = fa[_g1];
			++_g1;
			HxOverrides.default.remove(fb,field);
			if(!Object.prototype.hasOwnProperty.call(b,field)) {
				return false;
			}
			var va = Reflect.default.field(a,field);
			if(Reflect.default.isFunction(va)) {
				continue;
			}
			var vb = Reflect.default.field(b,field);
			if(!Dynamics.equals(va,vb)) {
				return false;
			}
		}
		if(fb.length > 0) {
			return false;
		}
		var t = false;
		var tmp;
		t = thx_Iterators.default.isIterator(a);
		if(!t) {
			tmp = thx_Iterables.default.isIterable(a);
		} else {
			tmp = true;
		}
		if(tmp) {
			if(t && !thx_Iterators.default.isIterator(b)) {
				return false;
			}
			if(!t && !thx_Iterables.default.isIterable(b)) {
				return false;
			}
			var aa = t ? thx_Iterators.default.toArray(a) : thx_Iterators.default.toArray($iterator(a)());
			var ab = t ? thx_Iterators.default.toArray(b) : thx_Iterators.default.toArray($iterator(b)());
			if(aa.length != ab.length) {
				return false;
			}
			var _g11 = 0;
			var _g2 = aa.length;
			while(_g11 < _g2) {
				var i = _g11++;
				if(!Dynamics.equals(aa[i],ab[i])) {
					return false;
				}
			}
			return true;
		}
		return true;
	case 5:
		return Reflect.default.compareMethods(a,b);
	case 6:
		var c = _g[2];
		var ca = Type.default.getClassName(c);
		var cb = Type.default.getClassName(b == null ? null : js_Boot.default.getClass(b));
		if(ca != cb) {
			return false;
		}
		if(typeof(a) == "string") {
			return false;
		}
		if((a instanceof Array) && a.__enum__ == null) {
			var aa1 = a;
			var ab1 = b;
			if(aa1.length != ab1.length) {
				return false;
			}
			var _g12 = 0;
			var _g3 = aa1.length;
			while(_g12 < _g3) {
				var i1 = _g12++;
				if(!Dynamics.equals(aa1[i1],ab1[i1])) {
					return false;
				}
			}
			return true;
		}
		if(js_Boot.default.__instanceof(a,Date)) {
			return a.getTime() == b.getTime();
		}
		if(js_Boot.default.__instanceof(a,haxe_IMap.default)) {
			var ha = a;
			var hb = b;
			var ka = thx_Iterators.default.toArray(ha.keys());
			var kb = thx_Iterators.default.toArray(hb.keys());
			if(ka.length != kb.length) {
				return false;
			}
			var _g4 = 0;
			while(_g4 < ka.length) {
				var key = ka[_g4];
				++_g4;
				if(!hb.exists(key) || !Dynamics.equals(ha.get(key),hb.get(key))) {
					return false;
				}
			}
			return true;
		}
		var t1 = false;
		var tmp1;
		t1 = thx_Iterators.default.isIterator(a);
		if(!t1) {
			tmp1 = thx_Iterables.default.isIterable(a);
		} else {
			tmp1 = true;
		}
		if(tmp1) {
			var va1 = t1 ? thx_Iterators.default.toArray(a) : thx_Iterators.default.toArray($iterator(a)());
			var vb1 = t1 ? thx_Iterators.default.toArray(b) : thx_Iterators.default.toArray($iterator(b)());
			if(va1.length != vb1.length) {
				return false;
			}
			var _g13 = 0;
			var _g5 = va1.length;
			while(_g13 < _g5) {
				var i2 = _g13++;
				if(!Dynamics.equals(va1[i2],vb1[i2])) {
					return false;
				}
			}
			return true;
		}
		var f = null;
		var tmp2;
		if(Object.prototype.hasOwnProperty.call(a,"equals")) {
			f = Reflect.default.field(a,"equals");
			tmp2 = Reflect.default.isFunction(f);
		} else {
			tmp2 = false;
		}
		if(tmp2) {
			return f.apply(a,[b]);
		}
		var fields = Type.default.getInstanceFields(a == null ? null : js_Boot.default.getClass(a));
		var _g6 = 0;
		while(_g6 < fields.length) {
			var field1 = fields[_g6];
			++_g6;
			var va2 = Reflect.default.field(a,field1);
			if(Reflect.default.isFunction(va2)) {
				continue;
			}
			var vb2 = Reflect.default.field(b,field1);
			if(!Dynamics.equals(va2,vb2)) {
				return false;
			}
		}
		return true;
	case 7:
		var e = _g[2];
		var ea = Type.default.getEnumName(e);
		var teb = Type.default.getEnum(b);
		var eb = Type.default.getEnumName(teb);
		if(ea != eb) {
			return false;
		}
		if(a[1] != b[1]) {
			return false;
		}
		var pa = a.slice(2);
		var pb = b.slice(2);
		var _g14 = 0;
		var _g7 = pa.length;
		while(_g14 < _g7) {
			var i3 = _g14++;
			if(!Dynamics.equals(pa[i3],pb[i3])) {
				return false;
			}
		}
		return true;
	case 8:
		throw new js__$Boot_HaxeError.default("Unable to compare two unknown types");
		break;
	}
}
Dynamics.clone = function(v,cloneInstances) {
	if(cloneInstances == null) {
		cloneInstances = false;
	}
	var _g = Type.default["typeof"](v);
	switch(_g[1]) {
	case 0:
		return null;
	case 4:
		return thx_Objects.default.copyTo(v,{ });
	case 1:case 2:case 3:case 5:case 7:case 8:
		return v;
	case 6:
		var c = _g[2];
		var name = Type.default.getClassName(c);
		switch(name) {
		case "Array":
			return v.map(function(v1) {
				return Dynamics.clone(v1,cloneInstances);
			});
		case "Date":case "String":
			return v;
		default:
			if(cloneInstances) {
				var o = Type.default.createEmptyInstance(c);
				var _g1 = 0;
				var _g11 = Type.default.getInstanceFields(c);
				while(_g1 < _g11.length) {
					var field = _g11[_g1];
					++_g1;
					o[field] = Dynamics.clone(Reflect.default.field(v,field),cloneInstances);
				}
				return o;
			} else {
				return v;
			}
		}
		break;
	}
}
Dynamics.compare = function(a,b) {
	if(null == a && null == b) {
		return 0;
	}
	if(null == a) {
		return -1;
	}
	if(null == b) {
		return 1;
	}
	if(!thx_Types.default.sameType(a,b)) {
		return haxe_Utf8.default.compare(thx_Types.default.toString(Type.default["typeof"](a)),thx_Types.default.toString(Type.default["typeof"](b)));
	}
	var _g = Type.default["typeof"](a);
	switch(_g[1]) {
	case 1:
		return thx_Ints.default.compare(a,b);
	case 2:
		var a1 = a;
		var b1 = b;
		if(a1 < b1) {
			return -1;
		} else if(a1 > b1) {
			return 1;
		} else {
			return 0;
		}
		break;
	case 3:
		return thx_Bools.default.compare(a,b);
	case 4:
		return thx_Objects.default.compare(a,b);
	case 6:
		var c = _g[2];
		var name = Type.default.getClassName(c);
		switch(name) {
		case "Array":
			return thx_Arrays.default.compare(a,b);
		case "Date":
			return thx_Dates.default.compare(a,b);
		case "String":
			return haxe_Utf8.default.compare(a,b);
		default:
			if(Object.prototype.hasOwnProperty.call(a,"compare")) {
				return Reflect.default.field(a,"compare").apply(a,[b]);
			} else {
				return haxe_Utf8.default.compare(Std.default.string(a),Std.default.string(b));
			}
		}
		break;
	case 7:
		var e = _g[2];
		return thx_Enums.default.compare(a,b);
	default:
		return 0;
	}
}
Dynamics.string = function(v) {
	var _g = Type.default["typeof"](v);
	switch(_g[1]) {
	case 0:
		return "null";
	case 1:case 2:case 3:
		return "" + Std.default.string(v);
	case 4:
		return thx_Objects.default.string(v);
	case 5:
		return "<function>";
	case 6:
		var c = _g[2];
		var _g1 = Type.default.getClassName(c);
		switch(_g1) {
		case "Array":
			return thx_Arrays.default.string(v);
		case "Date":
			return HxOverrides.default.dateStr(v);
		case "String":
			return v;
		default:
			if(js_Boot.default.__instanceof(v,haxe_IMap.default)) {
				return thx_Maps.default.string(v);
			} else {
				return Std.default.string(v);
			}
		}
		break;
	case 7:
		var e = _g[2];
		return thx_Enums.default.string(v);
	case 8:
		return "<unknown>";
	}
}



exports.default = Dynamics;