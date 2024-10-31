import "../CSS/style.css";

function CreateCard() {
  characters.forEach((card) =>
    insertAdjacentHtml(
      "afterbegin",
      `
      <div class = card>,
      <h1 class = name> Character: ${character.name} <h1>,
      <image class = picture> ${character.image} <image>,
      <h2 class = show> ${character.show} <h2>,
      <h2 class = class> ${character.class} <h2>,
      <text class = strength>${character.strength} <text>,
      <text class = weakness>${character.weakness}<text>
        `
    )
  );
}
