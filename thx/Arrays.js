// Class: thx.Arrays

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var $iterator = require("./../iterator_stub").default;
var thx_Error = require("./../thx/Error");
var thx__$Set_Set_$Impl_$ = require("./../thx/_Set/Set_Impl_");
var thx__$ReadonlyArray_ReadonlyArray_$Impl_$ = require("./../thx/_ReadonlyArray/ReadonlyArray_Impl_");
var haxe_ds_Option = require("./../haxe/ds/Option");
var thx_Functions = require("./../thx/Functions");
var thx_Ints = require("./../thx/Ints");
var thx_Dynamics = require("./../thx/Dynamics");
var thx_Options = require("./../thx/Options");
var thx_Either = require("./../thx/Either");
var thx__$Monoid_Monoid_$Impl_$ = require("./../thx/_Monoid/Monoid_Impl_");
var thx__$Nel_Nel_$Impl_$ = require("./../thx/_Nel/Nel_Impl_");
var Std = require("./../Std");
var thx__$Validation_Validation_$Impl_$ = require("./../thx/_Validation/Validation_Impl_");
var thx_ArrayInts = require("./../thx/ArrayInts");
var thx_Functions2 = require("./../thx/Functions2");
var thx__$Ord_Ord_$Impl_$ = require("./../thx/_Ord/Ord_Impl_");
var thx_fp_MapImpl = require("./../thx/fp/MapImpl");
var thx_fp__$Map_Map_$Impl_$ = require("./../thx/fp/_Map/Map_Impl_");
var haxe_ds_StringMap = require("./../haxe/ds/StringMap");

// Definition

var Arrays = function(){}

Arrays.__name__ = true;
Arrays.prototype = {
	
};

