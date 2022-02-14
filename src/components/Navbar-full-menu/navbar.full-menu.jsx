/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const NavbarFullMenu = ({ theme }) => {
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
          <Link href="/demos/cscdesign">
              {theme ? (
                theme === "light" ? (
                  <img src="/img/logo-dark-csc.png" alt="logo" />
                ) : (
                  <img src="/img/logo-light-csc.png" alt="logo" />
                )
              ) : (
                <img src="/img/logo-light-csc.png" alt="logo" />
              )}
            </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text">Meniu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                <li>
                <div className="o-hidden">
                  <Link href="/demos/cscdesign">
                    <a className="link">
                      <span className="nm">01.</span>Acasă
                    </a>
                  </Link>
                </div>
              </li>
                <li>
                <div className="o-hidden">
                  <Link href="/demos/despre-noi-csc">
                    <a className="link">
                      <span className="nm">02.</span>Despre Noi
                    </a>
                  </Link>
                </div>
              </li>
                <li>
                <div className="o-hidden">
                  <Link href="/demos/portfolio">
                    <a className="link">
                      <span className="nm">03.</span>Portofoliu
                    </a>
                  </Link>
                </div>
              </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/demos/contact">
                        <a className="link">
                          <span className="nm">04.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Telefon</h6>
                  <p>+40 723 047 552</p>
                </div>
                <div className="item">
                  <h6>Adresă</h6>
                  <p>
                  Prejmer, str. Paris 26-30 (Parc industrial GREALLS & LLONCH)
                  Brasov, str. Harmanului 49Z
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">office@cscdesign.ro
                    marketing@cscdesign.ro</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
