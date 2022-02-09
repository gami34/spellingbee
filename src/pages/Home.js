import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";

const Home = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
