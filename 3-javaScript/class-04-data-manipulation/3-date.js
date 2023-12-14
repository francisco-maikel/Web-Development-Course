const dateNowMillisec = new Date().getTime();
const dateNow = new Date();

console.log(dateNowMillisec);
console.log(dateNow.toLocaleString("pt-br"));
console.log(dateNow.toLocaleDateString("pt-br"));
console.log(dateNow.toLocaleTimeString("pt-br"));

console.log(dateNow.getDay());
console.log(dateNow.getDate());
console.log(dateNow.getMonth());
console.log(dateNow.getFullYear());

dateNow.setDate(dateNow.getDate() + 1);
dateNow.setMonth(dateNow.getMonth() + 2);
dateNow.setFullYear(dateNow.getFullYear() + 3);

console.log(dateNow.toLocaleDateString("pt-br"));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

dateNow.setHours(dateNow.getHours() + 23)
dateNow.setHours(dateNow.getMinutes() + 60);
dateNow.setSeconds(dateNow.getSeconds() + 60);
dateNow.setMilliseconds(dateNow.getMilliseconds() + 1000);

console.log(dateNow.toLocaleTimeString("pt-br")+ ":" + 
dateNow.getMilliseconds());
console.log(dateNow);

console.log(
  dateNow.toLocaleDateString("pt-BR", {
    weekday:"long",
    day:"2-digit",
    month:"short",
    year:"numeric",
  })
);

const date1 = new Date("2023-12-27");
const date2 = new Date("2023-09-25");
console.log((date1 - date2) / 1000 / 60 / 60 / 24);