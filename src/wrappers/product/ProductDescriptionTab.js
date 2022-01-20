import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Axios from "axios";

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  const [state, setstate] = React.useState({});
  const [imgArr, setImgArr] = React.useState([]);
  const [review, setReview] = useState([]);

  const fetchReview = async () => {
    const { data } = await Axios.get(
      "http://35.154.86.59/api/admin/getallreview"
    );
    const review = data.data;
    setReview(review);
    console.log(review);
  };

  useEffect(() => {
    if(localStorage.getItem("abcd")){
      fetchReview();
    }
  }, []);
  React.useEffect(() => {
    // console.log("Product Desc", productFullDesc);
    var t = JSON.parse(productFullDesc).product_img;
    if (t !== undefined && t !== null) setImgArr(t);
    setstate(JSON.parse(productFullDesc));
  }, []);
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Brand</span>
                      {state?.brand?.name}
                    </li>
                    <li>
                      <span>Material</span>
                      {state?.material?.materialname}
                    </li>

                    <li>
                      <span>Materials</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {state?.long_desc}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-7">
                    {review?.map((rev) => (
                      <div className="review-wrapper" key={rev._id}>
                        <div className="single-review">
                          <div className="review-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/testimonial/1.jpg"
                              }
                              alt=""
                            />
                          </div>
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
                                <div className="review-name">
                                  <h4>
                                    {rev?.customer?.first_name}{" "}
                                    {rev?.customer?.last_name}
                                  </h4>
                                </div>
                                {/* <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div> */}
                              </div>
                            </div>
                            <div className="review-bottom">
                              <p>{rev?.comment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            {/* <span>Your rating:</span> */}
                            {/* <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> */}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
