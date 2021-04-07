"use script";

window.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
  console.log("Lets gooooo");

  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");

  document.querySelector("#menubar").classList.toggle("hidden");

  let erskjult = document.querySelector("#menubar").classList.contains("hidden");

  if (erskjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "x";
  }
}
