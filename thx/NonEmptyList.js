// Enum: thx.NonEmptyList

Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../estr_stub").default;

// Definition

var NonEmptyList = { __ename__: ["thx","NonEmptyList"], __constructs__: ["Single","ConsNel"] }

NonEmptyList.ConsNel = function(x,xs) { var $x = ["ConsNel",1,x,xs]; $x.__enum__ = NonEmptyList; $x.toString = $estr; return $x; }
NonEmptyList.Single = function(x) { var $x = ["Single",0,x]; $x.__enum__ = NonEmptyList; $x.toString = $estr; return $x; }

exports.default = NonEmptyList;