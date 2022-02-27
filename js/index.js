const calculate = document.getElementById("send");

const calculateAge = () => {
  // date of bith
  const dayOfBirth = document.getElementById("day");
  const monthOfBirth = document.getElementById("month");
  const yearOfBirth = document.getElementById("year");

  // current date
  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  console.log(currentDay, currentMonth, currentYear);
};

calculate.addEventListener("click", () => {
  calculateAge();
});
