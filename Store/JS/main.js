import "../CSS/style.css";
import { characters } from "../JS/characters";

const DomSelectors = {
  warriorclass: document.querySelector(".class"),
  all: document.querySelector(".all"),
  sale: document.querySelector(".sale"),
  weakness: document.querySelector(".weakness"),
  container: document.querySelector(".container"),
};

function inserttoHTML() {
  characters.forEach((character) => {
    const CardHTML = `<div class = card>
        <h1 class = "name"> Character: ${character.name} </h1>
        <img class = "picture" src="${character.image}>
        <h2 class = "show"> Anime: ${character.show} </h2>
        <h2 class = "class"> Class: ${character.class} </h2>
        <p class = "strength"> Strength: ${character.strength} </p>
        <p class = "weakness"> Weakness: ${character.weakness} </p>
        <p class = "cost">Cost: ${character.cost} coins </p>
        </div>`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}

inserttoHTML();

// function Classfilter() {
//   const Warrior = characters.filter(
//     (characters) => (characters.class = Warrior)
//   );

//   warriorclass.addEventlistener("click", function () {
//     Warrior.forEach((characters) =>
//       insertAdjacentHtml(
//         "afterbegin",
//         `
//       <div class = card>,
//       <h1 class = name> Character: ${characters.name} <h1>,
//       <image class = picture> ${characters.image} <image>,
//       <h2 class = show> ${characters.show} <h2>,
//       <h2 class = class> ${characters.class} <h2>,
//       <text class = strength>${characters.strength} <text>,
//       <text class = weakness>${characters.weakness}<text>,
//       <text class = cost>${characters.cost} </text>
//       <div>
//         `
//       )
//     );
//   });
// }

// function Sale() {
//   const Speed = characters.filter(
//     (characters) => (characters.strength = Speed)
//   );

//   const discount = Speed.cost.map((x) => x * 0.75);

//   sale.addEventlistener("click", function () {
//     Speed.forEach((characters) =>
//       insertAdjacentHtml(
//         "afterbegin",
//         `
//       <div class = card>,
//       <h1 class = name> Character: ${characters.name} <h1>,
//       <image class = picture> ${characters.image} <image>,
//       <h2 class = show> ${characters.show} <h2>,
//       <h2 class = class> ${characters.class} <h2>,
//       <text class = strength>${characters.strength} <text>,
//       <text class = weakness>${characters.weakness}<text>,
//       <text class = cost>${characters.cost} </text>
//       <div>
//         `
//       )
//     );
//   });
// }

// function FilterWeakness() {
//   const Emotions = characters.filter(
//     (characters) => (characters.weakness = Emotions)
//   );

//   weakness.addEventlistener("click", function () {
//     Emotions.forEach((characters) =>
//       insertAdjacentHtml(
//         "afterbegin",
//         `
//       <div class = card>,
//       <h1 class = name> Character: ${characters.name} <h1>,
//       <image class = picture> ${characters.image} <image>,
//       <h2 class = show> ${characters.show} <h2>,
//       <h2 class = class> ${characters.class} <h2>,
//       <text class = strength>${characters.strength} <text>,
//       <text class = weakness>${characters.weakness}<text>,
//       <text class = cost>${characters.cost} </text>
//       <div>
//         `
//       )
//     );
//   });
// }

//includes can also be used
