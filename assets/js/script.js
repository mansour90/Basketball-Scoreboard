let home = document.getElementById("home");
let guest = document.getElementById("guest");
let resetbtn = document.getElementById("reset");
let closeBtn = document.getElementById("close");
let msg = document.getElementById("msg");

let countHome = 0;
let countGuest = 0;

home.textContent= countHome;
guest.textContent = countGuest;

function add1Home() {
  let result = countHome += 1;
  home.textContent = result;
  window.localStorage.setItem("scoreHome", home.textContent)
}

if(window.localStorage.getItem("scoreHome")) {
home.textContent = window.localStorage.getItem("scoreHome")
}else if (window.localStorage.getItem('scoreGuest')) {
  guest.textContent = window.localStorage.getItem('scoreGuest');
}

function add2Home() {
  let result = countHome += 2;
  home.textContent = result;
  window.localStorage.setItem("scoreHome", home.textContent)
}

function add3Home() {
  let result = countHome += 3;
  home.textContent = result;
  window.localStorage.setItem("scoreHome", home.textContent)
}
function add1Guest() {
  let result = countGuest += 1;
  guest.textContent = result;
  window.localStorage.setItem("scoreGuest", guest.textContent)
}

function add2Guest() {
  let result = countGuest += 2;
  guest.textContent = result;
  window.localStorage.setItem("scoreGuest", guest.textContent)
}

function add3Guest() {
  let result = countGuest += 3;
  guest.textContent = result;
  window.localStorage.setItem("scoreGuest", guest.textContent)
}

function reset() {
  home.textContent = 0;
  guest.textContent = 0;
  countHome = 0;
  countGuest = 0;
  localStorage.clear()
}


// function closePopUp() {
//   msg.style.display = "none";
//   console.log("heui")
// }
