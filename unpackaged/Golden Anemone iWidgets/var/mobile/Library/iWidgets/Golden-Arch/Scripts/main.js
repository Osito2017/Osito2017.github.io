var updateWeatherEvery = updateInterval*60*1000;
var xmldata = false;
var postal;
var refreshLocationTimer;
var updateTimer = 0;
var zip;

switch (lang) {
case "fr":
	var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
	var months=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
break;
case "de":
	var days = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
	var months=["Januar","Februar","Marz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];		
break;
case "sp":
	var days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var months=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
break;
case "it":
	var days = ["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"];
	var months=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
break;
default: 
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
break;
}

function updateClock() { 
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
var currentYear = currentTime.getFullYear();
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h") {
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
       document.getElementById("hour").innerHTML = currentHours;
       document.getElementById("minute").innerHTML = currentMinutes;
       document.getElementById("ampm").innerHTML = timeOfDay;
	}
if (Clock == "12h") {
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
       document.getElementById("hour").innerHTML = currentHours;
       document.getElementById("minute").innerHTML = currentMinutes;
       document.getElementById("ampm").innerHTML = timeOfDay;
}

document.getElementById("weekday").innerHTML = days[currentTime.getDay()];
document.getElementById("date").innerHTML = currentDate;
document.getElementById("month").innerHTML = months[currentTime.getMonth()];
document.getElementById("year").innerHTML = currentYear;

if (currentTime.getTime() - updateTimer >= updateWeatherEvery) {
	if (updateTimer == 0) {
		if (gps == true) { UpdateLocation(); } else { validateWeatherLocation(escape(locale).replace(/^%u/g, "%"), setPostal); }
		} else {
		weatherRefresherTemp(zip);
		}
	updateTimer = currentTime.getTime();
	}
}
 
function init(){
document.getElementById("cityname").innerHTML = "Wait Dude!!";

updateClock();
setInterval("updateClock();", 1000);
}

function setPostal(obj){
	if (obj.error == false){
		if(obj.cities.length > 0) {
			postal = escape(obj.cities[0].zip).replace(/^%u/g, "%")
			convertWoeid();
			}
			else
			{
			document.getElementById("cityname").innerHTML="Locale ?!";
			}
		}
		else
		{
		document.getElementById("cityname").innerHTML="Locale ?!";
		setTimeout('validateWeatherLocation(escape(locale).replace(/^%u/g, "%"), setPostal)', Math.round(1000*60*5));
		}
}

function weatherRefresherTemp(zip){
	fetchWeatherData(dealWithWeather, zip);
}

function validateWeatherLocation (location, callback) {
	var obj = {error:false, errorString:null, cities: new Array};
	obj.cities[0] = {zip: location};
	callback (obj);
}

function dealWithWeather(obj){
	if (obj.error == false){
		document.getElementById("cityname").innerHTML = obj.city;
		document.getElementById("temp").innerHTML = obj.temp + "&#176;";
		document.getElementById("weatherIcon").src="Images/"+iconSet+"/"+obj.icon+".png";		       
		document.getElementById("desc").innerHTML=obj.description;
}
}

function findChild (element, nodeName) {
	var child;
	for (child = element.firstChild; child != null; child = child.nextSibling)
	{
		if (child.nodeName == nodeName)
			return child;
	}
	return null;
}

function convertWoeid () {
		var url = "http://weather.yahooapis.com/forecastrss?w="+postal+"&u=f";
		$.get(url, function(data) {
		zip = $(data).find('guid').text().split('_')[0];
		weatherRefresherTemp(zip);
		});
}

function fetchWeatherData (callback, zip) {
	var url="http://xml.weather.yahoo.com/forecastrss/" + zip + "_" + tempUnit + ".xml";
	var xml_request = new XMLHttpRequest();
	var requestTimer = setTimeout(function() {
	xml_request.abort();
	if (xmldata == false) { callback ({error:true}); } else {
	document.getElementById("coordinates").className = "TextColorRed"; 
	document.getElementById("coordinates").innerHTML = "[Offline]"; }
    }, 10000);
	xml_request.onload = function(e) {
	clearTimeout(requestTimer);
	xml_loaded(e, xml_request, callback);
	}
	xml_request.overrideMimeType("text/xml");
	xml_request.open("GET", url);
	xml_request.setRequestHeader("Cache-Control", "no-cache");
	xml_request.send(null);
	return xml_request;
}

function xml_loaded (event, request, callback) {
	if (request.responseXML)
	{
		var obj = {error:false, errorString:null};
		xmldata = true;
		var effectiveRoot = findChild(findChild(request.responseXML, "rss"), "channel");
		if (gps == false) {
		if (city == "") { obj.city = findChild(effectiveRoot, "yweather:location").getAttribute("city"); }
		else { obj.city = city }
		} else { obj.city = city; }
		obj.chill = findChild(effectiveRoot, "yweather:wind").getAttribute("chill");
		obj.realFeel = findChild(effectiveRoot, "yweather:wind").getAttribute("chill");
		var conditionTag = findChild(findChild(effectiveRoot, "item"), "yweather:condition");
		obj.temp = conditionTag.getAttribute("temp");
		obj.icon = conditionTag.getAttribute("code");
		obj.description = conditionTag.getAttribute("text");
		var forecast = findChild(findChild(effectiveRoot, "item"), "yweather:forecast");
		obj.todaylow = forecast.getAttribute("low");
		obj.todayhigh = forecast.getAttribute("high");
		if (obj.description == "Unknown") {
			obj.description = forecast.getAttribute("text");
			obj.icon = forecast.getAttribute("code");
		}
		if (obj.icon == 3200) obj.icon = 48;	
		callback (obj); 
	}
	else
	{
		callback ({error:true, errorString:"XML request failed. no responseXML"});
	}
}