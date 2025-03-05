const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

// resets everything to null after x seconds => setTimeout inside function convert
const reset = () => {
  inputValue.textContent = "";
  outputDiv.textContent = "";
};

/* const convertToRoman = () => {
  // setTimeout to be executed 10 sec after converttoroman
    setTimeout(reset, 10000);
}; */

convertBtn.addEventListener("click", () => {
  const inputValue = userInput.value.trim(); // trim whitespace

  // convert string to int using parseInt
  const intValue = parseInt(inputValue);

  if (inputValue === "") {
    outputDiv.textContent = "Please enter a valid number";
  } else if (intValue === -1 || isNaN(intValue) || intValue < 1) {
  /*  if (inputValue === "") {
      outputDiv.textContent = "Please enter a valid number";
  } */
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
  } else if (intValue >= 4000) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
  } else {
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
  }
});
