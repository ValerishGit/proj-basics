const { useState, useEffect } = React;

export function Challenge4({ onSetPage }) {
  return (
    <section className="ex_section">
      <h1>Challenge #4 –mouse-monitor component</h1>
      <MouseTracker></MouseTracker>
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

function MouseTracker() {
  const [isOn, setIsOn] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function updatePos(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }

    if (isOn) {
      window.addEventListener("mousemove", updatePos);
    }

    return () => {
      window.removeEventListener("mousemove", updatePos);
    };
  }, [isOn]);

  return (
    <div className="mouse-tracker">
      <h1>Mouse Position</h1>
      <h2>{`x:${pos.x},y:${pos.y}`}</h2>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Pause" : "Resume"}
      </button>
    </div>
  );
}
