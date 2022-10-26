function register(event) {
  const div = event.currentTarget.parentNode;
  const name = div.children.name.value;
  const password = div.children.password.value;
  const passwordConfirm = div.children.passwordConfirm.value;

  if (password === passwordConfirm) {
    alert(`successfully registered!\n\nWelcome: ${name}`);
  } else {
    alert(`Invalid Passwords.\n\nTry Again!`);
  }
}

const btnRegister = document.getElementById("registerBtn");
btnRegister.addEventListener("click", register);

function removeEvent() {
  btnRegister.removeEventListener("click", register);
  alert("Event Removed");
}

const otherEvent = document.getElementById("otherEvent");
otherEvent.addEventListener("click", function (event) {
  console.log(event.currentTarget.parentNode);
  alert("Other Event Activated!\n\nCheck the console.");
});
