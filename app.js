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
