import Carousel from "react-multi-carousel";

import React from "react";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
export default function ProductStore({ prop_product, head }) {
  return (
    <div>
      <div className="product-list">
        <div className="product2"></div>
        <div>
          <h1 className="product__price ">{head}</h1>
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
            autoPlaySpeed={3000}
            autoPlay={true}
            infinite
          >
            {prop_product.slice(0, 5).map((product) => {
              return (
                <div key={product.id} className="card">
                  <picture>
                    <img
                      draggable={false}
                      className="product__image"
                      src={product.image}
                      alt={product.title}
                      quality="75%"
                      width={600}
                      height={460}
                    />
                  </picture>
                  <h1 className="product__title" style={{ marginTop: "15px" }}>
                    {product.title}
                  </h1>
                  <p className="product__description">{product.description}</p>
                  <div className="product__price-button-container">
                    <p className="product__price">฿{product.price}</p>

                    <button
                      className="product__button1 snipcart-add-item"
                      data-item-id={product.id}
                      data-item-image={product.image}
                      data-item-name={product.title}
                      data-item-url="/"
                      data-item-price={product.price}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
