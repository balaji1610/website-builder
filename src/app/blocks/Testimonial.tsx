export default function Testimonial() {
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: "#F5F5F7",
          height: "30rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            height: "4rem",
            marginTop: "1rem",
          }}
        >
          Testimonial
        </h1>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-4">
              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <div style={{ margin: "1rem 0 1rem 0" }}>
                    <img
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                      alt="Image"
                      className="img-fluid"
                      width="100px"
                      height="112px"
                      style={{ borderRadius: "60px" }}
                    />
                  </div>
                  <p className="card-text" style={{ margin: "1rem 0 1rem 0" }}>
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                  <h5
                    className="card-title"
                    style={{ margin: "1rem 0 1rem 0" }}
                  >
                    Jenny Wilson
                  </h5>
                  <p className="card-text" style={{ margin: "1rem 0 1rem 0" }}>
                    Project Manager at Microsoft
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <div style={{ margin: "1rem 0 1rem 0" }}>
                    <img
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                      alt="Image"
                      className="img-fluid"
                      width="100px"
                      height="112px"
                      style={{ borderRadius: "60px" }}
                    />
                  </div>
                  <p className="card-text" style={{ margin: "1rem 0 1rem 0" }}>
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                  <h5
                    className="card-title"
                    style={{ margin: "1rem 0 1rem 0" }}
                  >
                    Robert Fox
                  </h5>
                  <p className="card-text" style={{ margin: "1rem 0 1rem 0" }}>
                    Founder at Brain.co
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <div style={{ margin: "1rem 0 1rem 0" }}>
                    <img
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                      alt="Image"
                      className="img-fluid"
                      width="100px"
                      height="112px"
                      style={{ borderRadius: "60px" }}
                    />
                  </div>
                  <p className="card-text" style={{ margin: "1rem 0 1rem 0" }}>
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                  <h5
                    className="card-title"
                    style={{ margin: "1rem 0 1rem 0" }}
                  >
                    Kristin Watson
                  </h5>
                  <p className="card-text" style={{ margin: "1rem 0 1rem 0" }}>
                    UX Designer at Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
