const COLOR_LIGHT = 'antiquewhite';
const COLOR_DARK_BG = '#191919';
const COLOR_DARK_FONT = 'black';

// Immediately and only applies the dark mode background and font if the CSS class .dark_mode_colors was already enabled.
if (localStorage.getItem("dark_mode_colors") === "enabled") {
  enable_dark_mode();
}

// Adds the CSS class .dark_mode_colors after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("dark_mode_colors") === "enabled") {
    document.body.classList.add("dark_mode_colors");
  }
});

function toggle_dark_mode() {
  const status_dark_mode = document.body.classList.toggle("dark_mode_colors");
  localStorage.setItem("dark_mode_colors", status_dark_mode ? "enabled" : "disabled");

  if (status_dark_mode) {
    enable_dark_mode();
  } else {
    disable_dark_mode();
  }
}

// Helper functions to set CSS variables for dark and light mode
function enable_dark_mode() {
  document.documentElement.style.setProperty('--bg-color', COLOR_DARK_BG);
  document.documentElement.style.setProperty('--fg-color', COLOR_LIGHT);
}

function disable_dark_mode() {
  document.documentElement.style.setProperty('--bg-color', COLOR_LIGHT);
  document.documentElement.style.setProperty('--fg-color', COLOR_DARK_FONT);
}
