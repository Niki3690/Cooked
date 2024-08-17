import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    document.title = "Cooked_Footer";
  }, []);
  return (
    <div className="mt-5 xyx" style={{ paddingTop: 0 }}>
      <hr className="pt-3" />
      <div className="container">
        <div className="row justify-content-center align-center ">
          <div className="col-lg-2 col-md-6 col-sm-12">
            <img
              src="https://images-platform.99static.com//WWnD6EAbLneiGZddNdLI1wW7i50=/0x1191:1005x2196/fit-in/500x500/99designs-contests-attachments/80/80692/attachment_80692191"
              style={{ height: 190, width: 190 }}
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
            <ul className="snsn">
              <li>
                <a href="#">Weebly Theams</a>
              </li>
              <li>
                <a href="#">Pre Sale Faqs</a>
              </li>
              <li>
                <a href="#">Submit Tickit</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
            <ul className="snsn">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Theme Weak</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
            <ul className="snsn">
              <li>
                <a href="#">Show Case</a>
              </li>
              <li>
                <a href="#">Widget Kit</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
            <ul className="snsn">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Recorces</a>
              </li>
            </ul>
          </div>
        </div>

        <hr style={{ color: "#F9954D" }} />

        <div className="d-flex text-center justify-content-center gap-3 fs-4 mt-4">
          <div
            style={{
              height: 30,
              width: 30,
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: "50%",
            }}
            className="abcdfv"
          >
            <i class="fa-brands fa-facebook"></i>
          </div>

          <div
            style={{
              height: 30,
              width: 30,
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: "50%",
            }}
            className="abcdfv"
          >
            <i class=" fa-brands fa-twitter"></i>
          </div>

          <div
            style={{
              height: 30,
              width: 30,
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: "50%",
            }}
            className="abcdfv"
          >
            <i class=" fa-brands fa-pinterest"></i>
          </div>

          <div
            style={{
              height: 30,
              width: 30,
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: "50%",
            }}
            className="abcdfv"
          >
            <i class=" fa-brands fa-discord"></i>
          </div>

          <div
            style={{
              height: 30,
              width: 30,
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: "50%",
            }}
            className="abcdfv"
          >
            <i class=" fa-brands fa-intercom"></i>
          </div>
        </div>

        <div>
          <p className=" text-center mt-4 fw-bold">
            ©copyright Rights Required
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
