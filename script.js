"use script";

window.addEventListener("DOMContentLoaded", start);

// Global variables
let splittext;
var myVar;

function start() {
  console.log("Lets gooooo");
  // document.querySelector("#loading").classList.add(".hide");

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

  myVar = setTimeout(timerSet, 2000);
}

function timerSet() {
  document.getElementById("loading").style.display = "none";
}

const navButton = document.querySelector("button");
const navUl = document.querySelector("nav ul");

navButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  navUl.classList.toggle("shown");

  let shown = navUl.classList.contains("shown");

  if (shown == true) {
    navButton.textContent = "×";
  } else {
    navButton.textContent = "☰";
  }
}
