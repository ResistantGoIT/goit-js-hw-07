/*<input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1>*/

const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  nameInput.value
    ? (nameOutput.textContent = e.target.value)
    : (nameOutput.textContent = "незнакомец");
});
