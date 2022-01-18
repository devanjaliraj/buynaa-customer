import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
//import { useToasts } from "react-toast-notifications";
import Sticky from "react-sticky-el";
import Carousel from "react-bootstrap/Carousel";
//import { getDiscountPrice } from "../../helpers/product";
//import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
//import ProductImageGallerySticky from "../../components/product/ProductImageGallerySticky";
//import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "../../components/product/sub-components/ProductRating";
import Axios from "axios";
import { Button } from "reactstrap";

const ProductImageDescriptionSticky = ({
  spaceTopClass,
  spaceBottomClass,
  wishlistItems,
  productImage,
}) => {
  // const wishlistItem = wishlistItems.filter(
  //   wishlistItem => wishlistItem.id === product.id
  // )[0];
  // const compareItem = compareItems.filter(
  //   compareItem => compareItem.id === product.id
  // )[0];
  // const { addToast } = useToasts();

  // const discountedPrice = getDiscountPrice(product.price, product.discount);
  // const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  //const finalDiscountedPrice = +(
  //   discountedPrice * currency.currencyRate
  // ).toFixed(2);
  const [quantityCount, setQuantityCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [rating, allRating] = useState([false, false, false, false, false]);
  const [selectedColor, setSelectedColor] = useState("");
  const [state, setstate] = React.useState({});
  const [imgArr, setImgArr] = React.useState([]);
  React.useEffect(() => {
    var t = JSON.parse(productImage).product_img;
    if (t !== undefined && t !== null) setImgArr(t);
    setstate(JSON.parse(productImage));
  });

  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}
            <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
              <div className="">
                <Carousel>
                  {imgArr?.map((single) => (
                    <Carousel.Item>
                      <img
                        src={single}
                        alt=""
                        className="img-fluid"
                        style={{ width: "550px", height: "100vh" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Sticky
              boundaryElement=".shop-area"
              style={{ position: "relative" }}
            >
              {/* product description info */}
              {/* <ProductDescriptionInfo
                //product={product}
                //discountedPrice={discountedPrice}
                //currency={currency}
                //finalDiscountedPrice={finalDiscountedPrice}
                //finalProductPrice={state?.sell_price}
                // cartItems={cartItems}
                // wishlistItem={wishlistItem}
                // compareItem={compareItem}
                // addToast={addToast}
                fullProductDesc={JSON.stringify(state)}
              /> */}
              <div className="product-details-content ml-70 mt-5 mb-5">
                <h2>{state?.product_name}</h2>
                <div className="product-details-price">
                  <Fragment>
                    <span>₹{state?.sell_price}</span>{" "}
                  </Fragment>
                </div>

                <div className="pro-details-rating-wrap">
                  <div className="pro-details-rating">
                    {rating.map((val, index) => (
                      <span
                        onClick={() => {
                          var rat = [];
                          for (var i = 0; i < 5; i++) {
                            if (i <= index) rat.push(true);
                            else rat.push(false);
                          }
                          allRating(rat);
                        }}
                      >
                        {rating[index] ? (
                          <i className="fa fa-star-o yellow" key={index}></i>
                        ) : (
                          <i className="fa fa-star-o" key={index}></i>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pro-details-list">
                  <p>{state?.short_desc}</p>
                </div>
                {/* section Color */}
                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Color</span>
                    <div
                      className="pro-details-color-content"
                      style={{ flexDirection: "row" }}
                    >
                      {state
                        ? state.color
                          ? state.color.map((clr) => (
                              <Button
                                outline
                                color="primary"
                                className="m-1"
                                onClick={() => {
                                  setSelectedColor(clr.colorName);
                                }}
                              >
                                <h5
                                  style={{
                                    backgroundColor:
                                      selectedColor === clr.colorName,
                                  }}
                                >
                                  {clr.colorName}
                                </h5>
                              </Button>
                            ))
                          : null
                        : null}
                    </div>
                  </div>
                </div>
                {/* Section Size */}
                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Size</span>
                    <div
                      className="pro-details-color-content"
                      style={{ flexDirection: "row" }}
                    >
                      {state
                        ? state.size
                          ? state.size.map((siz) => (
                              <Button
                                outline
                                color="danger"
                                className="m-1"
                                onClick={() => {
                                  setSelectedSize(siz.sizeName);
                                }}
                              >
                                <h5
                                  style={{
                                    backgroundColor:
                                      selectedSize === siz.sizeName,
                                  }}
                                >
                                  {siz.sizeName}
                                </h5>
                              </Button>
                            ))
                          : null
                        : null}
                    </div>
                  </div>
                </div>

                {/* <div className="pro-details-quality">
                  <div className="pro-details-cart btn-hover ml-0">
                    <a href="##" target="_blank">
                      Buy Now
                    </a>
                  </div>
                </div> */}

                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : 1
                        )
                      }
                      className="dec qtybutton"
                    >
                      -
                    </button>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      value={quantityCount}
                      readOnly
                    />
                    <button className="inc qtybutton">+</button>
                  </div>
                  <div className="pro-details-cart btn-hover">
                    <button
                      onClick={() => {
                        Axios.post(
                          "http://35.154.86.59/api/admin/add_ToCart",
                          {
                            product: state._id,
                            product_qty: quantityCount,
                            product_price: state.sell_price,
                            colorName: selectedColor,
                            size: selectedSize,
                          },
                          {
                            headers: {
                              "auth-token": localStorage.getItem("token"),
                            },
                          }
                        )
                          .then((response) => {
                            alert("Added To Cart");
                            console.log(response);
                            //pahucha dena
                          })
                          .catch(function (error) {
                            if (error.response) {
                              // Request made and server responded
                              console.log(error.response.data);
                              console.log(error.response.status);
                              console.log(error.response.headers);
                            } else if (error.request) {
                              // The request was made but no response was received
                              console.log(error.request);
                            } else {
                              // Something happened in setting up the request that triggered an Error
                              console.log("Error", error.message);
                            }
                          });
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="pro-details-wishlist">
                    <button
                      className={wishlistItems !== undefined ? "active" : ""}
                      disabled={wishlistItems !== undefined}
                      title={
                        wishlistItems !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => {
                        Axios.post(
                          "http://35.154.86.59/api/admin/addwishlist",
                          {
                            product: state._id,
                            colorName: selectedColor,
                            size: selectedSize,
                          },
                          {
                            headers: {
                              "auth-token": localStorage.getItem("token"),
                            },
                          }
                        )
                          .then((response) => {
                            alert("Added To Wishlist");
                            console.log(response);
                            //pahucha dena
                          })
                          .catch(function (error) {
                            if (error.response) {
                              // Request made and server responded
                              console.log(error.response.data);
                              console.log(error.response.status);
                              console.log(error.response.headers);
                            } else if (error.request) {
                              // The request was made but no response was received
                              console.log(error.request);
                            } else {
                              // Something happened in setting up the request that triggered an Error
                              console.log("Error", error.message);
                            }
                          });
                      }}
                    >
                      <i className="pe-7s-like" />
                    </button>
                  </div>
                </div>
              </div>
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescriptionSticky.propTypes = {
  fullProductDesc: PropTypes.string,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  product: PropTypes.object,
  productImage: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  wishlistItems: PropTypes.array,
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  wishlistItem: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
  };
};

export default connect(mapStateToProps)(ProductImageDescriptionSticky);
