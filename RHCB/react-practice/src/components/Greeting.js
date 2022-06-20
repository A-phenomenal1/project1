import React, { useState } from "react";

function Greeting(props) {
  const [message, setMessage] = useState({ greet: "Hello" });
  console.log(props);
  let { greet } = message;
  let { fName, lName, prof, alertFun } = props;
  return (
    <div>
      <h1>
        {greet} {fName} {lName}
      </h1>
      <button onClick={() => setMessage((prev) => ({ ...prev, greet: "bye" }))}>
        Leave
      </button>
      <div>
        <button onClick={alertFun}>Alert From Parent</button>
      </div>
    </div>
  );
}

export default Greeting;
