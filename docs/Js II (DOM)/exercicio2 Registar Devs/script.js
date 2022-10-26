function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const btnAddTech = document.getElementById("btnAddTech");
const form = document.getElementById("form");
const developerList = [];
let inputRows = 0;

btnAddTech.addEventListener("click", function (event) {
  event.preventDefault();
  const ulStackInputs = document.getElementById("stackInputs");
  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;

  newRow.id = `inputRow-${rowIndex}`;
  newRow.className = `inputRow`;

  const techNameLabel = createLabel("Nome: ", `techName-${rowIndex}`);
  const techNameInput = createInput(
    `techName-${rowIndex}`,
    null,
    "techName",
    "text",
    "Escreve a teclonogia"
  );

  const expLabel = createLabel("Experiência: ");

  const expRadio1 = createInput(
    `exp1 ${rowIndex}`,
    "0-2 anos",
    `${rowIndex}`,
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", `exp1 ${rowIndex}`);

  const expRadio2 = createInput(
    `exp2 ${rowIndex}`,
    "3-4 anos",
    `${rowIndex}`,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", `exp2 ${rowIndex}`);

  const expRadio3 = createInput(
    `exp3 ${rowIndex}`,
    "+5 anos",
    `${rowIndex}`,
    "radio"
  );
  const expLabel3 = createLabel("5+ anos", `exp3 ${rowIndex}`);

  const removeRow = document.createElement("button");
  removeRow.type = "button";
  removeRow.innerText = "Remover linha";
  removeRow.addEventListener("click", function () {
    newRow.remove();
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRow
  );

  ulStackInputs.append(newRow);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      `#${row.id} input[name="techName"]`
    ).value;
    const techExp = document.querySelector(
      `#${row.id} input[type="radio"]:checked`
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { name: name.value, technologies: technologies };
  developerList.push(newDev);
  alert("Dev registado");

  name.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developerList);
});
