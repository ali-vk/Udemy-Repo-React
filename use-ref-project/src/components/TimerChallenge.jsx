import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function onReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

// function handleStart() {
//     timer.current = setInterval(() => {
//       setTimeRemaining((prevTimeRemaining) => {
//         const newTime = prevTimeRemaining - 10;

//         // ✅ SAFE: Side effects occur inside the event (the interval tick)
//         if (newTime <= 0) {
//           clearInterval(timer.current);
//           dialog.current.open();
//           return 0; // Fixes time to exactly 0
//         }

//         return newTime;
//       });
//     }, 10);
//   }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={onReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time  ">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}
