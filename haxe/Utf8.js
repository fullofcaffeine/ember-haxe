// Class: haxe.Utf8

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports



// Definition

var Utf8 = function(){}

Utf8.__name__ = true;
Utf8.prototype = {
	
};

Utf8.compare = function(a,b) {
	if(a > b) {
		return 1;
	} else if(a == b) {
		return 0;
	} else {
		return -1;
	}
}



exports.default = Utf8;