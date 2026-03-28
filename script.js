const newinput = document.getElementById("space");
const button = document.getElementById("buttonadd");
const todo = document.getElementById("todo");
const counter = document.getElementById("counter");

function newelements() {
  if (newinput.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = newinput.value;
    todo.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  newinput.value = "";
  savedata();
}
todo.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false,
);

function savedata() {
  localStorage.setItem("data", todo.innerHTML);
}
function show() {
  todo.innerHTML = localStorage.getItem("data");
}
show();
