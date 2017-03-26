// Class: thx.Iterables

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var $iterator = require("./../iterator_stub").default;
var $bind = require("./../bind_stub").default;
var thx_Iterators = require("./../thx/Iterators");
var haxe_ds_Option = require("./../haxe/ds/Option");
var Reflect = require("./../Reflect");
var js_Boot = require("./../js/Boot");
var Type = require("./../Type");
var Lambda = require("./../Lambda");
var thx_Options = require("./../thx/Options");
var thx_OrderingImpl = require("./../thx/OrderingImpl");
var thx__$Ord_Ord_$Impl_$ = require("./../thx/_Ord/Ord_Impl_");
var thx_Functions = require("./../thx/Functions");

// Definition

var Iterables = function(){}

Iterables.__name__ = true;
Iterables.prototype = {
	
};

Iterables.all = function(it,predicate) {
	return thx_Iterators.default.all($iterator(it)(),predicate);
}
Iterables.any = function(it,predicate) {
	return thx_Iterators.default.any($iterator(it)(),predicate);
}
Iterables.eachPair = function(it,handler) {
	thx_Iterators.default.eachPair($iterator(it)(),handler);
	return;
}
Iterables.equals = function(a,b,equality) {
	return thx_Iterators.default.equals($iterator(a)(),$iterator(b)(),equality);
}
Iterables.filter = function(it,predicate) {
	return thx_Iterators.default.filter($iterator(it)(),predicate);
}
Iterables.find = function(it,predicate) {
	return thx_Iterators.default.find($iterator(it)(),predicate);
}
Iterables.findOption = function(it,predicate) {
	var value = thx_Iterators.default.find($iterator(it)(),predicate);
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Iterables.first = function(it) {
	return thx_Iterators.default.first($iterator(it)());
}
Iterables.get = function(it,index) {
	return thx_Iterators.default.get($iterator(it)(),index);
}
Iterables.getOption = function(it,index) {
	var value = thx_Iterators.default.get($iterator(it)(),index);
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Iterables.last = function(it) {
	return thx_Iterators.default.last($iterator(it)());
}
Iterables.hasElements = function(it) {
	return $iterator(it)().hasNext();
}
Iterables.indexOf = function(it,element) {
	return thx_Iterators.default.indexOf($iterator(it)(),element);
}
Iterables.isEmpty = function(it) {
	return !$iterator(it)().hasNext();
}
Iterables.isIterable = function(v) {
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
	if(!Lambda.default.has(fields,"iterator")) {
		return false;
	}
	return Reflect.default.isFunction(Reflect.default.field(v,"iterator"));
}
Iterables.map = function(it,f) {
	return thx_Iterators.default.map($iterator(it)(),f);
}
Iterables.fmap = function(it,f) {
	return { iterator : function() {
		return thx_Iterators.default.fmap($iterator(it)(),f);
	}};
}
Iterables.mapi = function(it,f) {
	return thx_Iterators.default.mapi($iterator(it)(),f);
}
Iterables.fmapi = function(it,f) {
	return { iterator : function() {
		return thx_Iterators.default.fmapi($iterator(it)(),f);
	}};
}
Iterables.order = function(it,sort) {
	return thx_Iterators.default.order($iterator(it)(),sort);
}
Iterables.reduce = function(it,callback,initial) {
	return thx_Iterators.default.reduce($iterator(it)(),callback,initial);
}
Iterables.reducei = function(it,callback,initial) {
	return thx_Iterators.default.reducei($iterator(it)(),callback,initial);
}
Iterables.toArray = function(it) {
	return thx_Iterators.default.toArray($iterator(it)());
}
Iterables.minBy = function(it,f,ord) {
	var found = haxe_ds_Option.default.None;
	var a = $iterator(it)();
	while(a.hasNext()) {
		var a1 = a.next();
		var a2 = [a1];
		if(thx_Options.default.any(found,(function(a3) {
			return function(a0) {
				var found1 = f(a0);
				var found2 = f(a3[0]);
				return ord(found1,found2) == thx_OrderingImpl.default.LT;
			};
		})(a2))) {
			found = found;
		} else {
			found = haxe_ds_Option.default.Some(a2[0]);
		}
	}
	return found;
}
Iterables.maxBy = function(it,f,ord) {
	return Iterables.minBy(it,f,thx__$Ord_Ord_$Impl_$.default.inverse(ord));
}
Iterables.min = function(it,ord) {
	return Iterables.minBy(it,thx_Functions.default.identity,ord);
}
Iterables.max = function(it,ord) {
	return Iterables.minBy(it,thx_Functions.default.identity,thx__$Ord_Ord_$Impl_$.default.inverse(ord));
}
Iterables.extremaBy = function(it,f,ord) {
	var found = haxe_ds_Option.default.None;
	var a = $iterator(it)();
	while(a.hasNext()) {
		var a1 = a.next();
		switch(found[1]) {
		case 0:
			var t = found[2];
			if(ord(f(a1),f(t._0)) == thx_OrderingImpl.default.LT) {
				var this1 = { _0 : a1, _1 : t._1};
				found = haxe_ds_Option.default.Some(this1);
			} else {
				var t1 = found[2];
				if(ord(f(a1),f(t1._1)) == thx_OrderingImpl.default.GT) {
					var this2 = { _0 : t1._0, _1 : a1};
					found = haxe_ds_Option.default.Some(this2);
				} else {
					found = found;
				}
			}
			break;
		case 1:
			var this3 = { _0 : a1, _1 : a1};
			found = haxe_ds_Option.default.Some(this3);
			break;
		default:
			found = found;
		}
	}
	return found;
}
Iterables.extrema = function(it,ord) {
	return Iterables.extremaBy(it,thx_Functions.default.identity,ord);
}
Iterables.takeUntil = function(it,fn) {
	return thx_Iterators.default.takeUntil($iterator(it)(),fn);
}
Iterables.dropLeft = function(itr,n) {
	return { iterator : function() {
		var itr1 = $iterator(itr)();
		var count = n;
		while(count > 0) if(itr1.hasNext()) {
			itr1.next();
		}
		return { next : $bind(itr1,itr1.next), hasNext : $bind(itr1,itr1.hasNext)};
	}};
}
Iterables.dropUntil = function(it,fn) {
	return thx_Iterators.default.dropUntil($iterator(it)(),fn);
}
Iterables.unionBy = function(a,b,eq) {
	var res = [];
	var e = $iterator(a)();
	while(e.hasNext()) {
		var e1 = e.next();
		res.push(e1);
	}
	var e2 = $iterator(b)();
	while(e2.hasNext()) {
		var e3 = e2.next();
		var e4 = [e3];
		if(!Iterables.any(res,(function(e5) {
			return function(x) {
				return eq(x,e5[0]);
			};
		})(e4))) {
			res.push(e4[0]);
		}
	}
	return res;
}
Iterables.differenceBy = function(a,b,eq) {
	var res = [];
	var e = $iterator(a)();
	while(e.hasNext()) {
		var e1 = e.next();
		var e2 = [e1];
		if(!Iterables.any(b,(function(e3) {
			return function(x) {
				return eq(x,e3[0]);
			};
		})(e2))) {
			res.push(e2[0]);
		}
	}
	return res;
}
Iterables.unzip = function(it) {
	return thx_Iterators.default.unzip($iterator(it)());
}
Iterables.unzip3 = function(it) {
	return thx_Iterators.default.unzip3($iterator(it)());
}
Iterables.unzip4 = function(it) {
	return thx_Iterators.default.unzip4($iterator(it)());
}
Iterables.unzip5 = function(it) {
	return thx_Iterators.default.unzip5($iterator(it)());
}
Iterables.zip = function(it1,it2) {
	return thx_Iterators.default.zip($iterator(it1)(),$iterator(it2)());
}
Iterables.zip3 = function(it1,it2,it3) {
	return thx_Iterators.default.zip3($iterator(it1)(),$iterator(it2)(),$iterator(it3)());
}
Iterables.zip4 = function(it1,it2,it3,it4) {
	return thx_Iterators.default.zip4($iterator(it1)(),$iterator(it2)(),$iterator(it3)(),$iterator(it4)());
}
Iterables.zip5 = function(it1,it2,it3,it4,it5) {
	return thx_Iterators.default.zip5($iterator(it1)(),$iterator(it2)(),$iterator(it3)(),$iterator(it4)(),$iterator(it5)());
}



exports.default = Iterables;