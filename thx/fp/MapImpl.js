// Enum: thx.fp.MapImpl

Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;

// Definition

var MapImpl = { __ename__: ["thx","fp","MapImpl"], __constructs__: ["Tip","Bin"] }

MapImpl.Bin = function(size,key,value,lhs,rhs) { var $x = ["Bin",1,size,key,value,lhs,rhs]; $x.__enum__ = MapImpl; $x.toString = $estr; return $x; }
MapImpl.Tip = ["Tip",0];
MapImpl.Tip.toString = $estr;
MapImpl.Tip.__enum__ = MapImpl;


exports.default = MapImpl;