import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./view/Home";
import RegisterProduct from "./view/RegisterProduct";
import RegisterClient from "./view/RegisterClient";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/RegisterProduct" component={RegisterProduct} />
        <Route path="/RegisterClient" component={RegisterClient} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
