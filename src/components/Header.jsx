import React from "react";
import Logo from "./Images/Logo.png";

const Header = () => {
  return (
    <>
      <div className="head">
        <img src={Logo} alt="Logo.png"></img>
        <h1> Remind me! </h1>
      </div>
    </>
  );
};

export default Header;
