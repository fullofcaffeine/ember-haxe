// Class: EReg

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./import_stub").default;
var js__$Boot_HaxeError = require("./js/_Boot/HaxeError");
var HxOverrides = require("./HxOverrides");
var Std = require("./Std");

// Definition

var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
}

EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	},
	matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw new js__$Boot_HaxeError.default("EReg::matched");
		}
	},
	matchedPos: function() {
		if(this.r.m == null) {
			throw new js__$Boot_HaxeError.default("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	},
	matchSub: function(s,pos,len) {
		if(len == null) {
			len = -1;
		}
		if(this.r.global) {
			this.r.lastIndex = pos;
			var tmp = this.r;
			var tmp1 = len < 0 ? s : HxOverrides.default.substr(s,0,pos + len);
			this.r.m = tmp.exec(tmp1);
			var b = this.r.m != null;
			if(b) {
				this.r.s = s;
			}
			return b;
		} else {
			var b1 = this.match(len < 0 ? HxOverrides.default.substr(s,pos,null) : HxOverrides.default.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b1;
		}
	},
	split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	},
	map: function(s,f) {
		var offset = 0;
		var buf_b = "";
		while(true) {
			if(offset >= s.length) {
				break;
			} else if(!this.matchSub(s,offset)) {
				buf_b += Std.default.string(HxOverrides.default.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf_b += Std.default.string(HxOverrides.default.substr(s,offset,p.pos - offset));
			buf_b += Std.default.string(f(this));
			if(p.len == 0) {
				buf_b += Std.default.string(HxOverrides.default.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else {
				offset = p.pos + p.len;
			}
			if(!this.r.global) {
				break;
			}
		}
		if(!this.r.global && offset > 0 && offset < s.length) {
			buf_b += Std.default.string(HxOverrides.default.substr(s,offset,null));
		}
		return buf_b;
	}
};





exports.default = EReg;