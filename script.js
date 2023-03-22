
// Read
function handleButton() {
    const url = 'http://localhost:3000/data';
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        // function remove data
        display(data);
    }

    xhr.open("GET", url);
    xhr.send()
    console.log("dibawah");
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


// Create
const form = document.getElementById("input-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const payload = {
        name,
        username,
        email
    };

    const url = 'http://localhost:3000/data';
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.status === 201) {
            alert("Berhasil coy");
        }
    }

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(payload));
});