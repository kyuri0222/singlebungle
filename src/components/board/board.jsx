import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Preview from "../preview/preview";
import Search from "../search/search";

const Board = () => {
  const history = useHistory();

  const onNewBoard = () => {
    history.push("/board/new");
  };
  return (
    <section>
      <Header></Header>
      <Search />
      <Preview />
      <button onClick={onNewBoard}>new</button>
      <Footer></Footer>
    </section>
  );
};

export default Board;