Arrays.append = function(array,element) {
	array.push(element);
	return array;
}
Arrays.appendIf = function(array,cond,element) {
	if(cond) {
		array.push(element);
	}
	return array;
}
Arrays.applyIndexes = function(array,indexes,incrementDuplicates) {
	if(incrementDuplicates == null) {
		incrementDuplicates = false;
	}
	if(indexes.length != array.length) {
		throw new thx_Error.default("`Arrays.applyIndexes` can only be applied to two arrays with the same length",null,{ fileName : "Arrays.hx", lineNumber : 55, className : "thx.Arrays", methodName : "applyIndexes"});
	}
	var result = [];
	if(incrementDuplicates) {
		var usedIndexes = thx__$Set_Set_$Impl_$.default.createInt();
		var _g1 = 0;
		var _g = array.length;
		while(_g1 < _g) {
			var i = _g1++;
			var index = indexes[i];
			while(usedIndexes.h.hasOwnProperty(index)) ++index;
			thx__$Set_Set_$Impl_$.default.add(usedIndexes,index);
			result[index] = array[i];
		}
	} else {
		var _g11 = 0;
		var _g2 = array.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			result[indexes[i1]] = array[i1];
		}
	}
	return result;
}
Arrays.monoid = function() {
	return { zero : [], append : function(a,b) {
		return a.concat(b);
	}};
}
Arrays.after = function(array,element) {
	return array.slice(thx__$ReadonlyArray_ReadonlyArray_$Impl_$.default.indexOf(array,element) + 1);
}
Arrays.atIndex = function(array,i) {
	if(i >= 0 && i < array.length) {
		return haxe_ds_Option.default.Some(array[i]);
	} else {
		return haxe_ds_Option.default.None;
	}
}
Arrays.getOption = function(array,i) {
	var value = array[i];
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Arrays.each = function(arr,effect) {
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		effect(arr[i]);
	}
}
Arrays.eachi = function(arr,effect) {
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		effect(arr[i],i);
	}
}
Arrays.all = function(arr,predicate) {
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(!predicate(arr[i])) {
			return false;
		}
	}
	return true;
}
Arrays.any = function(arr,predicate) {
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(predicate(arr[i])) {
			return true;
		}
	}
	return false;
}
Arrays.at = function(arr,indexes) {
	return indexes.map(function(i) {
		return arr[i];
	});
}
Arrays.before = function(array,element) {
	return array.slice(0,thx__$ReadonlyArray_ReadonlyArray_$Impl_$.default.indexOf(array,element));
}
Arrays.commonsFromStart = function(self,other,equality) {
	if(null == equality) {
		equality = thx_Functions.default.equality;
	}
	var count = 0;
	var _g = 0;
	var _g1 = Arrays.zip(self,other);
	while(_g < _g1.length) {
		var pair = _g1[_g];
		++_g;
		if(equality(pair._0,pair._1)) {
			++count;
		} else {
			break;
		}
	}
	return self.slice(0,count);
}
Arrays.compact = function(arr) {
	return arr.filter(function(v) {
		return null != v;
	});
}
Arrays.compare = function(a,b) {
	var v = thx_Ints.default.compare(a.length,b.length);
	if(v != 0) {
		return v;
	}
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		v = thx_Dynamics.default.compare(a[i],b[i]);
		if(v != 0) {
			return v;
		}
	}
	return 0;
}
Arrays.contains = function(array,element,eq) {
	if(null == eq) {
		return thx__$ReadonlyArray_ReadonlyArray_$Impl_$.default.indexOf(array,element) >= 0;
	} else {
		var _g1 = 0;
		var _g = array.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(eq(array[i],element)) {
				return true;
			}
		}
		return false;
	}
}
Arrays.containsAll = function(array,elements,eq) {
	var el = $iterator(elements)();
	while(el.hasNext()) {
		var el1 = el.next();
		if(!Arrays.contains(array,el1,eq)) {
			return false;
		}
	}
	return true;
}
Arrays.containsAny = function(array,elements,eq) {
	var el = $iterator(elements)();
	while(el.hasNext()) {
		var el1 = el.next();
		if(Arrays.contains(array,el1,eq)) {
			return true;
		}
	}
	return false;
}
Arrays.create = function(length,fillWith) {
	var arr = length > 0 ? new Array(length) : [];
	var _g1 = 0;
	var _g = length;
	while(_g1 < _g) {
		var i = _g1++;
		arr[i] = fillWith;
	}
	return arr;
}
Arrays.fromItem = function(t) {
	return [t];
}
Arrays.cross = function(a,b) {
	var r = [];
	var _g = 0;
	while(_g < a.length) {
		var va = a[_g];
		++_g;
		var _g1 = 0;
		while(_g1 < b.length) {
			var vb = b[_g1];
			++_g1;
			r.push([va,vb]);
		}
	}
	return r;
}
Arrays.crossMulti = function(array) {
	var acopy = array.slice();
	var result = acopy.shift().map(function(v) {
		return [v];
	});
	while(acopy.length > 0) {
		var array1 = acopy.shift();
		var tresult = result;
		result = [];
		var _g = 0;
		while(_g < array1.length) {
			var v1 = array1[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < tresult.length) {
				var ar = tresult[_g1];
				++_g1;
				var t = ar.slice();
				t.push(v1);
				result.push(t);
			}
		}
	}
	return result;
}
Arrays.distinct = function(array,predicate) {
	var result = [];
	if(array.length <= 1) {
		return array.slice();
	}
	if(null == predicate) {
		predicate = thx_Functions.default.equality;
	}
	var _g = 0;
	while(_g < array.length) {
		var v = [array[_g]];
		++_g;
		var keep = !Arrays.any(result,(function(v1) {
			return function(r) {
				return predicate(r,v1[0]);
			};
		})(v));
		if(keep) {
			result.push(v[0]);
		}
	}
	return result;
}
Arrays.eachPair = function(array,callback) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = i;
		var _g2 = array.length;
		while(_g3 < _g2) {
			var j = _g3++;
			if(!callback(array[i],array[j])) {
				return;
			}
		}
	}
}
Arrays.equals = function(a,b,equality) {
	if(a == null || b == null || a.length != b.length) {
		return false;
	}
	if(null == equality) {
		equality = thx_Functions.default.equality;
	}
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(!equality(a[i],b[i])) {
			return false;
		}
	}
	return true;
}
Arrays.extract = function(a,predicate) {
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(predicate(a[i])) {
			return a.splice(i,1)[0];
		}
	}
	return null;
}
Arrays.filterNull = function(a) {
	var arr = [];
	var _g = 0;
	while(_g < a.length) {
		var v = a[_g];
		++_g;
		if(null != v) {
			arr.push(v);
		}
	}
	return arr;
}
Arrays.filterOption = function(a) {
	return Arrays.reduce(a,function(acc,maybeV) {
		switch(maybeV[1]) {
		case 0:
			var v = maybeV[2];
			acc.push(v);
			break;
		case 1:
			break;
		}
		return acc;
	},[]);
}
Arrays.flattenOptions = function(a) {
	var acc = [];
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		switch(e[1]) {
		case 0:
			var v = e[2];
			acc.push(v);
			break;
		case 1:
			return haxe_ds_Option.default.None;
		}
	}
	return haxe_ds_Option.default.Some(acc);
}
Arrays.find = function(array,predicate) {
	var _g = 0;
	while(_g < array.length) {
		var element = array[_g];
		++_g;
		if(predicate(element)) {
			return element;
		}
	}
	return null;
}
Arrays.findi = function(array,predicate) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(predicate(array[i],i)) {
			return array[i];
		}
	}
	return null;
}
Arrays.findiOption = function(array,predicate) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(predicate(array[i],i)) {
			return haxe_ds_Option.default.Some(array[i]);
		}
	}
	return haxe_ds_Option.default.None;
}
Arrays.findOption = function(array,predicate) {
	var _g = 0;
	while(_g < array.length) {
		var element = array[_g];
		++_g;
		if(predicate(element)) {
			return haxe_ds_Option.default.Some(element);
		}
	}
	return haxe_ds_Option.default.None;
}
Arrays.findMap = function(values,f) {
	var _g = 0;
	while(_g < values.length) {
		var value = values[_g];
		++_g;
		var opt = f(value);
		if(!thx_Options.default.isNone(opt)) {
			return opt;
		}
	}
	return haxe_ds_Option.default.None;
}
Arrays.filterMap = function(values,f) {
	var acc = [];
	var _g = 0;
	while(_g < values.length) {
		var value = values[_g];
		++_g;
		var _g1 = f(value);
		switch(_g1[1]) {
		case 0:
			var v = _g1[2];
			acc.push(v);
			break;
		case 1:
			break;
		}
	}
	return acc;
}
Arrays.findSome = function(options) {
	var _g = 0;
	while(_g < options.length) {
		var option = options[_g];
		++_g;
		if(!thx_Options.default.isNone(option)) {
			return option;
		}
	}
	return haxe_ds_Option.default.None;
}
Arrays.findIndex = function(array,predicate) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(predicate(array[i])) {
			return i;
		}
	}
	return -1;
}
Arrays.findLast = function(array,predicate) {
	var len = array.length;
	var j;
	var _g1 = 0;
	var _g = len;
	while(_g1 < _g) {
		var i = _g1++;
		j = len - i - 1;
		if(predicate(array[j])) {
			return array[j];
		}
	}
	return null;
}
Arrays.first = function(array) {
	return array[0];
}
Arrays.firstOption = function(array) {
	var value = array[0];
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Arrays.flatMap = function(array,callback) {
	var array1 = array.map(callback);
	return Array.prototype.concat.apply([],array1);
}
Arrays.flatten = function(array) {
	return Array.prototype.concat.apply([],array);
}
Arrays.from = function(array,element) {
	return array.slice(thx__$ReadonlyArray_ReadonlyArray_$Impl_$.default.indexOf(array,element));
}
Arrays.groupByAppend = function(arr,resolver,map) {
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		var v = arr[i];
		var key = resolver(v);
		var acc = map.get(key);
		if(null == acc) {
			map.set(key,[v]);
		} else {
			acc.push(v);
		}
	}
	return map;
}
Arrays.spanByIndex = function(arr,spanKey) {
	var acc = [];
	var cur = null;
	var j = -1;
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		var k = spanKey(i);
		if(k == null) {
			throw new thx_Error.default("spanKey function returned null for index " + i,null,{ fileName : "Arrays.hx", lineNumber : 633, className : "thx.Arrays", methodName : "spanByIndex"});
		}
		if(cur == k) {
			acc[j].push(arr[i]);
		} else {
			cur = k;
			++j;
			acc.push([arr[i]]);
		}
	}
	return acc;
}
Arrays.hasElements = function(array) {
	if(null != array) {
		return array.length > 0;
	} else {
		return false;
	}
}
Arrays.head = function(array) {
	return array[0];
}
Arrays.ifEmpty = function(array,alt) {
	if(null != array && 0 != array.length) {
		return array;
	} else {
		return alt;
	}
}
Arrays.initial = function(array) {
	return array.slice(0,array.length - 1);
}
Arrays.intersperse = function(array,value) {
	return Arrays.reducei(array,function(acc,v,i) {
		acc[i * 2] = v;
		return acc;
	},Arrays.create(array.length * 2 - 1,value));
}
Arrays.interspersef = function(array,f) {
	if(array.length == 0) {
		return [];
	}
	var acc = [array[0]];
	var _g1 = 1;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		acc.push(f());
		acc.push(array[i]);
	}
	return acc;
}
Arrays.isEmpty = function(array) {
	if(null != array) {
		return array.length == 0;
	} else {
		return true;
	}
}
Arrays.last = function(array) {
	return array[array.length - 1];
}
Arrays.lastOption = function(array) {
	var value = array[array.length - 1];
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Arrays.map = function(array,callback) {
	var r = [];
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		r.push(callback(array[i]));
	}
	return r;
}
Arrays.mapi = function(array,callback) {
	var r = [];
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		r.push(callback(array[i],i));
	}
	return r;
}
Arrays.mapRight = function(array,callback) {
	var i = array.length;
	var result = [];
	while(--i >= 0) result.push(callback(array[i]));
	return result;
}
Arrays.order = function(array,sort) {
	var n = array.slice();
	n.sort(sort);
	return n;
}
Arrays.pull = function(array,toRemove,equality) {
	var _g = 0;
	while(_g < toRemove.length) {
		var element = toRemove[_g];
		++_g;
		Arrays.removeAll(array,element,equality);
	}
}
Arrays.pushIf = function(array,condition,value) {
	if(condition) {
		array.push(value);
	}
	return array;
}
Arrays.rank = function(array,compare,incrementDuplicates) {
	if(incrementDuplicates == null) {
		incrementDuplicates = true;
	}
	var r = [];
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		var this1 = { _0 : array[i], _1 : i};
		r.push(this1);
	}
	var arr = r;
	arr.sort(function(a,b) {
		return compare(a._0,b._0);
	});
	if(incrementDuplicates) {
		var usedIndexes = thx__$Set_Set_$Impl_$.default.createInt();
		return Arrays.reducei(arr,function(acc,x,i1) {
			var index = i1 > 0 && compare(arr[i1 - 1]._0,x._0) == 0 ? acc[arr[i1 - 1]._1] : i1;
			while(usedIndexes.h.hasOwnProperty(index)) ++index;
			thx__$Set_Set_$Impl_$.default.add(usedIndexes,index);
			acc[x._1] = index;
			return acc;
		},[]);
	} else {
		return Arrays.reducei(arr,function(acc1,x1,i2) {
			acc1[x1._1] = i2 > 0 && compare(arr[i2 - 1]._0,x1._0) == 0 ? acc1[arr[i2 - 1]._1] : i2;
			return acc1;
		},[]);
	}
}
Arrays.reduce = function(array,f,initial) {
	var _g = 0;
	while(_g < array.length) {
		var v = array[_g];
		++_g;
		initial = f(initial,v);
	}
	return initial;
}
Arrays.foldLeft = function(array,init,f) {
	return Arrays.reduce(array,f,init);
}
Arrays.foldLeft1 = function(array,f) {
	var tail = Arrays.dropLeft(array,1);
	var head = array[0];
	if(head == null) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(Arrays.reduce(tail,f,head));
	}
}
Arrays.foldLeftEither = function(array,init,f) {
	var acc = thx_Either.default.Right(init);
	var _g = 0;
	while(_g < array.length) {
		var a = array[_g];
		++_g;
		switch(acc[1]) {
		case 0:
			var error = acc[2];
			return acc;
		case 1:
			var b = acc[2];
			acc = f(b,a);
			break;
		}
	}
	return acc;
}
Arrays.foldMap = function(array,f,m) {
	var _e = m;
	return Arrays.reduce(array.map(f),function(a0,a1) {
		return thx__$Monoid_Monoid_$Impl_$.default.append(_e,a0,a1);
	},thx__$Monoid_Monoid_$Impl_$.default.get_zero(m));
}
Arrays.fold = function(array,m) {
	return Arrays.foldMap(array,thx_Functions.default.identity,m);
}
Arrays.nel = function(array) {
	return thx__$Nel_Nel_$Impl_$.default.fromArray(array);
}
Arrays.foldS = function(array,s) {
	return thx_Options.default.map(Arrays.nel(array),function(x) {
		return thx__$Nel_Nel_$Impl_$.default.fold(x,s);
	});
}
Arrays.resize = function(array,length,fill) {
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
}
Arrays.resized = function(array,length,fill) {
	array = array.slice();
	return Arrays.resize(array,length,fill);
}
Arrays.reducei = function(array,f,initial) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		initial = f(initial,array[i],i);
	}
	return initial;
}
Arrays.reduceRight = function(array,f,initial) {
	var i = array.length;
	while(--i >= 0) initial = f(initial,array[i]);
	return initial;
}
Arrays.removeAll = function(array,element,equality) {
	if(null == equality) {
		equality = thx_Functions.default.equality;
	}
	var i = array.length;
	while(--i >= 0) if(equality(array[i],element)) {
		array.splice(i,1);
	}
}
Arrays.rest = function(array) {
	return array.slice(1);
}
Arrays.reversed = function(array) {
	var result = array.slice();
	result.reverse();
	return result;
}
Arrays.sample = function(array,n) {
	var b = array.length;
	if(n < b) {
		n = n;
	} else {
		n = b;
	}
	var copy = array.slice();
	var result = [];
	var _g1 = 0;
	var _g = n;
	while(_g1 < _g) {
		var i = _g1++;
		result.push(copy.splice(Std.default.random(copy.length),1)[0]);
	}
	return result;
}
Arrays.sampleOne = function(array) {
	return array[Std.default.random(array.length)];
}
Arrays.string = function(arr) {
	var strings = arr.map(thx_Dynamics.default.string);
	return "[" + strings.join(", ") + "]";
}
Arrays.shuffle = function(a) {
	var t = thx_Ints.default.range(a.length);
	var array = [];
	while(t.length > 0) {
		var pos = Std.default.random(t.length);
		var index = t[pos];
		t.splice(pos,1);
		array.push(a[index]);
	}
	return array;
}
Arrays.split = function(array,parts) {
	var len = Math.ceil(array.length / parts);
	return Arrays.splitBy(array,len);
}
Arrays.splitBy = function(array,len) {
	var res = [];
	var b = array.length;
	if(len < b) {
		len = len;
	} else {
		len = b;
	}
	var _g1 = 0;
	var _g = Math.ceil(array.length / len);
	while(_g1 < _g) {
		var p = _g1++;
		res.push(array.slice(p * len,(p + 1) * len));
	}
	return res;
}
Arrays.splitByPad = function(arr,len,pad) {
	var res = Arrays.splitBy(arr,len);
	while(res[res.length - 1].length < len) res[res.length - 1].push(pad);
	return res;
}
Arrays.tail = function(array) {
	return array.slice(1);
}
Arrays.take = function(arr,n) {
	return arr.slice(0,n);
}
Arrays.takeLast = function(arr,n) {
	return arr.slice(arr.length - n);
}
Arrays.traverseOption = function(arr,f) {
	return Arrays.reduce(arr,function(acc,t) {
		return thx_Options.default.ap(f(t),thx_Options.default.map(acc,function(ux) {
			return function(u) {
				ux.push(u);
				return ux;
			};
		}));
	},haxe_ds_Option.default.Some([]));
}
Arrays.traverseValidation = function(arr,f,s) {
	return Arrays.reduce(arr,function(acc,t) {
		return thx__$Validation_Validation_$Impl_$.default.ap(f(t),thx__$Validation_Validation_$Impl_$.default.map(acc,function(ux) {
			return function(u) {
				ux.push(u);
				return ux;
			};
		}),s);
	},thx_Either.default.Right([]));
}
Arrays.traverseValidationIndexed = function(arr,f,s) {
	return Arrays.reducei(arr,function(acc,t,i) {
		return thx__$Validation_Validation_$Impl_$.default.ap(f(t,i),thx__$Validation_Validation_$Impl_$.default.map(acc,function(ux) {
			return function(u) {
				ux.push(u);
				return ux;
			};
		}),s);
	},thx_Either.default.Right([]));
}
Arrays.rotate = function(arr) {
	var result = [];
	var _g1 = 0;
	var _g = arr[0].length;
	while(_g1 < _g) {
		var i = _g1++;
		var row = [];
		result.push(row);
		var _g3 = 0;
		var _g2 = arr.length;
		while(_g3 < _g2) {
			var j = _g3++;
			row.push(arr[j][i]);
		}
	}
	return result;
}
Arrays.sliding2 = function(arr,f) {
	if(arr.length < 2) {
		return [];
	} else {
		var result = [];
		var _g1 = 0;
		var _g = arr.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			result.push(f(arr[i],arr[i + 1]));
		}
		return result;
	}
}
Arrays.unzip = function(array) {
	var a1 = [];
	var a2 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
	});
	var this1 = { _0 : a1, _1 : a2};
	return this1;
}
Arrays.unzip3 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
	});
	var this1 = { _0 : a1, _1 : a2, _2 : a3};
	return this1;
}
Arrays.unzip4 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
	});
	var this1 = { _0 : a1, _1 : a2, _2 : a3, _3 : a4};
	return this1;
}
Arrays.unzip5 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	var a5 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
		a5.push(t._4);
	});
	var this1 = { _0 : a1, _1 : a2, _2 : a3, _3 : a4, _4 : a5};
	return this1;
}
Arrays.zip = function(array1,array2) {
	var a = array1.length;
	var b = array2.length;
	var length = a < b ? a : b;
	var array = [];
	var _g1 = 0;
	var _g = length;
	while(_g1 < _g) {
		var i = _g1++;
		var this1 = { _0 : array1[i], _1 : array2[i]};
		array.push(this1);
	}
	return array;
}
Arrays.zip3 = function(array1,array2,array3) {
	var length = thx_ArrayInts.default.min([array1.length,array2.length,array3.length]);
	var array = [];
	var _g1 = 0;
	var _g = length;
	while(_g1 < _g) {
		var i = _g1++;
		var this1 = { _0 : array1[i], _1 : array2[i], _2 : array3[i]};
		array.push(this1);
	}
	return array;
}
Arrays.zip4 = function(array1,array2,array3,array4) {
	var length = thx_ArrayInts.default.min([array1.length,array2.length,array3.length,array4.length]);
	var array = [];
	var _g1 = 0;
	var _g = length;
	while(_g1 < _g) {
		var i = _g1++;
		var this1 = { _0 : array1[i], _1 : array2[i], _2 : array3[i], _3 : array4[i]};
		array.push(this1);
	}
	return array;
}
Arrays.zip5 = function(array1,array2,array3,array4,array5) {
	var length = thx_ArrayInts.default.min([array1.length,array2.length,array3.length,array4.length,array5.length]);
	var array = [];
	var _g1 = 0;
	var _g = length;
	while(_g1 < _g) {
		var i = _g1++;
		var this1 = { _0 : array1[i], _1 : array2[i], _2 : array3[i], _3 : array4[i], _4 : array5[i]};
		array.push(this1);
	}
	return array;
}
Arrays.zipAp = function(ax,fx) {
	var result = [];
	var _g1 = 0;
	var a = ax.length;
	var b = fx.length;
	var _g = a < b ? a : b;
	while(_g1 < _g) {
		var i = _g1++;
		result.push(fx[i](ax[i]));
	}
	return result;
}
Arrays.zip2Ap = function(f,ax,bx) {
	return Arrays.zipAp(bx,ax.map(thx_Functions2.default.curry(f)));
}
Arrays.zip3Ap = function(f,ax,bx,cx) {
	var f1 = f;
	return Arrays.zipAp(cx,Arrays.zip2Ap(function(a,b) {
		return function(c) {
			return f1(a,b,c);
		};
	},ax,bx));
}
Arrays.zip4Ap = function(f,ax,bx,cx,dx) {
	var f1 = f;
	return Arrays.zipAp(dx,Arrays.zip3Ap(function(a,b,c) {
		return function(d) {
			return f1(a,b,c,d);
		};
	},ax,bx,cx));
}
Arrays.zip5Ap = function(f,ax,bx,cx,dx,ex) {
	var f1 = f;
	return Arrays.zipAp(ex,Arrays.zip4Ap(function(a,b,c,d) {
		return function(e) {
			return f1(a,b,c,d,e);
		};
	},ax,bx,cx,dx));
}
Arrays.withPrepend = function(arr,el) {
	return [el].concat(arr);
}
Arrays.with = function(arr,el) {
	return arr.concat([el]);
}
Arrays.withSlice = function(arr,other,start,length) {
	if(length == null) {
		length = 0;
	}
	return arr.slice(0,start).concat(other).concat(arr.slice(start + length));
}
Arrays.withInsert = function(arr,el,pos) {
	return arr.slice(0,pos).concat([el]).concat(arr.slice(pos));
}
Arrays.maxBy = function(arr,ord) {
	if(arr.length == 0) {
		return haxe_ds_Option.default.None;
	} else {
		var _e = ord;
		return haxe_ds_Option.default.Some(Arrays.reduce(arr,function(a0,a1) {
			return thx__$Ord_Ord_$Impl_$.default.max(_e,a0,a1);
		},arr[0]));
	}
}
Arrays.minBy = function(arr,ord) {
	if(arr.length == 0) {
		return haxe_ds_Option.default.None;
	} else {
		var _e = ord;
		return haxe_ds_Option.default.Some(Arrays.reduce(arr,function(a0,a1) {
			return thx__$Ord_Ord_$Impl_$.default.min(_e,a0,a1);
		},arr[0]));
	}
}
Arrays.toMap = function(arr,keyOrder) {
	var m = thx_fp_MapImpl.default.Tip;
	var collisions = [];
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		var tuple = arr[i];
		if(thx_Options.default.isNone(thx_fp__$Map_Map_$Impl_$.default.lookup(m,tuple._0,keyOrder))) {
			m = thx_fp__$Map_Map_$Impl_$.default.insert(m,tuple._0,tuple._1,keyOrder);
		} else {
			collisions.push(tuple._0);
		}
	}
	return thx_Options.default.toFailure(thx__$Nel_Nel_$Impl_$.default.fromArray(collisions),m);
}
Arrays.toStringMap = function(arr) {
	return Arrays.reduce(arr,function(acc,t) {
		var key = t._0;
		var value = t._1;
		if(__map_reserved[key] != null) {
			acc.setReserved(key,value);
		} else {
			acc.h[key] = value;
		}
		return acc;
	},new haxe_ds_StringMap.default());
}
Arrays.partition = function(arr,f) {
	var this1 = { _0 : [], _1 : []};
	return Arrays.reduce(arr,function(a,b) {
		if(f(b)) {
			a._0.push(b);
		} else {
			a._1.push(b);
		}
		return a;
	},this1);
}
Arrays.partitionWhile = function(arr,f) {
	var partitioning = true;
	var this1 = { _0 : [], _1 : []};
	return Arrays.reduce(arr,function(a,b) {
		if(partitioning) {
			if(f(b)) {
				a._0.push(b);
			} else {
				partitioning = false;
				a._1.push(b);
			}
		} else {
			a._1.push(b);
		}
		return a;
	},this1);
}
Arrays.dropLeft = function(a,n) {
	if(n >= a.length) {
		return [];
	} else {
		return a.slice(n);
	}
}
Arrays.dropRight = function(a,n) {
	if(n >= a.length) {
		return [];
	} else {
		return a.slice(0,a.length - n);
	}
}
Arrays.dropWhile = function(a,p) {
	var r = [].concat(a);
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		if(p(e)) {
			r.shift();
		} else {
			break;
		}
	}
	return r;
}
Arrays.pad = function(arr,len,def) {
	var len0 = len - arr.length;
	var arr0 = [];
	var _g1 = 0;
	var _g = len0;
	while(_g1 < _g) {
		var i = _g1++;
		arr0.push(def);
	}
	return arr.concat(arr0);
}
Arrays.fill = function(arr,def) {
	return arr.map(function(x) {
		if(x == null) {
			return def;
		} else {
			return x;
		}
	});
}



exports.default = Arrays;