(() => {
    const DEMO = { User: "admin", Password: "123456" };
  
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("form");
      const msg  = document.getElementById("msg");
  
      if (!form) return;
  
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const u = document.getElementById("User")?.value.trim();
        const p = document.getElementById("Password")?.value;
  
        if (u === DEMO.User && p === DEMO.Password) {
          sessionStorage.setItem("session", JSON.stringify({ user: u, at: Date.now() }));
          location.href = "Intranet.html";
        } else {
          if (msg) {
            msg.textContent = "Usuario o contraseña incorrectos.";
            msg.style.display = "block";
          } else {
            alert("Usuario o contraseña incorrectos.");
          }
        }
      });
    });
  })();