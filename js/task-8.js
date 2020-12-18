{
  /*<div id="controls">
    <input type="number" min="0" max="100" step="1" />
    <button type="button" data-action="render">Создать</button>
    <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>*/
}

const controls = document.querySelector("#controls");
console.log(controls);
const inputRef = document.querySelector("#controls > input");
console.log(inputRef);
const buttonRender = document.querySelector('button[data-action="render"]');
console.log(buttonRender);
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
console.log(buttonDestroy);

let box;
function createBoxes(amount) {
  let box = document.createElement("div");
  box.style.width = 30 + "px";
  return box;
}
console.log(createBoxes(1));

controls.insertAdjacentElement("beforeend", createBoxes());

function destroyBoxes() {}

buttonRender.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
