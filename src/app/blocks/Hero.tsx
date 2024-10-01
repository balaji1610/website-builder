export default function Hero() {
  return (
    <div style={{ marginTop: "25px" }}>
      <div>
        <img
          src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png"
          alt="hero"
          height="450px"
          width="100%"
          style={{ position: "relative", objectFit: "cover" }}
        />
      </div>
      <div style={{ position: "absolute", top: "15%", left: "10%" }}>
        <div className="container-fluid">
          <div className="col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div
                  style={{
                    color: "#fff",
                    marginBottom: "40px",
                    fontSize: "33px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Find the best office accessories in one tap
                </div>
                <div
                  style={{
                    color: "rgba(212, 212, 216)",
                    fontSize: "20px",
                    lineHeight: "31px",
                    letterSpacing: "1px",
                  }}
                >
                  Clarity gives you the blocks & components you need to create a
                  truly professional website, landing page or admin panel for
                  SaaS.Clarity gives you the blocks & components you need to
                  create a truly professional website, landing page or admin
                  panel for SaaS.
                </div>
              </div>
              <div className="col-md-6  col-sm-6">
                <div style={{ marginLeft: "100px" }}>
                  <img
                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/5/portrait-girl.png"
                    alt="hero-left"
                    height="355px"
                    width="257px"
                    style={{ borderRadius: "35px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
