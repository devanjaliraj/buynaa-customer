import PropTypes from "prop-types";
import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Input, Button } from "reactstrap";
import banner from "../../assets/img/banner.jpg";
import { axios } from "axios";

export class HeroSliderTwentyEightSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
      loading: false,
      value: "",
    };
  }

  search = async val => {
    this.setState({ loading: true });
    const res = await axios(
      `http://35.154.86.59/api/admin/searchinputbycategory`
    );
    const products = await res.data;

    this.setState({ products, loading: false });
  };
  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let products = <h1>There's no products</h1>;
    if (this.state.products) {
      products = <div>list={this.state.products} </div>;
    }

    return products;
  }

  render() {
    return (
      <div
        className={`single-slider-2 slider-height-1 d-flex align-items-center bg-img ${
          this.props.sliderClass ? this.props.sliderClass : ""
        }`}
        style={{ backgroundImage: `url(${banner})`, height: "100vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8 col-12">
              <div className="slider-content-red slider-content-2 slider-content-2--white slider-animated-1">
                <h1 className="animated" style={{ color: "white" }}>
                  {" "}
                  Discover <br /> Apparel Stores <br /> Near You
                </h1>
                <h3
                  className="animated no-style mb-2"
                  style={{ color: "#FFFFFF" }}
                >
                  One Stop Shop for you local clothing
                </h3>
                <div className="d-flex">
                  <Input
                    type="search"
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Type something to search"
                  />
                  {this.renderdiv}
                  {/* <Button color="primary" className="ml-1">
                    Search
                  </Button> */}
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
  }
}

HeroSliderTwentyEightSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default HeroSliderTwentyEightSingle;
