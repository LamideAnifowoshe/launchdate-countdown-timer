import React from "react";
import { useState, useEffect } from "react";

const defaultTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const Timer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultTime);

  return (
    <div className="flex-container">
      <div>
        {remainingTime.days}
        <h3>DAYS</h3>
      </div>

      <div>
        {remainingTime.hours}
        <h3>HOURS</h3>
      </div>

      <div>
        {remainingTime.minutes}
        <h3>MINUTES</h3>
      </div>

      <div>
        {remainingTime.seconds}
        <h3>SECONDSS</h3>
      </div>
    </div>
  );
};

export default Timer;
