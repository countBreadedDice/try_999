import React from "react";

import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";

import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";
const Cscdesign = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  
  return (
    <DarkTheme>
      <NavbarFullMenu />
     
      <div ref={MainContent} className="main-content">
        <ContactHeader />
        <ContactForm />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Cscdesign;
