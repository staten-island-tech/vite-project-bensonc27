import "../CSS/style.css";
import { characters } from "../JS/characters";

const DomSelectors = {
  weakness: document.querySelector(".weakness"),
  container: document.querySelector(".container"),
  all: document.querySelector(".all"),
  warrior: document.querySelector(".class"),
  sale: document.querySelector(".sale"),
};

function inserttoHTML() {
  DomSelectors.all.addEventListener("click", function () {
    characters.forEach((character) => {
      const CardHTML = `<div class = card>
          <h1 class = "name"> Character: ${character.name} </h1>
          <img class = "picture" src="${character.image}>
          <p class = "show"> Anime: ${character.show} </p>
          <p class = "class"> Class: ${character.class} </p>
          <p class = "strength"> Strength: ${character.strength} </p>
          <p class = "weakness"> Weakness: ${character.weakness} </p>
          <p class = "cost">Cost: ${character.cost} coins </p>
          </div>`;
      DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
    });
  });
}

inserttoHTML();

function Classfilter() {
  const Warrior = characters.filter(
    (character) => character.class === "Warrior"
  );

  DomSelectors.warrior.addEventListener("click", function () {
    DomSelectors.container.innerHTML = "";

    Warrior.forEach((character) => {
      const CardHTML = `<div class = card>
  <h1 class = "name"> Character: ${character.name} </h1>
  <img class = "picture" src="${character.image}>
  <p class = "show"> Anime: ${character.show} </p>
  <p class = "class"> Class: ${character.class} </p>
  <p class = "strength"> Strength: ${character.strength} </p>
  <p class = "weakness"> Weakness: ${character.weakness} </p>
  <p class = "cost">Cost: ${character.cost} coins </p>
  </div>`;

      DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
    });
  });
}

Classfilter();

function Sale() {
  const Speed = characters.filter(
    (characters) => characters.strength === "Speed"
  );

  const discount = Speed.map((character) => character.cost * 0.75);

  DomSelectors.sale.addEventListener("click", function () {
    DomSelectors.container.innerHTML = "";

    Speed.forEach((character, index) => {
      const CardHTML = `<div class = card>
      <h1 class = "name"> Character: ${character.name} </h1>
      <img class = "picture" src="${character.image}>
      <p class = "show"> Anime: ${character.show} </p>
      <p class = "class"> Class: ${character.class} </p>
      <p class = "strength"> Strength: ${character.strength} </p>
      <p class = "weakness"> Weakness: ${character.weakness} </p>
      <p class = "cost">Cost: ${discount[index]} coins </p>
      </div>`;

      DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
    });
  });
}

Sale();

function FilterWeakness() {
  const Emotions = characters.filter(
    (characters) => (characters.weakness = Emotions)
  );

  weakness.addEventlistener("click", function () {
    DomSelectors.container.innerHTML = "";

    Emotions.forEach((character) => {
      const CardHTML = `<div class = card>
      <h1 class = "name"> Character: ${character.name} </h1>
      <img class = "picture" src="${character.image}>
      <p class = "show"> Anime: ${character.show} </p>
      <p class = "class"> Class: ${character.class} </p>
      <p class = "strength"> Strength: ${character.strength} </p>
      <p class = "weakness"> Weakness: ${character.weakness} </p>
      <p class = "cost">Cost: ${character.cost} coins </p>
      </div>`;
      DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
    });
  });
}

//includes can also be used
