// Class: js._Boot.HaxeError

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;

// Definition

var HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,HaxeError);
	}
}

HaxeError.__name__ = true;
HaxeError.__super__ = Error;
HaxeError.prototype = $extend(Error.prototype, {
	
});

HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new HaxeError(val);
	}
}



exports.default = HaxeError;