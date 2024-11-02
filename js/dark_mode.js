const DARK_BG_COLOR = '#191919';
const COLOR_AWHITE = 'antiquewhite'
// Immediately set the CSS variables based on the dark mode preference
if (localStorage.getItem("dark_mode") === "enabled") {
  document.documentElement.style.setProperty('--bg-color', DARK_BG_COLOR);
  document.documentElement.style.setProperty('--fg-color', COLOR_AWHITE);
}

// Check localStorage on page load and apply the preferred mode
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("dark_mode") === "enabled") {
    document.body.classList.add("dark_mode");
  }
});

function toggle_dark_mode() {
  var element = document.body;
  element.classList.toggle("dark_mode");
  const root = document.documentElement;
  const isDarkMode = localStorage.getItem("dark_mode") === "enabled";

    // Save the current mode in localStorage
    if (element.classList.contains("dark_mode")) {
      localStorage.setItem("dark_mode", "enabled");
    } else {
      localStorage.setItem("dark_mode", "disabled");
    }

  if (isDarkMode) {
    // Switch to light mode
    root.style.setProperty('--bg-color', COLOR_AWHITE);
    root.style.setProperty('--fg-color', 'black');
    localStorage.setItem("dark_mode", "disabled");
  } else {
    // Switch to dark mode
    root.style.setProperty('--bg-color', DARK_BG_COLOR);
    root.style.setProperty('--fg-color', COLOR_AWHITE);
    localStorage.setItem("dark_mode", "enabled");
  }
}

/* Sources: 
Dark mode: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
Persistency: ChatGPT */