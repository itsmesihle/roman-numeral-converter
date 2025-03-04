const numberInput = document.getElementById("number");
/* const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

convertBtn.addEventListener("click", () =>
  // currently working on this callback
  {
    if (!numberInput.value) {
      outputDiv.innerText = "Please enter a valid number";
      console.log("Please enter a valid number");
    }
  }
); */

const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  console.log("HI ");
  const inputValue = userInput.value.trim(); // trim whitespace

  if (inputValue === "") {
    outputDiv.textContent = "Please enter a valid number";
  } else {
    //convert string to int using parseInt
    const intValue = parseInt(inputValue);
    if (isNaN(intValue)) {
      outputDiv.textContent = "Please enter a valid number";
    } else if (intValue < -1) {
      outputDiv.innerText = "Please enter a number greater than or equal to 1";
    }
  }
});
