// Class: thx._Monoid.Monoid_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Monoid_Impl_ = function(){}

Monoid_Impl_.__name__ = true;
Monoid_Impl_.prototype = {
	
};

Monoid_Impl_.get_semigroup = function(this1) {
	return this1.append;
}
Monoid_Impl_.get_zero = function(this1) {
	return this1.zero;
}
Monoid_Impl_.append = function(this1,a0,a1) {
	return this1.append(a0,a1);
}



exports.default = Monoid_Impl_;