import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Main = () => {
  const history = useHistory();

  const goBoard = () => {
    history.push("/board");
  };
  return (
    <section>
      <Header></Header>
      <button onClick={goBoard}>go B</button>
      <Footer></Footer>
    </section>
  );
};

export default Main;
