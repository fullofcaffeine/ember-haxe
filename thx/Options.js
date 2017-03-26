// Class: thx.Options

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var haxe_ds_Option = require("./../haxe/ds/Option");
var thx__$Monoid_Monoid_$Impl_$ = require("./../thx/_Monoid/Monoid_Impl_");
var thx_Error = require("./../thx/Error");
var thx__$Validation_Validation_$Impl_$ = require("./../thx/_Validation/Validation_Impl_");
var thx_Either = require("./../thx/Either");
var thx__$Nel_Nel_$Impl_$ = require("./../thx/_Nel/Nel_Impl_");
var thx_Functions2 = require("./../thx/Functions2");
var thx__$Tuple_Tuple2_$Impl_$ = require("./../thx/_Tuple/Tuple2_Impl_");
var thx__$Tuple_Tuple3_$Impl_$ = require("./../thx/_Tuple/Tuple3_Impl_");
var thx__$Tuple_Tuple4_$Impl_$ = require("./../thx/_Tuple/Tuple4_Impl_");
var thx__$Tuple_Tuple5_$Impl_$ = require("./../thx/_Tuple/Tuple5_Impl_");
var thx__$Tuple_Tuple6_$Impl_$ = require("./../thx/_Tuple/Tuple6_Impl_");

// Definition

var Options = function(){}

Options.__name__ = true;
Options.prototype = {
	
};

