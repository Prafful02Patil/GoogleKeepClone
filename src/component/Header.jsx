import React from "react";
import Logo from "../images/Logo.jpg";


const Header = () => {
  return (
    <>
      <div className="header-div">
        <img src={Logo} alt="Loading" className="img-div" />
        <h1>Google Keep Notes</h1>
      </div>
    </>
  );
};

export default Header;
