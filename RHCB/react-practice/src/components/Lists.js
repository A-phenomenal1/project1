import React from "react";

function Lists(props) {
  return (
    <div>
      <ul>
        {props.fruits.map((fruit, i) => {
          return (
            <li
              key={i}
              style={{
                backgroundColor: "gray",
                color: "red",
                listStyle: "none",
              }}
            >
              This is {fruit}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Lists;
