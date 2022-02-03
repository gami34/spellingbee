import React, { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Home = lazy(() => import("./pages/Home"));
const IndividualForm = lazy(() => import("./pages/IndividualForm"));
const MultipleForm = lazy(() => import("./pages/MultipleForm"));

function App() {
  const socket = useSelector((state) => state.socketIO?.socket);

  useEffect(() => {
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        exact
        element={
          <Suspense fallback={<div></div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.INDIVIDUAL_REG}
        exact
        element={
          <Suspense fallback={<div></div>}>
            <IndividualForm />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.MULTIPLE_REG}
        exact
        element={
          <Suspense fallback={<div></div>}>
            <MultipleForm />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
