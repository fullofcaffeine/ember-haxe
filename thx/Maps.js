// Class: thx.Maps

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_Iterators = require("./../thx/Iterators");
var thx_Arrays = require("./../thx/Arrays");
var haxe_ds_Option = require("./../haxe/ds/Option");
var js_Boot = require("./../js/Boot");
var haxe_IMap = require("./../haxe/IMap");
var thx_Dynamics = require("./../thx/Dynamics");

// Definition

var Maps = function(){}

Maps.__name__ = true;
Maps.prototype = {
	
};

Maps.copyTo = function(src,dst) {
	var key = src.keys();
	while(key.hasNext()) {
		var key1 = key.next();
		dst.set(key1,src.get(key1));
	}
	return dst;
}
Maps.tuples = function(map) {
	return thx_Iterators.default.map(map.keys(),function(key) {
		var this1 = { _0 : key, _1 : map.get(key)};
		return this1;
	});
}
Maps.mapValues = function(map,f,acc) {
	return Maps.reduce(map,function(m,t) {
		m.set(t._0,f(t._1));
		return m;
	},acc);
}
Maps.reduce = function(map,f,acc) {
	return thx_Arrays.default.reduce(Maps.tuples(map),f,acc);
}
Maps.values = function(map) {
	return thx_Iterators.default.map(map.keys(),function(key) {
		return map.get(key);
	});
}
Maps.foldLeftWithKeys = function(map,f,acc) {
	return thx_Iterators.default.reduce(map.keys(),function(acc1,k) {
		return f(acc1,k,map.get(k));
	},acc);
}
Maps.getOption = function(map,key) {
	var value = map.get(key);
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Maps.toObject = function(map) {
	return thx_Arrays.default.reduce(Maps.tuples(map),function(o,t) {
		o[t._0] = t._1;
		return o;
	},{ });
}
Maps.getAlt = function(map,key,alt) {
	var v = map.get(key);
	if(null == v) {
		return alt;
	} else {
		return v;
	}
}
Maps.isMap = function(v) {
	return js_Boot.default.__instanceof(v,haxe_IMap.default);
}
Maps.string = function(m) {
	return "[" + Maps.tuples(m).map(function(t) {
		return thx_Dynamics.default.string(t._0) + " => " + thx_Dynamics.default.string(t._1);
	}).join(", ") + "]";
}
Maps.merge = function(dest,sources) {
	return thx_Arrays.default.reduce(sources,function(result,source) {
		return thx_Iterators.default.reduce(source.keys(),function(result1,key) {
			result1.set(key,source.get(key));
			return result1;
		},result);
	},dest);
}



exports.default = Maps;