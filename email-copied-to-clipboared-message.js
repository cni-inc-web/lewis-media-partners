document.addEventListener("DOMContentLoaded", function () {

  // Create message element
  const message = document.createElement("div");
  message.textContent = "Email Address copied to clipboard";
  message.style.position = "fixed";
  message.style.bottom = "20px";
  message.style.left = "50%";
  message.style.transform = "translateX(-50%)";
  message.style.background = "#000";
  message.style.color = "#fff";
  message.style.padding = "10px 16px";
  message.style.borderRadius = "6px";
  message.style.fontSize = "20px";
  message.style.opacity = "0";
  message.style.transition = "opacity 0.3s ease";
  message.style.zIndex = "9999";
  document.body.appendChild(message);

  // Handle clicks
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[href^='mailto:']");
    if (!link) return;

    //e.preventDefault(); // remove this line if you still want email client to open

    let email = link.getAttribute("href").replace(/^mailto:/, "").split("?")[0];

    navigator.clipboard.writeText(email).then(() => {
      // Show message
      message.style.opacity = "1";

      setTimeout(() => {
        message.style.opacity = "0";
      }, 4500);
    }).catch(err => {
      console.error("Failed to copy:", err);
    });
  });

});