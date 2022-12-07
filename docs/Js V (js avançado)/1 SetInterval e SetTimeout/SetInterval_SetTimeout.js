const btnSetTimeout = document.getElementById("setTimeout");
const btnStopTimeout = document.getElementById("stopTimeout");
const btnSetInterval = document.getElementById("setInterval");
const btnStopInterval = document.getElementById("stopInterval");

//função setTimeout
btnSetTimeout.addEventListener("click", () => {
  stopSetTimeout = setTimeout(() => {
    alert("2ª Mensagem!");
  }, 3000);
  alert("Daqui a 3 segundos há uma segunda mensagem!");
});

//função stop Timeout
btnStopTimeout.addEventListener("click", () => {
  clearTimeout(stopSetTimeout);
});

//função setInterval
let seconds = 0;
btnSetInterval.addEventListener("click", () => {
  stopSetInterval = setInterval(() => {
    seconds += 3;
    alert(`Passou 3 segundos! 
    Total: ${seconds}`);
    if (seconds >= 9) {
      clearInterval(stopSetInterval);
    }
  }, 3000);
  alert("De 3 em 3 segundos, até aos 9 vai passar uma mensagem");
});

//função stop Interval
btnStopInterval.addEventListener("click", () => {
  clearInterval(stopSetInterval);
});
