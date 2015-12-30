function lookup() {
	
	//Gets the users input answers, but there might be case issues.
	var tempGame = document.getElementById("game").value;
	var tempConsole = document.getElementById("console").value;
	
	//Converts the game to the proper format
	var game = tempGame.toLowerCase();
	game = game.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
	game = game.replace(/ /g, "-");
	
	/*
	For temporary testing purposes only 
	Probably should make this a switch. 
	To change the console to the condtion for the url. 
	For gamefaqs.com they use vita istead of psvita
	*/
	var console = tempConsole.toLowerCase();
	if(console === "psvita")
	{
		console = "ps-vita";
	}
	
	var uGame = game.replace(" ", "-");
	
	//mock up of URL
	var url = "http://www.mobygames.com/game/" + console + "/" + game;
	
	//For testing to see the url
	document.getElementById("list").innerHTML = url;
	
}