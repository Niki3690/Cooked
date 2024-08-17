import React from "react";
import { useParams } from "react-router-dom";
import RecipesDetails from "./RecipesDetails";
import { useEffect } from "react";

const SinglePage = () => {
    useEffect(() => {
        document.title = "Cooked_SinglePage"
    }, [])
    let { id } = useParams();

    let item = RecipesDetails.find((items) => items.id == id);
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <img src={item.photoUrl} className="frfr" />
                        <h4
                            className="mt-4 text-black fw-bold ps-3 pe-3 "
                            style={{ height: 50, letterSpacing: 2 }}
                        >
                            {item.title}
                        </h4>

                        <div
                            style={{ display: "flex", justifyContent: "space-evenly" }}
                            className="aaaaa"
                        >
                            <div className="ssss">
                                <div>
                                    <i class="fa-solid fa-utensils iiii"></i>
                                </div>
                                <div>
                                    <h6
                                        className="text-black fw-bold"
                                        style={{ letterSpacing: 2 }}
                                    >
                                        Yields
                                    </h6>
                                    <h6
                                        className="text-tertiary-100"
                                        style={{ letterSpacing: 2 }}
                                    >
                                        {item.servings} Servings
                                    </h6>
                                </div>
                            </div>

                            <div className="ssss">
                                <div>
                                    <i class="fa-regular fa-clock iiii"></i>
                                </div>
                                <div>
                                    <h6
                                        className="text-black fw-bold"
                                        style={{ letterSpacing: 2 }}
                                    >
                                        Cook Time
                                    </h6>
                                    <h6
                                        className="text-tertiary-100"
                                        style={{ letterSpacing: 2 }}
                                    >
                                        {item.totalTime} Mins
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-dark fw-bold mt-5 ws">Main Ingredients</h4>
                            <div className="mt-3" style={{ letterSpacing: 2 }}>
                                {item.ingredients.split("\n").map((ingredient, index) => (
                                    <div key={index} className="d-flex align-items-center">
                                        <input type="checkbox" id={`ingredient-${index}`} />
                                        <label
                                            htmlFor={`ingredient-${index}`}
                                            className="text-tertiary-100 ms-2"
                                        >
                                            {ingredient}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-dark fw-bold mt-5 ws">Directions</h4>

                            <div className="mt-3 " style={{ letterSpacing: 2 }}>
                                {item.directions.split("\n").map((step, index) => (
                                    <h6 key={index} className="text-tertiary-100">
                                        <span
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                marginRight: 1,
                                            }}
                                        >
                                            {index + 1}.{" "}
                                        </span>
                                        {step}
                                    </h6>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
