import Carousel from "react-multi-carousel";
import { addToCart } from "./actions/cartActions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
const select = (state) => state.items;
function ProductStore({ head }) {
  const dispatch = useDispatch();
  const product = useSelector(select);
  let productList = product.map((product) => {
    return (
      <div key={product.id} className="card">
        <picture>
          <img
            draggable={false}
            className="product__image"
            src={product.img}
            alt={product.title}
            quality="75%"
            width="290px"
            height="290px"
          />
        </picture>
        <h1 className="product__title" style={{ marginTop: "15px" }}>
          {product.title}
        </h1>
        <p className="product__description">{product.desc}</p>
        <div className="product__price-button-container">
          <p className="product__price">฿{product.price}</p>
          <Link to={{ pathname: "/cart" }}>
            <button
              onClick={() => dispatch(addToCart(product.id))}
              className="product__button "
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    );
  });
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
            {/* {prop_product.slice(0, 5).map((product) => { */}
            {productList}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default connect()(ProductStore);
