"use script";

window.addEventListener("DOMContentLoaded", start);

// Global variables
let splittext;

function start() {
  console.log("Lets gooooo");

  //Create a global variable and select the text from the html
  let sentence = document.querySelector("#cooltext");

  console.log(sentence);

  //Split text into seperate letters/characters
  splittext = sentence.textContent.split("");
  console.log(splittext);

  //Remove existing text
  sentence.textContent = "";

  //For each character in the text, create a span element and put the character inside the span element
  splittext.forEach((letter, index) => {
    const span = document.createElement("span");

    span.classList.add("fulltext-animation");
    span.style.setProperty("--letter", index);

    if (letter === " ") {
      span.innerHTML = "&nbsp";
    } else {
      span.textContent = letter;
    }

    sentence.append(span);
  });

  //Click burgermenu
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
