/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["loro", "hermano", "sobrino", "perro", "gato", "oveja"];
  let action = ["se comió", "quemo", "perdio", "rallo", "partio", "mojo"];
  let what = [
    "mi ropa",
    "tu bolso",
    "su telefono",
    "la camputadora",
    "tu tarea",
    "mis zapatos"
  ];
  let why = [
    "tenia hambre",
    "odia al patriarcado",
    "no esta de acuerdo con la politica",
    "le parecio sabrosa",
    "estaba aburrido",
    "no le gusto"
  ];

  let excuseP = document.querySelector("#excuse");
  excuseP.textContent =
    "Mi" +
    " " +
    who[Math.floor(Math.random() * 6)] +
    " " +
    action[Math.floor(Math.random() * 6)] +
    " " +
    what[Math.floor(Math.random() * 6)] +
    " " +
    "porque " +
    why[Math.floor(Math.random() * 6)];

  console.log("Hello Rigo from the console!");
};
