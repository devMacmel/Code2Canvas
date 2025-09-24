
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const keepSignedIn = document.getElementById("keep-signed-in").checked;
  window.location.href = "dashboard-main.html";

});
