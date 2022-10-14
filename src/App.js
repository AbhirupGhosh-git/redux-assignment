import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./component/NoMatch";
const LazyHomePage = React.lazy(() => import("./component/UserContainer"));
const LazyDetailsPage = React.lazy(() => import("./component/Details"));

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <LazyHomePage />
            </React.Suspense>
          }
          end
        />
        <Route
          path="/details"
          element={
            <React.Suspense fallback="Fetching Data...">
              <LazyDetailsPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Provider>
  );
}

export default App;
