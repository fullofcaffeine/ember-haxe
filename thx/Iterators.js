// Class: thx.Iterators

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_Functions = require("./../thx/Functions");
var haxe_ds_Option = require("./../haxe/ds/Option");
var thx_Arrays = require("./../thx/Arrays");
var Reflect = require("./../Reflect");
var js_Boot = require("./../js/Boot");
var Type = require("./../Type");
var Lambda = require("./../Lambda");
var thx_MapIterator = require("./../thx/MapIterator");
var thx_MapIIterator = require("./../thx/MapIIterator");
var thx__$Monoid_Monoid_$Impl_$ = require("./../thx/_Monoid/Monoid_Impl_");

// Definition

var Iterators = function(){}

Iterators.__name__ = true;
Iterators.prototype = {
	
};

Iterators.all = function(it,predicate) {
	var element = it;
	while(element.hasNext()) {
		var element1 = element.next();
		if(!predicate(element1)) {
			return false;
		}
	}
	return true;
}
Iterators.any = function(it,predicate) {
	var element = it;
	while(element.hasNext()) {
		var element1 = element.next();
		if(predicate(element1)) {
			return true;
		}
	}
	return false;
}
Iterators.equals = function(a,b,equality) {
	if(null == equality) {
		equality = thx_Functions.default.equality;
	}
	var ae;
	var be;
	var an;
	var bn;
	while(true) {
		an = a.hasNext();
		bn = b.hasNext();
		if(!an && !bn) {
			return true;
		}
		if(!an || !bn) {
			return false;
		}
		if(!equality(a.next(),b.next())) {
			return false;
		}
	}
}
Iterators.get = function(it,index) {
	var pos = 0;
	var i = it;
	while(i.hasNext()) {
		var i1 = i.next();
		if(pos++ == index) {
			return i1;
		}
	}
	return null;
}
Iterators.getOption = function(it,index) {
	var value = Iterators.get(it,index);
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Iterators.eachPair = function(it,handler) {
	thx_Arrays.default.eachPair(Iterators.toArray(it),handler);
}
Iterators.filter = function(it,predicate) {
	return Iterators.reduce(it,function(acc,element) {
		if(predicate(element)) {
			acc.push(element);
		}
		return acc;
	},[]);
}
Iterators.find = function(it,f) {
	var element = it;
	while(element.hasNext()) {
		var element1 = element.next();
		if(f(element1)) {
			return element1;
		}
	}
	return null;
}
Iterators.findOption = function(it,f) {
	var value = Iterators.find(it,f);
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Iterators.first = function(it) {
	if(it.hasNext()) {
		return it.next();
	} else {
		return null;
	}
}
Iterators.hasElements = function(it) {
	return it.hasNext();
}
Iterators.indexOf = function(it,element) {
	var pos = 0;
	var v = it;
	while(v.hasNext()) {
		var v1 = v.next();
		if(element == v1) {
			return pos;
		}
		++pos;
	}
	return -1;
}
Iterators.isEmpty = function(it) {
	return !it.hasNext();
}
Iterators.isIterator = function(v) {
	var fields;
	var fields1;
	if(Reflect.default.isObject(v)) {
		var o = v;
		fields1 = null == (o == null ? null : js_Boot.default.getClass(o));
	} else {
		fields1 = false;
	}
	if(fields1) {
		fields = Reflect.default.fields(v);
	} else {
		var o1 = v;
		fields = Type.default.getInstanceFields(o1 == null ? null : js_Boot.default.getClass(o1));
	}
	if(!Lambda.default.has(fields,"next") || !Lambda.default.has(fields,"hasNext")) {
		return false;
	}
	if(Reflect.default.isFunction(Reflect.default.field(v,"next"))) {
		return Reflect.default.isFunction(Reflect.default.field(v,"hasNext"));
	} else {
		return false;
	}
}
Iterators.last = function(it) {
	var buf = null;
	while(it.hasNext()) buf = it.next();
	return buf;
}
Iterators.forEach = function(it,proc) {
	while(it.hasNext()) proc(it.next());
}
Iterators.map = function(it,f) {
	var acc = [];
	var v = it;
	while(v.hasNext()) {
		var v1 = v.next();
		acc.push(f(v1));
	}
	return acc;
}
Iterators.fmap = function(it,f) {
	return new thx_MapIterator.default(it,f);
}
Iterators.mapi = function(it,f) {
	var acc = [];
	var i = 0;
	var v = it;
	while(v.hasNext()) {
		var v1 = v.next();
		acc.push(f(v1,i++));
	}
	return acc;
}
Iterators.fmapi = function(it,f) {
	return new thx_MapIIterator.default(it,f);
}
Iterators.order = function(it,sort) {
	var n = Iterators.toArray(it);
	n.sort(sort);
	return n;
}
Iterators.reduce = function(it,callback,initial) {
	var result = initial;
	while(it.hasNext()) result = callback(result,it.next());
	return result;
}
Iterators.reducei = function(it,callback,initial) {
	Iterators.mapi(it,function(v,i) {
		initial = callback(initial,v,i);
	});
	return initial;
}
Iterators.foldLeft = function(it,zero,f) {
	return Iterators.reduce(it,f,zero);
}
Iterators.foldMap = function(it,f,m) {
	var _e = m;
	var tmp = function(a0,a1) {
		return thx__$Monoid_Monoid_$Impl_$.default.append(_e,a0,a1);
	};
	return Iterators.foldLeft(Iterators.fmap(it,f),thx__$Monoid_Monoid_$Impl_$.default.get_zero(m),tmp);
}
Iterators.takeUntil = function(it,f) {
	var out = [];
	var v = it;
	while(v.hasNext()) {
		var v1 = v.next();
		if(f(v1)) {
			out.push(v1);
		} else {
			break;
		}
	}
	return out;
}
Iterators.dropUntil = function(it,f) {
	var done = false;
	var out = [];
	var v = it;
	while(v.hasNext()) {
		var v1 = v.next();
		if(!done) {
			if(!f(v1)) {
				done = true;
				out.push(v1);
			}
		} else {
			out.push(v1);
		}
	}
	return out;
}
Iterators.toArray = function(it) {
	var elements = [];
	var element = it;
	while(element.hasNext()) {
		var element1 = element.next();
		elements.push(element1);
	}
	return elements;
}
Iterators.unzip = function(it) {
	var a1 = [];
	var a2 = [];
	Iterators.forEach(it,function(t) {
		a1.push(t._0);
		a2.push(t._1);
	});
	var this1 = { _0 : a1, _1 : a2};
	return this1;
}
Iterators.unzip3 = function(it) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	Iterators.forEach(it,function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
	});
	var this1 = { _0 : a1, _1 : a2, _2 : a3};
	return this1;
}
Iterators.unzip4 = function(it) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	Iterators.forEach(it,function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
	});
	var this1 = { _0 : a1, _1 : a2, _2 : a3, _3 : a4};
	return this1;
}
Iterators.unzip5 = function(it) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	var a5 = [];
	Iterators.forEach(it,function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
		a5.push(t._4);
	});
	var this1 = { _0 : a1, _1 : a2, _2 : a3, _3 : a4, _4 : a5};
	return this1;
}
Iterators.zip = function(it1,it2) {
	var array = [];
	while(it1.hasNext() && it2.hasNext()) {
		var this1 = { _0 : it1.next(), _1 : it2.next()};
		array.push(this1);
	}
	return array;
}
Iterators.zip3 = function(it1,it2,it3) {
	var array = [];
	while(it1.hasNext() && it2.hasNext() && it3.hasNext()) {
		var this1 = { _0 : it1.next(), _1 : it2.next(), _2 : it3.next()};
		array.push(this1);
	}
	return array;
}
Iterators.zip4 = function(it1,it2,it3,it4) {
	var array = [];
	while(it1.hasNext() && it2.hasNext() && it3.hasNext() && it4.hasNext()) {
		var this1 = { _0 : it1.next(), _1 : it2.next(), _2 : it3.next(), _3 : it4.next()};
		array.push(this1);
	}
	return array;
}
Iterators.zip5 = function(it1,it2,it3,it4,it5) {
	var array = [];
	while(it1.hasNext() && it2.hasNext() && it3.hasNext() && it4.hasNext() && it5.hasNext()) {
		var this1 = { _0 : it1.next(), _1 : it2.next(), _2 : it3.next(), _3 : it4.next(), _4 : it5.next()};
		array.push(this1);
	}
	return array;
}



exports.default = Iterators;