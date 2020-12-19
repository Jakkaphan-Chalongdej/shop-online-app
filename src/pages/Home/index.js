import React from "react";
import ProductStore from "../../components/ProductStore";
import Slide from "../../components/layouts/Slide";
import PopProducts from "../../components/PopProducts";
import Products from "../../products.json";
export default function Home() {
  const ProductA = Products.productA;
  const ProductB = Products.productB;
  const content = [
    {
      title: "",
      image: "/images/comingsoon.jpg",
      description: "",
      button: "Buy Now",
      href: "#productA",
    },
    {
      title: "",
      image: "/images/comingsoon.jpg",
      description: "",
      button: "Buy Now",
      href: "#productA",
    },
    {
      title: "",
      image: "/images/comingsoon.jpg",
      description: "",
      button: "Buy Now",
      href: "#productB",
    },
    {
      title: "",
      image: "/images/comingsoon.jpg",
      description: "",
      button: "Buy Now",
      href: "#productB",
    },
  ];
  const popPDA = [
    {
      title: "Coming Soon",
      image: "/images/comingPD.jpg",
      description: "",
      // price: "xxx.xx",
    },
  ];
  const popPDB = [
    {
      title: "Coming Soon",
      image: "/images/comingPDB.jpg",
      description: "",
      // price: "xxx.xx",
    },
  ];
  return (
    <>
    
      <Slide content={content} />
      <div id="productA">
        <PopProducts popPD={popPDA} />
        <ProductStore prop_product={ProductA} head="Store A" />
      </div>
      <div id="productA">
        <PopProducts popPD={popPDB} />
        <ProductStore prop_product={ProductB} head="Store B" />
      </div>
      {/* <Iot /> */}
    </>
  );
}
