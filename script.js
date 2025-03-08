const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

// resets everything to null after x seconds => setTimeout inside function convert
const reset = () => {
  inputValue.textContent = "";
  outputDiv.textContent = "";
};

const validateInput = (inputValue, intValue) => {
  if (inputValue === "") {
    outputDiv.textContent = "Please enter a valid number";
    return false;
  } else if (intValue === -1 || isNaN(intValue) || intValue < 1) {
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
    return false;
  } else if (intValue >= 4000) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
    return false;
  }
  return true; // validation passed
};

convertBtn.addEventListener("click", () => {
  validateInput();
  const inputValue = userInput.value.trim(); // trim whitespace

  // convert string to int using parseInt
  const intValue = parseInt(inputValue);

  const numeralArr = intValue.toString().split("").reverse();
  const romanArr = [];

  switch (numeralArr[0]) {
    case "1":
      romanArr.push("I");
      break;
    case "2":
      romanArr.push("II");
      break;
    case "3":
      romanArr.push("III");
      break;
    case "4":
      romanArr.push("IV");
      break;
    case "5":
      romanArr.push("V");
      break;
    case "6":
      romanArr.push("VI");
      break;
    case "7":
      romanArr.push("VII");
      break;
    case "8":
      romanArr.push("VIII");
      break;
    case "9":
      romanArr.push("IX");
      break;
  }

  switch (numeralArr[1]) {
    case "1":
      romanArr.push("X");
      break;
    case "2":
      romanArr.push("XX");
      break;
    case "3":
      romanArr.push("XXX");
      break;
    case "4":
      romanArr.push("XL");
      break;
    case "5":
      romanArr.push("L");
      break;
    case "6":
      romanArr.push("LX");
      break;
    case "7":
      romanArr.push("LXX");
      break;
    case "8":
      romanArr.push("LXXX");
      break;
    case "9":
      romanArr.push("XC");
      break;
  }
  switch (numeralArr[2]) {
    case "1":
      romanArr.push("C");
      break;
    case "2":
      romanArr.push("CC");
      break;
    case "3":
      romanArr.push("CCC");
      break;
    case "4":
      romanArr.push("CD");
      break;
    case "5":
      romanArr.push("D");
      break;
    case "6":
      romanArr.push("DC");
      break;
    case "7":
      romanArr.push("DCC");
      break;
    case "8":
      romanArr.push("DCCC");
      break;
    case "9":
      romanArr.push("CM");
      break;
  }
  switch (numeralArr[3]) {
    case "1":
      romanArr.push("M");
      break;
    case "2":
      romanArr.push("MM");
      break;
    case "3":
      romanArr.push("MMM");
      break;
  }
  const romanDisplay = romanArr.reverse().join("");
  outputDiv.textContent = romanDisplay;
});

// Enter = convertToButton
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertToRoman();
  }
});
