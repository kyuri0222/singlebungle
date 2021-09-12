import React, { useRef } from "react";
import { NavLink, Switch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styles from "../preview_board/previewBoard.module.css";
import { boardIdState } from "../state/boardState";
const PreviewBoard = ({ board }) => {
  const valueRef = useRef();
  const [num, setNum] = useRecoilState(boardIdState);
  const onClick = () => {
    const value = board.id;
    setNum(value);
  };
  return (
    <ul className={styles.box}>
      <h1 ref={valueRef}>{board.id}</h1>
      <Switch>
        <>
          <NavLink to={"/board/detail/" + board.id} onClick={onClick}>
            {board.title}
          </NavLink>
        </>
      </Switch>
      <span>{board.time}</span>
    </ul>
  );
};

export default PreviewBoard;
