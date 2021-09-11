import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ImageInput from "../image_input/imageInput";
import { boardState } from "../state/boardState";

const AddForm = () => {
  const setBoard = useSetRecoilState(boardState);
  const board = useRecoilState(boardState);
  const history = useHistory();
  const themeRef = useRef();
  const titleRef = useRef();
  const contextRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const boards = {
      id: "id",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      context: contextRef.current.value || "",
      time: time,
    };
    formRef.current.reset();
    const update = [...board, boards];
    console.log(update);
    setBoard(update);
    console.log(board);
    history.push("/board");
  };
  return (
    <form ref={formRef}>
      <input ref={titleRef} type="text" placeholder="Title"></input>
      <select ref={themeRef} type="text" placeholder="Category">
        <option value="자유게시판">자유게시판</option>
        <option value="알쓸신잡">알쓸신잡</option>
        <option value="요리정보">요리정보</option>
      </select>
      <textarea ref={contextRef} name="context" placeholder="context" />
      <div>
        <ImageInput />
      </div>
      <Button onClick={onSubmit}>Add</Button>
    </form>
  );
};

export default AddForm;
