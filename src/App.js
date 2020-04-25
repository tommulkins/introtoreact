import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Foxy",
      animal: "Dog",
      breed: "Shiba Inu"
    }),
    React.createElement(Pet, { name: "Isa", animal: "Cat", breed: "Tabby" }),
    React.createElement(Pet, { name: "Fluffy", animal: "Dog", breed: "Mixed" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
