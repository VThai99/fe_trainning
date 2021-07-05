import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './views/pages/ui/layout/Layout';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Login = React.lazy(() => import("./views/pages/login/Login"));
const InsertEmail = React.lazy(() => import('./views/pages/email_to_reset/EmailToReset'));
const ResetPass = React.lazy(() => import('./views/pages/reset_pass/Index'));

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route path='/ui'><Layout></Layout></Route>
          <Route
            exact
            path="/insert_email"
            name="Inset Email Page"
            render={(props) => <InsertEmail {...props} />}
          />
          <Route
            exact
            path="/reset_pass"
            name="Reset Pass Page"
            render={(props) => <ResetPass {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
