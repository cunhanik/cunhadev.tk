const input = document.getElementById("input");
const div = document.getElementById("div");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const inputValue = input.value;
  input.value = "";
  fetch(`https://jsonplaceholder.typicode.com/users/${inputValue}`)
  .then((response) => response.json()
  .then((responseJson) => {
        const h4 = document.createElement("h4");
        h4.innerText = `id: ${responseJson.id}\nName: ${responseJson.username}\nEmail: ${responseJson.email}`;
        div.append(h4);
      })
  );
});


const input2 = document.getElementById("input2");
const div2 = document.getElementById("div2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", async () => {
  const inputValue2 = input2.value;
  input2.value = "";
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${inputValue2}`);
  const data = await response.json();
  const h4 = document.createElement("h4");
  h4.innerText = `id: ${data.id}\nName: ${data.username}\nEmail: ${data.email}`;
  div2.append(h4);
});

//Trabalhar com o catch
/*
btn2.addEventListener("click", try { 
  async () => {
  const inputValue2 = input2.value;
  input2.value = "";
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${inputValue2}`);
  const data = await response.json();
  const h4 = document.createElement("h4");
  h4.innerText = `id: ${data.id}\nName: ${data.username}\nEmail: ${data.email}`;
  div2.append(h4);
});
}catch(error){
  console.error(`Error: ${error}`)
};
*/