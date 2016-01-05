function timer() {
	setTimeout(myTimeout1, 1000);
	setTimeout(myTimeout2, 2000);
	setTimeout(myTimeout3, 3000);
	setTimeout(myTimeout4, 4000);
	setTimeout(myTimeout5, 5000);
	setTimeout(myTimeout6, 6000);
	setTimeout(myTimeout7, 7000);
	setTimeout(myTimeout8, 8000);	
	setTimeout(myTimeout9, 9000);
	setTimeout(myTimeout10, 10000); 	
	setTimeout(myTimeout11, 11000); 
}
function myTimeout11() {
	location.href = "login.html";
}
function myTimeout10() {
    document.getElementById("time").innerHTML = "1 seconds";
}
function myTimeout9() {
    document.getElementById("time").innerHTML = "2 seconds";
}
function myTimeout8() {
    document.getElementById("time").innerHTML = "3 seconds";
}
function myTimeout7() {
    document.getElementById("time").innerHTML = "4 seconds";
}
function myTimeout6() {
    document.getElementById("time").innerHTML = "5 seconds";
}
function myTimeout5() {
    document.getElementById("time").innerHTML = "6 seconds";
}
function myTimeout4() {
    document.getElementById("time").innerHTML = "7 seconds";
}
function myTimeout3() {
    document.getElementById("time").innerHTML = "8 seconds";
}
function myTimeout2() {
    document.getElementById("time").innerHTML = "9 seconds";
}
function myTimeout1() {
    document.getElementById("time").innerHTML = "10 seconds";
}