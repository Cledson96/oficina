export default function Topo() {
  return (
    <>
      <div style={{ height: "45px" }} className="ltn__header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="ltn__top-bar-menu">
                <ul>
                  <li>
                    <a
                      className="yellow"
                      href="mailto:autopecasbodnar@gmail.com.com?Subject=Flower%20greetings%20to%20you"
                    >
                      <i className="icon-mail"></i> autopecasbodnar@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className="yellow" href="locations">
                      <i className="icon-placeholder"></i> Sitio
                      Cercado-Curitiba - PR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="top-bar-right text-end">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <div className="ltn__social-media">
                        <ul>
                          <li>
                            <a
                              style={{ fontSize: "30px" }}
                              href="https://www.facebook.com/autopecasbodnar"
                              title="Facebook"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://www.instagram.com/autopecasbodnar/"
                              title="Instagram"
                            >
                              <i
                                style={{
                                  fontSize: "35px",
                                  marginLeft: "10px",
                                }}
                                className="fab fa-instagram"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
