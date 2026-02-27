import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  
  const suits = ["♥", "♠", "♣", "♦"];
  
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  
  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");
  const number = document.querySelector(".number");
  
  topSuit.innerHTML = randomSuit;
  bottomSuit.innerHTML = randomSuit;
  number.innerHTML = randomValue;

  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
    number.style.color = "red";
  } else {
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
    number.style.color = "black";
  }
  
};