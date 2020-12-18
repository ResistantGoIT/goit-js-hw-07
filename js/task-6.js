const inputText = document.querySelector("#validation-input");
let dataLength = Number(inputText.dataset.length);
inputText.addEventListener("change", (e) => {
  if (inputText.value.length === dataLength) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
