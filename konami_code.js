const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  konamiListener();
}

function konamiListener() {
let body = document.querySelector('body')
 body.addEventListener('keydown', konami);
}

let index = 0;

function konami(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      console.log("congrats");
      window.alert("Congrats");

      index = 0;
    }
  } else {
    index = 0;
  }
}
