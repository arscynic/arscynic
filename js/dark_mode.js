function toggle_light_dark() {
  var element = document.body;
  element.classList.toggle("dark_mode");

  // Save the current mode in localStorage
  if (element.classList.contains("dark_mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Check localStorage on page load and apply the preferred mode
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark_mode");
  }
});