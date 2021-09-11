import React from "react";

const ImageInput = () => {
  const onImg = (e) => {
    e.preventDefault();
  };
  return <input type="image" onChange={onImg}></input>;
};

export default ImageInput;
