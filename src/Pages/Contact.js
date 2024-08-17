import React from "react";
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        document.title = "Cooked_Contact"
      }, [])
    return (
        <>
            <div className="container mt-5">
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.223848839592!2d72.51345755541993!3d23.040070500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b759e6f063%3A0xc49b8da700d511c4!2sFood%20Court!5e0!3m2!1sen!2sin!4v1723275613779!5m2!1sen!2sin"
                        width="100%"
                        height="500"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div
                                className="dfdf p-3 mt-4"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <h5 className="kkkk">
                                    {" "}
                                    <i class="fa-solid fa-location-dot me-2 fs-3  "></i> Sarkari
                                    Vasahat Road, Vastrapur
                                </h5>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div
                                className="dfdf p-3 mt-4"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <h5 className="kkkk">
                                    {" "}
                                    <i class="fa-solid fa-envelope me-2 fs-3"></i>{" "}
                                    Cooked@gmail.com
                                </h5>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div
                                className="dfdf p-3 mt-4"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <h5 className="kkkk">
                                    {" "}
                                    <i class="fa-solid fa-phone me-2 fs-3"></i> 0000-8585-9636
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="pt-1 ">
                        <div className="reci text-center">
                            <h4>Get in Touch Now</h4>
                            <h1 className="fw-bold mt-3">Write a Message</h1>
                        </div>

                        <div className="mt-5">
                            <div className="row justify-content-center g-4 ">
                                <div className="col-lg-8 col-md-8 col-sm-12 d-flex gap-5">
                                    <input
                                        type="text"
                                        id=""
                                        class="form-control abcc"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        type="email"
                                        id=""
                                        class="form-control abcc"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="col-lg-8 col-md-8 col-sm-12 d-flex gap-5">
                                    <input
                                        type="text"
                                        id=""
                                        class="form-control abcc"
                                        placeholder="Your Subject"
                                    />
                                    <input
                                        type="number"
                                        id=""
                                        class="form-control abcc"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 d-flex gap-5">
                                    <textarea
                                        class="form-control abcc"
                                        placeholder="Your Message "
                                        id=""
                                        rows="9"
                                    ></textarea>
                                </div>
                            </div>
                            <button type="button" class="view btn btn-warning mt-5 px-4 py-3">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 container">
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img
                            src="https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/fancy-cocktail-with-lemons-and-vodka-margarita-P3LS7WA-omrfer9dfhkxmd047izmbuyzfn1z5l2y10z2x313dg.jpg"
                            className="sdsd"
                        ></img>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img
                            src="https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/pasta-with-salmon-P784PLF-omrfewwekhsnk0rxalfdqtjqzya6frpc1svzsqsqc4.jpg"
                            className="sdsd"
                        ></img>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img
                            src="https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/meat-burger-with-salad-cheese-tomato-and-ketchup-KRH2A48-omrfev0q6tq2wsunlkm4lu0tt6jg0dhvdjl0u6viok.jpg"
                            className="sdsd"
                        ></img>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img
                            src="https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/cooked-vegetables-according-to-chinese-recipe-PN2GKUB-omrff2jfpi0dhojqdnv55s4ik9idpybq2kswoekdas.jpg"
                            className="sdsd"
                        ></img>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img
                            src="https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/raspberry-tartlet-dessert-with-almond-flakes-34Z9TYK-omrfeys2y5v878p6zm8mvt2o6q0wv5wsq26yrapxzo.jpg"
                            className="sdsd"
                        ></img>
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default Contact;
