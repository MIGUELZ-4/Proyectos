let input = document.querySelector("input");
let addBtn = document.querySelector(".btn-add");
let ul = document.querySelector("ul");
let empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    let item = e.target.parentElement;
    ul.removeChild(item);

    let items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}