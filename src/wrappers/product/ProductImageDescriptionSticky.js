import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//import { useToasts } from "react-toast-notifications";
import Sticky from "react-sticky-el";
//import { getDiscountPrice } from "../../helpers/product";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
//import ProductImageGallerySticky from "../../components/product/ProductImageGallerySticky";

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
  const [state, setstate] = React.useState({});
  const [imgArr, setImgArr] = React.useState([]);
  React.useEffect(() => {
    console.log("ProductDesc", productFullDesc);
    console.log("Product Img", productImage);
    var t = JSON.parse(productImage).product_img;
    if (t !== undefined && t !== null) setImgArr(t);
    if (
      productFullDesc !== undefined &&
      productFullDesc !== null &&
      productFullDesc !== ""
    )
      setstate(JSON.parse(productFullDesc));
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
                {imgArr?.map(single => (
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
              <ProductDescriptionInfo
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
              />
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescriptionSticky.propTypes = {
  fullProductDesc: PropTypes.string,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  product: PropTypes.object,
  productImage: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
  };
};

export default connect(mapStateToProps)(ProductImageDescriptionSticky);
