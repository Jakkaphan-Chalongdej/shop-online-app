import React from "react";
import Products from "../../products.json";
import All from "../../components/ProductsAll";
export default function AllProduct() {
  const ProductA = Products.productA;
  const productB = Products.productB;
  return (
    <div>
      <All all={ProductA} />
      <All all={productB} />
    </div>
  );
}