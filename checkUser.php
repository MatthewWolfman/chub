<?php

	session_start();
	
	function checkUser($user, $pass){
		
		define ('DB_USER','mw99');
		define ('DB_PASSWORD','Vz4eobdCE');
		define ('DB_HOST', 'sql.njit.edu');
		define ('DB_NAME', 'mw99');
		
		$dbc = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) OR die ('Could not connect to the MySQL: ' . mysql_error() );
		mysql_select_db (DB_NAME, $dbc) OR die ('Could not select the database: ' . mysql_error() );
		
		$sql1 = mysql_query("SELECT * FROM login WHERE username = '$user' AND password = '$pass'");
		$row = array();
		
		while($r = mysql_fetch_assoc($sql1)) {
			$row["user"] = $r;
		}
		
		if(empty($row)){
			echo "Wrong user name";
		} else {
			$_SESSION["user"] = $row["user"]["username"];
			print json_encode($row);
		}
	}
	
	//$user = $_POST["user"]; 
	//$pass = $_POST["pass"]; 
		
	$user = "p";
	$pass = "p";
	
	checkUser($user, $pass);
?>
