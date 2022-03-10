import React from "react";
import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./TimerUtils";

const defaultTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const Timer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, []);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

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
