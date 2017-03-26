// Enum: thx.Either

Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../estr_stub").default;

// Definition

var Either = { __ename__: ["thx","Either"], __constructs__: ["Left","Right"] }

Either.Right = function(value) { var $x = ["Right",1,value]; $x.__enum__ = Either; $x.toString = $estr; return $x; }
Either.Left = function(value) { var $x = ["Left",0,value]; $x.__enum__ = Either; $x.toString = $estr; return $x; }

exports.default = Either;