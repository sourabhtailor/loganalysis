import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Navbar2 from "./navbar/Navbar2";
import WhatsAppIcon from "./footer/WhatsAppIcon";

const Layout = ({ children }) => {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const mainContentStyle = {
    flex: 1,
  };

  return (
    <div style={layoutStyle}>
     <div> <Navbar2/></div>
      <main style={mainContentStyle}>{children}</main>
      <Footer/>
      <WhatsAppIcon />
    </div>
  );
};

export default Layout;
