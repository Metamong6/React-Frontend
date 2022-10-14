import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Map from "./pages/Map";
import Test from "./pages/Test";
import MainHeader from "./components/header/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/welcome"} />
          </Route>
          <Route path={"/welcome"}>
            <Welcome />
          </Route>
          <Route path={"/map"}>
            <Map />
          </Route>
          <Route path={"/test"}>
            <Test />
          </Route>
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
