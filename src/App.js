import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/pages/home/Home";
import Login from "./views/pages/login/Login";
import Register from "./views/pages/register/Register";
const App = () => {
  return (
      <Router>
        <Switch>
            <Route path='/login'><Login></Login></Route>
            <Route path='/register'><Register></Register></Route>
            <Route path='/home'><Home></Home></Route>
        </Switch>
      </Router>
  );
}

export default App;
