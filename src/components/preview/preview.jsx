import React from "react";
import { useRecoilValue } from "recoil";
import { boardState } from "../state/boardState";
const Preview = () => {
  const card = useRecoilValue(boardState);
  return (
    <ul>
      <h1>{card.id}</h1>
      <span>{card.time}</span>
      <p>{card.title}</p>
    </ul>
  );
};

export default Preview;
