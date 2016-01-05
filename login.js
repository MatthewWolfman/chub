var tries = {
	attempts:0
};

function success() {
	//Will be a database look up, nut for now I will be using variables
	var testUser = "p";
	var testPass = "p";
	
	var u = document.getElementById("user").value;
	var p = document.getElementById("pass").value;
	
	if (u === testUser && p === testPass){
		location.href = "index.html";
	} else {
		if(tries.attempts < 5){
			tries.attempts += 1;
			document.getElementById("wrongPass").innerHTML = "Wrong username and password!";
		} else {
			document.getElementById("wrongPass").innerHTML = "Exceeded tries, wait 10 seconds!";
			tries.attempts = 0;
			location.href = "loginFail.html";
		}
	}
}

function showOne() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("text1").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "reel/test.txt", true);
  xhttp.send();
}