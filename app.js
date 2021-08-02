const birthDate = document.querySelector("#birthDate");
const luckyNum = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector(".output")

checkBtn.addEventListener("click", checkLuckyDay);

function checkLuckyDay(params) {
    
    let birthDateValue = birthDate.value;
    let luckyNumValue = Number(luckyNum.value);
    let sum = 0;
    const dateArray = birthDateValue.split("-")

    dateArray.map((string) => {
      
        for (let i = 0; i < string.length; i++) {
            
            sum = sum + Number(string[i]);
            console.log(sum)
        }

    })

  if (sum % luckyNumValue == 0) {
      output.innerText = "Your birthday is lucky";
  } else {
    output.innerText = "Your birthday is not lucky";
  }

    

}
