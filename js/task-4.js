let counterValue = 0;
function increment() {
  counterValue += 1;
  HtmlCounterValue.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  HtmlCounterValue.textContent = counterValue;
}
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const HtmlCounterValue = document.querySelector("#value");

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);
