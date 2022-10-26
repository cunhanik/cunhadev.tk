function registar(elements) {
  const name = elements.children.name.value;
  const password = elements.children.password.value;
  const passwordConfirm = elements.children.passwordConfirm.value;

  console.log({ name, password, passwordConfirm });

  if (password === passwordConfirm) {
    alert(`Conta Registada com sucesso!\n\nBem-vindo: ${name}`);
  } else {
    alert(`Passwords diferentes.\n Tenta outra vez!`);
  }
}
