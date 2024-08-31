import React from 'react';
import logo from "../../assets/warehouse.png";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="headerMain">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="welcome-message">
          Welcome to <b>Chintakunta Vinayaka Chavithi Utsavakamiti</b>
        </div>
      </div>
    </div>
  );
}

export default Header;
