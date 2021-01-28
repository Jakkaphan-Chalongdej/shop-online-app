import React from "react";
// import { currencyToUse } from "../../../Utility/currency";
import { VISIBILITY_FILTERS } from "../../../static/constants";
import { getProductsByFilter } from "../../../store/selectors";
import "../../style.css";
import Carousel from "react-multi-carousel";
import { addToCart } from "../../../store/actions/cartActions";
import { connect ,useDispatch} from "react-redux";
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
const Sale = (props) => {
  const dispatch = useDispatch();
  let products = props.productsProps.map((product,index) => {
    //let productList = product.map((product) => {
    return (
      <div key={index} className="card">
        <p className="sale">sale</p>
        <p className="salepromo">30%</p>
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
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
            autoPlaySpeed={3000}
            autoPlay={true}
            infinite
          >
            {products}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsProps: getProductsByFilter(state, VISIBILITY_FILTERS.SALE, 6),
    // usedCurrencyProp: state.usedCurrency,
  };
};
export default connect(mapStateToProps)(Sale);
