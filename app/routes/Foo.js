// Class: app.routes.Foo

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var thx_AnonymousMap = require("./../../thx/AnonymousMap");

// Definition

var Foo = function() {
	var map = new thx_AnonymousMap.default({ name : "Franco"});
	console.log(map.get("name"));
}

Foo.__name__ = true;
Foo.prototype = {
	
};





exports.default = Foo;