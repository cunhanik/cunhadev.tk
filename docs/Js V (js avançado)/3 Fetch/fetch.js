const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const poke = document.getElementById("pokeInput");
  const key = poke.value.toLowerCase();
  poke.value = "";
  fetch(`https://pokeapi.co/api/v2/pokemon/${key}`)
    .then((resp) => {
      resp.json().then((respJson) => {
        const div = document.querySelector(".info");
        const h4 = document.createElement("h4");
        console.log(respJson.types[0]["type"]["name"]);
        h4.innerText = `${key.toUpperCase()} Type: ${
          respJson.types[0]["type"]["name"]
        }`;
        div.append(h4);
      });
    })
    .catch((err) => {
      const div = document.querySelector(".info");
      const h4 = document.createElement("h4");
      console.log("Error: " + err);
      h4.innerText = "Error: " + err;
      div.append(h4);
    });
});
