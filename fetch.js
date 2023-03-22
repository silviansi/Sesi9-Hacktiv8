function handleButton() {
    const url = 'http://localhost:3000/data';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        display(data);
    })
    .catch((err) => console.log(err));
}

function display(data) {
    data.forEach(element => {
        insertData(element);
    });
}

function insertData(data) {
    const dataTable = document.createElement("tr");
    dataTable.innerHTML = `
        <td>${data.name}</td>
        <td>${data.username}</td>
        <td>${data.email}</td>
    `
    document.getElementById("table-data").appendChild(dataTable);

}

const form = document.getElementById("input-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            username: username,
            email: email,
        })
    })
    .then((res) => res.json())
	.then((data) => console.log(data))
});