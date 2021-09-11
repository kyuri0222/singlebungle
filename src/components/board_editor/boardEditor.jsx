import Header from "../header/header";
import Footer from "../footer/footer";
import React from "react";
import AddForm from "../addForm/addForm";

const BoardEditor = () => {
  return (
    <section>
      <Header></Header>
      <AddForm></AddForm>
      <Footer></Footer>
    </section>
  );
};

export default BoardEditor;
