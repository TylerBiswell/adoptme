import React from "react";
import { render } from "react-DOM";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Jasmine",
      animal: "Dog",
      breed: "Healer"
    }),
    React.createElement(Pet, {
      name: "Blue",
      animal: "Dog",
      breed: "Mixed Healer"
    }),
    React.createElement(Pet, {
      name: "Eevee",
      animal: "Cat",
      breed: "Seimese"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
