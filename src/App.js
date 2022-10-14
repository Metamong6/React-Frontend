import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Map from "./pages/Map";
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
          <Route path={"/kubeflow"}>
            <Map />
          </Route>
          <Route path={"/grafana"}>
            <Map />
          </Route>
          <Route path={"/jenkins"}>
            <Map />
          </Route>
          <Route path={"/argo"}>
            <Map />
          </Route>
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
