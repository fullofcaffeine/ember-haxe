// Enum: haxe.StackItem

Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../estr_stub").default;

// Definition

var StackItem = { __ename__: ["haxe","StackItem"], __constructs__: ["CFunction","Module","FilePos","Method","LocalFunction"] }

StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = StackItem; $x.toString = $estr; return $x; }
StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = StackItem; $x.toString = $estr; return $x; }
StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = StackItem; $x.toString = $estr; return $x; }
StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = StackItem; $x.toString = $estr; return $x; }
StackItem.CFunction = ["CFunction",0];
StackItem.CFunction.toString = $estr;
StackItem.CFunction.__enum__ = StackItem;


exports.default = StackItem;