<?php

	session_start();
	
	
	class searchA {
		function checkConsole($url) {
			$c = curl_init($url);
			curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
			$html = curl_exec($c);
			if (curl_error($c))
				die(curl_error($c));
			$status = curl_getinfo($c, CURLINFO_HTTP_CODE);
			if($status == 404) {
				echo '<script language="javascript">';
				echo 'alert("Enter a valid console!");';
				echo 'history.back();';
				echo '</script>';
			} else {
				return $url;
			}
			curl_close($c);
			
		}
		
		function searchGame($url, $game){
			
			
		}
	}
	
	$game = $_POST['game'];
	$console = $_POST['console'];
	
	$initialUrl = "http://www.gamefaqs.com/" . $console ."/category/999-all?";
	
	$s = new searchA();
	$url = $s->checkConsole($initialUrl);
	$gameData = $s->searchGame($url, $game);
	
	
?>