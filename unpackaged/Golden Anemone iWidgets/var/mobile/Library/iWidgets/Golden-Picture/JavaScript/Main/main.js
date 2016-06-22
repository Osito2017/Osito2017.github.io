   /*=====Widget Weather=====*/

var updateFileTimer = "";
var updateTimer;
var obj = new Array;
var where = "";
var time_to_change_wall;
var refreshTimer;
var dayhour;
var nighthour;
var FontColor = "FontColorDay";
var GMT = 0;
var ampm = true;// don't touch, change in settings app of tweak.
$.ajaxSetup({timeout: 8000, cache: false}); 
var XML_TEST = false;// DON'T Touch for normal use.


// WEATHER CONDITIONS
var Conditions = [
	"thunderstorm",
	"thunderstorm",
	"showers_cloud",
	"thunderstorm",
	"thunderstorm",
	"sleet",
	"sleet",
	"sleet",
	"sleet",
	"showers_cloud",
	"sleet",
	"rain",
	"showers_cloud",
	"snow",
	"snow",
	"snow",
	"snow",
	"hail",
	"sleet",
	"fog",
	"fog",
	"haze",
	"fog",
	"wind",
	"wind",
	"frost",
	"cloud",
	"mostlycloudy",
	"mostlycloudy",
	"partlycloudy",
	"partlycloudy",
	"clear",
	"clear",
	"fair",
	"fair",
	"sleet",
	"clear",
	"thunderstorm",
	"thunderstorm",
	"thunderstorm",
	"showers_cloud",
	"snow",
	"snow",
	"snow",
	"partlycloudy",
	"thunderstorm",
	"snow",
	"thunderstorm",
	"blank"];

function init() {
document.body.className = FontColor;
updateClock();
setInterval(updateClock, 1000);
updateWeather();
}

function updateClock() {
	currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
	var currentDate = currentTime.getDate() < 10 ? '' + currentTime.getDate() : currentTime.getDate();
	time_to_change_wall = currentHours + currentMinutes/60;
	timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

	if (ampm == false) {
		timeOfDay = "";
		currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
		currentTimeString = currentHours + ":" + currentMinutes;
	} else {
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
		currentHours = ( currentHours < 10 ? "" : "" ) + currentHours;
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
		currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
 }
	document.getElementById("clock").innerHTML = currentTimeString;
document.getElementById("date").innerHTML = days[currentTime.getDay()] + ", " + months[currentTime.getMonth()] + " " + currentDate;

		
	// DAY OR NIGHT CHANGE
	if (dayhour != null) {
		if ((time_to_change_wall < dayhour) || (time_to_change_wall >= nighthour)) { var whereTmp = "night";	} else { var whereTmp = "day"; }
		if (whereTmp != where) { dealWithWeather(obj); } // Refresh the weather for day/night condition.
	}
}

