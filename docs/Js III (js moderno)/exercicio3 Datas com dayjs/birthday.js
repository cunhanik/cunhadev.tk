const dayjs = require("dayjs");

function birthday(date) {
  const today = dayjs();
  const birthday = dayjs(date);
  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToBirthday = nextBirthday.diff(today, "days") + 1;

  console.log(`Tens ${ageInYears} anos.`);
  console.log(`Proximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(`Faltam ${daysToBirthday} dias para o teu aniversário.`);
}

birthday("1996-09-07");