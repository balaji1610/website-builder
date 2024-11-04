"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Login() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col align-self-center">
          <div className="LoginCard">
            <div className="cardUI">
              <div className="cardItems">
                <div>
                  <i className="bi bi-person-circle loginIcon"></i>
                </div>
                <div>
                  <h1>Login</h1>
                </div>
                <div>
                  {" "}
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div>
                  <p>
                    {" "}
                    <input type="password" name="password" id="password" />
                  </p>
                </div>
                <div>
                  <button type="button" className="btn btn-secondary btn-lg">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
