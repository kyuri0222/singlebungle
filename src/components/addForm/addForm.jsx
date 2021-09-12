import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { boardState } from "../state/boardState";

const AddForm = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [file, setFile] = useState();
  const history = useHistory();
  const themeRef = useRef();
  const titleRef = useRef();
  const contextRef = useRef();
  const fileRef = useRef();

  const onFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const boards = {
      id: board.length,
      time: time,
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      image: file,
      context: contextRef.current.value || "",
    };
    const update = [...board, boards];
    setBoard(update);
    history.push("/board");
  };
  return (
    <form>
      <input ref={titleRef} type="text" placeholder="Title"></input>
      <select ref={themeRef} type="text" placeholder="Category">
        <option value="자유게시판">자유게시판</option>
        <option value="알쓸신잡">알쓸신잡</option>
        <option value="요리정보">요리정보</option>
      </select>
      <textarea ref={contextRef} name="context" placeholder="context" />
      <input ref={fileRef} type="file" onChange={onFile} />
      <Button onClick={onSubmit}>Add</Button>
    </form>
  );
};

export default AddForm;
