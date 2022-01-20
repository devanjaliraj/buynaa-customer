import PropTypes from "prop-types";
import React from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopColor from "../../components/product/ShopColor";
import ShopSize from "../../components/product/ShopSize";
import ShopTag from "../../components/product/ShopTag";
import ShopBrand from "../../components/product/ShopBrand";

const ShopSidebar = ({
  products,
  getSortParams,
  sideSpaceClass,
  colors,
  sizes,
  category,
  tags,
  brand,
  callback,
  tagcallback,
  colorcallback
}) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueColors = getIndividualColors(products);
  const uniqueSizes = getProductsIndividualSizes(products);
  const uniqueTags = getIndividualTags(products);
  // const dataid = getIndividualTags(products);
  const callbackFunction = childData => {
    callback(childData)
    console.log(childData);;
  };

  const tagcallbackMiddle = data => {
    tagcallback(data)
    console.log(data);;
  };
  const colorcallbackMiddle = id => {
    colorcallback(id)
    console.log(id);;
  };
  // const tag = fromchildtohere()

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
      <ShopSearch />

      {/* filter by categories */}
      <ShopCategories categories={category} getSortParams={getSortParams} cb={callbackFunction} />

      {/* filter by color */}
      <ShopColor colors={colors} getSortParams={getSortParams} getonecolor={colorcallbackMiddle}/>

      {/* filter by size */}
      <ShopSize sizes={sizes} getSortParams={getSortParams} />

      {/* filter by tag */}
      <ShopTag tags={tags} getSortParams={getSortParams} getonetag={tagcallbackMiddle} />
      <ShopBrand brands={brand} getSortParams={getSortParams} />
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string,
};

export default ShopSidebar;
