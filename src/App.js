import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/pages/home/Home";
import Login from "./views/pages/login/Login";
import InsertEmail from "./views/pages/email_to_reset/EmailToReset";
import ResetPass from "./views/pages/reset_pass/Index";
import { One1, One2, One3, One4, One5 , One6 } from "./views/components/one";
const App = () => {
  return (
      <Router>
        <Switch>
            <Route path="/one/one1"><One1></One1></Route>
            <Route path="/one/one2"><One2></One2></Route>
            <Route path="/one/one3"><One3></One3></Route>
            <Route path="/one/one4"><One4></One4></Route>
            <Route path="/one/one5"><One5></One5></Route>
            <Route path="/one/one6"><One6></One6></Route>

            <Route path='/login'><Login></Login></Route>
            <Route path='/insert_email'><InsertEmail></InsertEmail></Route>
            <Route path= '/reset_pass'><ResetPass></ResetPass></Route>
            <Route path='/home'><Home></Home></Route>
        </Switch>
      </Router>
  );
}

export default App;
