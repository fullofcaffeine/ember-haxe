// Class: thx._Functions.Reader_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Reader_Impl_ = function(){}

Reader_Impl_.__name__ = true;
Reader_Impl_.prototype = {
	
};

Reader_Impl_.flatMap = function(this1,f) {
	return function(a) {
		var tmp = this1(a);
		return (f(tmp))(a);
	};
}



exports.default = Reader_Impl_;