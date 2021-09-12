import { atom } from "recoil";

export const boardState = atom({
  key: "boardState",
  default: [
    {
      id: "1",
      time: "2016.11.10/10:23:32",
      title: "게시물 1",
      theme: "자유게시판",
      image: "정지원",
      context: "내용..",
    },
    {
      id: "2",
      time: "2016.11.10/10:23:32",
      title: "게시물 2",
      theme: "자유게시판",
      image: "정지원2",
      context: "내용..",
    },
  ],
});

export const boardIdState = atom({
  key: "boardIdState",
  default: "100",
});
