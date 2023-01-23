const Person = function (nome, cognome, data) {
  this.name = nome;
  this.surname = cognome;
  this.date = data;
};

function inserisciButton() {
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let data = document.getElementById("data").value;
  let newElement = document.getElementById("table");

  let newPerson = new Person(nome, cognome, data);
  let newTr = document.createElement("tr");
  let colonnaNome = document.createElement("td");
  let colonnaCognome = document.createElement("td");
  let colonnaData = document.createElement("td");

  colonnaNome.innerHTML = newPerson.name;
  colonnaCognome.innerHTML = newPerson.surname;
  colonnaData.innerHTML = newPerson.date;
  newTr.appendChild(colonnaNome);
  newTr.appendChild(colonnaCognome);
  newTr.appendChild(colonnaData);

  newElement.appendChild(newTr);
}
