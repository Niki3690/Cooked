import React from "react";
import RecipesDetails from "./RecipesDetails";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LatestRecipes = () => {
  useEffect(() => {
    document.title = "Cooked_LatstRecipes";
  }, []);

  const limitedRecipes = RecipesDetails.slice(0, 9);
  return (
    <div>
      <div className="container">
        <div className="row  justify-content-center mt-5">
          {limitedRecipes.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                {/* <h3>{item.id}</h3> */}
                <div className="rrrr">
                  <Link to={`item/${item.id}`}>
                    <img src={item.photoUrl} className="rr" />
                    <h4
                      className="mt-3 text-black fw-bold ps-3 pe-3"
                      style={{ height: 50 }}
                    >
                      {item.title}
                    </h4>
                    <h5 className="mt-4 text-black fw-semibold ps-3 pe-3">
                      {item.course}
                    </h5>

                    <h5 className="ps-3 pe-3 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, accusantium.
                    </h5>
                    {/* <button>Add to cart</button> */}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="about">
        <button type="button" class="btn  view text-center mt-5">
          View All Recipes
        </button>
      </Link>
    </div>
  );
};

export default LatestRecipes;
