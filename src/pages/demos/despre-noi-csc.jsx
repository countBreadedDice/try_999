import React from "react";

import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import Intro3 from "../../components/Intro3/intro3";
import Intro2 from "../../components/Intro2/intro2";
import AboutUs from "../../components/About-us/about-us";
import Services3 from "../../components/Services3/services3";
import Works3 from "../../components/Works3/works3";
import Clients from "../../components/Clients/clients";

import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";

const Desprenoi = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <Intro2 />
      <div ref={MainContent} className="main-content">
        
       
        <Services3 />
        <Clients />
        <CallToAction />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Desprenoi;