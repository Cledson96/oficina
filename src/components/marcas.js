import moura from ".././img/moura.png";
import gates from ".././img/gates.png";
import continental from ".././img/continental.png";
import lubrax from ".././img/lubrax.jpg";
import cofap from ".././img/cofap.png";

export default function Marcas() {
  return (
    <>
      <div className="ltn__get-a-free-service-area get-a-free-service-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="get-a-free-service-inner bg-white text-center pt-115 pb-100">
                <div className="call-to-img">
                  <img src="img/bg/10.png" alt="#" />
                </div>
                <div className="call-to-action-inner-content">
                  <div className="section-title-area ltn__section-title-2 text-center">
                    <h6 className="section-subtitle ltn__secondary-color">
                      // Mãos a obra //
                    </h6>
                    <h1 className="section-title">
                      Serviços de qualidade<span>.</span>
                    </h1>
                  </div>
                  <div className="btn-wrapper">
                    <a
                      href="appointment.html"
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    >
                      Venha conferir
                    </a>
                  </div>
                </div>
                <span className="call-to-circle-1"></span>
                <span className="call-to-circle-2 fa-spin"></span>
                <span className="call-to-bg-icon">
                  <i className="icon-automobile"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-290 pb-110 plr--9">
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
