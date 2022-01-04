import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
//import { useToasts } from "react-toast-notifications";
import Sticky from "react-sticky-el";
//import { getDiscountPrice } from "../../helpers/product";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySticky from "../../components/product/ProductImageGallerySticky";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "../../components/product/sub-components/ProductRating";

const ProductImageDescriptionSticky = ({
  spaceTopClass,
  spaceBottomClass,
  product,
  currency,
  cartItems,
  wishlistItems,
  compareItems,
  productImage,
  productFullDesc,
  discountedPrice,
  finalDiscountedPrice,
  finalProductPrice,
  compareItem,
  addToast,
  addToCart,
  addToWishlist,
  addToCompare,
  fullProductDesc,
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

  const [state, setstate] = React.useState({});
  const [imgArr, setImgArr] = React.useState([]);
  React.useEffect(() => {
    console.log("ProductDesc", productFullDesc);
    console.log("Product Img", productImage);
    var t = JSON.parse(productImage).product_img;
    if (t !== undefined && t !== null) setImgArr(t);
    // if (
    //   productFullDesc !== undefined &&
    //   productFullDesc !== null &&
    //   productFullDesc !== ""
    // )
    //   setstate(JSON.parse(productFullDesc));
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
              <div className="product-sticky-image mb--10">
                {imgArr?.map((single) => (
                  <div className="product-sticky-image__single mb-10">
                    <img src={single} alt="" className="img-fluid" />
                  </div>
                ))}
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
                    <Rating />
                  </div>
                </div>

                <div className="pro-details-list">
                  <p>{state?.short_desc}</p>
                </div>

                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Color</span>
                    <div className="pro-details-color-content">
                      <h5>{state?.color?.colorName}</h5>
                      {/* <label
                    className={`pro-details-color-content--single ${single.color}`}
                   
                  > */}
                      {/* <input
                      type="radio"
                      value={single.color}
                      name="product-color"
                      checked={
                        single.color === selectedProductColor ? "checked" : ""
                      }
                      onChange={() => {
                        setSelectedProductColor(single.color);
                        setSelectedProductSize(single.size[0].name);
                        setProductStock(single.size[0].stock);
                        setQuantityCount(1);
                      }}
                    /> */}
                      {/* <span className="checkmark"></span>
                  </label> */}
                    </div>
                  </div>
                  <div className="pro-details-size">
                    <span>Size</span>
                    {/* <h6>{state?.size?.sizeName}</h6>  */}
                    <div className="pro-details-size-content">
                      {state?.size?.map((sizes) => (
                        <label
                          className={`pro-details-size-content--single`}
                          key={sizes._id}
                        >
                          <input
                            type="radio"
                            value={sizes.sizeName}
                            checked={sizes.sizeName}
                          />
                          <span className="size-name">{sizes.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pro-details-quality">
                  <div className="pro-details-cart btn-hover ml-0">
                    <a href="##" target="_blank">
                      Buy Now
                    </a>
                  </div>
                </div>

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
                      onClick={() =>
                        addToCart(product, addToast, quantityCount)
                      }
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
                      onClick={() => addToWishlist(product, addToast)}
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
