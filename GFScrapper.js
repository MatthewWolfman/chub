function lookup() {
	
	//Gets the users input answers, but there might be case issues.
	var tempGame = document.getElementById("game").value;
	var tempConsole = document.getElementById("console").value;
	
	//Converts the game and console to lower case
	var game = tempGame.toLowerCase();
	var console = tempConsole.toLowerCase();
	
	/*
	For temporary testing purposes only 
	Probably should make this a switch. 
	To change the console to the condtion for the url. 
	For gamefaqs.com they use vita istead of psvita
	*/
	if(console === "psvita")
	{
		console = "vita";
	}
	
	//mock up of URL
	var url = "www.gamefaqs.com/" + console;
	
	//For testing to see the url
	document.getElementById("list").innerHTML = url;
	
}