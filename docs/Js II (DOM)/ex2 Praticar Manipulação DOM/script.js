function addContact() {
  const contactDiv = document.getElementById("contacts-list");

  const h3 = document.createElement("h3");
  h3.innerText = "Contact: ";
  const newUl = document.createElement("ul");

  const nameLi = document.createElement("li");
  nameLi.innerHTML = "<label for='name' id='label-Name'>Name: </label>";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "name";
  nameLi.appendChild(inputName);
  newUl.appendChild(nameLi);
  newUl.appendChild(document.createElement("br"));

  const phoneNumberLi = document.createElement("li");
  phoneNumberLi.innerHTML =
    "<label for='number' id='label-Name'>Phone Number: </label>";
  const inputPhoneNumber = document.createElement("input");
  inputPhoneNumber.type = "text";
  inputPhoneNumber.id = "number";
  phoneNumberLi.appendChild(inputPhoneNumber);
  newUl.appendChild(phoneNumberLi);
  newUl.appendChild(document.createElement("br"));

  const addressLi = document.createElement("li");
  addressLi.innerHTML = "<label for='adress' id='label-Name'>Address: </label>";
  const inputAddress = document.createElement("input");
  inputAddress.type = "text";
  inputAddress.id = "number";
  addressLi.appendChild(inputAddress);
  newUl.appendChild(addressLi);
  newUl.appendChild(document.createElement("br"));

  const btnSave = document.createElement("button");
  btnSave.type = "button";
  btnSave.innerText = "Save";
  newUl.appendChild(btnSave);

  contactDiv.append(h3, newUl);
}

function removeContact() {
  const contactDiv = document.getElementById("contacts-list");

  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactDiv.removeChild(titles[titles.length - 1]);
  contactDiv.removeChild(contacts[contacts.length - 1]);
}
