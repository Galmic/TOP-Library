document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  const button = document.querySelector("button");

  function checkInputs() {
    let allFilled = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });
    button.disabled = !allFilled;
  }

  inputs.forEach((input) => {
    input.addEventListener("input", checkInputs);
  });
});
