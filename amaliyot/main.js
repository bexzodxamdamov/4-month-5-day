title.setAttribute("salom", "whats upp");
// ----------------" key ","  value  "

let div = document.createElement("div");

let p = document.createElement("p");

p.textContent = `Lorem pjerjgapejrg reeogjsreopg ogjeropgerfdv`;

p.className = "text main-text";
p.id = 1;

div.append(div);
div.append(p);

document.body.append(div);

// title.before("qale");

// document.body.append("<li>salom </li>");

setTimeout(() => {
  div.remove();
}, 3000);
