const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input");
const box = document.querySelector(".box");

const users = [];

function render() {
  box.innerHTML = "";
  users.forEach((el) => {
    let container = document.createElement("ul");
    container.innerHTML = `<li>${el.name}</li>
    <li>${el.age}</li>
    <li${el.email}></li>
    <li>${el.number}</li>
    <li>
      <button >edit</button>
      <button id =${el.id}>delete</button>
    </li>
    `;

    box.append(container);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {};

  for (let i of inputs) {
    obj[i.name] = i.value;
    obj.id = users.length + 1;
    i.value = "";
  }

  users.push(obj);
  render();
});
