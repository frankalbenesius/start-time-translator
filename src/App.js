import React, { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");

  function handleTimeChange(e) {
    e.preventDefault();
    setTime(e.target.value);
  }

  const [hour, minute] = time.split(":");
  const actualTime = [parseInt(hour) + 1, parseInt(minute) + 45].join(":");

  return (
    <div className="App">
      <h1>Start Time Translator</h1>
      <div className="timeBlock">
        <label htmlFor="appt">Time Your Friends Say</label>
        <input value={time} onChange={handleTimeChange} type="time" id="appt" />
      </div>
      <div className="timeBlock">
        <label htmlFor="appt2">Time They Actually Mean</label>
        <input value={actualTime} disabled type="time" id="appt2" />
      </div>
    </div>
  );
}

export default App;
