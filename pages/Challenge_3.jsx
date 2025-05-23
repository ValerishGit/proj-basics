const { useState, useRef, useEffect } = React;

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export function Challenge3({ onSetPage }) {
  return (
    <section className="ex_section">
      <h1>Challenge #3–count-down component</h1>
      <CountDown
        startFrom={10}
        onDone={() => {
          console.log("Done!");
        }}
      ></CountDown>
      {/* Bonus Code */}
      {/* <CountDown
        startFrom={10}
        toTime={Date.now() + 1000 * 10}
        onDone={() => {
          console.log("Done!");
        }}
      ></CountDown> */}
      <button
        onClick={() => {
          onSetPage("home");
        }}
      >
        Go Back
      </button>
    </section>
  );
}

function CountDown({ startFrom, onDone, toTime }) {
  const [timer, setTimer] = useState(
    toTime !== undefined ? Math.max(0, toTime - Date.now()) : startFrom
  );
  const [isLow, setIsLow] = useState(false);
  const intervalId = useRef(0);

  //When toTime is not Passed
  function countDownTimer() {
    intervalId.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 7) setIsLow(true);
        if (prev <= 1) {
          clearInterval(intervalId.current);
          onDone();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  //When ToTime is passed
  function toTimeCountDown() {
    intervalId.current = setInterval(() => {
      const diff = Math.max(0, toTime - Date.now());
      setTimer((prev) => {
        if (prev <= 6000) setIsLow(true);
        if (prev <= 0) {
          clearInterval(intervalId.current);
          onDone();
        }
        return diff - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    if (toTime != undefined) {
      toTimeCountDown();
    } else {
      countDownTimer();
    }

    return () => clearInterval(intervalId.current);
  }, []);
  return (
    <div className={`${isLow ? "isLow" : ""} countdown-box`}>
      {toTime != undefined ? formatTime(timer) : timer}
    </div>
  );
}
