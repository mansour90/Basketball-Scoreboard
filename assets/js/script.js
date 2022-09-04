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
}

function add2Home() {
  let result = countHome += 2;
  home.textContent = result;
}

function add3Home() {
  let result = countHome += 3;
  home.textContent = result;
}
function add1Guest() {
  let result = countGuest += 1;
  guest.textContent = result;
}

function add2Guest() {
  let result = countGuest += 2;
  guest.textContent = result;
}

function add3Guest() {
  let result = countGuest += 3;
  guest.textContent = result;
}

function reset() {
  home.textContent = 0;
  guest.textContent = 0;
  countHome = 0;
  countGuest = 0;
}

if(countHome.innerHTML >= 10) {
msg.textContent = "Team Home wins the Game!"
msg.style.display= "block"
console.log("home")
}

function closePopUp() {
  msg.style.display = "none";
  console.log("heui")
}
console.log(countHome)
console.log(countHome)

localeStorage.setItem("homeScore", countHome)