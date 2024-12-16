import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginLogout = () => {
  let [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <form>
        <div
          className="row justify-content-center  align-center    "
          style={{ marginTop: 60 }}
        >
          <div
            className="col-lg-4 col-md-12 col-sm-12 shadoww"
            style={{ padding: 30 }}
          >
            <div className="btn-group w-100 d-flex gap-2">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`btn1 btn btn-lg fw-bold ${isLogin ? "active" : ""}
               `}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`btn1 btn btn-lg fw-bold ${!isLogin ? "active" : ""}
             `}
              >
                Singup
              </button>
            </div>

            {isLogin ? (
              <div>
                <h3 className="mt-5 text-center fw-bold">Login Form</h3>
                <input
                  type="email"
                  class="form-control mt-4"
                  placeholder="Email"
                  aria-describedby="inputGroup-sizing-lg"
                />
                <input
                  type="password"
                  class="form-control mt-4"
                  placeholder="Password"
                  aria-describedby="inputGroup-sizing-lg"
                />
                <a href="#" style={{ float: "right", marginTop: 5 }}>
                  Forgot Password
                </a>
                <br />
                <button
                  type="submit"
                  style={{ backgroundColor: "#f9954d" }}
                  className="btn1 btn btn-lg fw-bold mt-3 w-100"
                >
                  Login
                </button>{" "}
                <br />
                <div className="text-center mt-3">
                  <span className="mt-4">Not a Member?</span>{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Signup Now
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="mt-5 text-center fw-bold">Signup Form</h3>
                <input
                  type="email"
                  class="form-control mt-4"
                  placeholder="Email"
                  aria-describedby="inputGroup-sizing-lg"
                />
                <input
                  type="password"
                  class="form-control mt-4"
                  placeholder="Password"
                  aria-describedby="inputGroup-sizing-lg"
                />
                <input
                  type="password"
                  class="form-control mt-4"
                  placeholder="Confirm Password"
                  aria-describedby="inputGroup-sizing-lg"
                />
                <button
                  type="submit"
                  className="btn1 btn btn-lg fw-bold mt-4 w-100 "
                  style={{ backgroundColor: "#f9954d" }}
                >
                  Signup
                </button>{" "}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginLogout;
