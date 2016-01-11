<?php

	session_start();
	
	function checkUser($user, $pass){
		
		define ('DB_USER','phelix');
		define ('DB_PASSWORD','password');
		define ('DB_HOST', 'initiateid.com');
		define ('DB_NAME', 'mw');
		
		$dbc = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) OR die ('Could not connect to the MySQL: ' . mysql_error() );
		mysql_select_db (DB_NAME, $dbc) OR die ('Could not select the database: ' . mysql_error() );
		
		$sql = mysql_query("SELECT * FROM login WHERE username = '$user' AND password = '$pass'");
		$row = array();
		
		while($r = mysql_fetch_assoc($sql)) {
			$row["user"] = $r;
		}
		
		if(empty($row)){
			echo "Wrong user name or password!";
		} else {
			$_SESSION["user"] = $row["user"]["username"];
			header('Location: index.html');
		}
	}

	$user = $_POST['user'];
	$pass = $_POST['pass'];
	
	checkUser($user, $pass);
?>
