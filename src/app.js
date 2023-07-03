/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn"),
    addEventListener("click", () => {
      document.querySelector("#the-excuse").innerHTML = generateExcuse();
    });
};

let generateExcuse = () => {
  let pronoun = ["The", "One", "A"];
  let subject = [
    "zombie",
    "snake",
    "yogi",
    "terrorist",
    "president of the Goverment",
    "policeman",
    "arqueologist"
  ];
  let action = [
    "arrested my sister",
    "spit on my eye",
    "was playing chess",
    "tryied to bite me",
    "wanted to watch South Park with me",
    "was cutting my nails",
    "broke up with the boyfriend"
  ];
  let where = [
    "in the supermarket",
    "at the bus stop",
    "on the street",
    "on my couch",
    "in the cinema",
    "in my van",
    "in a bar's toilet"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let wheIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    where[wheIndx] +
    "."
  );
};
