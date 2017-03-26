// Enum: haxe.ds.Option

Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;

// Definition

var Option = { __ename__: ["haxe","ds","Option"], __constructs__: ["Some","None"] }

Option.None = ["None",1];
Option.None.toString = $estr;
Option.None.__enum__ = Option;

Option.Some = function(v) { var $x = ["Some",0,v]; $x.__enum__ = Option; $x.toString = $estr; return $x; }

exports.default = Option;