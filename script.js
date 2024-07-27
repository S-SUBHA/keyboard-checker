const body = document.querySelector("body");

function addElem(key, event) {
  const div = document.createElement("div");
  div.innerHTML = `<h2>${key} </h2>`;
  div.className = event;
  body.appendChild(div);
}

function key_press(event) {
  addElem(event.key === " " ? "Space" : event.key, event.type);
  // console.log(`key_down: ${event.key}`);
}

// function key_down(event) {
//   addElem(event.key === " " ? "Space" : event.key, event.type);
//   // console.log(`key_down: ${event.key}`);
// }

// function key_up(event) {
//   addElem(event.key, event.type);
//   // console.log(`key_up: ${event.key}`);
// }

body.addEventListener("keydown", key_press, false);
// body.addEventListener("keyup", key_up, false);
