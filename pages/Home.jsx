const challenges = [
  { text: "Animal List", page: "ex_1" },
  { text: "Seasons Display", page: "ex_2" },
  { text: "Countdown Timer + Bonus", page: "ex_3" },
  { text: "Challenge #4", page: "ex_4" },
];

export function Home({ page = "home", onSetPage }) {
  function onPageChange(ev, page) {
    ev.preventDefault();
    onSetPage(page);
  }

  return (
    <section className="home">
      <div className="challenge-list">
        {challenges.map((challenge, index) => (
          <button
            key={challenge.text + index}
            className="challenge-btn"
            onClick={(ev) => onPageChange(ev, challenge.page)}
          >
            {challenge.text}
          </button>
        ))}
      </div>
    </section>
  );
}
