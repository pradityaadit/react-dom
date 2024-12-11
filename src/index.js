import React from "react";
import ReactDom from "react-dom/client";

const element = document.getElementById("root");
const root = ReactDom.createRoot(element);

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

root.render(<App />);
