const birthDate = document.querySelector("#birthDate");
const luckyNum = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector(".output");

checkBtn.addEventListener("click", checkLuckyDay);

function checkLuckyDay(params) {

  outputDiv.style.display="none"; 
  let birthDateValue = birthDate.value;
  let luckyNumValue = Number(luckyNum.value);
  let sum = 0;

  const dateArray = birthDateValue.split("-");

  if (luckyNumValue > 0 && birthDateValue != "") {
    dateArray.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
        console.log(sum);
      }

      if (sum % luckyNumValue == 0) {
        outputDiv.style.display="block";
        outputDiv.innerText = "Your birthday is lucky 😊";
      } else {
        outputDiv.style.display="block";
        outputDiv.innerText = "Your birthday is not lucky 😔";
      }
    });
  } else {
    outputDiv.style.display="block";
    outputDiv.innerText="Enter the valid inputs";
  }
}
