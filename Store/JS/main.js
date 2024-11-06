import "../CSS/style.css";
import { characters } from "../JS/characters";

const DomSelectors = {
  warriorclass: document.querySelector(".class"),
  normal: document.querySelector(".normal"),
  sale: document.querySelector(".sale"),
  weakness: document.querySelector(".weakness"),
};

function Start() {
  normal.addEventListener("click", function () {
    characters.forEach((character) =>
      normal.insertAdjacentHTML(
        "afterbegin",
        `
        <div class = card>
        <h1 class = name> Character: ${characters.name} </h1>
        <img class = picture> ${characters.image} </img>
        <h2 class = show> ${characters.show} </h2>
        <h2 class = class> ${characters.class} </h2>
        <p class = strength>${characters.strength} </p>
        <p class = weakness>${characters.weakness} </p>
        <p class = cost>${characters.cost} </p>
        </div>
        `
      )
    );
  });
}

function Classfilter() {
  const Warrior = characters.filter(
    (characters) => (characters.class = Warrior)
  );

  warriorclass.addEventlistener("click", function () {
    Warrior.forEach((characters) =>
      insertAdjacentHtml(
        "afterbegin",
        `
      <div class = card>,
      <h1 class = name> Character: ${characters.name} <h1>,
      <image class = picture> ${characters.image} <image>,
      <h2 class = show> ${characters.show} <h2>,
      <h2 class = class> ${characters.class} <h2>,
      <text class = strength>${characters.strength} <text>,
      <text class = weakness>${characters.weakness}<text>,
      <text class = cost>${characters.cost} </text>
      <div>
        `
      )
    );
  });
}

function Sale() {
  const Speed = characters.filter(
    (characters) => (characters.strength = Speed)
  );

  const discount = Speed.cost.map((x) => x * 0.75);

  sale.addEventlistener("click", function () {
    Speed.forEach((characters) =>
      insertAdjacentHtml(
        "afterbegin",
        `
      <div class = card>,
      <h1 class = name> Character: ${characters.name} <h1>,
      <image class = picture> ${characters.image} <image>,
      <h2 class = show> ${characters.show} <h2>,
      <h2 class = class> ${characters.class} <h2>,
      <text class = strength>${characters.strength} <text>,
      <text class = weakness>${characters.weakness}<text>,
      <text class = cost>${characters.cost} </text>
      <div>
        `
      )
    );
  });
}

function FilterWeakness() {
  const Emotions = characters.filter(
    (characters) => (characters.weakness = Emotions)
  );

  weakness.addEventlistener("click", function () {
    Emotions.forEach((characters) =>
      insertAdjacentHtml(
        "afterbegin",
        `
      <div class = card>,
      <h1 class = name> Character: ${characters.name} <h1>,
      <image class = picture> ${characters.image} <image>,
      <h2 class = show> ${characters.show} <h2>,
      <h2 class = class> ${characters.class} <h2>,
      <text class = strength>${characters.strength} <text>,
      <text class = weakness>${characters.weakness}<text>,
      <text class = cost>${characters.cost} </text>
      <div>
        `
      )
    );
  });
}
