import React from "react";
import { useState } from "react";

const defaultTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(defaultTime);
  return (
    <div className="flex-container">
      <div>{remainingTime.days}</div>
      <div>{remainingTime.hours}</div>
      <div>{remainingTime.minutes}</div>
      <div>{remainingTime.seconds}</div>
    </div>
  );
};

export default Timer;
