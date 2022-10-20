import { Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import WelcomePage from "./pages/WelcomePage";
import PredictionPage from "./pages/PredictionPage";


function App() {
  return (
      <Switch>
        <Route path={"/"} exact>
          <StartPage />
        </Route>
        <Route path={"/welcome"}>
          <WelcomePage />
        </Route>
        <Route path={"/prediction"}>
          <PredictionPage />
        </Route>
    </Switch>
  );
}

export default App;
