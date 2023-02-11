import React from "react";
import "../styles/header.css"

function Header() {
  return (
    <div className="header">
      <div className="nasa-logo">
        <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" className="nasa-logo__image" alt="nasa logo"></img>
      </div>      
    </div>
  )
}

export default Header;