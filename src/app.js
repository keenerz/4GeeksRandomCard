/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(randomSuitGen());
  document.querySelector(".number").innerHTML = randomNumberGen();
  setInterval(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.remove("club");
    document.querySelector(".card").classList.remove("diamond");
    document.querySelector(".card").classList.remove("spade");
    document.querySelector(".card").classList.add(randomSuitGen());
    document.querySelector(".number").innerHTML = randomNumberGen();
  }, 10000);
};

function randomNumberGen() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numberIndex = Math.floor(Math.random() * numbers.length);
  return numbers[numberIndex];
}

function randomSuitGen() {
  let suits = ["diamond", "spade", "heart", "club"];
  let suitIndex = Math.floor(Math.random() * suits.length);
  return suits[suitIndex];
}

document.querySelector("#newCard").addEventListener("click", function() {
  document.querySelector(".card").classList.remove("heart");
  document.querySelector(".card").classList.remove("club");
  document.querySelector(".card").classList.remove("diamond");
  document.querySelector(".card").classList.remove("spade");
  document.querySelector(".card").classList.add(randomSuitGen());
  document.querySelector(".number").innerHTML = randomNumberGen();
});

let inputHeight = document.querySelector("#cardHeight");
let inputWidth = document.querySelector("#cardWidth");
let card = document.querySelector(".card");

document.querySelector("#sizeSubmit").addEventListener("click", function() {
  if (inputHeight == null) {
    card.style.height = "400px";
  } else {
    card.style.height = inputHeight.value + "px";
  }
  if (inputWidth == null) {
    card.style.width = "240px";
  } else {
    card.style.width = inputWidth.value + "px";
  }
});
