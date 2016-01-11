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