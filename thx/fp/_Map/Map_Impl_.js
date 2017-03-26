// Class: thx.fp._Map.Map_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../../import_stub").default;
var thx_fp_MapImpl = require("./../../../thx/fp/MapImpl");
var haxe_ds_Option = require("./../../../haxe/ds/Option");
var thx_Error = require("./../../../thx/Error");

// Definition

var Map_Impl_ = function(){}

Map_Impl_.__name__ = true;
Map_Impl_.prototype = {
	
};

Map_Impl_.empty = function() {
	return thx_fp_MapImpl.default.Tip;
}
Map_Impl_.singleton = function(k,v) {
	return thx_fp_MapImpl.default.Bin(1,k,v,thx_fp_MapImpl.default.Tip,thx_fp_MapImpl.default.Tip);
}
Map_Impl_.bin = function(k,v,lhs,rhs) {
	return thx_fp_MapImpl.default.Bin(Map_Impl_.size(lhs) + Map_Impl_.size(rhs) + 1,k,v,lhs,rhs);
}
Map_Impl_.fromNative = function(map,comparator) {
	var r = thx_fp_MapImpl.default.Tip;
	var key = map.keys();
	while(key.hasNext()) {
		var key1 = key.next();
		r = Map_Impl_.insert(r,key1,map.get(key1),comparator);
	}
	return r;
}
Map_Impl_.lookup = function(this1,key,comparator) {
	switch(this1[1]) {
	case 0:
		return haxe_ds_Option.default.None;
	case 1:
		var rhs = this1[6];
		var lhs = this1[5];
		var xvalue = this1[4];
		var xkey = this1[3];
		var size = this1[2];
		var c = comparator(key,xkey);
		switch(c[1]) {
		case 0:
			return Map_Impl_.lookup(lhs,key,comparator);
		case 1:
			return Map_Impl_.lookup(rhs,key,comparator);
		case 2:
			return haxe_ds_Option.default.Some(xvalue);
		}
		break;
	}
}
Map_Impl_.lookupTuple = function(this1,key,comparator) {
	switch(this1[1]) {
	case 0:
		return haxe_ds_Option.default.None;
	case 1:
		var rhs = this1[6];
		var lhs = this1[5];
		var xvalue = this1[4];
		var xkey = this1[3];
		var size = this1[2];
		var c = comparator(key,xkey);
		switch(c[1]) {
		case 0:
			return Map_Impl_.lookupTuple(lhs,key,comparator);
		case 1:
			return Map_Impl_.lookupTuple(rhs,key,comparator);
		case 2:
			var this2 = { _0 : xkey, _1 : xvalue};
			return haxe_ds_Option.default.Some(this2);
		}
		break;
	}
}
Map_Impl_.delete = function(this1,key,comparator) {
	switch(this1[1]) {
	case 0:
		return thx_fp_MapImpl.default.Tip;
	case 1:
		var rhs = this1[6];
		var lhs = this1[5];
		var x = this1[4];
		var kx = this1[3];
		var size = this1[2];
		var _g = comparator(key,kx);
		switch(_g[1]) {
		case 0:
			return Map_Impl_.balance(kx,x,Map_Impl_["delete"](lhs,key,comparator),rhs);
		case 1:
			return Map_Impl_.balance(kx,x,lhs,Map_Impl_["delete"](rhs,key,comparator));
		case 2:
			return Map_Impl_.glue(lhs,rhs);
		}
		break;
	}
}
Map_Impl_.insert = function(this1,kx,x,comparator) {
	switch(this1[1]) {
	case 0:
		return thx_fp_MapImpl.default.Bin(1,kx,x,thx_fp_MapImpl.default.Tip,thx_fp_MapImpl.default.Tip);
	case 1:
		var rhs = this1[6];
		var lhs = this1[5];
		var y = this1[4];
		var ky = this1[3];
		var sz = this1[2];
		var _g = comparator(kx,ky);
		switch(_g[1]) {
		case 0:
			return Map_Impl_.balance(ky,y,Map_Impl_.insert(lhs,kx,x,comparator),rhs);
		case 1:
			return Map_Impl_.balance(ky,y,lhs,Map_Impl_.insert(rhs,kx,x,comparator));
		case 2:
			return thx_fp_MapImpl.default.Bin(sz,kx,x,lhs,rhs);
		}
		break;
	}
}
Map_Impl_.foldLeft = function(this1,b,f) {
	switch(this1[1]) {
	case 0:
		return b;
	case 1:
		var r = this1[6];
		var l = this1[5];
		var x = this1[4];
		return Map_Impl_.foldLeft(r,Map_Impl_.foldLeft(l,f(b,x),f),f);
	}
}
Map_Impl_.map = function(this1,f) {
	switch(this1[1]) {
	case 0:
		return thx_fp_MapImpl.default.Tip;
	case 1:
		var rhs = this1[6];
		var lhs = this1[5];
		var y = this1[4];
		var ky = this1[3];
		var sz = this1[2];
		return thx_fp_MapImpl.default.Bin(sz,ky,f(y),Map_Impl_.map(lhs,f),Map_Impl_.map(rhs,f));
	}
}
Map_Impl_.values = function(this1) {
	return Map_Impl_.foldLeft(this1,[],function(acc,v) {
		acc.push(v);
		return acc;
	});
}
Map_Impl_.foldLeftKeys = function(this1,b,f) {
	switch(this1[1]) {
	case 0:
		return b;
	case 1:
		var r = this1[6];
		var l = this1[5];
		var kx = this1[3];
		return Map_Impl_.foldLeftKeys(r,Map_Impl_.foldLeftKeys(l,f(b,kx),f),f);
	}
}
Map_Impl_.foldLeftAll = function(this1,b,f) {
	switch(this1[1]) {
	case 0:
		return b;
	case 1:
		var r = this1[6];
		var l = this1[5];
		var x = this1[4];
		var kx = this1[3];
		return Map_Impl_.foldLeftAll(r,Map_Impl_.foldLeftAll(l,f(b,kx,x),f),f);
	}
}
Map_Impl_.foldLeftTuples = function(this1,b,f) {
	switch(this1[1]) {
	case 0:
		return b;
	case 1:
		var r = this1[6];
		var l = this1[5];
		var x = this1[4];
		var kx = this1[3];
		var this2 = { _0 : kx, _1 : x};
		return Map_Impl_.foldLeftTuples(r,Map_Impl_.foldLeftTuples(l,f(b,this2),f),f);
	}
}
Map_Impl_.size = function(this1) {
	switch(this1[1]) {
	case 0:
		return 0;
	case 1:
		var size = this1[2];
		return size;
	}
}
Map_Impl_.delta = 5
Map_Impl_.ratio = 2
Map_Impl_.balance = function(k,x,lhs,rhs) {
	var ls = Map_Impl_.size(lhs);
	var rs = Map_Impl_.size(rhs);
	var xs = ls + rs + 1;
	if(ls + rs <= 1) {
		return thx_fp_MapImpl.default.Bin(xs,k,x,lhs,rhs);
	} else if(rs >= 5 * ls) {
		return Map_Impl_.rotateLeft(k,x,lhs,rhs);
	} else if(ls >= 5 * rs) {
		return Map_Impl_.rotateRight(k,x,lhs,rhs);
	} else {
		return thx_fp_MapImpl.default.Bin(xs,k,x,lhs,rhs);
	}
}
Map_Impl_.glue = function(this1,that) {
	if(this1[1] == 0) {
		return that;
	} else if(that[1] == 0) {
		return this1;
	} else {
		var l = this1;
		var r = that;
		if(Map_Impl_.size(l) > Map_Impl_.size(r)) {
			var t = Map_Impl_.deleteFindMax(l);
			return Map_Impl_.balance(t.k,t.x,t.t,r);
		} else {
			var l1 = this1;
			var r1 = that;
			var t1 = Map_Impl_.deleteFindMin(r1);
			return Map_Impl_.balance(t1.k,t1.x,l1,t1.t);
		}
	}
}
Map_Impl_.deleteFindMin = function(map) {
	switch(map[1]) {
	case 0:
		throw new thx_Error.default("can not return the minimal element of an empty map",null,{ fileName : "Map.hx", lineNumber : 161, className : "thx.fp._Map.Map_Impl_", methodName : "deleteFindMin"});
		break;
	case 1:
		if(map[5][1] == 0) {
			var r = map[6];
			var k = map[3];
			var x = map[4];
			return { k : k, x : x, t : r};
		} else {
			var r1 = map[6];
			var k1 = map[3];
			var x1 = map[4];
			var l = map[5];
			var t = Map_Impl_.deleteFindMin(l);
			return { k : t.k, x : t.x, t : Map_Impl_.balance(k1,x1,t.t,r1)};
		}
		break;
	}
}
Map_Impl_.deleteFindMax = function(map) {
	switch(map[1]) {
	case 0:
		throw new thx_Error.default("can not return the maximal element of an empty map",null,{ fileName : "Map.hx", lineNumber : 171, className : "thx.fp._Map.Map_Impl_", methodName : "deleteFindMax"});
		break;
	case 1:
		if(map[6][1] == 0) {
			var k = map[3];
			var x = map[4];
			var l = map[5];
			return { k : k, x : x, t : l};
		} else {
			var k1 = map[3];
			var x1 = map[4];
			var l1 = map[5];
			var r = map[6];
			var t = Map_Impl_.deleteFindMax(r);
			return { k : t.k, x : t.x, t : Map_Impl_.balance(k1,x1,l1,t.t)};
		}
		break;
	}
}
Map_Impl_.rotateLeft = function(k,x,lhs,rhs) {
	if(rhs[1] == 1) {
		var ry = rhs[6];
		var ly = rhs[5];
		if(Map_Impl_.size(ly) < 2 * Map_Impl_.size(ry)) {
			return Map_Impl_.singleLeft(k,x,lhs,rhs);
		} else {
			return Map_Impl_.doubleLeft(k,x,lhs,rhs);
		}
	} else {
		return Map_Impl_.doubleLeft(k,x,lhs,rhs);
	}
}
Map_Impl_.rotateRight = function(k,x,lhs,rhs) {
	if(lhs[1] == 1) {
		var ry = lhs[6];
		var ly = lhs[5];
		if(Map_Impl_.size(ry) < 2 * Map_Impl_.size(ly)) {
			return Map_Impl_.singleRight(k,x,lhs,rhs);
		} else {
			return Map_Impl_.doubleRight(k,x,lhs,rhs);
		}
	} else {
		return Map_Impl_.doubleRight(k,x,lhs,rhs);
	}
}
Map_Impl_.singleLeft = function(k1,x1,t1,rhs) {
	if(rhs[1] == 1) {
		var t3 = rhs[6];
		var t2 = rhs[5];
		var x2 = rhs[4];
		var k2 = rhs[3];
		var lhs = thx_fp_MapImpl.default.Bin(Map_Impl_.size(t1) + Map_Impl_.size(t2) + 1,k1,x1,t1,t2);
		return thx_fp_MapImpl.default.Bin(Map_Impl_.size(lhs) + Map_Impl_.size(t3) + 1,k2,x2,lhs,t3);
	} else {
		throw new thx_Error.default("damn it, this should never happen",null,{ fileName : "Map.hx", lineNumber : 193, className : "thx.fp._Map.Map_Impl_", methodName : "singleLeft"});
	}
}
Map_Impl_.singleRight = function(k1,x1,lhs,t3) {
	if(lhs[1] == 1) {
		var t2 = lhs[6];
		var t1 = lhs[5];
		var x2 = lhs[4];
		var k2 = lhs[3];
		var rhs = thx_fp_MapImpl.default.Bin(Map_Impl_.size(t2) + Map_Impl_.size(t3) + 1,k1,x1,t2,t3);
		return thx_fp_MapImpl.default.Bin(Map_Impl_.size(t1) + Map_Impl_.size(rhs) + 1,k2,x2,t1,rhs);
	} else {
		throw new thx_Error.default("damn it, this should never happen",null,{ fileName : "Map.hx", lineNumber : 199, className : "thx.fp._Map.Map_Impl_", methodName : "singleRight"});
	}
}
Map_Impl_.doubleLeft = function(k1,x1,t1,rhs) {
	if(rhs[1] == 1) {
		if(rhs[5][1] == 1) {
			var t4 = rhs[6];
			var k2 = rhs[3];
			var x2 = rhs[4];
			var t3 = rhs[5][6];
			var t2 = rhs[5][5];
			var x3 = rhs[5][4];
			var k3 = rhs[5][3];
			var lhs = thx_fp_MapImpl.default.Bin(Map_Impl_.size(t1) + Map_Impl_.size(t2) + 1,k1,x1,t1,t2);
			var rhs1 = thx_fp_MapImpl.default.Bin(Map_Impl_.size(t3) + Map_Impl_.size(t4) + 1,k2,x2,t3,t4);
			return thx_fp_MapImpl.default.Bin(Map_Impl_.size(lhs) + Map_Impl_.size(rhs1) + 1,k3,x3,lhs,rhs1);
		} else {
			throw new thx_Error.default("damn it, this should never happen",null,{ fileName : "Map.hx", lineNumber : 206, className : "thx.fp._Map.Map_Impl_", methodName : "doubleLeft"});
		}
	} else {
		throw new thx_Error.default("damn it, this should never happen",null,{ fileName : "Map.hx", lineNumber : 206, className : "thx.fp._Map.Map_Impl_", methodName : "doubleLeft"});
	}
}
Map_Impl_.doubleRight = function(k1,x1,lhs,t4) {
	if(lhs[1] == 1) {
		if(lhs[6][1] == 1) {
			var k2 = lhs[3];
			var x2 = lhs[4];
			var t1 = lhs[5];
			var t3 = lhs[6][6];
			var t2 = lhs[6][5];
			var x3 = lhs[6][4];
			var k3 = lhs[6][3];
			var lhs1 = thx_fp_MapImpl.default.Bin(Map_Impl_.size(t1) + Map_Impl_.size(t2) + 1,k2,x2,t1,t2);
			var rhs = thx_fp_MapImpl.default.Bin(Map_Impl_.size(t3) + Map_Impl_.size(t4) + 1,k1,x1,t3,t4);
			return thx_fp_MapImpl.default.Bin(Map_Impl_.size(lhs1) + Map_Impl_.size(rhs) + 1,k3,x3,lhs1,rhs);
		} else {
			throw new thx_Error.default("damn it, this should never happen",null,{ fileName : "Map.hx", lineNumber : 213, className : "thx.fp._Map.Map_Impl_", methodName : "doubleRight"});
		}
	} else {
		throw new thx_Error.default("damn it, this should never happen",null,{ fileName : "Map.hx", lineNumber : 213, className : "thx.fp._Map.Map_Impl_", methodName : "doubleRight"});
	}
}



exports.default = Map_Impl_;