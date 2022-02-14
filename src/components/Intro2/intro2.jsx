/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt';
const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Creație . Design . Imagine</h6>
              </div>
              <h1 className="mb-10 fw-600">Despre Noi</h1>
              <p>
              Agenția de publicitate de lângă tine, înﬁințată din pasiune pentru design graﬁc, artă, marketing și publicitate. Ofertele noastre sunt mereu adaptate nevoilor clienților, iar consilierea specializată reprezintă o constanța a tuturor colaborărilor pe care le avem. Am investit în tehnologii de ultima generație, pentru că ideile creative și unice să devină realitate la o calitate superioară. Valoarea echipei noastre este compusă atât din personalul cu experiență în domeniu, cât și din viziunea noastră de dezvoltare pe termen lung. Timpul este un reper important pentru noi. De aceea, din respect pentru client, eﬁcientizam procesul de realizare a unui proiect prin oferirea de servicii publicitare complete.
              </p>
              <Link href="/demos/contact">
                <a className="butn bord curve mt-30">
                  <span>Contactează-ne</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
          <Tilt> <div className="img">
          
              <img src="/img/banner1.jpg" alt="Banner CSC" />
            </div></Tilt>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2