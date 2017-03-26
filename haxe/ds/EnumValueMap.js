// Class: haxe.ds.EnumValueMap

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
var haxe_ds_BalancedTree = require("./../../haxe/ds/BalancedTree");
var Reflect = require("./../../Reflect");

// Definition

var EnumValueMap = function() {
	haxe_ds_BalancedTree.default.call(this);
}

EnumValueMap.__name__ = true;
EnumValueMap.__super__ = haxe_ds_BalancedTree;
EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.default.prototype, {
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) {
			return d;
		}
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) {
			return 0;
		}
		return this.compareArgs(p1,p2);
	},
	compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) {
			return ld;
		}
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) {
				return d;
			}
		}
		return 0;
	},
	compareArg: function(v1,v2) {
		if(Reflect.default.isEnumValue(v1) && Reflect.default.isEnumValue(v2)) {
			return this.compare(v1,v2);
		} else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) {
			return this.compareArgs(v1,v2);
		} else {
			return Reflect.default.compare(v1,v2);
		}
	}
});





exports.default = EnumValueMap;