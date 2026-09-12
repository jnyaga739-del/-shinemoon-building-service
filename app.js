function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "admin" && password === "1234") {
    document.body.innerHTML =
      "<h1>🏗️ ShineMoon Dashboard</h1>" +
      "<h2>Welcome, Admin</h2>" +
      "<p>👥 Clients: 0</p>" +
      "<p>🏠 Projects: 0</p>" +
      "<p>👷 Workers: 0</p>" +
      "<p>💰 Payments: KSh 0</p>";
  } else {
    message.textContent = "Invalid username or password.";
  }
}
function addClient() {
const name = document.getElementById("clientName").value;
const phone = document.getElementById("clientPhone").value;
const location = document.getElementById("clientLocation").value;

const list = document.getElementById("clientList");
const item = document.createElement("li");

item.textContent = name + " - " + phone + " - " + location;
list.appendChild(item);

document.getElementById("clientResult").textContent = "Client added successfully.";
}
const name = document.getElementById("clientName").value;
const phone = document.getElementById("clientPhone").value;
const location = document.getElementById("clientLocation").value;

document.getElementById("clientResult").textContent =
"Client saved: " + name + " | " + phone + " | " + location;
}
