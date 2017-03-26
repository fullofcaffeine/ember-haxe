// Class: thx._ReadonlyArray.ReadonlyArray_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var thx_Functions = require("./../../thx/Functions");
var thx_Error = require("./../../thx/Error");
var HxOverrides = require("./../../HxOverrides");

// Definition

var ReadonlyArray_Impl_ = function(){}

ReadonlyArray_Impl_.__name__ = true;
ReadonlyArray_Impl_.prototype = {
	
};

ReadonlyArray_Impl_.empty = function() {
	return [];
}
ReadonlyArray_Impl_.flatten = function(array) {
	return Array.prototype.concat.apply([],array);
}
ReadonlyArray_Impl_.indexOf = function(this1,el,eq) {
	if(null == eq) {
		eq = thx_Functions.default.equality;
	}
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(eq(el,this1[i])) {
			return i;
		}
	}
	return -1;
}
ReadonlyArray_Impl_.lastIndexOf = function(this1,el,eq) {
	if(null == eq) {
		eq = thx_Functions.default.equality;
	}
	var len = this1.length;
	var _g1 = 0;
	var _g = len;
	while(_g1 < _g) {
		var i = _g1++;
		if(eq(el,this1[len - i - 1])) {
			return i;
		}
	}
	return -1;
}
ReadonlyArray_Impl_.get_length = function(this1) {
	return this1.length;
}
ReadonlyArray_Impl_.get = function(this1,i) {
	return this1[i];
}
ReadonlyArray_Impl_.head = function(this1) {
	return this1[0];
}
ReadonlyArray_Impl_.tail = function(this1) {
	return this1.slice(1);
}
ReadonlyArray_Impl_.reduce = function(this1,arr,f,initial) {
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		initial = f(initial,v);
	}
	return initial;
}
ReadonlyArray_Impl_.reducei = function(array,f,initial) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		initial = f(initial,array[i],i);
	}
	return initial;
}
ReadonlyArray_Impl_.reverse = function(this1) {
	var arr = this1.slice();
	arr.reverse();
	return arr;
}
ReadonlyArray_Impl_.toArray = function(this1) {
	return this1.slice();
}
ReadonlyArray_Impl_.unsafe = function(this1) {
	return this1;
}
ReadonlyArray_Impl_.concat = function(this1,that) {
	return this1.concat(that);
}
ReadonlyArray_Impl_.insertAt = function(this1,pos,el) {
	return this1.slice(0,pos).concat([el]).concat(this1.slice(pos));
}
ReadonlyArray_Impl_.insertAfter = function(this1,ref,el,eq) {
	var pos = ReadonlyArray_Impl_.indexOf(this1,ref,eq);
	if(pos < 0) {
		pos = this1.length - 1;
	}
	var pos1 = pos + 1;
	return this1.slice(0,pos1).concat([el]).concat(this1.slice(pos1));
}
ReadonlyArray_Impl_.insertBefore = function(this1,ref,el,eq) {
	var pos = ReadonlyArray_Impl_.indexOf(this1,ref,eq);
	return this1.slice(0,pos).concat([el]).concat(this1.slice(pos));
}
ReadonlyArray_Impl_.replace = function(this1,ref,el,eq) {
	var pos = ReadonlyArray_Impl_.indexOf(this1,ref,eq);
	if(pos < 0) {
		throw new thx_Error.default("unable to find reference element",null,{ fileName : "ReadonlyArray.hx", lineNumber : 94, className : "thx._ReadonlyArray.ReadonlyArray_Impl_", methodName : "replace"});
	}
	return this1.slice(0,pos).concat([el]).concat(this1.slice(pos + 1));
}
ReadonlyArray_Impl_.replaceAt = function(this1,pos,el) {
	return this1.slice(0,pos).concat([el]).concat(this1.slice(pos + 1));
}
ReadonlyArray_Impl_.remove = function(this1,el,eq) {
	var pos = ReadonlyArray_Impl_.indexOf(this1,el,eq);
	return this1.slice(0,pos).concat(this1.slice(pos + 1));
}
ReadonlyArray_Impl_.removeAt = function(this1,pos) {
	return this1.slice(0,pos).concat(this1.slice(pos + 1));
}
ReadonlyArray_Impl_.prepend = function(this1,el) {
	return [el].concat(this1);
}
ReadonlyArray_Impl_.append = function(this1,el) {
	return this1.concat([el]);
}
ReadonlyArray_Impl_.unshift = function(this1,el) {
	return [el].concat(this1);
}
ReadonlyArray_Impl_.shift = function(this1) {
	if(this1.length == 0) {
		var this2 = { _0 : null, _1 : this1};
		return this2;
	}
	var value = this1[0];
	var array = this1.slice(0,0).concat(this1.slice(1));
	var this3 = { _0 : value, _1 : array};
	return this3;
}
ReadonlyArray_Impl_.push = function(this1,el) {
	return this1.concat([el]);
}
ReadonlyArray_Impl_.pop = function(this1) {
	if(this1.length == 0) {
		var this2 = { _0 : null, _1 : this1};
		return this2;
	}
	var value = this1[this1.length - 1];
	var pos = this1.length - 1;
	var array = this1.slice(0,pos).concat(this1.slice(pos + 1));
	var this3 = { _0 : value, _1 : array};
	return this3;
}
ReadonlyArray_Impl_.iterator = function(this1) {
	return HxOverrides.default.iter(this1);
}



exports.default = ReadonlyArray_Impl_;