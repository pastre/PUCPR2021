function fetchUsers() {
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://localhost:8888/page2.php",
		success: res => {
			buildTable(res);
		}
	})
}

function buildTable(users) {
	console.log("salvasdadse")

	$('.usersTable').remove();

	var table = $('<table>').addClass('usersTable');

	var header = $('<tr></tr>');

	header.append("<th>Username</th>");
	header.append("<th>Nome</th>");
	header.append("<th>Sobrenome</th>");
	header.append("<th>Email</th>");
	header.append("<th>Aniversario</th>");

	table.append(header)

	for(const user of users) {
		var row = $('<tr></tr>');

		row.append(`<td>${user.username}</td>`);
		row.append(`<td>${user.firstName}</td>`);
		row.append(`<td>${user.lastName}</td>`);
		row.append(`<td>${user.email}</td>`);
		row.append(`<td>${user.birthday}</td>`);

		table.append(row)
	}

	$('#table_container').append(table);
}