/*
Configuration here !
Done by Dacal - Modded by Schnedi // don't remove this line motherfucker //
For weather code, go to http://weather.yahoo.com/ and search for your city. The correct zip code is in the URL (only numbers)
*/

var Clock = "24h";		  // choose between "12h" or "24h"
var lang = "en";	       // (fr) for french, (de) for german, (sp) for spanish, (it) for italian, (en) for english

var gps = false; 	       // Requires MyLocation app
var locale = 769112;	       // Yahoo Weather (used if gps set to false or myLocation.txt file not found)
var tempUnit = "c";	       // f for fahrenheit
var iconSet = "Climacons"		// add your own set
var updateInterval = 15;       // in minutes

/*
Options below are for specific situations.
*/

var UseCityGPS = false;        // If your city is innacurate with Yahoo, you can try to use the GPS localization (if available).
var UseNeighborhood = false;    // If your city is inaccurate with GPS localization, you can try to use the neighborhood (or state).
