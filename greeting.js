const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// localStorage에 값을 저장한다.
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// submit event가 일어나면 greeting 요소를 화면에 표시하고 input 값을 localStorage에 저장한다.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// form 요소를 화면에 표시하고 submit event를 감지한다.
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

// greeting 요소를 화면에 표시한다.
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

// localStorage에 저장된 currentUser 값에 따라 분기하여 함수를 호출한다.
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // currentUser 값이 없는 경우
    askForName();
  } else {
    // currentUser 값이 있는 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();