Options.ofValue = function(value) {
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Options.maybe = function(value) {
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Options.equals = function(a,b,eq) {
	switch(a[1]) {
	case 0:
		if(b[1] == 0) {
			var a1 = a[2];
			var b1 = b[2];
			if(null == eq) {
				eq = function(a2,b2) {
					return a2 == b2;
				};
			}
			return eq(a1,b1);
		} else {
			return false;
		}
		break;
	case 1:
		if(b[1] == 1) {
			return true;
		} else {
			return false;
		}
		break;
	}
}
Options.equalsValue = function(a,b,eq) {
	return Options.equals(a,null == b ? haxe_ds_Option.default.None : haxe_ds_Option.default.Some(b),eq);
}
Options.map = function(option,callback) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return haxe_ds_Option.default.Some(callback(v));
	case 1:
		return haxe_ds_Option.default.None;
	}
}
Options.ap = function(option,fopt) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return Options.map(fopt,function(f) {
			return f(v);
		});
	case 1:
		return haxe_ds_Option.default.None;
	}
}
Options.flatMap = function(option,callback) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return callback(v);
	case 1:
		return haxe_ds_Option.default.None;
	}
}
Options.join = function(option) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return v;
	case 1:
		return haxe_ds_Option.default.None;
	}
}
Options.cata = function(option,ifNone,f) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return f(v);
	case 1:
		return ifNone;
	}
}
Options.cataf = function(option,ifNone,f) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return f(v);
	case 1:
		return ifNone();
	}
}
Options.foldLeft = function(option,b,f) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return f(b,v);
	case 1:
		return b;
	}
}
Options.foldLeftf = function(option,b,f) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return f(b(),v);
	case 1:
		return b();
	}
}
Options.foldMap = function(option,f,m) {
	var _e = m;
	var tmp = function(a0,a1) {
		return thx__$Monoid_Monoid_$Impl_$.default.append(_e,a0,a1);
	};
	return Options.foldLeft(Options.map(option,f),thx__$Monoid_Monoid_$Impl_$.default.get_zero(m),tmp);
}
Options.filter = function(option,f) {
	if(option[1] == 0) {
		var v = option[2];
		if(f(v)) {
			return option;
		} else {
			return haxe_ds_Option.default.None;
		}
	} else {
		return haxe_ds_Option.default.None;
	}
}
Options.toArray = function(option) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return [v];
	case 1:
		return [];
	}
}
Options.toBool = function(option) {
	switch(option[1]) {
	case 0:
		return true;
	case 1:
		return false;
	}
}
Options.isNone = function(option) {
	return !Options.toBool(option);
}
Options.toOption = function(value) {
	if(null == value) {
		return haxe_ds_Option.default.None;
	} else {
		return haxe_ds_Option.default.Some(value);
	}
}
Options.get = function(option) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return v;
	case 1:
		return null;
	}
}
Options.getOrElse = function(option,alt) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return v;
	case 1:
		return alt;
	}
}
Options.getOrThrow = function(option,err,posInfo) {
	if(null == err) {
		err = new thx_Error.default("Could not extract value from option",null,posInfo);
	}
	switch(option[1]) {
	case 0:
		var v = option[2];
		return v;
	case 1:
		throw err;
		break;
	}
}
Options.getOrFail = function(option,msg,posInfo) {
	return Options.getOrThrow(option,new thx_Error.default(msg,null,posInfo),{ fileName : "Options.hx", lineNumber : 199, className : "thx.Options", methodName : "getOrFail"});
}
Options.orElse = function(option,alt) {
	switch(option[1]) {
	case 0:
		return option;
	case 1:
		return alt;
	}
}
Options.all = function(option,f) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return f(v);
	case 1:
		return true;
	}
}
Options.any = function(option,f) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return f(v);
	case 1:
		return false;
	}
}
Options.traverseValidation = function(option,f) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return thx__$Validation_Validation_$Impl_$.default.map(f(v),function(v1) {
			return haxe_ds_Option.default.Some(v1);
		});
	case 1:
		return thx_Either.default.Right(haxe_ds_Option.default.None);
	}
}
Options.toSuccess = function(option,error) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return thx_Either.default.Right(v);
	case 1:
		return thx_Either.default.Left(error);
	}
}
Options.toSuccessNel = function(option,error) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		return thx_Either.default.Right(v);
	case 1:
		return thx_Either.default.Left(thx__$Nel_Nel_$Impl_$.default.pure(error));
	}
}
Options.toFailure = function(error,value) {
	switch(error[1]) {
	case 0:
		var e = error[2];
		return thx_Either.default.Left(e);
	case 1:
		return thx_Either.default.Right(value);
	}
}
Options.toFailureNel = function(error,value) {
	switch(error[1]) {
	case 0:
		var e = error[2];
		return thx_Either.default.Left(thx__$Nel_Nel_$Impl_$.default.pure(e));
	case 1:
		return thx_Either.default.Right(value);
	}
}
Options.toRight = function(opt,left) {
	switch(opt[1]) {
	case 0:
		var r = opt[2];
		return thx_Either.default.Right(r);
	case 1:
		return thx_Either.default.Left(left);
	}
}
Options.toLeft = function(opt,right) {
	switch(opt[1]) {
	case 0:
		var l = opt[2];
		return thx_Either.default.Left(l);
	case 1:
		return thx_Either.default.Right(right);
	}
}
Options.each = function(o,f) {
	switch(o[1]) {
	case 0:
		var v = o[2];
		f(v);
		return o;
	case 1:
		return o;
	}
}
Options.ap2 = function(f,v1,v2) {
	return Options.ap(v2,Options.map(v1,thx_Functions2.default.curry(f)));
}
Options.ap3 = function(f,v1,v2,v3) {
	var f1 = f;
	return Options.ap(v3,Options.ap(v2,Options.map(v1,thx_Functions2.default.curry(function(a,b) {
		return function(c) {
			return f1(a,b,c);
		};
	}))));
}
Options.ap4 = function(f,v1,v2,v3,v4) {
	var f1 = f;
	var f2 = function(a,b,c) {
		return function(d) {
			return f1(a,b,c,d);
		};
	};
	return Options.ap(v4,Options.ap(v3,Options.ap(v2,Options.map(v1,thx_Functions2.default.curry(function(a1,b1) {
		return function(c1) {
			return f2(a1,b1,c1);
		};
	})))));
}
Options.ap5 = function(f,v1,v2,v3,v4,v5) {
	var f1 = f;
	var f2 = function(a,b,c,d) {
		return function(e) {
			return f1(a,b,c,d,e);
		};
	};
	var f3 = function(a1,b1,c1) {
		return function(d1) {
			return f2(a1,b1,c1,d1);
		};
	};
	return Options.ap(v5,Options.ap(v4,Options.ap(v3,Options.ap(v2,Options.map(v1,thx_Functions2.default.curry(function(a2,b2) {
		return function(c2) {
			return f3(a2,b2,c2);
		};
	}))))));
}
Options.ap6 = function(f,v1,v2,v3,v4,v5,v6) {
	var f1 = f;
	var f2 = function(a,b,c,d,e) {
		return function(f0) {
			return f1(a,b,c,d,e,f0);
		};
	};
	var f3 = function(a1,b1,c1,d1) {
		return function(e1) {
			return f2(a1,b1,c1,d1,e1);
		};
	};
	var f4 = function(a2,b2,c2) {
		return function(d2) {
			return f3(a2,b2,c2,d2);
		};
	};
	return Options.ap(v6,Options.ap(v5,Options.ap(v4,Options.ap(v3,Options.ap(v2,Options.map(v1,thx_Functions2.default.curry(function(a3,b3) {
		return function(c3) {
			return f4(a3,b3,c3);
		};
	})))))));
}
Options.ap7 = function(f,v1,v2,v3,v4,v5,v6,v7) {
	var f1 = f;
	var f2 = function(a,b,c,d,e,f0) {
		return function(g) {
			return f1(a,b,c,d,e,f0,g);
		};
	};
	var f3 = function(a1,b1,c1,d1,e1) {
		return function(f01) {
			return f2(a1,b1,c1,d1,e1,f01);
		};
	};
	var f4 = function(a2,b2,c2,d2) {
		return function(e2) {
			return f3(a2,b2,c2,d2,e2);
		};
	};
	var f5 = function(a3,b3,c3) {
		return function(d3) {
			return f4(a3,b3,c3,d3);
		};
	};
	return Options.ap(v7,Options.ap(v6,Options.ap(v5,Options.ap(v4,Options.ap(v3,Options.ap(v2,Options.map(v1,thx_Functions2.default.curry(function(a4,b4) {
		return function(c4) {
			return f5(a4,b4,c4);
		};
	}))))))));
}
Options.ap8 = function(f,v1,v2,v3,v4,v5,v6,v7,v8) {
	var f1 = f;
	var f2 = function(a,b,c,d,e,f0,g) {
		return function(h) {
			return f1(a,b,c,d,e,f0,g,h);
		};
	};
	var f3 = function(a1,b1,c1,d1,e1,f01) {
		return function(g1) {
			return f2(a1,b1,c1,d1,e1,f01,g1);
		};
	};
	var f4 = function(a2,b2,c2,d2,e2) {
		return function(f02) {
			return f3(a2,b2,c2,d2,e2,f02);
		};
	};
	var f5 = function(a3,b3,c3,d3) {
		return function(e3) {
			return f4(a3,b3,c3,d3,e3);
		};
	};
	var f6 = function(a4,b4,c4) {
		return function(d4) {
			return f5(a4,b4,c4,d4);
		};
	};
	return Options.ap(v8,Options.ap(v7,Options.ap(v6,Options.ap(v5,Options.ap(v4,Options.ap(v3,Options.ap(v2,Options.map(v1,thx_Functions2.default.curry(function(a5,b5) {
		return function(c5) {
			return f6(a5,b5,c5);
		};
	})))))))));
}
Options.combine = function(a,b) {
	return Options.ap(b,Options.map(a,thx_Functions2.default.curry(thx__$Tuple_Tuple2_$Impl_$.default.of)));
}
Options.combine2 = function(a,b) {
	return Options.ap(b,Options.map(a,thx_Functions2.default.curry(thx__$Tuple_Tuple2_$Impl_$.default.of)));
}
Options.combine3 = function(a,b,c) {
	var f = thx__$Tuple_Tuple3_$Impl_$.default.of;
	return Options.ap(c,Options.ap(b,Options.map(a,thx_Functions2.default.curry(function(a1,b1) {
		return function(c1) {
			return f(a1,b1,c1);
		};
	}))));
}
Options.combine4 = function(a,b,c,d) {
	var f = thx__$Tuple_Tuple4_$Impl_$.default.of;
	var f1 = function(a1,b1,c1) {
		return function(d1) {
			return f(a1,b1,c1,d1);
		};
	};
	return Options.ap(d,Options.ap(c,Options.ap(b,Options.map(a,thx_Functions2.default.curry(function(a2,b2) {
		return function(c2) {
			return f1(a2,b2,c2);
		};
	})))));
}
Options.combine5 = function(a,b,c,d,e) {
	var f = thx__$Tuple_Tuple5_$Impl_$.default.of;
	var f1 = function(a1,b1,c1,d1) {
		return function(e1) {
			return f(a1,b1,c1,d1,e1);
		};
	};
	var f2 = function(a2,b2,c2) {
		return function(d2) {
			return f1(a2,b2,c2,d2);
		};
	};
	return Options.ap(e,Options.ap(d,Options.ap(c,Options.ap(b,Options.map(a,thx_Functions2.default.curry(function(a3,b3) {
		return function(c3) {
			return f2(a3,b3,c3);
		};
	}))))));
}
Options.combine6 = function(a,b,c,d,e,f) {
	var f1 = thx__$Tuple_Tuple6_$Impl_$.default.of;
	var f2 = function(a1,b1,c1,d1,e1) {
		return function(f0) {
			return f1(a1,b1,c1,d1,e1,f0);
		};
	};
	var f3 = function(a2,b2,c2,d2) {
		return function(e2) {
			return f2(a2,b2,c2,d2,e2);
		};
	};
	var f4 = function(a3,b3,c3) {
		return function(d3) {
			return f3(a3,b3,c3,d3);
		};
	};
	return Options.ap(f,Options.ap(e,Options.ap(d,Options.ap(c,Options.ap(b,Options.map(a,thx_Functions2.default.curry(function(a4,b4) {
		return function(c4) {
			return f4(a4,b4,c4);
		};
	})))))));
}
Options.spread2 = function(v,f) {
	return Options.map(v,function(t) {
		return f(t._0,t._1);
	});
}
Options.spread = function(v,f) {
	var f1 = f;
	return Options.map(v,function(t) {
		return f1(t._0,t._1);
	});
}
Options.spread3 = function(v,f) {
	return Options.map(v,function(t) {
		return f(t._0,t._1,t._2);
	});
}
Options.spread4 = function(v,f) {
	return Options.map(v,function(t) {
		return f(t._0,t._1,t._2,t._3);
	});
}
Options.spread5 = function(v,f) {
	return Options.map(v,function(t) {
		return f(t._0,t._1,t._2,t._3,t._4);
	});
}
Options.spread6 = function(v,f) {
	return Options.map(v,function(t) {
		return f(t._0,t._1,t._2,t._3,t._4,t._5);
	});
}



exports.default = Options;