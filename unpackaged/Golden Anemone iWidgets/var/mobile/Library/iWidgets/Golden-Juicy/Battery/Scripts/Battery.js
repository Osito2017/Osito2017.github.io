
var Level = "";
var State = "";

$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});

function init() {

refreshLocationTimer = setTimeout(init, 10*1000);

jQuery.get('file:///private/var/mobile/Library/BatteryStats.txt', function(appdata) {

var myvar = appdata;
var substr = appdata.split('\n');
var Level=substr[0].split(':')[1];
var State=substr[1].split(':')[1];

if( Level > 0  && Level <= 2 )  document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_1@2x.png";
if( Level > 2  && Level <= 5 )  document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_2@2x.png";
if( Level > 5 && Level <= 10 )  document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_3@2x.png";
if( Level > 10 && Level <= 20 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_4@2x.png";
if( Level > 20 && Level <= 25 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_5@2x.png";
if( Level > 25 && Level <= 35 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_6@2x.png";
if( Level > 35 && Level <= 45 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_7@2x.png";
if( Level > 45 && Level <= 50 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_8@2x.png";
if( Level > 50 && Level <= 55 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_9@2x.png";
if( Level > 55 && Level <= 65 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_10@2x.png";
if( Level > 65 && Level <= 70 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_11@2x.png";
if( Level > 70 && Level <= 80 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_12@2x.png";
if( Level > 80 && Level <= 85 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_13@2x.png";
if( Level > 85 && Level <= 90 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_14@2x.png";
if( Level > 90 && Level <= 95 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_15@2x.png";
if( Level > 95 && Level <= 98 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_16@2x.png";
if( Level > 98 && Level <= 100 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_17@2x.png";
if( Level > 0  && Level <= 2 )  document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_1@2x.png";
if( Level > 2  && Level <= 5 )  document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_2@2x.png";
if( Level > 5 && Level <= 10 )  document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_3@2x.png";
if( Level > 10 && Level <= 20 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_4@2x.png";
if( Level > 20 && Level <= 25 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_5@2x.png";
if( Level > 25 && Level <= 35 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_6@2x.png";
if( Level > 35 && Level <= 45 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_7@2x.png";
if( Level > 45 && Level <= 50 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_8@2x.png";
if( Level > 50 && Level <= 55 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_9@2x.png";
if( Level > 55 && Level <= 65 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_10@2x.png";
if( Level > 65 && Level <= 70 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_11@2x.png";
if( Level > 70 && Level <= 80 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_12@2x.png";
if( Level > 80 && Level <= 85 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_13@2x.png";
if( Level > 85 && Level <= 90 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_14@2x.png";
if( Level > 90 && Level <= 95 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_15@2x.png";
if( Level > 95 && Level <= 98 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_16@2x.png";
if( Level > 98 && Level <= 100 ) document.getElementById("BatteryText").src="Images/BatteryText/BatteryBG_17@2x.png";


document.getElementById("LevelDisplay").innerHTML = Level +"%";
document.getElementById("StateDisplay").innerHTML = State;

});

}