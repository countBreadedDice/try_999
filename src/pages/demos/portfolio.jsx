import React from "react";

import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreen from "../../components/Showcases-full-screen/showcases-full-screen";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";

const Cscdesign = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  
  return (
    <DarkTheme>
      <NavbarFullMenu />
     
      <div ref={MainContent} className="main-content">
      <ShowcasesFullScreen />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Cscdesign;
