<?php
	$users = array(
		array(
			"username" => "@jelowe",
			"firstName" => "Jennifer",
			"lastName" => "Lowe",
			"email" => "jennifer.lowe@gmail.com",
			"birthday" => "5/2/1981"
		),
		array(
			"username" => "@larsonlesa",
			"firstName" => "Lesa",
			"lastName" => "Larson",
			"email" => "lesa.larson@gmail.com",
			"birthday" => "9/6/1971"
		),
		array(
			"username" => "@leofuller",
			"firstName" => "Leona",
			"lastName" => "Fuller",
			"email" => "leona.fuller@gmail.com",
			"birthday" => "5/5/1972"
		),
		array(
			"username" => "@leemartin",
			"firstName" => "Leta",
			"lastName" => "Martin",
			"email" => "leta.martin@gmail.com",
			"birthday" => "9/4/1957"
		),
		array(
			"username" => "@patjohn",
			"firstName" => "Pat",
			"lastName" => "Johnson",
			"email" => "pat.johnson@gmail.com",
			"birthday" => "12/3/1972"
		)
	);

	header("HTTP/1.1 200 OK");
	http_response_code(200);
	header('Content-type: application/json');
	echo json_encode($users);
?>