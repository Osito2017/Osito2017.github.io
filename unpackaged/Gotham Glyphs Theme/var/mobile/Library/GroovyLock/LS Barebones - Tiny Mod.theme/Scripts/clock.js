//Clock by Taskinoz at Taskinoz.com

function refreshData(){
	var d = new Date();
	var h = d.getHours(), h12 = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var day = d.getDay();
	var month = d.getMonth();
	var daym = d.getDate();
	var year = d.getYear() + 1900;

	//12 Hour Time
	tod = ( h12 < 12 ) ? "AM" : "PM";
	h12 = ( h12 > 12 ) ? h12 - 12 : h12;
	h12 = ( h12 == 0 ) ? 12 : h12;

	if (h<=9) {h = '0'+h};
	if (h12<=9) {h12 = '0'+h12};
	//if (h12<=9) {h12 = '0'+h12};
	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};
	//if (daym<=9) {daym = '0'+daym}

	switch(Language) {
	    case "en":
	        dayA = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			monthA = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
			date = dayA[day]+" "+monthA[month]+" "+daym+" "+year;
	        break;
	    case "pg":
	        dayA = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
			monthA = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
			date = dayA[day]+" "+daym+" "+monthA[month]+" "+year;
	        break;
			case "ge":
	        dayA = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
			monthA = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
			date = dayA[day]+" "+daym+" "+monthA[month]+" "+year;
	        break;
			case "fr":
					dayA = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
			monthA = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
			date = dayA[day]+" "+daym+" "+monthA[month]+" "+year;
					break;
			case "sp":
	        dayA = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
			monthA = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
			date = dayA[day]+" "+daym+" "+monthA[month]+" "+year;
	        break;
			case "ru":
	        dayA = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
			monthA = ["Января","Февраль","Март","Апреля","Май","Июнь","Июль","Август","Сентябрь","Октября","Ноября","Декабрь"];
			date = dayA[day]+" "+monthA[month]+" "+daym+" "+year;
	        break;
			case "fn":
	        dayA = ["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"];
			monthA = ["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"];
			date = dayA[day]+" "+monthA[month]+" "+daym+" "+year;
	        break;
			case "dn":
					dayA = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"];
			monthA = ["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"];
			date = dayA[day]+" "+monthA[month]+" "+daym+" "+year;
					break;
			default:
					dayA = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			monthA = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
			date = dayA[day]+" "+monthA[month]+" "+daym+" "+year;

	}

	//Fixinng for Midnight 00:15 not 12:15
	if (tod == "AM" && h12 >= 12 && ZeroAtMidnight == true){h12 = "00"};

 	//date = dayA[day]+" "+monthA[month]+" "+daym+" "+year;

 	if (ampm == false){
	 	tod = "";
 	}

 	//Display Output

 	if (TwentyFourHour == true){
 		var time = h+':'+m;
 	}
 	if (TwentyFourHour == false){
 		var time = h12+':'+m+" "+tod;
 	}

    //Display Time
    $("p#time").text(time);

 	//Display Happy New Year
 	if (month == "0" && daym == "1"){
 		$("p#date").text("Happy New Year!");
 	}
	else {
		//Display Date
		$("p#date").text(date);
	}
 	$("html").css("top", ClockHeight);

}

setInterval(refreshData, 1000); //Fix by /u/SOMECoder
refreshData();
