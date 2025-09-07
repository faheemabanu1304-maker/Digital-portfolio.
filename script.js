// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple form action (opens email client)
function sendMail(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  window.location.href = `mailto:faheemabanu1304@gmail.com?subject=Message from ${name} (${email})&body=${message}`;
}