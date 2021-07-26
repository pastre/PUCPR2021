<?php
	$username  = $_POST["username"];
	$firstName  = $_POST["firstName"];
	$lastName  = $_POST["lastName"];
	$email  = $_POST["email"];
	$birthday  = $_POST["birthday"];

	$expectedUsername = "@jelowe";
	$expectedFirstName = "Jennifer";
	$expectedLastName = "Lowe";
	$expectedEmail = "jennifer.lowe@gmail.com";
	$expectedBirthday = "1981-02-05";
	// echo "salve";

	$matches = $expectedUsername == $username;

	$result = array("isValid" => false);

	if ($expectedUsername === $username && 
		$expectedFirstName === $firstName &&
		$expectedLastName === $lastName &&
		$expectedEmail === $email &&
		$expectedBirthday === $birthday) {
		$result["isValid"] = true;
	}


	header("HTTP/1.1 200 OK");
	http_response_code(200);
	header('Content-type: application/json');
	echo json_encode($result);

	// echo  ($expectedUsername == $username); // &&  $expectedfFirstName === $firstName &&  $expectedLastName === $lastName &&  $expectedEmail === $email &&  $expectedBirthday === $birthday
?>