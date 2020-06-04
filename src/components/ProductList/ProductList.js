import React from "react";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  if (!products || (products.length && products.length === 0)) {
    return <div>No hay productos disponibles</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <>
          <Product {...product} />
          <br />
        </>
      ))}
    </div>
  );
};

export default ProductList;
