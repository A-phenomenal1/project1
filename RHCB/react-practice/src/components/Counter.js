import React, { useEffect, useState } from "react";

function Counter() {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    let interval;
    if (secondsLeft) {
      interval = setInterval(() => convertIntoTime(secondsLeft), 1000);
    } else {
      return;
    }
    return () => {
      clearInterval(interval);
    };
  }, [secondsLeft]);

  const validateText = (time) => {
    // validating a number
    let hr = Number(time.hour);
    let min = Number(time.min);
    let sec = Number(time.sec);
    convertIntoSeconds(hr, min, sec);
  };

  const convertIntoSeconds = (hr, min, sec) => {
    //  convert the user input in seconds.
    let totalSeconds = hr * 3600 + min * 60 + sec;
    setSecondsLeft(totalSeconds);
  };

  // const subtractFromSeconds = (number) => {
  //   //subtract 1 from seconds and return rest of the number.
  //   if (number - 1 < 0) {
  //     return 0;
  //   }
  //   let newSeconds = number - 1;
  //   let result = convertIntoTime(newSeconds);
  //   return result;
  // };

  const convertIntoTime = (number) => {
    //time in seconds in hr: min: sec.
    let hour = Math.floor(number / 3600);
    let min = Math.floor((number % 3600) / 60);
    let sec = number - hour * 3600 - min * 60;
    setTime({
      hour,
      min,
      sec,
    });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <label style={{ fontWeight: 600, fontSize: 30 }}>Set Time: </label>
        <div>
          <input
            value={time.hour}
            onChange={(e) =>
              setTime((prev) => ({ ...prev, hour: e.target.value }))
            }
            min="0"
            step="1"
            placeholder="Hour"
            type="number"
          />
          <input
            value={time.min}
            onChange={(e) =>
              setTime((prev) => ({ ...prev, min: e.target.value }))
            }
            min="0"
            step="1"
            placeholder="Minute"
            type="number"
          />
          <input
            value={time.sec}
            onChange={(e) =>
              setTime((prev) => ({ ...prev, sec: e.target.value }))
            }
            min="0"
            step="1"
            placeholder="Second"
            type="number"
          />
        </div>
        <button onClick={() => validateText(time)}>Start</button>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px", fontWeight: 600 }}>
          <span>
            {/* {time.hour < 10 ? "0" : ""} */}
            {time.hour}
          </span>
          :
          <span>
            {/* {time.min < 10 ? "0" : ""} */}
            {time.min}
          </span>
          :
          <span>
            {/* {time.sec < 10 ? "0" : ""} */}
            {time.sec}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Counter;

//-----------------
