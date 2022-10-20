import { Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import AboutPage from "./pages/AboutPage";
import PredictionPage from "./pages/PredictionPage";


function App() {
  return (
      <Switch>
        <Route path={"/"} exact>
          <StartPage />
        </Route>
        <Route path={"/prediction"}>
          <PredictionPage />
        </Route>
        <Route path={"/about"}>
          <AboutPage />
        </Route>
    </Switch>
  );
}

export default App;
