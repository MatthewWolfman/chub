function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "reel/01032016.txt", true);
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		  document.getElementById("txt").innerHTML = xhttp.responseText;
		}
	}
}