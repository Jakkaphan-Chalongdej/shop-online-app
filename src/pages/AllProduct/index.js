import React from "react";
import Products from "../../products.json";
import All from "../../components/ProductsAll";
import SideNav from "../../components/layouts/SideNav";
export default function AllProduct() {
  const ProductA = Products.productA;
  const productB = Products.productB;
  return (
    <div>
      {/* <SideNav/> */}
      <All all={ProductA} />
      <All all={productB} />
    </div>
  );
}
