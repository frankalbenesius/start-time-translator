import React, { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");

  function handleTimeChange(e) {
    e.preventDefault();
    setTime(e.target.value);
  }

  const [hours, minutes] = time.split(":");
  let actual = "";
  if (hours && minutes) {
    const h = parseInt(hours);
    const m = parseInt(minutes);
    const isPm = h >= 12;
    const fixedHours = h > 12 ? h - 12 : h;
    const actualHours = fixedHours + 2;
    actual = `${actualHours}:${m} ${isPm ? "PM" : "AM"}`;
  }

  return (
    <div className="App">
      <h1>Start Time Translator</h1>
      <div className="timeBlock">
        <label htmlFor="appt">Time Your Friends Say</label>
        <input value={time} onChange={handleTimeChange} type="time" id="appt" />
      </div>
      <div className="timeBlock">
        <label htmlFor="appt2">Time They Actually Mean</label>
        <div className="actual">{actual}</div>
      </div>
    </div>
  );
}

export default App;
