// Class: DateTools

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./import_stub").default;

// Definition

var DateTools = function(){}

DateTools.__name__ = true;
DateTools.prototype = {
	
};

DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31]
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) {
		return DateTools.DAYS_OF_MONTH[month];
	}
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	if(isB) {
		return 29;
	} else {
		return 28;
	}
}



exports.default = DateTools;