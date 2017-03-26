// Class: thx.Dates

Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $import = require("./../import_stub").default;
var thx_TimePeriod = require("./../thx/TimePeriod");
var js__$Boot_HaxeError = require("./../js/_Boot/HaxeError");
var thx__$Timestamp_Timestamp_$Impl_$ = require("./../thx/_Timestamp/Timestamp_Impl_");
var thx_Either = require("./../thx/Either");
var HxOverrides = require("./../HxOverrides");
var thx__$Ord_Ord_$Impl_$ = require("./../thx/_Ord/Ord_Impl_");

// Definition

var Dates = function(){}

Dates.__name__ = true;
Dates.prototype = {
	
};

Dates.compare = function(a,b) {
	var a1 = a.getTime();
	var b1 = b.getTime();
	if(a1 < b1) {
		return -1;
	} else if(a1 > b1) {
		return 1;
	} else {
		return 0;
	}
}
Dates.create = function(year,month,day,hour,minute,second) {
	if(second == null) {
		second = 0;
	}
	if(minute == null) {
		minute = 0;
	}
	if(hour == null) {
		hour = 0;
	}
	if(day == null) {
		day = 1;
	}
	if(month == null) {
		month = 0;
	}
	minute += Math.floor(second / 60);
	second %= 60;
	if(second < 0) {
		second += 60;
	}
	hour += Math.floor(minute / 60);
	minute %= 60;
	if(minute < 0) {
		minute += 60;
	}
	day += Math.floor(hour / 24);
	hour %= 24;
	if(hour < 0) {
		hour += 24;
	}
	if(day == 0) {
		--month;
		if(month < 0) {
			month = 11;
			--year;
		}
		day = Dates.daysInMonth(year,month);
	}
	year += Math.floor(month / 12);
	month %= 12;
	if(month < 0) {
		month += 12;
	}
	var days = Dates.daysInMonth(year,month);
	while(day > days) {
		if(day > days) {
			day -= days;
			++month;
		}
		if(month > 11) {
			month -= 12;
			++year;
		}
		days = Dates.daysInMonth(year,month);
	}
	return new Date(year,month,day,hour,minute,second);
}
Dates.daysRange = function(start,end) {
	if(Dates.compare(end,start) < 0) {
		return [];
	}
	var days = [];
	while(!Dates.sameDay(start,end)) {
		days.push(start);
		start = Dates.jump(start,thx_TimePeriod.default.Day,1);
	}
	days.push(end);
	return days;
}
Dates.equals = function(self,other) {
	return self.getTime() == other.getTime();
}
Dates.nearEquals = function(self,other,units,period) {
	if(units == null) {
		units = 1;
	}
	if(null == period) {
		period = thx_TimePeriod.default.Second;
	}
	if(units < 0) {
		units = -units;
	}
	var min = Dates.jump(self,period,-units);
	var max = Dates.jump(self,period,units);
	if(Dates.compare(min,other) <= 0) {
		return Dates.compare(max,other) >= 0;
	} else {
		return false;
	}
}
Dates.greater = function(self,other) {
	return Dates.compare(self,other) > 0;
}
Dates.more = function(self,other) {
	return Dates.compare(self,other) > 0;
}
Dates.less = function(self,other) {
	return Dates.compare(self,other) < 0;
}
Dates.greaterEquals = function(self,other) {
	return Dates.compare(self,other) >= 0;
}
Dates.moreEqual = function(self,other) {
	return Dates.compare(self,other) >= 0;
}
Dates.lessEquals = function(self,other) {
	return Dates.compare(self,other) <= 0;
}
Dates.lessEqual = function(self,other) {
	return Dates.compare(self,other) <= 0;
}
Dates.isLeapYear = function(year) {
	if(year % 4 != 0) {
		return false;
	}
	if(year % 100 == 0) {
		return year % 400 == 0;
	}
	return true;
}
Dates.isInLeapYear = function(d) {
	return Dates.isLeapYear(d.getFullYear());
}
Dates.daysInMonth = function(year,month) {
	switch(month) {
	case 1:
		if(Dates.isLeapYear(year)) {
			return 29;
		} else {
			return 28;
		}
		break;
	case 0:case 2:case 4:case 6:case 7:case 9:case 11:
		return 31;
	case 3:case 5:case 8:case 10:
		return 30;
	default:
		throw new js__$Boot_HaxeError.default("Invalid month \"" + month + "\".  Month should be a number, Jan=0, Dec=11");
	}
}
Dates.numDaysInMonth = function(month,year) {
	return Dates.daysInMonth(year,month);
}
Dates.daysInThisMonth = function(d) {
	return Dates.daysInMonth(d.getFullYear(),d.getMonth());
}
Dates.numDaysInThisMonth = function(d) {
	return Dates.daysInThisMonth(d);
}
Dates.sameYear = function(self,other) {
	return self.getFullYear() == other.getFullYear();
}
Dates.sameMonth = function(self,other) {
	if(Dates.sameYear(self,other)) {
		return self.getMonth() == other.getMonth();
	} else {
		return false;
	}
}
Dates.sameDay = function(self,other) {
	if(Dates.sameMonth(self,other)) {
		return self.getDate() == other.getDate();
	} else {
		return false;
	}
}
Dates.sameHour = function(self,other) {
	if(Dates.sameDay(self,other)) {
		return self.getHours() == other.getHours();
	} else {
		return false;
	}
}
Dates.sameMinute = function(self,other) {
	if(Dates.sameHour(self,other)) {
		return self.getMinutes() == other.getMinutes();
	} else {
		return false;
	}
}
Dates.snapNext = function(date,period) {
	var this1 = thx__$Timestamp_Timestamp_$Impl_$.default.snapNext(date.getTime(),period);
	return new Date(this1);
}
Dates.snapPrev = function(date,period) {
	var this1 = thx__$Timestamp_Timestamp_$Impl_$.default.snapPrev(date.getTime(),period);
	return new Date(this1);
}
Dates.snapTo = function(date,period) {
	var this1 = thx__$Timestamp_Timestamp_$Impl_$.default.snapTo(date.getTime(),period);
	return new Date(this1);
}
Dates.jump = function(date,period,amount) {
	var sec = date.getSeconds();
	var min = date.getMinutes();
	var hour = date.getHours();
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	switch(period[1]) {
	case 0:
		sec += amount;
		break;
	case 1:
		min += amount;
		break;
	case 2:
		hour += amount;
		break;
	case 3:
		day += amount;
		break;
	case 4:
		day += amount * 7;
		break;
	case 5:
		month += amount;
		break;
	case 6:
		year += amount;
		break;
	}
	return Dates.create(year,month,day,hour,min,sec);
}
Dates.max = function(self,other) {
	if(self.getTime() > other.getTime()) {
		return self;
	} else {
		return other;
	}
}
Dates.min = function(self,other) {
	if(self.getTime() < other.getTime()) {
		return self;
	} else {
		return other;
	}
}
Dates.snapToWeekDay = function(date,day,firstDayOfWk) {
	if(firstDayOfWk == null) {
		firstDayOfWk = 0;
	}
	var d = date.getDay();
	var s = day;
	if(s < firstDayOfWk) {
		s += 7;
	}
	if(d < firstDayOfWk) {
		d += 7;
	}
	return Dates.jump(date,thx_TimePeriod.default.Day,s - d);
}
Dates.snapNextWeekDay = function(date,day) {
	var d = date.getDay();
	var s = day;
	if(s < d) {
		s += 7;
	}
	return Dates.jump(date,thx_TimePeriod.default.Day,s - d);
}
Dates.snapPrevWeekDay = function(date,day) {
	var d = date.getDay();
	var s = day;
	if(s > d) {
		s -= 7;
	}
	return Dates.jump(date,thx_TimePeriod.default.Day,s - d);
}
Dates.prevYear = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Year,-1);
}
Dates.nextYear = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Year,1);
}
Dates.prevMonth = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Month,-1);
}
Dates.nextMonth = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Month,1);
}
Dates.prevWeek = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Week,-1);
}
Dates.nextWeek = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Week,1);
}
Dates.prevDay = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Day,-1);
}
Dates.nextDay = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Day,1);
}
Dates.prevHour = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Hour,-1);
}
Dates.nextHour = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Hour,1);
}
Dates.prevMinute = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Minute,-1);
}
Dates.nextMinute = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Minute,1);
}
Dates.prevSecond = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Second,-1);
}
Dates.nextSecond = function(d) {
	return Dates.jump(d,thx_TimePeriod.default.Second,1);
}
Dates.withYear = function(date,year) {
	return Dates.create(year,date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
}
Dates.withMonth = function(date,month) {
	return Dates.create(date.getFullYear(),month,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
}
Dates.withDay = function(date,day) {
	return Dates.create(date.getFullYear(),date.getMonth(),day,date.getHours(),date.getMinutes(),date.getSeconds());
}
Dates.withHour = function(date,hour) {
	return Dates.create(date.getFullYear(),date.getMonth(),date.getDate(),hour,date.getMinutes(),date.getSeconds());
}
Dates.withMinute = function(date,minute) {
	return Dates.create(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),minute,date.getSeconds());
}
Dates.withSecond = function(date,second) {
	return Dates.create(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),second);
}
Dates.parseDate = function(s) {
	try {
		return thx_Either.default.Right(HxOverrides.default.strDate(s));
	} catch( e ) {
		return thx_Either.default.Left("" + s + " could not be parsed to a valid Date value.");
	}
}
Dates.order = thx__$Ord_Ord_$Impl_$.default.fromIntComparison(Dates.compare)



exports.default = Dates;