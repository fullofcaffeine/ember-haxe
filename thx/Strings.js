// Class: thx.Strings

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var HxOverrides = require("./../HxOverrides");
var haxe_Utf8 = require("./../haxe/Utf8");
var StringTools = require("./../StringTools");
var thx__$Ord_Ord_$Impl_$ = require("./../thx/_Ord/Ord_Impl_");
var thx_Arrays = require("./../thx/Arrays");
var thx_Iterables = require("./../thx/Iterables");
var haxe__$Int32_Int32_$Impl_$ = require("./../haxe/_Int32/Int32_Impl_");
var thx_Ints = require("./../thx/Ints");
var haxe_crypto_Base64 = require("./../haxe/crypto/Base64");
var EReg = require("./../EReg");

// Definition

var Strings = function(){}

Strings.__name__ = true;
Strings.prototype = {
	
};

Strings.after = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) {
		return "";
	} else {
		return value.substring(pos + searchFor.length);
	}
}
Strings.afterLast = function(value,searchFor) {
	var pos = value.lastIndexOf(searchFor);
	if(pos < 0) {
		return "";
	} else {
		return value.substring(pos + searchFor.length);
	}
}
Strings.capitalize = function(s) {
	return HxOverrides.default.substr(s,0,1).toUpperCase() + HxOverrides.default.substr(s,1,s.length - 1);
}
Strings.capitalizeWords = function(value,whiteSpaceOnly) {
	if(whiteSpaceOnly == null) {
		whiteSpaceOnly = false;
	}
	if(whiteSpaceOnly) {
		return Strings.UCWORDSWS.map(HxOverrides.default.substr(value,0,1).toUpperCase() + HxOverrides.default.substr(value,1,value.length - 1),Strings.upperMatch);
	} else {
		return Strings.UCWORDS.map(HxOverrides.default.substr(value,0,1).toUpperCase() + HxOverrides.default.substr(value,1,value.length - 1),Strings.upperMatch);
	}
}
Strings.canonicalizeNewlines = function(value) {
	return value.replace(Strings.CANONICALIZE_LINES.r,"\n");
}
Strings.caseInsensitiveCompare = function(a,b) {
	if(null == a && null == b) {
		return 0;
	}
	if(null == a) {
		return -1;
	} else if(null == b) {
		return 1;
	}
	return haxe_Utf8.default.compare(a.toLowerCase(),b.toLowerCase());
}
Strings.caseInsensitiveEndsWith = function(s,end) {
	return StringTools.default.endsWith(s.toLowerCase(),end.toLowerCase());
}
Strings.caseInsensitiveEndsWithAny = function(s,values) {
	return Strings.endsWithAny(s.toLowerCase(),values.map(function(v) {
		return v.toLowerCase();
	}));
}
Strings.caseInsensitiveStartsWith = function(s,start) {
	return StringTools.default.startsWith(s.toLowerCase(),start.toLowerCase());
}
Strings.caseInsensitiveStartsWithAny = function(s,values) {
	return Strings.startsWithAny(s.toLowerCase(),values.map(function(v) {
		return v.toLowerCase();
	}));
}
Strings.collapse = function(value) {
	var _this = Strings.WSG;
	return StringTools.default.trim(value).replace(_this.r," ");
}
Strings.compare = function(a,b) {
	return haxe_Utf8.default.compare(a,b);
}
Strings.order = thx__$Ord_Ord_$Impl_$.default.fromIntComparison(Strings.compare)
Strings.caseInsensitiveContains = function(s,test) {
	return s.toLowerCase().indexOf(test.toLowerCase()) >= 0;
}
Strings.contains = function(s,test) {
	return s.indexOf(test) >= 0;
}
Strings.count = function(s,test) {
	return s.split(test).length - 1;
}
Strings.caseInsensitiveContainsAny = function(s,tests) {
	var s1 = s;
	return thx_Arrays.default.any(tests,function(a1) {
		return Strings.caseInsensitiveContains(s1,a1);
	});
}
Strings.containsAny = function(s,tests) {
	var s1 = s;
	return thx_Arrays.default.any(tests,function(a1) {
		return Strings.contains(s1,a1);
	});
}
Strings.dasherize = function(s) {
	return StringTools.default.replace(s,"_","-");
}
Strings.diffAt = function(a,b) {
	var a1 = a.length;
	var b1 = b.length;
	var min = a1 < b1 ? a1 : b1;
	var _g1 = 0;
	var _g = min;
	while(_g1 < _g) {
		var i = _g1++;
		if(a.substring(i,i + 1) != b.substring(i,i + 1)) {
			return i;
		}
	}
	return min;
}
Strings.ellipsis = function(s,maxlen,symbol) {
	if(symbol == null) {
		symbol = "…";
	}
	if(maxlen == null) {
		maxlen = 20;
	}
	var sl = s.length;
	var symboll = symbol.length;
	if(sl > maxlen) {
		if(maxlen < symboll) {
			return HxOverrides.default.substr(symbol,symboll - maxlen,maxlen);
		} else {
			return HxOverrides.default.substr(s,0,maxlen - symboll) + symbol;
		}
	} else {
		return s;
	}
}
Strings.ellipsisMiddle = function(s,maxlen,symbol) {
	if(symbol == null) {
		symbol = "…";
	}
	if(maxlen == null) {
		maxlen = 20;
	}
	var sl = s.length;
	var symboll = symbol.length;
	if(sl > maxlen) {
		if(maxlen <= symboll) {
			return Strings.ellipsis(s,maxlen,symbol);
		}
		var hll = Math.ceil((maxlen - symboll) / 2);
		var hlr = Math.floor((maxlen - symboll) / 2);
		return HxOverrides.default.substr(s,0,hll) + symbol + HxOverrides.default.substr(s,sl - hlr,hlr);
	} else {
		return s;
	}
}
Strings.endsWithAny = function(s,values) {
	return thx_Iterables.default.any(values,function(end) {
		return StringTools.default.endsWith(s,end);
	});
}
Strings.filter = function(s,predicate) {
	return s.split("").filter(predicate).join("");
}
Strings.filterCharcode = function(s,predicate) {
	var codes = Strings.map(s,function(s1) {
		return HxOverrides.default.cca(s1,0);
	}).filter(predicate);
	return codes.map(function(i) {
		return String.fromCharCode(i);
	}).join("");
}
Strings.from = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) {
		return "";
	} else {
		return value.substring(pos);
	}
}
Strings.HASCODE_MAX = 2147483647
Strings.HASCODE_MUL = 31
Strings.hashCode = function(value) {
	var code = 0;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = HxOverrides.default.cca(value,i);
		code = (haxe__$Int32_Int32_$Impl_$.default._mul(Strings.HASCODE_MUL,code) + c | 0) % Strings.HASCODE_MAX;
	}
	return code;
}
Strings.hasContent = function(value) {
	if(value != null) {
		return value.length > 0;
	} else {
		return false;
	}
}
Strings.humanize = function(s) {
	return StringTools.default.replace(Strings.underscore(s),"_"," ");
}
Strings.isAlpha = function(s) {
	if(s.length > 0) {
		return !Strings.IS_ALPHA.match(s);
	} else {
		return false;
	}
}
Strings.isAlphaNum = function(value) {
	return Strings.ALPHANUM.match(value);
}
Strings.isBreakingWhitespace = function(value) {
	return !Strings.IS_BREAKINGWHITESPACE.match(value);
}
Strings.isLowerCase = function(value) {
	return value.toLowerCase() == value;
}
Strings.isUpperCase = function(value) {
	return value.toUpperCase() == value;
}
Strings.ifEmpty = function(value,alt) {
	if(null != value && "" != value) {
		return value;
	} else {
		return alt;
	}
}
Strings.isDigitsOnly = function(value) {
	return Strings.DIGITS.match(value);
}
Strings.isEmpty = function(value) {
	if(value != null) {
		return value == "";
	} else {
		return true;
	}
}
Strings.lowerCaseFirst = function(value) {
	return value.substring(0,1).toLowerCase() + value.substring(1);
}
Strings.random = function(value,length) {
	if(length == null) {
		length = 1;
	}
	return HxOverrides.default.substr(value,Math.floor((value.length - length + 1) * Math.random()),length);
}
Strings.randomSequence = function(seed,length) {
	return thx_Ints.default.range(0,length).map(function(_) {
		return Strings.random(seed);
	}).join("");
}
Strings.randomSequence64 = function(length) {
	return Strings.randomSequence(haxe_crypto_Base64.default.CHARS,length);
}
Strings.iterator = function(s) {
	return HxOverrides.default.iter(s.split(""));
}
Strings.map = function(value,callback) {
	return value.split("").map(callback);
}
Strings.remove = function(value,toremove) {
	return StringTools.default.replace(value,toremove,"");
}
Strings.removeAfter = function(value,toremove) {
	if(StringTools.default.endsWith(value,toremove)) {
		return value.substring(0,value.length - toremove.length);
	} else {
		return value;
	}
}
Strings.removeAt = function(value,index,length) {
	return value.substring(0,index) + value.substring(index + length);
}
Strings.removeBefore = function(value,toremove) {
	if(StringTools.default.startsWith(value,toremove)) {
		return value.substring(toremove.length);
	} else {
		return value;
	}
}
Strings.removeOne = function(value,toremove) {
	var pos = value.indexOf(toremove);
	if(pos < 0) {
		return value;
	}
	return value.substring(0,pos) + value.substring(pos + toremove.length);
}
Strings.repeat = function(s,times) {
	var _g = [];
	var _g2 = 0;
	var _g1 = times;
	while(_g2 < _g1) {
		var i = _g2++;
		_g.push(s);
	}
	return _g.join("");
}
Strings.reverse = function(s) {
	var arr = s.split("");
	arr.reverse();
	return arr.join("");
}
Strings.quote = function(s) {
	if(s.indexOf("\"") < 0) {
		return "\"" + s + "\"";
	} else if(s.indexOf("'") < 0) {
		return "'" + s + "'";
	} else {
		return "\"" + StringTools.default.replace(s,"\"","\\\"") + "\"";
	}
}
Strings.splitOnce = function(s,separator) {
	var pos = s.indexOf(separator);
	if(pos < 0) {
		return [s];
	}
	return [s.substring(0,pos),s.substring(pos + separator.length)];
}
Strings.startsWithAny = function(s,values) {
	return thx_Iterables.default.any(values,function(start) {
		return StringTools.default.startsWith(s,start);
	});
}
Strings.stripTags = function(s) {
	return s.replace(Strings.STRIPTAGS.r,"");
}
Strings.surround = function(s,left,right) {
	return "" + left + s + (null == right ? left : right);
}
Strings.toArray = function(s) {
	return s.split("");
}
Strings.toCharcodes = function(s) {
	return Strings.map(s,function(s1) {
		return HxOverrides.default.cca(s1,0);
	});
}
Strings.toChunks = function(s,len) {
	var chunks = [];
	while(s.length > 0) {
		chunks.push(HxOverrides.default.substr(s,0,len));
		s = HxOverrides.default.substr(s,len,s.length - len);
	}
	return chunks;
}
Strings.toLines = function(s) {
	return Strings.SPLIT_LINES.split(s);
}
Strings.trimChars = function(value,charlist) {
	return Strings.trimCharsRight(Strings.trimCharsLeft(value,charlist),charlist);
}
Strings.trimCharsLeft = function(value,charlist) {
	var pos = 0;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(charlist.indexOf(value.charAt(i)) >= 0) {
			++pos;
		} else {
			break;
		}
	}
	return value.substring(pos);
}
Strings.trimCharsRight = function(value,charlist) {
	var len = value.length;
	var pos = len;
	var i;
	var _g1 = 0;
	var _g = len;
	while(_g1 < _g) {
		var j = _g1++;
		i = len - j - 1;
		if(charlist.indexOf(value.charAt(i)) >= 0) {
			pos = i;
		} else {
			break;
		}
	}
	return value.substring(0,pos);
}
Strings.underscore = function(s) {
	var _this_r = new RegExp("::","g".split("u").join(""));
	s = s.replace(_this_r,"/");
	var _this_r1 = new RegExp("([A-Z]+)([A-Z][a-z])","g".split("u").join(""));
	s = s.replace(_this_r1,"$1_$2");
	var _this_r2 = new RegExp("([a-z\\d])([A-Z])","g".split("u").join(""));
	s = s.replace(_this_r2,"$1_$2");
	var _this_r3 = new RegExp("-","g".split("u").join(""));
	s = s.replace(_this_r3,"_");
	return s.toLowerCase();
}
Strings.upperCaseFirst = function(value) {
	return value.substring(0,1).toUpperCase() + value.substring(1);
}
Strings.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) {
		return value;
	} else {
		return value.substring(0,pos);
	}
}
Strings.wrapColumns = function(s,columns,indent,newline) {
	if(newline == null) {
		newline = "\n";
	}
	if(indent == null) {
		indent = "";
	}
	if(columns == null) {
		columns = 78;
	}
	return Strings.SPLIT_LINES.split(s).map(function(part) {
		return Strings.wrapLine(StringTools.default.trim(part.replace(Strings.WSG.r," ")),columns,indent,newline);
	}).join(newline);
}
Strings.upperMatch = function(re) {
	return re.matched(0).toUpperCase();
}
Strings.wrapLine = function(s,columns,indent,newline) {
	var parts = [];
	var pos = 0;
	var len = s.length;
	var ilen = indent.length;
	columns -= ilen;
	while(true) {
		if(pos + columns >= len - ilen) {
			parts.push(s.substring(pos));
			break;
		}
		var i = 0;
		while(!StringTools.default.isSpace(s,pos + columns - i) && i < columns) ++i;
		if(i == columns) {
			i = 0;
			while(!StringTools.default.isSpace(s,pos + columns + i) && pos + columns + i < len) ++i;
			parts.push(s.substring(pos,pos + columns + i));
			pos += columns + i + 1;
		} else {
			parts.push(s.substring(pos,pos + columns - i));
			pos += columns - i + 1;
		}
	}
	return indent + parts.join(newline + indent);
}
Strings.lpad = function(s,$char,length) {
	var diff = length - s.length;
	if(diff > 0) {
		return Strings.repeat($char,diff) + s;
	} else {
		return s;
	}
}
Strings.rpad = function(s,$char,length) {
	var diff = length - s.length;
	if(diff > 0) {
		return s + Strings.repeat($char,diff);
	} else {
		return s;
	}
}
Strings.monoid = { zero : "", append : function(a,b) {
	return a + b;
}}
Strings.UCWORDS = new EReg.default("[^a-zA-Z]([a-z])","g")
Strings.IS_BREAKINGWHITESPACE = new EReg.default("[^\t\n\r ]","")
Strings.IS_ALPHA = new EReg.default("[^a-zA-Z]","")
Strings.UCWORDSWS = new EReg.default("[ \t\r\n][a-z]","g")
Strings.ALPHANUM = new EReg.default("^[a-z0-9]+$","i")
Strings.DIGITS = new EReg.default("^[0-9]+$","")
Strings.STRIPTAGS = new EReg.default("</?[a-z]+[^>]*>","gi")
Strings.WSG = new EReg.default("[ \t\r\n]+","g")
Strings.SPLIT_LINES = new EReg.default("\r\n|\n\r|\n|\r","g")
Strings.CANONICALIZE_LINES = new EReg.default("\r\n|\n\r|\r","g")



exports.default = Strings;