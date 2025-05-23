import { utilService } from "../services/util.service.js";

const { useState, useEffect } = React;
export function Challenge2({ onSetPage }) {
  const [isDark, setIsDark] = useState(false);
  const currentMonth = utilService.getMonthName(new Date());
  const currentDay = utilService.getDayName(new Date());
  const [seasonIcon, setSeasonIcon] = useState("");
  function toggleDarkMode(ev) {
    ev.preventDefault();
    setIsDark(!isDark);
  }

  function determineSeason(monthName) {
    const month = monthName.toLowerCase();
    switch (month) {
      case "december":
      case "january":
      case "february":
        return "winter";
      case "march":
      case "april":
      case "may":
        return "spring";
      case "june":
      case "july":
      case "august":
        return "summer";
      case "september":
      case "october":
      case "november":
        return "autumn";
      default:
        return "unknown";
    }
  }

  useEffect(() => {
    setSeasonIcon(determineSeason(currentMonth));
  }, []);

  return (
    <section className="ex_section">
      <h1>Challenge #2–season-clockcomponent</h1>
      <h2>Season Clock</h2>
      <h4>Click the component to change between dark and light mode </h4>
      <div
        onClick={toggleDarkMode}
        className={`season-box ${isDark ? "dark" : "light"} `}
      >
        <p>
          {currentMonth} ({seasonIcon})
        </p>
        <img className="season-img" src={`/assets/img/${seasonIcon}.png`}></img>
        <p>{currentDay}</p>
      </div>
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
