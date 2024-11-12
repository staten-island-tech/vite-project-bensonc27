import "../CSS/style.css";
import { characters } from "./Products";

const DomSelectors = {
  weakness: document.querySelector(".weakness"),
  container: document.querySelector(".container"),
  all: document.querySelector(".all"),
  warrior: document.querySelector(".class"),
  sale: document.querySelector(".sale"),
};

function createCard(array) {
  DomSelectors.container.innerHTML = "";
  array.forEach((character) => {
    const CardHTML = `<div class = card>
        <h1 class = "name"> Character: ${character.name} </h1>
        <img class = "picture" src="${character.image_url}">
        <h2 class = "show"> Anime: ${character.show} </h2>
        <h2 class = "class"> Class: ${character.class} </h2>
        <p class = "strength"> Strength: ${character.strength} </p>
        <p class = "weakness"> Weakness: ${character.weakness} </p>
        <p class = "cost">Cost: ${character.cost} coins </p>
        </div>`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}

DomSelectors.all.addEventListener("click", function () {
  createCard(characters);
});

DomSelectors.warrior.addEventListener("click", function () {
  const warriors = characters.filter(
    (character) => character.class == "Warrior"
  );
  createCard(warriors);
});

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
      <img class = "picture" src="${character.image_url}">
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

DomSelectors.weakness.addEventListener("click", function () {
  const Emotions = characters.filter(
    (characters) => characters.weakness === "Emotions"
  );
  createCard(Emotions);
});
