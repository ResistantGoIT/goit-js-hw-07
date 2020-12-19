// блок 8 задания
const controls = document.querySelector("#controls");

// поле ввода количества квадратов
const inputRef = document.querySelector("#controls > input");
  

// кнопка создания блоков
const buttonRender = document.querySelector('button[data-action="render"]');

// кнопка удаления квадратов
const buttonDestroy = document.querySelector('button[data-action="destroy"]');

// блок появления квадратов
const box = document.querySelector('#boxes');

// функция создания квадратов
function createBoxes(amount) {
  // функция получения цвета
  const getColor =  () => `rgb(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)}
  )`
    for (let i = 0; i < amount; i += 1) {
      let square = document.createElement("div");
      square.style.width = `${30 + i * 10}px`;
      square.style.height = `${30 + i * 10}px`;
      square.style.backgroundColor = `${getColor()}`;
      box.style.display = `flex`;
      box.append(square);
  }
  
}

const createValue = () => createBoxes(inputRef.value);


// функция удаления квадратов
function destroyBoxes() {
  inputRef.value = '';
  box.innerHTML = '';
}

buttonRender.addEventListener("click", createValue);
buttonDestroy.addEventListener("click", destroyBoxes);

