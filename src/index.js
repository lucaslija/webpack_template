// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./odin.png";

console.log(greeting);

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);