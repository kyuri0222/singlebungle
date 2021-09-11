import React from "react";

const Header = ({ onLogout }) => {
  return (
    <header>
      {onLogout && <button onClick={onLogout}>Logout</button>}
      <h1>Header</h1>
    </header>
  );
};

export default Header;
