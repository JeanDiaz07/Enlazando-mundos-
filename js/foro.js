// chat.js

document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.getElementById("send-btn");
    const input = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
  
    function sendMessage() {
      const msg = input.value.trim();
      if (msg) {
        const newMsg = document.createElement("div");
        newMsg.classList.add("mb-2");
        // Aquí usamos el nombre del usuario logeado
        newMsg.innerHTML = `<strong>${loggedUser}:</strong> ${msg}`;
        chatBox.appendChild(newMsg);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll
        input.value = "";
      }
    }
  
    // Botón enviar
    sendBtn.addEventListener("click", sendMessage);
  
    // Enviar con tecla Enter
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  });
  
  