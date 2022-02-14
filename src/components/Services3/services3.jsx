import React from "react";

const Services3 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      var featuresitems = document.querySelectorAll(".feat .items");
      if (featuresitems) {
        featuresitems.forEach((item) => {
          item.onmouseover = function (event) {
            item.classList.add("active");
            let siblings = getSiblings(item),
              siblingEl = siblings.map((e) => e.classList.remove("active"));
          };
        });
      }
    }, 1000);
  }, [])
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Cele mai bune servicii
              </h6>
              <h3 className="wow color-font">
                Punem la dispoziția dumneavoastră variate servicii de marketing &amp; publicitate
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="pe-7s-pen color-font"></i>
              </span>
              <h5>Creație & Grafică</h5>
              <p>
              • pliante <br></br>
              • cataloage <br></br>
              • aﬁșe • bannere <br></br>
              • etichete <br></br>
              • cutii <br></br>
              • proiectare ștante ambalaje <br></br>
              • cărți de vizită <br></br>
              • tehnoredactare (cărți, broșuri, reviste) <br></br>
              • design LOGO <br></br>
              </p>
          
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="pe-7s-display2 color-font"></i>
              </span>
              <h5>Producție Publicitară</h5>
              <p>
              • print cărți de vizită<br></br>
              • print flyere<br></br>
              • print mape personalizate<br></br>
              • print cataloage<br></br>
              • print etichete<br></br>
              • casete luminoase<br></br>
              • gravare laser<br></br>
              • broderie personalizată<br></br>
              Realizăm obiecte promoţionale personalizate pentru promovarea companiei tale:
              • brelocuri
              • cani
              • accesorii birou
              • imbracaminte personalizata
              • felicitari
              • insturmente de scris<br></br>
              Personalizarea se face cu print UV Led, gravare laser, gravare mecania, broderie personalizata, transfer termic, sublimare, serigrafie
              </p>
             
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="pe-7s-phone color-font"></i>
              </span>
              <h5>Web Design</h5>
              <p>
              • site-uri de prezentare <br></br>
              • site - ecommerce <br></br>
              • blog-uri <br></br>
              </p>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="pe-7s-light color-font"></i>
              </span>
              <h5>Proiectare & Printare 3D</h5>
              <p>
              CSC Design realizează prototipuri 3D în programe specializate, pornind de la proiectare pânî la realizarea produsului fizic din materiale plastice.
              Dimensiunea maximă a produsului ce poate fi realizat este de 230 / 230 / 250 mm (Lxlxh).
              
              
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