function dealWithWeather(obj) { 

if (ampm == true) {
	document.getElementById("xmlupdate").innerHTML = lastupdatetext + obj.lastupdate[1].split(":")[0]*1 + ":" + obj.lastupdate[1].split(":")[1] + " " + obj.lastupdate[2];
} else { 
document.getElementById("xmlupdate").innerHTML = lastupdatetext + obj.lastupdate[1].split(":")[0] + ":" + obj.lastupdate[1].split(":")[1];
}

// SUNRISE/SUNSET
var sunriseh = parseInt(obj.sunrise.split(':')[0]) + GMT;
var sunrisem = obj.sunrise.split(':')[1];
var sunseth = parseInt(obj.sunset.split(':')[0]) + GMT;
var sunsetm = obj.sunset.split(':')[1];
dayhour = sunriseh + parseInt(sunrisem)/60;
nighthour = sunseth + parseInt(sunsetm)/60;
DurationOfDay = nighthour - dayhour;
DurationOfNight = 24 - DurationOfDay;
		
if (ampm == false) {
	var sunriseh = ( sunriseh < 10 ? "0" : "" ) + sunriseh;
	var sunseth = ( sunseth < 10 ? "0" : "" ) + sunseth;
	var sunrise = sunriseh + ":" + sunrisem;		
	var sunset = sunseth + ":" + sunsetm;
	} else {
	var timeOfSunset = ( sunseth < 12 ) ? "am" : "pm";
	var timeOfSunrise = ( sunriseh < 12 ) ? "am" : "pm";
	sunriseh = ( sunriseh > 12 ) ? sunriseh - 12 : sunriseh;
	sunriseh = ( sunriseh == 0 ) ? 12 : sunriseh;
	sunseth = ( sunseth > 12 ) ? sunseth - 12 : sunseth;
	sunseth = ( sunseth == 0 ) ? 12 : sunseth;
	var sunrise = sunriseh + ":" + sunrisem + " " + timeOfSunrise;	
	var sunset = sunseth + ":" + sunsetm + " " + timeOfSunset;
}


// CHANGE THE BACKGROUND FOR DAY OR NIGHT CONDITION
if ((time_to_change_wall < dayhour) || (time_to_change_wall >= nighthour)) { where = "night"; } else { where = "day";
}
if (where == "day") { FontColor = "FontColorDay"; } else { FontColor = "FontColorNight"; }
document.body.className = FontColor;

// ADDITIONAL INFORMATION
if (Distance_In_Miles == true) {
	var convertD = 0.621371;  
	var visibilityunit = "miles";
	var windspeedunit = "mph";
} else {
	var convertD = 1;
	var visibilityunit = "km";
	var windspeedunit = "km/h";
}

if (Inches_Of_Mercury == true) {
	var convertP = 33.8638864;
	var pressureunit = "Inch";
} else {
	var convertP = 1;
	var pressureunit = "mb";
}

document.getElementById("visibility").innerHTML = visibilitytext + Math.round(obj.visibility*convertD) + " " + visibilityunit;
document.getElementById("pressure").innerHTML = pressuretext + Math.round(obj.pressure/convertP) + " " + pressureunit;
document.getElementById("humidity").innerHTML = humiditytext + obj.humidity + "%";

direction = parseFloat(obj.direction);

			if (direction <= 360) obj.direction = "N";

			if (direction < 348.75) obj.direction = "N-NW";     

			if (direction < 326.25) obj.direction = "NW";	    

			if (direction < 303.75) obj.direction = "W-NW";

			if (direction < 281.25) obj.direction = "W";		

			if (direction < 258.75) obj.direction = "W-SW";     

			if (direction < 236.25) obj.direction = "SW";

			if (direction < 213.75) obj.direction = "S-SW";     

			if (direction < 191.25) obj.direction = "S";		

			if (direction < 168.75) obj.direction = "S-SE";

			if (direction < 146.25) obj.direction = "SE";	    

			if (direction < 123.75) obj.direction = "E-SE";     

			if (direction < 101.25) obj.direction = "E";		

			if (direction < 78.75) obj.direction = "E-NE";		

			if (direction < 56.25) obj.direction = "NE";

			if (direction < 33.75) obj.direction = "N-NE";		

			if (direction < 11.25) obj.direction = "N";

			if (direction == 0) obj.direction = "Calm wind";

			if (direction == 0) {

							document.getElementById("wind").innerHTML = windtext + obj.direction;	    
							       } else {

document.getElementById("wind").innerHTML = windtext + obj.direction + " - " + Math.round(obj.windspeed*convertD)+ " " + windspeedunit;
}

var cityname = obj.city;
switch (UseExtraLocation) {
   case "city":
	if ((obj.extraLocCity != null) && (obj.extraLocCity != "")) { cityname = obj.extraLocCity; }
   break;
   case "neighborhood":
	   if ((obj.extraLocNeighborhood != null) && (obj.extraLocNeighborhood != "")) { cityname = obj.extraLocNeighborhood; }
	   else if ((obj.extraLocCounty != null) && (obj.extraLocCounty != "")) { cityname = obj.extraLocCounty; }
   break;
}


if (obj.offline == false) { document.getElementById("city").className = ""; }
document.getElementById("city").innerHTML = cityname;
document.getElementById("coordinates").innerHTML = obj.latitude + "&#176;N " + obj.longitude + "&#176;W";
document.getElementById("temp").innerHTML = obj.temp + "&#176;";
document.getElementById("hi").innerHTML= hightext + obj.high[0] + "&#176";
document.getElementById("lo").innerHTML= lowtext + obj.low[0] + "&#176";
document.getElementById("desc").innerHTML = WeatherDesc[obj.icon];
document.getElementById("sunrise").innerHTML = sunrisetext + " - " + sunrise;
document.getElementById("sunset").innerHTML = sunsettext + " - " + sunset;


document.getElementById("weatherWall").src="Images/WeatherWalls/" + where + "_" + Conditions[obj.icon] +".jpg";   
}

