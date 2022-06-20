import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Greeting from "./components/Greeting";
import Lists from "./components/Lists";

function App() {
  const [isPresent, seIsPresent] = useState(false);

  const alertFunction = () => {
    alert("this is an alert from Parent.");
  };

  const fruits = ["Apple", "Mango", "PineApple", "Guava", "Pears"];

  return (
    <div className="App">
      <Form />

      {/* <button onClick={() => seIsPresent((prev) => !prev)}>
        {isPresent ? "Logout" : "Login"}
      </button> */}
    </div>
  );
}

export default App;
