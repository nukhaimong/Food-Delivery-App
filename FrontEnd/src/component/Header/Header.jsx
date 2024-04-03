import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring delectable array of dishes
          crafted with the finest ingredient and cullnary expertise. Our mission
          is satisfy your craving and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>View more</button>
      </div>
    </div>
  );
};

export default Header;
