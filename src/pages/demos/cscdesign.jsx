import React from "react";

import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import Intro3 from "../../components/Intro3/intro3";
import Intro4 from "../../components/Intro4/intro4";
import AboutUs from "../../components/About-us/about-us";
import Services from "../../components/Services/services";
import Works3 from "../../components/Works3/works3";


import CallToAction from "../../components/Call-to-action/call-to-action";
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
      <Intro4 />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Intro3 />
        <Services />
        <Works3 />
        <CallToAction />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Cscdesign;
