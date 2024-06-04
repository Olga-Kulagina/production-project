import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";

import { useTheme } from "./providers/ThemeProvider";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
