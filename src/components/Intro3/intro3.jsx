/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tilt from 'react-parallax-tilt';

const Intro3 = () => {
  return (
    <header className="slider-stwo valign position-re">
      <div className="container">
        <div className="row">
        
          <div className="col-lg-5">

            <div className="img parallax">
            <Tilt>
              <img src="/img/slid/002-custom.jpg" alt="" />
              </Tilt></div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <div className="sub-title mb-5">
                <h6>Creem identitatea ta</h6>
              </div>
              <h1 className="mb-10 fw-600">Cum este identitatea ta vizuală</h1>
              <p>
              O identitate vizuală sau o imagine vizuală este modul în care o companie, o firmă sau o întreprindere de afaceri se prezintă publicului (cum ar fi clienții și investitorii, precum și angajații). Identitatea este de obicei vizualizata prin branding și prin utilizarea mărcilor comerciale, dar poate include și lucruri precum designul produsului, publicitate, relații publice. Identitatea vizuală este un obiectiv principal al firmelor, pentru a menține și construi identitatea și de a facilita obiectivele de afaceri ale companiei.
              </p>
              <ul>
                <li>
                  <div>
                    <span className="icon pe-7s-arc">
                      <div className="bord"></div>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Target-are</h6>
                    <p>
                      Orice mesaj trebuie adresat cuiva și noi încercăm să livrăm mesajul exact publicului corect
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="icon pe-7s-help2">
                      <div className="bord"></div>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Rezultate </h6>
                    <p>
                      Creativatea în marketing trebuie să aducă rezultate în cifre, fie în notorietate, profit sau atitudine. Aceasta este una din grijile noastre când lucrăm la un produs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro3;
