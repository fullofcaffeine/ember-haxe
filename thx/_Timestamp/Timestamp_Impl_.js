// Class: thx._Timestamp.Timestamp_Impl_

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../../import_stub").default;
var thx_Dates = require("./../../thx/Dates");
var HxOverrides = require("./../../HxOverrides");
var DateTools = require("./../../DateTools");

// Definition

var Timestamp_Impl_ = function(){}

Timestamp_Impl_.__name__ = true;
Timestamp_Impl_.prototype = {
	
};

Timestamp_Impl_.create = function(year,month,day,hour,minute,second) {
	return thx_Dates.default.create(year,month,day,hour,minute,second).getTime();
}
Timestamp_Impl_.now = function() {
	return new Date().getTime();
}
Timestamp_Impl_.fromDate = function(d) {
	return d.getTime();
}
Timestamp_Impl_.fromString = function(s) {
	return HxOverrides.default.strDate(s).getTime();
}
Timestamp_Impl_.toDate = function(this1) {
	return new Date(this1);
}
Timestamp_Impl_.toString = function(this1) {
	return HxOverrides.default.dateStr(new Date(this1));
}
Timestamp_Impl_.snapNext = function(this1,period) {
	switch(period[1]) {
	case 0:
		return Math.ceil(this1 / 1000.0) * 1000.0;
	case 1:
		return Math.ceil(this1 / 60000.0) * 60000.0;
	case 2:
		return Math.ceil(this1 / 3600000.0) * 3600000.0;
	case 3:
		var d = new Date(this1);
		return thx_Dates.default.create(d.getFullYear(),d.getMonth(),d.getDate() + 1,0,0,0).getTime();
	case 4:
		var d1 = new Date(this1);
		var wd = d1.getDay();
		return thx_Dates.default.create(d1.getFullYear(),d1.getMonth(),d1.getDate() + 7 - wd,0,0,0).getTime();
	case 5:
		var d2 = new Date(this1);
		return thx_Dates.default.create(d2.getFullYear(),d2.getMonth() + 1,1,0,0,0).getTime();
	case 6:
		var d3 = new Date(this1);
		return thx_Dates.default.create(d3.getFullYear() + 1,0,1,0,0,0).getTime();
	}
}
Timestamp_Impl_.snapPrev = function(this1,period) {
	switch(period[1]) {
	case 0:
		return Math.floor(this1 / 1000.0) * 1000.0;
	case 1:
		return Math.floor(this1 / 60000.0) * 60000.0;
	case 2:
		return Math.floor(this1 / 3600000.0) * 3600000.0;
	case 3:
		var d = new Date(this1);
		return thx_Dates.default.create(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0).getTime();
	case 4:
		var d1 = new Date(this1);
		var wd = d1.getDay();
		return thx_Dates.default.create(d1.getFullYear(),d1.getMonth(),d1.getDate() - wd,0,0,0).getTime();
	case 5:
		var d2 = new Date(this1);
		return thx_Dates.default.create(d2.getFullYear(),d2.getMonth(),1,0,0,0).getTime();
	case 6:
		var d3 = new Date(this1);
		return thx_Dates.default.create(d3.getFullYear(),0,1,0,0,0).getTime();
	}
}
Timestamp_Impl_.snapTo = function(this1,period) {
	switch(period[1]) {
	case 0:
		return Math.round(this1 / 1000.0) * 1000.0;
	case 1:
		return Math.round(this1 / 60000.0) * 60000.0;
	case 2:
		return Math.round(this1 / 3600000.0) * 3600000.0;
	case 3:
		var d = new Date(this1);
		var mod = d.getHours() >= 12 ? 1 : 0;
		return thx_Dates.default.create(d.getFullYear(),d.getMonth(),d.getDate() + mod,0,0,0).getTime();
	case 4:
		var d1 = new Date(this1);
		var wd = d1.getDay();
		var mod1 = wd < 3 ? -wd : wd > 3 ? 7 - wd : d1.getHours() < 12 ? -wd : 7 - wd;
		return thx_Dates.default.create(d1.getFullYear(),d1.getMonth(),d1.getDate() + mod1,0,0,0).getTime();
	case 5:
		var d2 = new Date(this1);
		var mod2 = d2.getDate() > Math.round(DateTools.default.getMonthDays(d2) / 2) ? 1 : 0;
		return thx_Dates.default.create(d2.getFullYear(),d2.getMonth() + mod2,1,0,0,0).getTime();
	case 6:
		var d3 = new Date(this1);
		var mod3 = this1 > new Date(d3.getFullYear(),6,2,0,0,0).getTime() ? 1 : 0;
		return thx_Dates.default.create(d3.getFullYear() + mod3,0,1,0,0,0).getTime();
	}
}
Timestamp_Impl_.r = function(t,v) {
	return Math.round(t / v) * v;
}
Timestamp_Impl_.f = function(t,v) {
	return Math.floor(t / v) * v;
}
Timestamp_Impl_.c = function(t,v) {
	return Math.ceil(t / v) * v;
}



exports.default = Timestamp_Impl_;