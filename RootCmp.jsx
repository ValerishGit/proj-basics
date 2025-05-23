import { AppHeader } from "./cmps/AppHeader.jsx";
import { Home } from "./pages/Home.jsx";
import { Challenge1 } from "./pages/Challenge_1.jsx";
import { Challenge2 } from "./pages/Challenge_2.jsx";
import { Challenge3 } from "./pages/Challenge_3.jsx";
import { Challenge4 } from "./pages/Challenge_4.jsx";
const { useState } = React;

export function RootCmp() {
  const [page, setPage] = useState("home");
  const routes = [
    { name: "home", component: <Home page={page} onSetPage={setPage} /> },
    { name: "ex_1", component: <Challenge1 page={page} onSetPage={setPage} /> },
    { name: "ex_2", component: <Challenge2 page={page} onSetPage={setPage} /> },
    { name: "ex_3", component: <Challenge3 page={page} onSetPage={setPage} /> },
    { name: "ex_4", component: <Challenge4 page={page} onSetPage={setPage} /> },
  ];
  return (
    <section className="app main-layout">
      <AppHeader />
      <main>
        <main>
          {routes.map(
            (route, index) =>
              page === route.name && (
                <div key={route.name + index}>{route.component}</div>
              )
          )}
        </main>
      </main>
    </section>
  );
}
