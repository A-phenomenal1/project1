import React, { useRef, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  //   const [passYr, setPassYr] = useState("");
  //   const [pass, setpass] = useState("");

  const passYr = useRef("");
  const password = useRef("");

  return (
    // <div>
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <label>Name: </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="name"
        placeholder="Name"
      />
      <label>Branch: </label>
      <input
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        type="text"
        placeholder="branch of student"
      />
      <label>Passing year: </label>
      <input
        value={passYr.Current}
        onChange={(e) => (passYr.Current = e.target.value)}
        type="date"
        placeholder="Passing year"
      />
      <label>Password:</label>
      <input
        value={password.Current}
        onChange={(e) => (password.Current = e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button>Submit</button>
    </form>
    // </div>
  );
}

export default Form;
