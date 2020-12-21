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
      image: "/images/Banner 1018x387-02.jpg",
      description: "",
      button: "Buy Now",
      href: "#productA",
    },
    {
      title: "",
      image: "/images/Banner 1018x387-01.jpg",
      description: "",
      button: "Buy Now",
      href: "#productA",
    },
   
  ];
  const popPDA = [
    {
      head_title: "",
      image: "/images/DS-2CD2021G1-I.jpg",
      title: "กล้องวงจรปิดHikvision ",
      id: "1",
      description: "DS-2CD2021G1-I",
      // price: "xxx.xx",
    },
  ];
  const popPDB = [
    {
      head_title: "",
      title: "Coming Soon",
      image: "/images/cmi p66s.jpeg",
      description: "",
      // price: "xxx.xx",
    },
  ];
  return (
    <>
      <Slide content={content} />
      <div id="productA">
        <PopProducts popPD={popPDA} head_title="กล้องวงจรปิด" />
        <ProductStore prop_product={ProductA} head="กล้องวงจรปิด แนะนำ " />
      </div>
      <div style={{ marginTop: "200px" }}>
        <PopProducts popPD={popPDB} head_title="เครื่องสแกนลายนิ้วมือ " />
        <ProductStore
          prop_product={ProductB}
          head="เครื่องสแกนลายนิ้วมือ แนะนำ"
        />
      </div>
    </>
  );
}
