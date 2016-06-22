$(document).ready(function(){
	refreshData();
});

var Level = "";
var State = "";

$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});

var date, hours, mins, day, dayName, month, seconds;

x = 1;  // x = seconds
date = new Date();
day = date.getDate();

seconds = date.getSeconds();

if (hours<=9) {hours = '0'+hours};
if (mins<=9) {mins = '0'+mins};


function refreshData(){

if (hideTime == true){
	$('#clockContainer').hide();
} else {
	$('#clockContainer').show();
}

if (hideDate == true){
	$('#dateContainer').hide();
} else {
	$('#dateContainer').show();
}

if (hideBattery == true){
	$('#batteryInfoContainer').hide();
} else {
	$('#batteryInfoContainer').show();
}

if (hideWeather == true){
	$('#weatherContainer').hide();
} else {
	$('#weatherContainer').show();
}

	battery();
	


    x = 1;  // x = seconds
 	var d = new Date()
 	var h = d.getHours();
 	var m = d.getMinutes();
 	var s = d.getSeconds();
 	var hh = h;
	
	
 	if (h<=9) {h = '0'+h};
 	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};
	
 	var	time = h+': '+m;
	
	if ((hours24 == false) && (hh > 12)) { hh-=12; }
if (hh < 10) { hh = '0' + hh; } 
$('#clock').text (hh + ':' + m);
	
    
    $('#date').html(dayName + ' <span>' + day + ' </span>' + month);
	 
    setTimeout(refreshData, x*1000);
	
	switch (new Date().getDay()) {
    case 0:
        dayName = "SUN";
        break;
    case 1:
        dayName = "MON";
        break;
    case 2:
        dayName = "TUES";
        break;
    case 3:
        dayName = "WED";
        break;
    case 4:
		dayName = "THURS";
        break;
    case 5:
		dayName = "FRI";
        break;
    case 6:
		dayName = "SAT";
        break;
}	
	switch (new Date().getMonth()) {
    case 0:
        month = "JAN";
        break;
    case 1:
         month = "FEB";
        break;
    case 2:
         month = "MAR";
        break;
    case 3:
         month = "APR";
        break;
    case 4:
		 month = "MAY";
        break;
    case 5:
		 month = "JUN";
        break;
    case 6:
		 month = "JUL";
        break; 
	case 7:
		 month = "AUG";
		break;		
	case 8:
		 month = "SEP";
        break;		
	case 9:
		 month = "OCT";
        break;		
	case 10:
		 month = "NOV";
        break;		
	case 11:
		 month = "DEC";
        break;
}
}

  



updateWeather();


var percentage = "";
var status = "";

function battery() {

	

	 jQuery.get('file:///private/var/mobile/Library/Stats/BatteryStats.txt', function(appdata) {
	var myvar = appdata;
	var substr = appdata.split('\n');
	var percentage=substr[0].split(':')[1];
	var status=substr[1].split(':')[1];
 
 
	$('#batteryInfo').html(percentage + '% -' + status);

	if( percentage > 0  && percentage <= 4 )  document.getElementById("BatteryImage").src="img/0.png";
	if( percentage > 4 && percentage <= 9 )  document.getElementById("BatteryImage").src="img/5.png";
	if( percentage > 9 && percentage <= 14 )  document.getElementById("BatteryImage").src="img/10.png";
	if( percentage > 14 && percentage <= 19 )  document.getElementById("BatteryImage").src="img/15.png";
	if( percentage > 19 && percentage <= 24 )  document.getElementById("BatteryImage").src="img/20.png";
	if( percentage > 24 && percentage <= 29 )  document.getElementById("BatteryImage").src="img/25.png";
	if( percentage > 29 && percentage <= 34 )  document.getElementById("BatteryImage").src="img/30.png";
	if( percentage > 34 && percentage <= 39 )  document.getElementById("BatteryImage").src="img/35.png";
	if( percentage > 39 && percentage <= 44 )  document.getElementById("BatteryImage").src="img/40.png";
	if( percentage > 44 && percentage <= 49 )  document.getElementById("BatteryImage").src="img/45.png";
	if( percentage > 49 && percentage <= 54 )  document.getElementById("BatteryImage").src="img/50.png";
	if( percentage > 54 && percentage <= 59 )  document.getElementById("BatteryImage").src="img/55.png";
	if( percentage > 59 && percentage <= 64 )  document.getElementById("BatteryImage").src="img/60.png";
	if( percentage > 64 && percentage <= 69 )  document.getElementById("BatteryImage").src="img/65.png";
	if( percentage > 69 && percentage <= 74 )  document.getElementById("BatteryImage").src="img/70.png";
	if( percentage > 74 && percentage <= 79 )  document.getElementById("BatteryImage").src="img/75.png";
	if( percentage > 79 && percentage <= 84 )  document.getElementById("BatteryImage").src="img/80.png";
	if( percentage > 84 && percentage <= 89 )  document.getElementById("BatteryImage").src="img/85.png";
	if( percentage > 89 && percentage <= 94 )  document.getElementById("BatteryImage").src="img/90.png";
	if( percentage > 94 && percentage <= 97 )  document.getElementById("BatteryImage").src="img/95.png";
	if( percentage > 97 && percentage <= 100 )  document.getElementById("BatteryImage").src="img/100.png";

	refreshLocationTimer = setTimeout(battery, 10*1000);
	
 });
 
 

}

function updateWeather(){
	console.log(woeidLoc);
	
	  if (woeidStatus == false){
		  woeidLoc = '';
	  } else {
		  woeidLoc = woeidLoc;
		  weatherLocation = '';
	  }

	  $.simpleWeather({
	  
    location: weatherLocation,
    
    woeid: woeidLoc,
    
    unit: units,
    success: function(weather) {
      html = '<ul><li><i class="icon-'+weather.code+'"></i> <span id="temp"> '+weather.temp+'&deg;'+weather.units.temp+'</span><div id="sep"> </div>';
	  html += '<li class="currently">'+weather.currently+'</li> <br/>';
	  html += '<li id="hilo">'+weather.high+'&deg; - ' + weather.low+'&deg;</li> </br>';
      html += '<li id="city"> ' + weather.city+', '+weather.region + '</li>'
      html += '<li id="country"> ' +weather.country+'</span></li></ul>';
    
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
  
  	console.log('weatherUpdated');
    setTimeout(updateWeather, 600000);
}


function notifCheck(){
	if(window.groovyAPI) {
		if(groovyAPI.isShowingNotifications() == true){
			$('#batteryInfoContainer').css('opacity', '0');
			$('#weatherContainer').css('opacity', '0');
	
		} else {
			$('#batteryInfoContainer').css('opacity', '1');
			$('#weatherContainer').css('opacity', '1');
			
		}
	}
	else {
		console.log("Please install groovyAPI from Cydia for this to work!");
	}
	
	setTimeout(notifCheck, 100);
}

notifCheck();

