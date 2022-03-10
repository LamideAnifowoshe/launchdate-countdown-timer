import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [expiryTime, setExpiryTime] = useState("24 Mar 2022 15:30:25");

  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);
      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <div className="flex-container">
      <div>
        {countdownTime.countdownDays}
        <h3>DAYS</h3>
      </div>

      <div>
        {countdownTime.countdownHours}
        <h3>HOURS</h3>
      </div>

      <div>
        {countdownTime.countdownMinutes}
        <h3>MINUTES</h3>
      </div>

      <div>
        {countdownTime.countdownSeconds}
        <h3>SECONDSS</h3>
      </div>
    </div>
  );
};

export default Timer;
