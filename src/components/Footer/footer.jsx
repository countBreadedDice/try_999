/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Date contact</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Adresă</h6>
                    <p>Prejmer, str. Paris 26-30 (Parc industrial GREALLS & LLONCH)
                    Brasov, str. Harmanului 49Z</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email </h6>
                    <p>office@cscdesign.ro
                    marketing@cscdesign.ro</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Telefon</h6>
                    <p>+40 723 047 552



                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5></h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    
                  </div>
                  <div className="sm-post">
                    <p>
                   
                    </p>
                    <span className="date"></span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    
                  </div>
                  <div className="sm-post">
                    <p>
                      
                    </p>
                    <span className="date"></span>
                  </div>
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/logo-light-csc.png" alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2021, Vie Template. Adaptat
                  <a href="#0">Maxim Dinu Manuel</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer