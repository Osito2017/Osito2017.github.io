// Translation file based on uniaw 6.3, with credit to Dacal 


// TRANSLATION FOR MAIN ELEMENTS

switch (lang) {

	case "ge":
		var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
		var months = ["Januar", "Februar", "Maerz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
		var hightext = "Hoch : ";
		var lowtext = "Tief : ";
		var sunrisetext = "Morgen";
		var sunsettext = "Abend";
		var feelsliketext = "fühlt sich an wie : ";
		var lastupdatetext = "Letztes Update : ";
		var visibilitytext = "Sichtweite : ";
		var humiditytext = "Luftfeuchte : ";
		var pressuretext = "Luftdruck : ";
		var windtext = "Luft : ";    
		var WeatherDesc = [
			"Tornado",
			"Tropischer Sturm",
			"Wirbelsturm",
			"Schwere Gewitter",
			"Gewitter",
			"Regen und Schnee",
			"Graupelschauer",
			"Schneeregen",
			"Gefrierender Nieselregen",
			"Nieselregen",
			"Gefrierender Regen",
			"Schauer",
			"Schauer",
			"Schneegest&ouml;ber",
			"Leichte Schneeschauer",
			"Schneetreiben",
			"Schnee",
			"Hagel",
			"Schneeregen",
			"Staubig",
			"Nebelig",
			"Dunstschleier",
			"Dunstig",
			"St&uuml;rmisch",
			"Windig",
			"Kalt",
			"Bew&ouml;lkt ",
			"Meist Bew&ouml;lkt",
			"Meist Bew&ouml;lkt",
			"Teilweise Bew&ouml;lkt",
			"Teilweise Bew&ouml;lkt",
			"Klar",
			"Sonnig",
			"Heiter",
			"Heiter",
			"Regen und Hagel",
			"Heiss",
			"&Ouml;rtliche Gewitter",
			"Vereinzelte Gewitte",
			"Vereinzelte Gewitte",
			"Vereinzelte Schauer",
			"Starker Schneefall",
			"Vereinzelte Schneeschauer",
			"Starker Schneefall",
			"Teilweise Bew&ouml;lkt",
			"Gewitter",
			"Scheeschauer",
			"Ouml;rtliche Gewitterschauer",
			"Nicht Verfuegbar"];
 
	break;

	case "nl":
		var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
		var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
		var hightext = "Hoog : ";
		var lowtext = "Laag : ";
		var sunrisetext ="Ochtend";
		var sunsettext = "Nacht";
		var feelsliketext = "Voelt als : ";
		var lastupdatetext = "Laatste Update : ";
		var humiditytext = "Vochtigheid : ";
		var visibilitytext = "Zichtbaarheid : ";	
		var pressuretext = "Druk : ";
		var windtext = "Winden : ";
		var WeatherDesc = [
			"Tornado",
			"Tropische Storm",
			"Wervelwind",
			"Zware Onweersbuien",
			"Onweersbuien",
			"Regen en Sneeuw",
			"Regen en Ijzel",
			"Sneeuw en Ijzel",
			"Bevriezende Motregen",
			"Motregen",
			"Ijzel",
			"Buien",
			"Buien",
			"Sneeuwvlagen",
			"Lichte Sneeuwbuien",
			"Sneeuw Drift",
			"Sneeuw",
			"Hagel",
			"Ijzel",
			"Stoffig",
			"Mistig",
			"Wazig",
			"Wazig",
			"Stormachtig",
			"Winderig",
			"Koud",
			"Bewolkt ",
			"Algemeen Bewolkt",
			"Algemeen Bewolkt",
			"Gedeeltelijk Bewolkt",
			"Gedeeltelijk Bewolkt",
			"Helder",
			"Zonnig",
			"Bewolkt Weer",
			"Bewolkt Weer",
			"Regen en Hagel",
			"Heet",
			"Geisoleerde Onweersbuien",
			"Verspreide Onweersbuien",
			"Verspreide Onweersbuien",
			"Verspreide Buien",
			"Zware Sneeuw",
			"Verspreide Sneeuwbuien",
			"Zware Sneeuw",
			"Gedeeltelijk Bewolkt",
			"Onweersbuien",
			"Sneeuwbuien",
			"Geisoleerde Onweersbuien",
			"Niet Beschikbaar"];

	break;

	case "fi":
		var days = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
		var months = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];
		var hightext = "Korkein : ";
		var lowtext = "Alin : ";
		var sunrisetext = "Aamu";
		var sunsettext = "Yö";
		var feelsliketext = "Tuntuu : ";
		var pressuretext = "Paine : ";	
		var lastupdatetext = "Päivitetään : ";
		var visibilitytext = "Näkyvyys : ";
		var humiditytext = "Ilmankosteus : ";
		var windtext = "Tuuli : ";
		var WeatherDesc = [
			"Tornaado",
			"Trooppinen myrsky",
			"Wervelwind",
			"Rankkoja ukkoskuuroja",
			"Ukkosmyrskyj&auml;",
			"Vesisadetta ja r&auml;nt&auml;&auml;",
			"Vesi ja r&auml;nt&auml;sadetta",
			"Lumi ja r&auml;nt&auml;sadetta",
			"J&auml;&auml;t&auml;v&auml;&auml; tihkusadetta",
			"Tihkusadetta",
			"J&auml;&auml;t&auml;v&auml;&auml; sadetta",
			"Sadekuuroja",
			"Sadekuuroja",
			"Lumisadetta",
			"Heikkoja lumikuuroja",
			"Lumituisku",
			"Lumisadetta",
			"Rakeita",
			"R&auml;nt&auml;&auml;",
			"P&ouml;lyist&auml;",
			"Sumuista",
			"Utuista",
			"Utuista",
			"Ei tietoja",
			"Tuulista",
			"kylm&auml;&auml;",
			"Pilvist&auml;",
			"Enimm&auml;kseen pilvist&auml;",
			"Enimm&auml;kseen pilvist&auml;",
			"Puolipilvist&auml;",
			"Puolipilvist&auml;",
			"Selke&auml;&auml;",
			"Aurinkoista",
			"Selke&auml;&auml;",
			"Selke&auml;&auml;",
			"Vesisadetta ja raekuuroja",
			"Hellett&auml;",
			"Paikallisia ukkoskuuroja",
			"Hajanaisia ukkoskuuroja",
			"Hajanaisia ukkoskuuroja",
			"Hajanaisia sadekuuroja",
			"Rankkaa lumisadetta",
			"Hajanaisia lumikuuroja",
			"Rankkaa lumisadetta",
			"Puolipilvist&auml;",
			"Ukkoskuuroja",
			"Lumikuuroja",
			"Paikallisia ukkoskuuroja",
			"Ei tietoja"];

    break; 

	case "it":
		var days = ["Domenica", "Lunedi", "Martedì", "Mercoledì", "Giovedi", "Venerdì", "Sabato"];
		var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
		var hightext = "Alto : ";
		var lowtext = "Basso : ";
		var sunrisetext ="Alba";
		var sunsettext = "Tramonto";
		var feelsliketext = "Si sente come : ";
		var lastupdatetext = "Attuale : ";
		var humiditytext = "Umidita : ";
		var visibilitytext = "Visibilita : ";
		var pressuretext = "Pressione : ";
		var windtext = "Vento : ";   
		var WeatherDesc = [
			"Tornado",
			"Tempesta tropicale",
			"Uragano",
			"Tuoni e fulmini",
			"Fulmini",
			"Misto pioggia e neve",
			"Misto pioggia e nevischio",
			"Misto neve e nevischio",
			"Grandine",
			"Pioggerella",
			"Grandine",
			"Diluvio",
			"Diluvio",
			"Raffiche di neve",
			"Poca neve",
			"Vento e neve",
			"Neve",
			"Grandine",
			"Nevischio",
			"Polvere",
			"Nebbiolina",
			"Nebbia",
			"Humeado",
			"Tempesa",
			"Ventoso",
			"Froddo",
			"Nuvoloso",
			"Molto nuvoloso",
			"Molto nuvoloso",
			"Parzialmente nuvoloso",
			"Parzialmente nuvoloso",
			"Sereno",
			"Soleggiato",
			"Sereno",
			"Sereno",
			"Misto neve e grandine",
			"Caldo",
			"Fulmini isolati",
			"Tempesta di fulmini",
			"Tempesta di fulmini",
			"Tempesta di pioggia",
			"Forti nevicate",
			"Neve sparsa",
			"Forti nevicate",
			"Parzialmente nuvoloso",
			"Rovesci temporaleschi",
			"Precipitazioni nevose",
			"Rovesci temporaleschi isolati",
			"Non disponibile"];   

    break;

	case "ru":
		var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
		var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
		var hightext = "привет : ";
		var lowtext = "вот : ";
		var sunrisetext ="утро";
		var sunsettext = "закат";
		var feelsliketext = "чувствует как : ";
		var lastupdatetext = "обновлены в : ";
		var humiditytext = "Влажность : ";
		var visibilitytext = "видимость : ";
		var pressuretext = "давление : ";
		var windtext = "ветер : ";
		var WeatherDesc = [
			"Торнадо",
			"Горячая буря",
			"Ураган",
			"Гроза",
			"Бури",
			"Дождь со снегом",
			"Дождь и мокрый снег",
			"Снег и мокрый снег",
			"Изморозь",
			"Изморось",
			"Ледяной дождь",
			"Дождь",
			"Дождь",
			"Снег с порывами",
			"Небольшой снег с дождем",
			"Снежные заряды",
			"Снег",
			"Град",
			"Дождь со снегом",
			"Пыль",
			"Туман",
			"Туман",
			"Туман",
			"Бурный",
			"Ветер",
			"Холодный",
			"Облачно ",
			"Небольшая облачность",
			"Небольшая облачность",
			"Переменная облачность",
			"Переменная облачность",
			"Ясно",
			"Солнечно",
			"Ясно",
			"Ясно",
			"Дождь и град",
			"Горячий",
			"Изолированные грозы",
			"Рассеянные грозы",
			"Рассеянные грозы",
			"Рассеянный дождь",
			"Сильный снег",
			"Рассеянный снег с дождем",
			"Сильный снег",
			"Переменная облачность",
			"Изолированные грозы с дождем",
			"Дождь со снегом",
			"Изолированные грозы с дождем",
			"Недоступно"];

	break;

	case "sp":
		var days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
		var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
		var hightext = "Alto : ";
		var lowtext = "Bajo : ";
		var sunrisetext ="Mañana";
		var sunsettext = "Noche";
		var feelsliketext = "Se siente como : ";
		var lastupdatetext = "Actualizado : ";
		var humiditytext = "Humedad : ";
		var visibilitytext = "Visibilidad : ";
		var pressuretext = "Presion : ";
		var windtext = "Viento : ";
		var WeatherDesc = [
			"Tornado",
			"Tormenta Tropical",
			"Huracan",
			"Tormentas Electricas Severas",
			"Tormentas Electricas",
			"Mezcla de Lluvia y Nieve",
			"Mezcla de lluvia y aguanieve",
			"Mezcla de nieve y aguaniev",
			"Llovizna helada",
			"Llovizna",
			"Lluvia bajo cero",
			"Chubascos",
			"Chubascos",
			"Rafagas de nieve",
			"Ligeras precipitaciones de nieve",
			"Viento y nieve",
			"Nieve",
			"Granizo",
			"Aguanieve",
			"Polvareda",
			"Neblina",
			"Bruma",
			"Humeado",
			"Tempestuoso",
			"Vientoso",
			"Frio",
			"Nublado ",
			"Mayormente nublado",
			"Mayormente nublado",
			"Parcialmente despejado",
			"Parcialmente despejado",
			"Despejado",
			"Soleado",
			"Lindo",
			"Lindo",
			"Mezcla de lluvia y granizo",
			"Caluroso",
			"Tormentas electricas aisladas",
			"Tormentas electricas dispersas",
			"Tormentas electricas dispersas",
			"Chubascos dispersos",
			"Nieve fuerte",
			"Precipitaciones de nieve dispersas",
			"Nieve fuerte",
			"Parcialmente despejado",
			"Lluvia con truenos y relampagos",
			"Precipitaciones de nieve",
			"Tormentas aisladas",
			"No disponible"];

    break;

	case "cn":
		var days = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
		var hightext = "最高 : ";
		var lowtext = "最低 : ";
		var sunrisetext = "日出";
		var sunsettext = "日落";
		var feelsliketext = "感覺像 : ";
		var pressuretext = "最高 : "; 
		var lastupdatetext = "上次更新 : ";
		var visibilitytext = "能见度 : ";
		var humiditytext = "湿度 : ";
		var windtext = "风向 : ";
		var WeatherDesc = [
			"风卷残云",
			"热带风暴",
			"狂风暴雨",
			"电闪雷鸣",
			"电闪雷鸣",
			"雨雪霏霏",
			"雨雪霏霏",
			"雨雪纷纷",
			"寒风冷雨",
			"蒙蒙细雨",
			"凄风冷雨",
			"疾风骤雨",
			"疾风骤雨",
			"俄而雪骤",
			"流风回雪",
			"狂风暴雪",
			"大雪纷飞",
			"天降冰雹",
			"雨雪霏霏",
			"飞沙走石",
			"云迷雾锁",
			"十面霾伏",
			"烟雾弥漫",
			"风起云涌",
			"风和日丽",
			"天寒地冻",
			"乌云蔽日",
			"浮云蔽日",
			"浮云蔽日",
			"云淡风轻",
			"云淡风轻",
			"晴空万里",
			"阳光明媚",
			"天朗气清",
			"天朗气清",
			"冰雹带雨",
			"骄阳似火",
			"霹雳列缺",
			"电闪雷鸣",
			"电闪雷鸣",
			"急风骤雨",
			"大雪纷飞",
			"骤雪初歇",
			"大雪纷飞",
			"云淡风轻",
			"雷阵雨",
			"雨雪霏霏",
			"霹雳列缺",
			"自行判断"];

	break;	   

	case "fr":
		var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
		var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
		var hightext = "Max : ";
		var lowtext = "Min : ";
		var sunrisetext = "Lever";
		var sunsettext = "Coucher";
		var feelsliketext = "Ressentie : ";
		var lastupdatetext = "Mise à jour : ";
		var humiditytext = "Humidité : ";	
		var visibilitytext = "Visibilité : ";	
		var pressuretext = "Pression : ";
		var windtext = "Vent : ";
		var WeatherDesc = [
			"Tornade",
			"Orage Tropical",
			"Ouragan",
			"Orages Violents",
			"Orages",
			"Pluie et Neige MÃ©lÃ©es",
			"Pluie et GrÃªle MÃ©lÃ©es",
			"Neige et GrÃªle MÃ©lÃ©es",
			"Bruine VerglaÃ§ante",
			"Bruine",
			"Pluie VerglaÃ§ante",
			"Averses",
			"Averses",
			"Quelques Flocons",
			"Faibles Chutes de Neige",
			"Rafales de Neige",
			"Neige",
			"GrÃªle",
			"Neige Fondue",
			"PoussiÃ©reux",
			"Brouillard",
			"Brume",
			"Brumeux",
			"TempÃªte",
			"Vent",
			"Temps Froid",
			"Temps Nuageux ",
			"TrÃ¨s Nuageux",
			"TrÃ¨s Nuageux",
			"Partiellement Nuageux",
			"Partiellement Nuageux",
			"Temps Clair",
			"EnsoleillÃ©",
			"Beau Temps",
			"Beau Temps",
			"Pluie et GrÃªles MÃ©lÃ©es",
			"Temps Chaud",
			"Orages IsolÃ©s",
			"Orages Eparses",
			"Orages Eparses",
			"Averses Eparses",
			"Fortes Chutes de Neige",
			"Chutes de Neige Eparses",
			"Fortes Chutes de Neige",
			"Partiellement Nuageux",
			"Orages",
			"Chute de Neige",
			"Orages IsolÃ©s",
			"Non Disponible"];
    break;

	default: 
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var hightext = "Hi: ";
		var lowtext = "Lo:";
		var sunrisetext ="Sunrise";
		var sunsettext = "Sunset";
		var feelsliketext = "Feels like : ";
		var lastupdatetext = "Updated : ";
		var humiditytext = "Humidity : ";
		var visibilitytext = "Visibility : ";
		var pressuretext = "Pressure : ";
		var windtext = "Wind : ";
		var WeatherDesc = [
			"Tornado",
			"Tropical Storm",
			"Hurricane",
			"Severe Thunderstorms",
			"Thunderstorms",
			"Mixed Rain and Snow",
			"Mixed Rain and Sleet",
			"Mixed Snow and Sleet",
			"Freezing Drizzle",
			"Drizzle",
			"Freezing Rain",
			"Showers",
			"Showers",
			"Snow Flurries",
			"Light Snow Showers",
			"Blowing Snow",
			"Snow",
			"Hail",
			"Sleet",
			"Dust",
			"Foggy",
			"Haze",
			"Smoky",
			"Blustery",
			"Windy",
			"Cold",
			"Cloudy ",
			"Mostly Cloudy",
			"Mostly Cloudy",
			"Partly Cloudy",
			"Partly Cloudy",
			"Clear",
			"Sunny",
			"Mostly Clear",
			"Mostly Sunny",
			"Mixed Rain and Hail",
			"Hot",
			"Isolated Thunderstorms",
			"Scattered Thunderstorms",
			"Scattered Thunderstorms",
			"Scattered Showers",
			"Heavy Snow",
			"Scattered Snow Showers",
			"Heavy Snow",
			"Partly Cloudy",
			"Thundershowers",
			"Snow Showers",
			"Isolated Thundershowers",
			"Not Available"];
	break;
}


/*
// Moon phase description not used. The moon in animation is set to show current moon phase image

var MoonDesc = [
	"Not Used",
	"New Moon",
	"Waxing Crescent",
	"Waxing Crescent",
	"Waxing Crescent",
	"Waxing Crescent",
	"Waxing Crescent",
	"First Quarter",
	"Waxing Gibbous",
	"Waxing Gibbous",
	"Waxing Gibbous",
	"Waxing Gibbous",
	"Waxing Gibbous",
	"Waxing Gibbous",
	"Full Moon",	
	"Waning Gibbous",
	"Waning Gibbous",
	"Waning Gibbous",
	"Waning Gibbous",
	"Waning Gibbous",
	"Waning Gibbous",
	"Last Quarter",
	"Waning Crescent",
	"Waning Crescent",
	"Waning Crescent",
	"Waning Crescent",
	"Waning Crescent",
	"Waning Crescent"
];

*/

function ForecastDayNames(day) {
switch (day) {
    case "Sun": { return days[0]; }
    case "Mon": { return days[1]; }
    case "Tue": { return days[2]; }
    case "Wed": { return days[3]; }
    case "Thu": { return days[4]; }
    case "Fri": { return days[5]; }
    case "Sat": { return days[6]; }
    case "Today": { return "Today"; }
    case "Tonight": { return "Tonight"; }
	}
}



