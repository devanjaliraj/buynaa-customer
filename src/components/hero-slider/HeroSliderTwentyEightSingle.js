import PropTypes from "prop-types";
import React from "react";
//import { Link } from "react-router-dom";
import { Input, Button } from "reactstrap";
import banner from "../../assets/img/banner.jpg";

const HeroSliderTwentyEightSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-1 d-flex align-items-center bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${banner})`, height: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12">
            <div className="slider-content-red slider-content-2 slider-content-2--white slider-animated-1">
              <h1 className="animated" style={{ color: "white" }}>
                {" "}
                Discover <br /> Apparel Stores <br /> Near You
              </h1>
              <h3 className="animated no-style mb-2" style={{ color: "#FFFFFF" }}>
                One Stop Shop for you local clothing
              </h3>
              <div className="d-flex">
                <Input type="search" />
                <Button color="primary" className="ml-1">
                  Search
                </Button>
              </div>
              {/* <div className="slider-btn-red btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Shop Now
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderTwentyEightSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default HeroSliderTwentyEightSingle;
