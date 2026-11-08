// Footer: current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Responsive hamburger menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");

  const isOpen = navigation.classList.contains("open");
  menuButton.textContent = isOpen ? "✖" : "☰";
  menuButton.setAttribute("aria-expanded", isOpen);
});