function updateWeather() {
if (XML_TEST == true) { var url = "widgetweather.xml" } else { var url =  "file:///private/var/mobile/Documents/widgetweather.xml"; }

jQuery.get(url, function(data) {

obj.updatetimestring = $(data).find('updatetimestring').text();

if (updateFileTimer !=
obj.updatetimestring) {
	obj.high = new Array;
	obj.low  = new Array;
	obj.code = new Array;
	obj.time24hour = new Array;

	$(data).find('currentcondition').each( function() {
	      
		obj.city =$(this).find('name').text();

		obj.extraLocCity = $(this).find('extraLocCity').text();

		obj.extraLocCounty = $(this).find('extraLocCounty').text ();

	   obj.extraLocNeighborhood = $(this).find('extraLocNeighborhood').text();
		obj.celsius = $(data).find('celsius').text(); 
		obj.temp = $(this).find('temp').text(); 
		obj.icon = $(this).find('code').text();
		obj.observationtime = $(this).find('observationtime').text(); 
	       obj.latitude = $(this).find('latitude').text();
	       obj.longitude = $(this).find('longitude').text();
		obj.sunset = $(this).find('sunsettime').text();
		obj.sunrise = $(this).find('sunrisetime').text();
		obj.tempUnit = $(this).find('celsius').text();
		obj.pressure = $(this).find('pressure').text();
		obj.humidity = $(this).find('humidity').text();        
		obj.visibility = $(this).find('visibility').text();
		obj.direction = $(this).find('direction').text()*1;
		obj.windspeed = $(this).find('speed').text();
		obj.unitsdistance = $(this).find('unitsdistance').text();
		obj.unitspressure = $(this).find('unitspressure').text();
		obj.unitsspeed = $(this).find('unitsspeed').text();
		obj.unitstemperature = $(this).find('unitstemperature').text();
       });



$(data).find('settings').each( function() {

		obj.interval = $(this).find('interval').text();
		obj.timehour = $(this).find('timehour').text();
		obj.extraweather = $(this).find('extraweather').text();
		obj.extralocation = $(this).find('extralocation').text();
		ampm = (obj.timehour == "24h") ? false : true;	
	});


	var i=0;
	$(data).find('day').each( function() {
		obj.high[i] =$(this).find('high').text();
		obj.low[i] = $(this).find('low').text();
		obj.code[i] = $(this).find('code').text();	
		i++;
	});

	
updateFileTimer = obj.updatetimestring; 

obj.lastupdate = updateFileTimer.split(' ');
	if (ampm == true) {
		updateTimer = new Date([obj.lastupdate[0].split('-')[1], obj.lastupdate[0].split('-')[2], obj.lastupdate[0].split('-')[0]].join('/') + " " + obj.lastupdate[1] + " " + obj.lastupdate[2]);
	} else {
		updateTimer = new Date([obj.lastupdate[0].split('-')[1], obj.lastupdate[0].split('-')[2], obj.lastupdate[0].split('-')[0]].join('/') + " " + obj.lastupdate[1]);
	}

	if ( currentTime.getTime() - updateTimer.getTime() > obj.interval*60*1000 ) {
		obj.offline = true;
		document.getElementById("city").className = "FontColorRed";
	} else {
		obj.offline = false;
	}

	dealWithWeather(obj);

	} else {
	if ( currentTime.getTime() - updateTimer.getTime() > obj.interval*60*1000 ) {
		obj.offline = true;
		document.getElementById("city").className = "FontColorRed";
	}

}
}).fail(function() {
      document.getElementById("xmlupdate").innerHTML = "No XML file !";
});

refreshTimer = setTimeout(updateWeather, 20*1000);
}

// WORKAROUND FOR CORRECT ICONS IN ALL SITUATIONS AND TWELVE HOUR FORMAT*

function AdjustIcon(icon, whereTmp) {
	switch(whereTmp) {
		case "day":
			if (icon == 27) { icon = 28; }
			if (icon == 29) { icon = 30; }	
			if (icon == 31) { icon = 32; }	
			if (icon == 33) { icon = 34; }
		break;
		case "night":
			if (icon == 28) { icon = 27; }
			if (icon == 30) { icon = 29; }	
			if (icon == 32) { icon = 31; }	
			if (icon == 34) { icon = 33; }
		break;
	}
	return icon;
}

