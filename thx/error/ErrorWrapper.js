// Class: thx.error.ErrorWrapper

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
var thx_Error = require("./../../thx/Error");

// Definition

var ErrorWrapper = function(message,innerError,stack,pos) {
	thx_Error.default.call(this,message,stack,pos);
	this.innerError = innerError;
}

ErrorWrapper.__name__ = true;
ErrorWrapper.__super__ = thx_Error;
ErrorWrapper.prototype = $extend(thx_Error.default.prototype, {
	
});





exports.default = ErrorWrapper;