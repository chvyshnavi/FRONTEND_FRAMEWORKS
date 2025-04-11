import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "1rem",
        backgroundColor: "#000000",
        color: "white",
        fontSize: "0.9rem",
        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1000
      }}
    >
      © 2025 Crowdsourced Mapping System | All Rights Reserved
    </div>
  );
};

export default Footer;
