// Class: js.Boot

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;

// Definition

var Boot = function(){}

Boot.__name__ = true;
Boot.prototype = {
	
};

Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = Boot.__nativeClassName(o);
		if(name != null) {
			return Boot.__resolveNativeClass(name);
		}
		return null;
	}
}
Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + Boot.__string_rec(o[i],s);
					} else {
						str += Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
}
Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return Boot.__interfLoop(cc.__super__,cl);
}
Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case null:
		return typeof(o) == "boolean";
	case null:
		return true;
	case null:
		return typeof(o) == "number";
	case null:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(Boot.__interfLoop(Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == null ? o.__name__ != null : false) {
			return true;
		}
		if(cl == null ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ == cl;
	}
}
Boot.__toStr = ({ }).toString
Boot.__nativeClassName = function(o) {
	var name = Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
}
Boot.__isNativeObj = function(o) {
	return Boot.__nativeClassName(o) != null;
}
Boot.__resolveNativeClass = function(name) {
	return $global[name];
}



exports.default = Boot;