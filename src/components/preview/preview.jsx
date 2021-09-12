import React from "react";
import { useRecoilValue } from "recoil";
import PreviewBoard from "../preview_board/previewBoard";
import { boardState } from "../state/boardState";
const Preview = () => {
  const board = useRecoilValue(boardState);
  return (
    <section>
      {board.map((item) => (
        <PreviewBoard key={item.id} board={item} />
      ))}
    </section>
  );
};

export default Preview;
