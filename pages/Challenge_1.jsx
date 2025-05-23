const animalInfos = [
  { type: "Malayan Tiger", count: 787 },
  { type: "Mountain Gorilla", count: 212 },
  { type: "Fin Whale", count: 28 },
];

export function Challenge1({ onSetPage }) {
  return (
    <section className="ex_section">
      <h1>Challenge #1 -animal-listcomponent</h1>
      <h2>Rare Animals</h2>
      <h4>Click the Search Button to search</h4>

      <table className="animals-table">
        <tbody>
          {animalInfos.map((animal, index) => (
            <tr key={animal.type + index}>
              <th>{animal.type}</th>
              <th>{animal.count}</th>
              <th>
                <a
                  target="_blank"
                  href={`https://www.google.com/search?q=${animal.type}`}
                >
                  Search
                </a>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
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
