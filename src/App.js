import React from "react";
import { render } from "react-DOM";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Jasmine" animal="Dog" breed="Healer" />
      <Pet name="Blue" animal="Dog" breed="Mixed Healer" />
      <Pet name="Eevee" animal="Cat" breed="Siamese" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
