import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";


const Intro4 = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="custom-header">
              <h1>
               Să nu <span className="color-font">îndrăznești</span> înseamnă deja că ai pierdut.
               Ar trebui să <span className="color-font">perseverăm în ambiții,</span> chiar și în proiecte nerealiste. Pentru că lucrurile se întâmplă doar când <span className="color-font">visăm.</span>
              </h1>
              
              <h3>&quot; Andree Putman &quot;</h3>
              
            </div>
          </div>
        </div>
     
      </div>
  
              
            
             
          
         
        
      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
