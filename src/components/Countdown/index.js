import React from "react";
import { useState, useEffect } from "react";
import { Wrapper, Content } from "./Countdown.styles";

const Countdown = () => {
  const calculateTimeLeft = () => {
    let lastDayofSchool = new Date("Jun 21, 2022 12:00:00");
    const difference = +new Date(`${lastDayofSchool}-10-1`) - +new Date();
    {
    }
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <Wrapper>
      <Content>
        <div>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>

        <div>
          <p>Until you can hire me.</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Countdown;
