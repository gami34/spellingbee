import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Navbar from "../components/navbar";
import Header from "../components/header";

import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
  }, []);

  return (
    <>
      <Navbar />
      <CSSTransition in={show} appear={true} timeout={300} classNames="fade">
        <Header />
      </CSSTransition>
    </>
  );
};

export default Home;
