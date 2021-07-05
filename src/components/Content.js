import { CContainer, CSpinner } from "@coreui/react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
const Content = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            );
          })}
        </Switch>
      </Suspense>
    </CContainer>
  );
};

export default Content;
