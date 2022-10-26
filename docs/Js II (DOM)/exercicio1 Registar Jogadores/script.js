function addPlayer() {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const jersey = document.getElementById("jersey").value;

  let conf = confirm(
    `are you sure you want add this player?\n\nName: ${name}\nPosisition: ${position}\nJersey number: ${jersey}`
  );
  if (conf) {
    const team = document.getElementById("teamList");
    const playerLi = document.createElement("li");
    playerLi.id = `player ${name} ${position} ${jersey}`;
    playerLi.innerText = `${name}: ${position} (${jersey}) `;
    team.appendChild(playerLi);

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    document.getElementById("jersey").value = "";
  }
}

function removePlayer() {
  const name = document.getElementById("nameToRemove").value;
  const position = document.getElementById("positionToRemove").value;
  const jersey = document.getElementById("jerseyToRemove").value;
  const playerRemove = document.getElementById(
    `player ${name} ${position} ${jersey}`
  );

  const conf = confirm(
    `are you sure you want remove this player?\n\nName: ${name}\nPosition: ${position}\nJersey: ${jersey}`
  );

  if (conf) {
    const teamList = document.getElementById("teamList");
    teamList.removeChild(playerRemove);
    //playerRemove.remove()
    document.getElementById("nameToRemove").value = "";
    document.getElementById("positionToRemove").value = "";
    document.getElementById("jerseyToRemove").value = "";
  }
}
