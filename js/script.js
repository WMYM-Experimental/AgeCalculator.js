// GLOBAL VARIABLES
const calc = document.getElementById("send");
const input = document.getElementById("date-input");
const months = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const reset = () => {
  // reset values
  const out = Array.from(document.getElementsByClassName("out"));
  out.forEach((e) => {
    e.textContent = "_";
  });
  console.log(out);
};

const checkDateValidity = (birthDate, todayDate) => {
  if (birthDate.getTime() > todayDate.getTime()) {
    alert("Incorrect Date, date reseted, try again");
    return false;
  }
  return true;
};

const isLeapYear = (date) => {
  if (date.leapYear) {
    months[date.month] = 29;
  } else {
    months[date.month] = 28;
  }
  return false;
};

const calculateAge = () => {
  let birthDate = new Date(input.value);
  let todayDate = new Date();

  let validBirthDate = checkDateValidity(birthDate, todayDate);

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
  console.log(validBirthDate);

  if (validBirthDate) {
    // start calculating
    birth.year = today.year - birth.year;

    isLeapYear(birth);

    if (today.month >= birth.month) {
      birth.month = today.month - birth.month;
    } else {
      birth.year = birth.year - 1;
      birth.month = 12 + today.month - birth.month;
    }

    if (today.day >= birth.day) {
      birth.day = today.day - birth.day;
    } else {
      birth.month = birth.month - 1;
      birth.day = months[today.month - 1] + today.day - birth.day;
    }
  } else {
    // reset if its not
    reset();
    input.value = "2002-01-24";
  }

  console.log(birth);
  console.log(today);
  console.log(validBirthDate);
};

// LOGIC FUNCTIONS

// EVENTS
calc.addEventListener("click", calculateAge);
input.addEventListener("click", reset);
