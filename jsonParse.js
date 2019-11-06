var setlist = { 
"SeptemberConcert": [
	{
		"Title": "Do You Wanna Do Nothing With Me?",
		"Artist": "Lawrence",
		"Genre": "Pop",
		"Year": "2016" },

	{	"Title": "More",
		"Artist": "Lawrence",
		"Genre": "Funk",
		"Year": "2018" },

	{	"Title": "Make a Move",
		"Artist": "Lawrence",
		"Genre": "Funk",
		"Year": "2018" },

	{	"Title": "Friend or Enemy",
		"Artist": "Lawrence",
		"Genre": "Funk",
		"Year": "2018" },

	{	"Title": "Probably Up",
		"Artist": "Lawrence",
		"Genre": "Pop",
		"Year": "2018" },	

	{	"Title": "Me and You",
		"Artist": "Lawrence",
		"Genre": "Funk",
		"Year": "2016" },

	{	"Title": "Where It Started From",
		"Artist": "Lawrence",
		"Genre": "Funk",
		"Year": "2016" },

	{	"Title": "Almost Grown",
		"Artist": "Lawrence",
		"Genre": "R&B",
		"Year": "2018" },

	{	"Title": "Limbo",
		"Artist": "Lawrence",
		"Genre": "R&B",
		"Year": "2018" },

	{	"Title": "The Heartburn Song",
		"Artist": "Lawrence",
		"Genre": "Funk",
		"Year": "2018" },

	]}

document.onload = serializeJSON(setlist)

function serializeJSON(json) {
	var set = JSON.stringify(json);
	document.getElementById("serialized").innerHTML = set
	present_json(json)
}

function present_json(json) {
	document.getElementById("setlistL").innerHTML = ""

	document.getElementById("setlistR").innerHTML = ""

	for (var i = 0; i < ((Object.keys(json.SeptemberConcert).length) / 2); i++){
		format_song("setlistL", json.SeptemberConcert[i])
	}
		for (i; i < Object.keys(json.SeptemberConcert).length; i++){
		format_song("setlistR", json.SeptemberConcert[i])
	}
}

function format_song(div, song) {
	document.getElementById(div).innerHTML += 
		"<div class='song'>" + 
			"<div class='title'>" + song.Title + "</div>" +
			"<div class='artist'>" + song.Artist + "</div>" +
			"<div class='genre'>" + song.Genre + "</div>" +
			"<div class='year'>" + song.Year + "</div>" +
		"<div>"
}

function filter() {
	var filtered_set =  { "SeptemberConcert": []}
	var j = 0;
	var e = document.getElementById("Genres");
	var value = e.options[e.selectedIndex].text;
	if (value === "All") {
		present_json(setlist)
	}
	else{
		for (var i = 0; i < Object.keys(setlist.SeptemberConcert).length; i++) {
			if (setlist.SeptemberConcert[i].Genre === value) {
				filtered_set.SeptemberConcert[j] = setlist.SeptemberConcert[i]
				j++
			}
		}
		present_json(filtered_set)
	}

}