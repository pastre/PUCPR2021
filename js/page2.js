

function debug() {
	buildTable([
		{
			"username" : "username",
			"firstName" : "firstName",
			"lastName" : "lastName",
			"birthdate" : "birthdate",
			"createdAt" : "createdAt"
		},
		{
			"username" : "username",
			"firstName" : "firstName",
			"lastName" : "lastName",
			"birthdate" : "birthdate",
			"createdAt" : "createdAt"
		},
		{
			"username" : "username",
			"firstName" : "firstName",
			"lastName" : "lastName",
			"birthdate" : "birthdate",
			"createdAt" : "createdAt"
		},
		{
			"username" : "username",
			"firstName" : "firstName",
			"lastName" : "lastName",
			"birthdate" : "birthdate",
			"createdAt" : "createdAt"
		},
	])
}

function buildTable(users) {
	console.log("salvasdadse")

	var table = $('<table>').addClass('usersTable');

	var header = $('<tr></tr>');

	header.append("<th>Username</th>");
	header.append("<th>Nome</th>");
	header.append("<th>Sobrenome</th>");
	header.append("<th>Aniversario</th>");
	header.append("<th>Data de Cadastro</th>");

	table.append(header)

	for(const user of users) {
		var row = $('<tr></tr>');

		row.append(`<td>${user.username}</td>`);
		row.append(`<td>${user.firstName}</td>`);
		row.append(`<td>${user.lastName}</td>`);
		row.append(`<td>${user.birthdate}</td>`);
		row.append(`<td>${user.createdAt}</td>`);

		table.append(row)
	}

	$('#table_container').append(table);
}