import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Foxy" animal="Dog" breed="Shiba Inu" />
      <Pet name="Isa" animal="Cat" breed="Tabby" />
      <Pet name="Fluffy" animal="Dog" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
