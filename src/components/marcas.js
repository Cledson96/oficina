import moura from ".././img/moura.png";
import gates from ".././img/gates.png";
import continental from ".././img/continental.png";
import lubrax from ".././img/lubrax.jpg";
import cofap from ".././img/cofap.png";

export default function Marcas() {
  return (
    <>
    
      <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-290 pb-110 plr--9 adjust-brand">
        <div className="container-fluid">
          <div className="row ltn__brand-logo-active">
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src={moura} alt="Brand Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img
                  style={{ width: "200px", marginLeft: "2em" }}
                  src={gates}
                  alt="Brand Logo"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src={lubrax} alt="Brand Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img
                  style={{ height: "73px" }}
                  src={continental}
                  alt="Brand Logo"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src={cofap} alt="Brand Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
