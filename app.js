function addClient() {
const name = document.getElementById("clientName").value;
const phone = document.getElementById("clientPhone").value;
const location = document.getElementById("clientLocation").value;

const item = document.createElement("li");
item.textContent = name + " - " + phone + " - " + location;
document.getElementById("clientList").appendChild(item);

document.getElementById("clientResult").textContent =
"Client saved successfully.";
}

function addProject() {
const name = document.getElementById("projectName").value;
const location = document.getElementById("projectLocation").value;
const budget = document.getElementById("projectBudget").value;

const item = document.createElement("li");
item.textContent = name + " - " + location + " - KSh " + budget;
document.getElementById("projectList").appendChild(item);

document.getElementById("projectResult").textContent =
"Project saved successfully.";
}

function addWorker() {
const name = document.getElementById("workerName").value;
const phone = document.getElementById("workerPhone").value;
const role = document.getElementById("workerRole").value;
const wage = document.getElementById("workerWage").value;

const item = document.createElement("li");
item.textContent = name + " - " + role + " - " + phone + " - KSh " + wage;
document.getElementById("workerList").appendChild(item);

document.getElementById("workerResult").textContent =
"Worker saved successfully.";
}
