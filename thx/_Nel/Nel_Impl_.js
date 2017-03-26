// Class: thx._Nel.Nel_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var thx_NonEmptyList = require("./../../thx/NonEmptyList");
var haxe_ds_Option = require("./../../haxe/ds/Option");
var thx_Ints = require("./../../thx/Ints");
var thx_Arrays = require("./../../thx/Arrays");

// Definition

var Nel_Impl_ = function(){}

Nel_Impl_.__name__ = true;
Nel_Impl_.prototype = {
	
};

Nel_Impl_.nel = function(hd,tl) {
	var _g = Nel_Impl_.fromArray(tl);
	switch(_g[1]) {
	case 0:
		var nel = _g[2];
		return Nel_Impl_.cons(hd,nel);
	case 1:
		return Nel_Impl_.pure(hd);
	}
}
Nel_Impl_.pure = function(a) {
	return thx_NonEmptyList.default.Single(a);
}
Nel_Impl_.cons = function(a,nl) {
	return thx_NonEmptyList.default.ConsNel(a,nl);
}
Nel_Impl_.fromArray = function(arr) {
	if(arr.length == 0) {
		return haxe_ds_Option.default.None;
	} else {
		var res = thx_NonEmptyList.default.Single(arr[arr.length - 1]);
		var i = thx_Ints.default.rangeIter(arr.length - 2,-1,-1);
		while(i.hasNext()) {
			var i1 = i.next();
			res = thx_NonEmptyList.default.ConsNel(arr[i1],res);
		}
		return haxe_ds_Option.default.Some(res);
	}
}
Nel_Impl_.map = function(this1,f) {
	var fb = f;
	return Nel_Impl_.flatMap(this1,function(v) {
		return Nel_Impl_.pure(fb(v));
	});
}
Nel_Impl_.flatMap = function(this1,f) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return f(x);
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return Nel_Impl_.append(f(x1),Nel_Impl_.flatMap(xs,f));
	}
}
Nel_Impl_.fold = function(this1,f) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return x;
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return f(x1,Nel_Impl_.fold(xs,f));
	}
}
Nel_Impl_.append = function(this1,nel) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return thx_NonEmptyList.default.ConsNel(x,nel);
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return thx_NonEmptyList.default.ConsNel(x1,Nel_Impl_.append(xs,nel));
	}
}
Nel_Impl_.head = function(this1) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return x;
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return x1;
	}
}
Nel_Impl_.tail = function(this1) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return [];
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return Nel_Impl_.toArray(xs);
	}
}
Nel_Impl_.init = function(this1) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return [];
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return [x1].concat(Nel_Impl_.init(xs));
	}
}
Nel_Impl_.last = function(this1) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return x;
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return Nel_Impl_.last(xs);
	}
}
Nel_Impl_.push = function(this1,a) {
	return Nel_Impl_.append(this1,thx_NonEmptyList.default.Single(a));
}
Nel_Impl_.pop = function(this1) {
	var this2 = { _0 : Nel_Impl_.last(this1), _1 : Nel_Impl_.init(this1)};
	return this2;
}
Nel_Impl_.unshift = function(this1,a) {
	return thx_NonEmptyList.default.ConsNel(a,this1);
}
Nel_Impl_.shift = function(this1) {
	var this2 = { _0 : Nel_Impl_.head(this1), _1 : Nel_Impl_.tail(this1)};
	return this2;
}
Nel_Impl_.toArray = function(this1) {
	var go = null;
	go = function(acc,xs) {
		switch(xs[1]) {
		case 0:
			var x = xs[2];
			return thx_Arrays.default.append(acc,x);
		case 1:
			var xs1 = xs[3];
			var x1 = xs[2];
			var go1 = thx_Arrays.default.append(acc,x1);
			return go(go1,xs1);
		}
	};
	var go2 = go;
	return go2([],this1);
}
Nel_Impl_.semigroup = function() {
	return function(nl,nr) {
		return Nel_Impl_.append(nl,nr);
	};
}



exports.default = Nel_Impl_;