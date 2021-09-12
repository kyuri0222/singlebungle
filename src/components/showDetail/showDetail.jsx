import React from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { boardState } from "../state/boardState";

const ShowDetail = ({ item }) => {
  const [board, setBoard] = useRecoilState(boardState);
  const history = useHistory();
  const onDelete = (e) => {
    const update = board.filter((result) => {
      return result.id != item.id;
    });
    const onConfirm = () => {
      window.confirm("정말 색상을 변경하시겠습니까?");
    };
    setBoard(update);
    history.push("/board");
  };
  return (
    <section>
      <ul>
        <li>{item.id}</li>
        <li>{item.time}</li>
        <li>{item.title}</li>
        <li>{item.theme}</li>
        <li>{item.image}</li>
        <li>{item.context}</li>
      </ul>
      <button onClick={onDelete}>delete</button>
    </section>
  );
};

export default ShowDetail;
