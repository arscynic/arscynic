function toggle_dark_mode() {
  var element = document.body;
  element.classList.toggle("dark_mode");

  // Save the current mode in localStorage
  if (element.classList.contains("dark_mode")) {
    localStorage.setItem("dark_mode", "enabled");
  } else {
    localStorage.setItem("dark_mode", "disabled");
  }
}

// Check localStorage on page load and apply the preferred mode
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("dark_mode") === "enabled") {
    document.body.classList.add("dark_mode");
  }
});

/* Sources: 
Dark mode: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
Persistency: ChatGPT */