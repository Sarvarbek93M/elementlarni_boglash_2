"use strict";

const parentDiv = document.querySelector(".parent"),
  circle = document.querySelectorAll(".circle");
const div = document.createElement("div");

div.classList.add("circle");
div.style.background = "yellow";

//circle[0].after(div);
//circle[0].before(div);

circle[0].remove();

// parentDiv.append(div); // elementni oxiriga qushib beradi
// parentDiv.prepend(div); // elementni boshiga qushib beradi

console.log(div);
