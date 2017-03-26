// Class: thx.Error

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var $extend = require("./../extend_stub").default;
var haxe_CallStack = require("./../haxe/CallStack");
var js_Boot = require("./../js/Boot");
var Std = require("./../Std");

// Definition

var Error = function(message,stack,pos) {
	Error.call(this,message);
	this.message = message;
	if(null == stack) {
		try {
			stack = haxe_CallStack.default.exceptionStack();
		} catch( e ) {
			stack = [];
		}
		if(stack.length == 0) {
			try {
				stack = haxe_CallStack.default.callStack();
			} catch( e1 ) {
				stack = [];
			}
		}
	}
	this.stackItems = stack;
	this.pos = pos;
}

Error.__name__ = true;
Error.__super__ = Error;
Error.prototype = $extend(Error.prototype, {
	toString: function() {
		return this.message + "\nfrom: " + this.getPosition() + "\n\n" + this.stackToString();
	},
	getPosition: function() {
		return this.pos.className + "." + this.pos.methodName + "() at " + this.pos.lineNumber;
	},
	stackToString: function() {
		return haxe_CallStack.default.toString(this.stackItems);
	}
});

Error.fromDynamic = function(err,pos) {
	if(js_Boot.default.__instanceof(err,Error)) {
		return err;
	}
	return new thx_error_ErrorWrapper.default("" + Std.default.string(err),err,null,pos);
}



exports.default = Error;