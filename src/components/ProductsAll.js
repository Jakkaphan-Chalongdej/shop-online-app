import React from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
const select = (state) => state.items;
function ProductAll() {
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
            width={330}
            height={300}
          />
        </picture>
        <h1 className="product__title" style={{ marginTop: "15px" }}>
          {product.title}
        </h1>
        <p className="product__description">{product.desc}</p>
        <div className="product__price-button-container">
          <p className="product__price">฿{product.price}</p>
          <Link to={{pathname:'/cart'}}>
          <button 
            onClick={() => dispatch(addToCart(product.id))}
            className="product__button1 snipcart-add-item"
          >
            <IoBagAdd
              size={30}
              style={{ marginRight: "10px", marginBottom: "5px" }}
            />
           Add to Cart
          </button>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="product-list">
      <Row gutter={100}>{productList}</Row>
      
    </div>
  );
}

export default connect()(ProductAll);
