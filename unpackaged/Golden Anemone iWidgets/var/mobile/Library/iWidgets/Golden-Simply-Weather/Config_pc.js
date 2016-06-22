// WIDGET WEATHER //
// includes work by Dacal primarily, Marty McFly, King O Hill and Durben //
/*
BIG THANKS to the following for testing and providing valuable input and changes:
Krima
Chevymusclecar
RKO1195
EricB78
Cuzin
Heine
Zfrost
Jato
Simon
hemptation 
*/

// Official support thread on ModMyi can be found here (copy and paste to your browser) http://modmyi.com/forums/file-mods/827406-widget-weather.html 

// -----CONFIGURATION OPTIONS-----//

var lang = "fr";

/*  LANGUAGE OPTIONS:
(no) for Norweigan
(it) for Italian
(fi) for Finland
(nl) for Dutch
(fr) for french
(ge) for german
(sp) for spanish
(cn) for Chinese
(ru) for Russian
(en) or for english

Moon Phase descriptions and Wind Direction text are NOT translated. Everything else is. 
*/


var useExtraLocationCity = false;	
/* Set to true if your original city returns an incorrect name. This should then work for you. It will show up red instead of white.  Neighborhood Location needs to be toggled on in Widget Weather settings.
*/							   
					      

var iconSet = "Clima_Weather";			// Name of the folder in Icon Sets you want to use

var GMT =  0;				// Adjust sunrise sunset times if yahoo reports incorrectly for your location 

var Distance_In_Miles = false;	 // Set to true for windspeed in mph and visibility in miles (false, in kilometers).

var Inches_Of_Mercury = false;	 // Set to true for pressure in Inches of Mercury (false, in millibars).
