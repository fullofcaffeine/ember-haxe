// Class: thx.ValidationExtensions

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_Eithers = require("./../thx/Eithers");
var thx__$Nel_Nel_$Impl_$ = require("./../thx/_Nel/Nel_Impl_");
var thx_Either = require("./../thx/Either");
var thx_Arrays = require("./../thx/Arrays");
var thx__$Validation_Validation_$Impl_$ = require("./../thx/_Validation/Validation_Impl_");

// Definition

var ValidationExtensions = function(){}

ValidationExtensions.__name__ = true;
ValidationExtensions.prototype = {
	
};

ValidationExtensions.leftMapNel = function(n,f) {
	return thx_Eithers.default.leftMap(n,function(n1) {
		return thx__$Nel_Nel_$Impl_$.default.map(n1,f);
	});
}
ValidationExtensions.ensureNel = function(v,p,error) {
	if(v[1] == 1) {
		var a = v[2];
		if(p(a)) {
			return v;
		} else {
			return thx_Either.default.Left(thx__$Nel_Nel_$Impl_$.default.pure(error));
		}
	} else {
		var left = v;
		return left;
	}
}
ValidationExtensions.appendVNel = function(target,item) {
	switch(target[1]) {
	case 0:
		switch(item[1]) {
		case 0:
			var errors1 = target[2];
			var errors2 = item[2];
			return thx_Either.default.Left(thx__$Nel_Nel_$Impl_$.default.append(errors1,errors2));
		case 1:
			var errors = target[2];
			var value = item[2];
			return thx_Either.default.Left(errors);
		}
		break;
	case 1:
		switch(item[1]) {
		case 0:
			var values = target[2];
			var errors3 = item[2];
			return thx_Either.default.Left(errors3);
		case 1:
			var values1 = target[2];
			var value1 = item[2];
			return thx_Either.default.Right(thx_Arrays.default.append(values1,value1));
		}
		break;
	}
}
ValidationExtensions.appendValidation = function(target,item) {
	return ValidationExtensions.appendVNel(target,thx__$Validation_Validation_$Impl_$.default.liftVNel(item));
}
ValidationExtensions.appendVNels = function(target,items) {
	return thx_Arrays.default.reduce(items,ValidationExtensions.appendVNel,target);
}
ValidationExtensions.appendValidations = function(target,items) {
	return thx_Arrays.default.reduce(items,ValidationExtensions.appendValidation,target);
}



exports.default = ValidationExtensions;