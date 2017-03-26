// Class: thx.Objects

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var Reflect = require("./../Reflect");
var thx_Arrays = require("./../thx/Arrays");
var thx_Dynamics = require("./../thx/Dynamics");
var thx_Either = require("./../thx/Either");
var haxe_ds_StringMap = require("./../haxe/ds/StringMap");
var js_Boot = require("./../js/Boot");
var thx_Maps = require("./../thx/Maps");
var thx_Strings = require("./../thx/Strings");
var Std = require("./../Std");
var haxe_ds_Option = require("./../haxe/ds/Option");
var thx_Options = require("./../thx/Options");

// Definition

var Objects = function(){}

Objects.__name__ = true;
Objects.prototype = {
	
};

Objects.compare = function(a,b) {
	var v;
	var fields = Reflect.default.fields(a);
	v = thx_Arrays.default.compare(fields,Reflect.default.fields(b));
	if(v != 0) {
		return v;
	}
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		v = thx_Dynamics.default.compare(Reflect.default.field(a,field),Reflect.default.field(b,field));
		if(v != 0) {
			return v;
		}
	}
	return 0;
}
Objects.isEmpty = function(o) {
	return Reflect.default.fields(o).length == 0;
}
Objects.exists = function(o,name) {
	return Object.prototype.hasOwnProperty.call(o,name);
}
Objects.fields = function(o) {
	return Reflect.default.fields(o);
}
Objects.deflate = function(o,flattenArrays) {
	if(flattenArrays == null) {
		flattenArrays = true;
	}
	var f = null;
	f = function(v) {
		if((v instanceof Array) && v.__enum__ == null) {
			if(flattenArrays) {
				var a = v;
				return thx_Either.default.Right(thx_Arrays.default.reducei(a,function(map,value,i) {
					var _g = f(value);
					switch(_g[1]) {
					case 0:
						var v1 = _g[2];
						var key = "" + i;
						if(__map_reserved[key] != null) {
							map.setReserved(key,v1);
						} else {
							map.h[key] = v1;
						}
						break;
					case 1:
						var m = _g[2];
						var k = m.keys();
						while(k.hasNext()) {
							var k1 = k.next();
							var key1 = "" + i + "." + k1;
							var value1 = __map_reserved[k1] != null ? m.getReserved(k1) : m.h[k1];
							if(__map_reserved[key1] != null) {
								map.setReserved(key1,value1);
							} else {
								map.h[key1] = value1;
							}
						}
						break;
					}
					return map;
				},new haxe_ds_StringMap.default()));
			} else {
				return thx_Either.default.Left(v);
			}
		} else {
			var f1;
			if(Reflect.default.isObject(v)) {
				var o1 = v;
				f1 = null == (o1 == null ? null : js_Boot.default.getClass(o1));
			} else {
				f1 = false;
			}
			if(f1) {
				return thx_Either.default.Right(thx_Arrays.default.reduce(Reflect.default.fields(v),function(map1,key2) {
					var _g1 = Reflect.default.field(v,key2);
					var _g2 = f(_g1);
					switch(_g2[1]) {
					case 0:
						var v2 = _g2[2];
						var key3 = "" + key2;
						if(__map_reserved[key3] != null) {
							map1.setReserved(key3,v2);
						} else {
							map1.h[key3] = v2;
						}
						break;
					case 1:
						var m1 = _g2[2];
						var k2 = m1.keys();
						while(k2.hasNext()) {
							var k3 = k2.next();
							var key4 = "" + key2 + "." + k3;
							var value2 = __map_reserved[k3] != null ? m1.getReserved(k3) : m1.h[k3];
							if(__map_reserved[key4] != null) {
								map1.setReserved(key4,value2);
							} else {
								map1.h[key4] = value2;
							}
						}
						break;
					}
					return map1;
				},new haxe_ds_StringMap.default()));
			} else {
				return thx_Either.default.Left(v);
			}
		}
	};
	var f2 = f;
	var _g3 = f2(o);
	switch(_g3[1]) {
	case 0:
		var v3 = _g3[2];
		return v3;
	case 1:
		var m2 = _g3[2];
		return thx_Maps.default.toObject(m2);
	}
}
Objects.inflate = function(o) {
	return thx_Arrays.default.reduce(Reflect.default.fields(o),function(acc,field) {
		return Objects.setPath(acc,field,Reflect.default.field(o,field));
	},{ });
}
Objects.combine = function(first,second) {
	return Objects.shallowCombine(first,second);
}
Objects.shallowCombine = function(first,second) {
	var to = { };
	var _g = 0;
	var _g1 = Reflect.default.fields(first);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		to[field] = Reflect.default.field(first,field);
	}
	var _g2 = 0;
	var _g11 = Reflect.default.fields(second);
	while(_g2 < _g11.length) {
		var field1 = _g11[_g2];
		++_g2;
		to[field1] = Reflect.default.field(second,field1);
	}
	return to;
}
Objects.deepCombine = function(first,second) {
	var deflatedSecond = Objects.deflate(second);
	var _g = 0;
	var _g1 = Reflect.default.fields(deflatedSecond);
	while(_g < _g1.length) {
		var keyPath = _g1[_g];
		++_g;
		Objects.setPath(first,keyPath,Reflect.default.field(deflatedSecond,keyPath));
	}
	return first;
}
Objects.assign = function(to,from,replacef) {
	if(null == replacef) {
		replacef = function(field,oldv,newv) {
			return newv;
		};
	}
	var _g = 0;
	var _g1 = Reflect.default.fields(from);
	while(_g < _g1.length) {
		var field1 = _g1[_g];
		++_g;
		var newv1 = Reflect.default.field(from,field1);
		if(Object.prototype.hasOwnProperty.call(to,field1)) {
			to[field1] = replacef(field1,Reflect.default.field(to,field1),newv1);
		} else {
			to[field1] = newv1;
		}
	}
	return to;
}
Objects.copyTo = function(src,dst,cloneInstances) {
	if(cloneInstances == null) {
		cloneInstances = false;
	}
	var _g = 0;
	var _g1 = Reflect.default.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var sv = thx_Dynamics.default.clone(Reflect.default.field(src,field),cloneInstances);
		var dv = Reflect.default.field(dst,field);
		var tmp;
		var tmp1;
		if(Reflect.default.isObject(sv)) {
			var o = sv;
			tmp1 = null == (o == null ? null : js_Boot.default.getClass(o));
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			if(Reflect.default.isObject(dv)) {
				var o1 = dv;
				tmp = null == (o1 == null ? null : js_Boot.default.getClass(o1));
			} else {
				tmp = false;
			}
		} else {
			tmp = false;
		}
		if(tmp) {
			Objects.copyTo(sv,dv);
		} else {
			dst[field] = sv;
		}
	}
	return dst;
}
Objects.clone = function(src,cloneInstances) {
	if(cloneInstances == null) {
		cloneInstances = false;
	}
	return thx_Dynamics.default.clone(src,cloneInstances);
}
Objects.toMap = function(o) {
	return thx_Arrays.default.reduce(Objects.tuples(o),function(map,t) {
		var key = t._0;
		var value = t._1;
		if(__map_reserved[key] != null) {
			map.setReserved(key,value);
		} else {
			map.h[key] = value;
		}
		return map;
	},new haxe_ds_StringMap.default());
}
Objects.size = function(o) {
	return Reflect.default.fields(o).length;
}
Objects.string = function(o) {
	return "{" + Reflect.default.fields(o).map(function(key) {
		var v = Reflect.default.field(o,key);
		var s = typeof(v) == "string" ? thx_Strings.default.quote(v) : thx_Dynamics.default.string(v);
		return "" + key + " : " + s;
	}).join(", ") + "}";
}
Objects.stringImpl = function(o,cache) {
}
Objects.values = function(o) {
	return Reflect.default.fields(o).map(function(key) {
		return Reflect.default.field(o,key);
	});
}
Objects.tuples = function(o) {
	return Reflect.default.fields(o).map(function(key) {
		var this1 = { _0 : key, _1 : Reflect.default.field(o,key)};
		return this1;
	});
}
Objects.hasPath = function(o,path) {
	var _this_r = new RegExp("\\[(\\d+)\\]","g".split("u").join(""));
	path = path.replace(_this_r,".$1");
	var paths = path.split(".");
	var current = o;
	var _g = 0;
	while(_g < paths.length) {
		var currentPath = paths[_g];
		++_g;
		if(thx_Strings.default.DIGITS.match(currentPath)) {
			var index = Std.default.parseInt(currentPath);
			var value = current;
			var arr = (value instanceof Array) ? value : null;
			if(null == arr || arr.length <= index) {
				return false;
			}
			current = arr[index];
		} else if(Object.prototype.hasOwnProperty.call(current,currentPath)) {
			current = Reflect.default.field(current,currentPath);
		} else {
			return false;
		}
	}
	return true;
}
Objects.hasPathValue = function(o,path) {
	return Objects.getPath(o,path) != null;
}
Objects.getPath = function(o,path) {
	var _this_r = new RegExp("\\[(\\d+)\\]","g".split("u").join(""));
	path = path.replace(_this_r,".$1");
	var paths = path.split(".");
	var current = o;
	var _g = 0;
	while(_g < paths.length) {
		var currentPath = paths[_g];
		++_g;
		if(current == null) {
			return null;
		} else if(thx_Strings.default.DIGITS.match(currentPath)) {
			var index = Std.default.parseInt(currentPath);
			var value = current;
			var arr = (value instanceof Array) ? value : null;
			if(null == arr) {
				return null;
			}
			current = arr[index];
		} else if(Object.prototype.hasOwnProperty.call(current,currentPath)) {
			current = Reflect.default.field(current,currentPath);
		} else {
			return null;
		}
	}
	return current;
}
Objects.getPathOption = function(o,path) {
	var value = Objects.getPath(o,path);
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Objects.parsePath = function(o,path,parse) {
	var this1 = thx_Options.default.toSuccessNel(Objects.getPathOption(o,path),"Object does not contain path " + path);
	switch(this1[1]) {
	case 0:
		var a = this1[2];
		return thx_Either.default.Left(a);
	case 1:
		var b = this1[2];
		return parse(b);
	}
}
Objects.getPathOr = function(o,path,alt) {
	return thx_Options.default.getOrElse(Objects.getPathOption(o,path),alt);
}
Objects.setPath = function(o,path,val) {
	var _this_r = new RegExp("\\[(\\d+)\\]","g".split("u").join(""));
	path = path.replace(_this_r,".$1");
	var paths = path.split(".");
	var current = o;
	var _g1 = 0;
	var _g = paths.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		var currentPath = paths[i];
		var nextPath = paths[i + 1];
		if(thx_Strings.default.DIGITS.match(currentPath) || currentPath == "*") {
			var index = currentPath == "*" ? current.length : Std.default.parseInt(currentPath);
			if(current[index] == null) {
				if(thx_Strings.default.DIGITS.match(nextPath) || nextPath == "*") {
					current[index] = [];
				} else {
					current[index] = { };
				}
			}
			current = current[index];
		} else {
			if(!Object.prototype.hasOwnProperty.call(current,currentPath)) {
				if(thx_Strings.default.DIGITS.match(nextPath) || nextPath == "*") {
					current[currentPath] = [];
				} else {
					current[currentPath] = { };
				}
			}
			current = Reflect.default.field(current,currentPath);
		}
	}
	var p = paths[paths.length - 1];
	if(thx_Strings.default.DIGITS.match(p)) {
		var index1 = Std.default.parseInt(p);
		current[index1] = val;
	} else if(p == "*") {
		current.push(val);
	} else {
		current[p] = val;
	}
	return o;
}
Objects.removePath = function(o,path) {
	var _this_r = new RegExp("\\[(\\d+)\\]","g".split("u").join(""));
	path = path.replace(_this_r,".$1");
	var paths = path.split(".");
	var target = paths.pop();
	try {
		var sub = thx_Arrays.default.reduce(paths,function(existing,nextPath) {
			if(nextPath == "*") {
				return existing.pop();
			} else if(thx_Strings.default.DIGITS.match(nextPath)) {
				var current = existing;
				var index = Std.default.parseInt(nextPath);
				return current[index];
			} else {
				return Reflect.default.field(existing,nextPath);
			}
		},o);
		if(null != sub) {
			Reflect.default.deleteField(sub,target);
		}
	} catch( e ) {
	}
	return o;
}
Objects.normalizePath = function(path) {
	var _this_r = new RegExp("\\[(\\d+)\\]","g".split("u").join(""));
	return path.replace(_this_r,".$1");
}



exports.default = Objects;