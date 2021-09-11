import React from "react";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  const onSignup = () => history.push("/signup");
  const goLogin = () => history.push("/login");
  return (
    <section>
      <h1>Welcome</h1>
      <button onClick={onSignup}>signup</button>
      <button onClick={goLogin}>login</button>
    </section>
  );
};

export default Welcome;
