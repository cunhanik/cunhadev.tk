let queue = [];
let option = "";

do {
  let person = "";
  for (let i = 0; i < queue.length; i++) {
    person += i + 1 + "º - " + queue[i] + "\n";
  }
  option = prompt(
    `Pacientes:\n${person}\n1. Add Paciente\n2. Completed medical check\n3. Exit`
  );

  if (option == "1") {
    const newPerson = prompt("Nome: ");
    queue.push(newPerson);
  } else if (option == "2") {
    const personFinish = queue.shift();
    if (personFinish.length > 0) {
      alert(`O paciente ${personFinish} acabou a consulta.`);
    } else {
      alert(`Não há pacientes na fila`);
    }
  } else if (option > 3) {
    alert("Opção invalida.");
  }
} while (option !== "3");

alert("Obrigado");
