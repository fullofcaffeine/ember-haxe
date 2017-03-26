// Class: StringTools

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./import_stub").default;
var HxOverrides = require("./HxOverrides");

// Definition

var StringTools = function(){}

StringTools.__name__ = true;
StringTools.prototype = {
	
};

StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return HxOverrides.default.substr(s,0,start.length) == start;
	} else {
		return false;
	}
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return HxOverrides.default.substr(s,slen - elen,elen) == end;
	} else {
		return false;
	}
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.default.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.default.substr(s,r,l - r);
	} else {
		return s;
	}
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.default.substr(s,0,l - r);
	} else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	while(s.length < l) s = c + s;
	return s;
}
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	while(s.length < l) s += c;
	return s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}



exports.default = StringTools;