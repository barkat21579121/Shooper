import React, { useContext } from "react";
import { useParams } from "react-router";
import BreadCrum from "../components/breadcrum/BreadCrum";
import { ShopContext } from "../context/ShopContext";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DiscriptionBox from "../components/discriptionBox/DiscriptionBox";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";

const Product = () => {
  
  // const { all_product } = useContext(all_product);
  const { all_product } = useContext(ShopContext);

  // console.log(all_product)
  const { id } = useParams();
  // const iD= Number(id)
  // console.log("productID", id)
  const product = all_product.find((e) => e.id === Number(id));

  console.log("-----------", product)
  return (
    <div className="product">
      <div>
        <BreadCrum product={product} />
        <ProductDisplay product={product} />
        <DiscriptionBox/>
        <RelatedProducts/>
      </div>
    </div>
  );
};

export default Product;
