function sendData(e) {
	e.preventDefault();

	const form = $("#sendDataForm");

	$.ajax({
		type: "POST",
		url: "http://localhost:8888/page3.php",
		data: form.serialize(),
		success: res => {
			alert(res.isValid);
		},
		error: (req, status, err) => {
			console.log("dasdsa", req.responseText)
		}
	})
}