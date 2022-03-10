const calc = document.getElementById("send");
const input = document.getElementById("date-input");

const calculateAge = () => {
  let birthDate = new Date(document.getElementById("date-input").value);
  let todayDate = new Date();

  if (birthDate.getTime() > todayDate.getTime()) {
    alert("Incorrect Date, try again");
    return null;
  }

  const today = {
    day: todayDate.getDate(),
    month: todayDate.getMonth() + 1,
    year: todayDate.getFullYear(),
    leapYear: false,
  };

  const birth = {
    day: birthDate.getDate() + 1,
    month: birthDate.getMonth() + 1,
    year: birthDate.getFullYear(),
    leapYear: false,
  };
  console.log(birth);
  console.log(today);
};

const reset = () => {
  input.textContent = 0;
};

calc.addEventListener("click", calculateAge);
input.addEventListener("click", reset);
