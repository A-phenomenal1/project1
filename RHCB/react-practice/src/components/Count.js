import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const counter = () => {
    let interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return interval;
  };

  useEffect(() => {
    const interval = counter();
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h1>{count < 10 ? "0" + count : count}</h1>
      {/* <button onClick={counter}> click</button> */}
    </div>
  );
}

export default Count;
