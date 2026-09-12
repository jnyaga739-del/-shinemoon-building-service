function addClient() {
const name = document.getElementById("clientName").value;
const phone = document.getElementById("clientPhone").value;
const location = document.getElementById("clientLocation").value;

const list = document.getElementById("clientList");
const item = document.createElement("li");

item.textContent = name + " - " + phone + " - " + location;
list.appendChild(item);

document.getElementById("clientResult").textContent = "Client saved successfully.";
}

function addProject() {
const name = document.getElementById("projectName").value;
const location = document.getElementById("projectLocation").value;
const budget = document.getElementById("projectBudget").value;

const list = document.getElementById("projectList");
const item = document.createElement("li");

item.textContent = name + " - " + location + " - KSh " + budget;
list.appendChild(item);

document.getElementById("projectResult").textContent = "Project saved successfully.";
  }
