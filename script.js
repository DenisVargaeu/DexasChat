function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  if (message === "") return;

  fetch("write.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "message=" + encodeURIComponent(message)
  }).then(() => {
    input.value = "";
    loadMessages();
  });
}

function loadMessages() {
  fetch("read.php")
    .then(response => response.text())
    .then(data => {
      document.getElementById("chat-box").innerHTML = data;
    });
}

// načítavanie správ každé 2 sekundy
setInterval(loadMessages, 2000);
window.onload = loadMessages;

#username {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
}
