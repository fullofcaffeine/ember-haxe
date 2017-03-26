// Class: thx._Validation.Validation_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var thx_Eithers = require("./../../thx/Eithers");
var thx__$Nel_Nel_$Impl_$ = require("./../../thx/_Nel/Nel_Impl_");
var thx_Either = require("./../../thx/Either");
var js__$Boot_HaxeError = require("./../../js/_Boot/HaxeError");
var thx__$Monoid_Monoid_$Impl_$ = require("./../../thx/_Monoid/Monoid_Impl_");
var thx__$Semigroup_Semigroup_$Impl_$ = require("./../../thx/_Semigroup/Semigroup_Impl_");
var thx__$Tuple_Tuple2_$Impl_$ = require("./../../thx/_Tuple/Tuple2_Impl_");
var thx_Functions2 = require("./../../thx/Functions2");

// Definition

var Validation_Impl_ = function(){}

Validation_Impl_.__name__ = true;
Validation_Impl_.prototype = {
	
};

Validation_Impl_.validation = function(e) {
	return e;
}
Validation_Impl_.vnel = function(e) {
	return e;
}
Validation_Impl_.liftVNel = function(e) {
	return thx_Eithers.default.leftMap(e,thx__$Nel_Nel_$Impl_$.default.pure);
}
Validation_Impl_.pure = function(a) {
	return thx_Either.default.Right(a);
}
Validation_Impl_.success = function(a) {
	return thx_Either.default.Right(a);
}
Validation_Impl_.failure = function(e) {
	return thx_Either.default.Left(e);
}
Validation_Impl_.nn = function(a,e) {
	if(a == null) {
		return thx_Either.default.Left(e);
	} else {
		return thx_Either.default.Right(a);
	}
}
Validation_Impl_.successNel = function(a) {
	return thx_Either.default.Right(a);
}
Validation_Impl_.failureNel = function(e) {
	return thx_Either.default.Left(thx__$Nel_Nel_$Impl_$.default.pure(e));
}
Validation_Impl_.nnNel = function(a,e) {
	if(a == null) {
		return thx_Either.default.Left(thx__$Nel_Nel_$Impl_$.default.pure(e));
	} else {
		return thx_Either.default.Right(a);
	}
}
Validation_Impl_.get_either = function(this1) {
	return this1;
}
Validation_Impl_.map = function(this1,f) {
	return Validation_Impl_.ap(this1,thx_Either.default.Right(f),function(e1,e2) {
		throw new js__$Boot_HaxeError.default("Unreachable");
	});
}
Validation_Impl_.foldLeft = function(this1,b,f) {
	switch(this1[1]) {
	case 0:
		return b;
	case 1:
		var a = this1[2];
		return f(b,a);
	}
}
Validation_Impl_.foldMap = function(this1,f,m) {
	var _e = m;
	var tmp = function(a0,a1) {
		return thx__$Monoid_Monoid_$Impl_$.default.append(_e,a0,a1);
	};
	return Validation_Impl_.foldLeft(thx_Eithers.default.map(this1,f),thx__$Monoid_Monoid_$Impl_$.default.get_zero(m),tmp);
}
Validation_Impl_.ap = function(this1,v,s) {
	switch(this1[1]) {
	case 0:
		var e0 = this1[2];
		var _g = v;
		switch(_g[1]) {
		case 0:
			var e1 = _g[2];
			return thx_Either.default.Left((thx__$Semigroup_Semigroup_$Impl_$.default.get_append(s))(e0,e1));
		case 1:
			var b = _g[2];
			return thx_Either.default.Left(e0);
		}
		break;
	case 1:
		var a = this1[2];
		var _g1 = v;
		switch(_g1[1]) {
		case 0:
			var e = _g1[2];
			return thx_Either.default.Left(e);
		case 1:
			var f = _g1[2];
			return thx_Either.default.Right(f(a));
		}
		break;
	}
}
Validation_Impl_.zip = function(this1,v,s) {
	return Validation_Impl_.ap(this1,thx_Eithers.default.map(v,function(b) {
		var _1 = b;
		return function(_0) {
			return thx__$Tuple_Tuple2_$Impl_$.default.of(_0,_1);
		};
	}),s);
}
Validation_Impl_.leftMap = function(this1,f) {
	return thx_Eithers.default.leftMap(this1,f);
}
Validation_Impl_.wrapNel = function(this1) {
	return thx_Eithers.default.leftMap(this1,thx__$Nel_Nel_$Impl_$.default.pure);
}
Validation_Impl_.ensure = function(this1,p,error) {
	if(this1[1] == 1) {
		var a = this1[2];
		if(p(a)) {
			return this1;
		} else {
			return thx_Either.default.Left(error);
		}
	} else {
		var left = this1;
		return left;
	}
}
Validation_Impl_.flatMapV = function(this1,f) {
	switch(this1[1]) {
	case 0:
		var a = this1[2];
		return thx_Either.default.Left(a);
	case 1:
		var b = this1[2];
		return f(b);
	}
}
Validation_Impl_.val2 = function(f,v1,v2,s) {
	return Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(f)),s);
}
Validation_Impl_.val3 = function(f,v1,v2,v3,s) {
	var f1 = f;
	return Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a,b) {
		return function(c) {
			return f1(a,b,c);
		};
	})),s),s);
}
Validation_Impl_.val4 = function(f,v1,v2,v3,v4,s) {
	var f1 = f;
	var f2 = function(a,b,c) {
		return function(d) {
			return f1(a,b,c,d);
		};
	};
	return Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a1,b1) {
		return function(c1) {
			return f2(a1,b1,c1);
		};
	})),s),s),s);
}
Validation_Impl_.val5 = function(f,v1,v2,v3,v4,v5,s) {
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
	return Validation_Impl_.ap(v5,Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a2,b2) {
		return function(c2) {
			return f3(a2,b2,c2);
		};
	})),s),s),s),s);
}
Validation_Impl_.val6 = function(f,v1,v2,v3,v4,v5,v6,s) {
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
	return Validation_Impl_.ap(v6,Validation_Impl_.ap(v5,Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a3,b3) {
		return function(c3) {
			return f4(a3,b3,c3);
		};
	})),s),s),s),s),s);
}
Validation_Impl_.val7 = function(f,v1,v2,v3,v4,v5,v6,v7,s) {
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
	return Validation_Impl_.ap(v7,Validation_Impl_.ap(v6,Validation_Impl_.ap(v5,Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a4,b4) {
		return function(c4) {
			return f5(a4,b4,c4);
		};
	})),s),s),s),s),s),s);
}
Validation_Impl_.val8 = function(f,v1,v2,v3,v4,v5,v6,v7,v8,s) {
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
	return Validation_Impl_.ap(v8,Validation_Impl_.ap(v7,Validation_Impl_.ap(v6,Validation_Impl_.ap(v5,Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a5,b5) {
		return function(c5) {
			return f6(a5,b5,c5);
		};
	})),s),s),s),s),s),s),s);
}
Validation_Impl_.val9 = function(f,v1,v2,v3,v4,v5,v6,v7,v8,v9,s) {
	var f1 = f;
	var f2 = function(a,b,c,d,e,f0,g,h) {
		return function(i) {
			return f1(a,b,c,d,e,f0,g,h,i);
		};
	};
	var f3 = function(a1,b1,c1,d1,e1,f01,g1) {
		return function(h1) {
			return f2(a1,b1,c1,d1,e1,f01,g1,h1);
		};
	};
	var f4 = function(a2,b2,c2,d2,e2,f02) {
		return function(g2) {
			return f3(a2,b2,c2,d2,e2,f02,g2);
		};
	};
	var f5 = function(a3,b3,c3,d3,e3) {
		return function(f03) {
			return f4(a3,b3,c3,d3,e3,f03);
		};
	};
	var f6 = function(a4,b4,c4,d4) {
		return function(e4) {
			return f5(a4,b4,c4,d4,e4);
		};
	};
	var f7 = function(a5,b5,c5) {
		return function(d5) {
			return f6(a5,b5,c5,d5);
		};
	};
	return Validation_Impl_.ap(v9,Validation_Impl_.ap(v8,Validation_Impl_.ap(v7,Validation_Impl_.ap(v6,Validation_Impl_.ap(v5,Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a6,b6) {
		return function(c6) {
			return f7(a6,b6,c6);
		};
	})),s),s),s),s),s),s),s),s);
}
Validation_Impl_.val10 = function(f,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,s) {
	var f1 = f;
	var f2 = function(a,b,c,d,e,f0,g,h,i) {
		return function(j) {
			return f1(a,b,c,d,e,f0,g,h,i,j);
		};
	};
	var f3 = function(a1,b1,c1,d1,e1,f01,g1,h1) {
		return function(i1) {
			return f2(a1,b1,c1,d1,e1,f01,g1,h1,i1);
		};
	};
	var f4 = function(a2,b2,c2,d2,e2,f02,g2) {
		return function(h2) {
			return f3(a2,b2,c2,d2,e2,f02,g2,h2);
		};
	};
	var f5 = function(a3,b3,c3,d3,e3,f03) {
		return function(g3) {
			return f4(a3,b3,c3,d3,e3,f03,g3);
		};
	};
	var f6 = function(a4,b4,c4,d4,e4) {
		return function(f04) {
			return f5(a4,b4,c4,d4,e4,f04);
		};
	};
	var f7 = function(a5,b5,c5,d5) {
		return function(e5) {
			return f6(a5,b5,c5,d5,e5);
		};
	};
	var f8 = function(a6,b6,c6) {
		return function(d6) {
			return f7(a6,b6,c6,d6);
		};
	};
	return Validation_Impl_.ap(v10,Validation_Impl_.ap(v9,Validation_Impl_.ap(v8,Validation_Impl_.ap(v7,Validation_Impl_.ap(v6,Validation_Impl_.ap(v5,Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a7,b7) {
		return function(c7) {
			return f8(a7,b7,c7);
		};
	})),s),s),s),s),s),s),s),s),s);
}
Validation_Impl_.val11 = function(f,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,s) {
	var f1 = f;
	var f2 = function(a,b,c,d,e,f0,g,h,i,j) {
		return function(k) {
			return f1(a,b,c,d,e,f0,g,h,i,j,k);
		};
	};
	var f3 = function(a1,b1,c1,d1,e1,f01,g1,h1,i1) {
		return function(j1) {
			return f2(a1,b1,c1,d1,e1,f01,g1,h1,i1,j1);
		};
	};
	var f4 = function(a2,b2,c2,d2,e2,f02,g2,h2) {
		return function(i2) {
			return f3(a2,b2,c2,d2,e2,f02,g2,h2,i2);
		};
	};
	var f5 = function(a3,b3,c3,d3,e3,f03,g3) {
		return function(h3) {
			return f4(a3,b3,c3,d3,e3,f03,g3,h3);
		};
	};
	var f6 = function(a4,b4,c4,d4,e4,f04) {
		return function(g4) {
			return f5(a4,b4,c4,d4,e4,f04,g4);
		};
	};
	var f7 = function(a5,b5,c5,d5,e5) {
		return function(f05) {
			return f6(a5,b5,c5,d5,e5,f05);
		};
	};
	var f8 = function(a6,b6,c6,d6) {
		return function(e6) {
			return f7(a6,b6,c6,d6,e6);
		};
	};
	var f9 = function(a7,b7,c7) {
		return function(d7) {
			return f8(a7,b7,c7,d7);
		};
	};
	return Validation_Impl_.ap(v11,Validation_Impl_.ap(v10,Validation_Impl_.ap(v9,Validation_Impl_.ap(v8,Validation_Impl_.ap(v7,Validation_Impl_.ap(v6,Validation_Impl_.ap(v5,Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a8,b8) {
		return function(c8) {
			return f9(a8,b8,c8);
		};
	})),s),s),s),s),s),s),s),s),s),s);
}
Validation_Impl_.val12 = function(f,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,s) {
	var f1 = f;
	var f2 = function(a,b,c,d,e,f0,g,h,i,j,k) {
		return function(l) {
			return f1(a,b,c,d,e,f0,g,h,i,j,k,l);
		};
	};
	var f3 = function(a1,b1,c1,d1,e1,f01,g1,h1,i1,j1) {
		return function(k1) {
			return f2(a1,b1,c1,d1,e1,f01,g1,h1,i1,j1,k1);
		};
	};
	var f4 = function(a2,b2,c2,d2,e2,f02,g2,h2,i2) {
		return function(j2) {
			return f3(a2,b2,c2,d2,e2,f02,g2,h2,i2,j2);
		};
	};
	var f5 = function(a3,b3,c3,d3,e3,f03,g3,h3) {
		return function(i3) {
			return f4(a3,b3,c3,d3,e3,f03,g3,h3,i3);
		};
	};
	var f6 = function(a4,b4,c4,d4,e4,f04,g4) {
		return function(h4) {
			return f5(a4,b4,c4,d4,e4,f04,g4,h4);
		};
	};
	var f7 = function(a5,b5,c5,d5,e5,f05) {
		return function(g5) {
			return f6(a5,b5,c5,d5,e5,f05,g5);
		};
	};
	var f8 = function(a6,b6,c6,d6,e6) {
		return function(f06) {
			return f7(a6,b6,c6,d6,e6,f06);
		};
	};
	var f9 = function(a7,b7,c7,d7) {
		return function(e7) {
			return f8(a7,b7,c7,d7,e7);
		};
	};
	var f10 = function(a8,b8,c8) {
		return function(d8) {
			return f9(a8,b8,c8,d8);
		};
	};
	return Validation_Impl_.ap(v12,Validation_Impl_.ap(v11,Validation_Impl_.ap(v10,Validation_Impl_.ap(v9,Validation_Impl_.ap(v8,Validation_Impl_.ap(v7,Validation_Impl_.ap(v6,Validation_Impl_.ap(v5,Validation_Impl_.ap(v4,Validation_Impl_.ap(v3,Validation_Impl_.ap(v2,Validation_Impl_.map(v1,thx_Functions2.default.curry(function(a9,b9) {
		return function(c9) {
			return f10(a9,b9,c9);
		};
	})),s),s),s),s),s),s),s),s),s),s),s);
}



exports.default = Validation_Impl_;