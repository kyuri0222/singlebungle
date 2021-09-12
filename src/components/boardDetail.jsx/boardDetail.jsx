import React from "react";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import ShowDetail from "../showDetail/showDetail";
import { boardIdState, boardState } from "../state/boardState";

const BoardDetail = () => {
  const params = useParams();
  const board = useRecoilValue(boardState);
  return (
    <section>
      {board.map((item) => {
        if (item.id == params.detail_id) {
          return <ShowDetail item={item}></ShowDetail>;
        }
      })}
    </section>
  );
};
export default BoardDetail;
