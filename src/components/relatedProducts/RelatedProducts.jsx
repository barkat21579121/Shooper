import React from "react";
import "../relatedProducts/relatedProduct.css";
import data_product from "../Assets/data";
import Items from "../items/items";

const RelatedProducts = () => {
  return (
    <div className="RelatedProducts">
      <h1>RelatedProducts</h1>
      <hr/>
      <div className="related-product-items">
      {data_product.map((item,i)=>{
        return <Items  key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}/>
      })}

      </div>
    </div>
  );
};

export default RelatedProducts;
