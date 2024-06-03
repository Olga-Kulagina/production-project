import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";

import { useTheme } from "./providers/ThemeProvider/ui";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>

      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
