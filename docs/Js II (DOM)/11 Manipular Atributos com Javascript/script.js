const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = input.value === "" ? "hello, World!" : "";

  console.log(input.value); //Recebe o valor em tempo real
  console.log(input.getAttribute("value")); //Recebe o valor que está no html. Agora diz null, mas vamos colocar um value no html daquele input
});

document.getElementById("type").addEventListener("click", function () {
  //input.type = input.type !== "radio" ? "radio" : "text";

  input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Escreve alguma coisa...";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data1 = input.dataset.something;
  console.log(`O valor do data-something é ${data1}`);

  const data2 = input.dataset.somethingElse;
  console.log(`O valor do data-something-Else é ${data2}`);

  input.dataset.somethingBirthday = "07/09";
  console.log(
    `O valor do data-something-birthday é ${input.dataset.somethingBirthday}`
  );
});
