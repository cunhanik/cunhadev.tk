document.getElementById("sessionBtn").addEventListener("click", function () {
  const userDataSession = document.getElementById("session");
  window.sessionStorage.setItem("info", userDataSession.value);
  userDataSession.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const userDataAlert = window.sessionStorage.getItem("info");
  alert(userDataAlert);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const userData2Local = document.getElementById("local");
  window.localStorage.setItem("txt", userData2Local.value);
  userData2Local.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const userDataAlert2 = window.localStorage.getItem("txt");
  alert(userDataAlert2);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const userData3Cookie = document.getElementById("cookie");
  //cookieName = value; expires=UTCStringDate; path=/;
  const cookie = `info=${userData3Cookie.value};`;
  const expiration = `expires=${new Date(2022, 11, 31)};`;
  const path = "path=/;";
  document.cookie = `${cookie}${expiration}${path}`;
  userData3Cookie.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const userData3Cookie2 = document.getElementById("cookie2");
  const cookie2 = `test=${userData3Cookie2.value};`;
  const expiration = `expires=${new Date(2023, 0, 1)}`;
  const path = "path=/;";
  document.cookie = `${cookie2}${expiration}${path}`;
  userData3Cookie2.value = "";
  console.log(document.cookie);
});
