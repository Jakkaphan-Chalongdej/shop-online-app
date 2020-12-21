import React from "react";
import { Row, Col } from "react-bootstrap";
export default function ProductAll({ all }) {
  return (
    <div>
      <div className="product-list">
        <Row gutter={100}>
          {all.map((product) => {
            return (
              <Col xs={{ span: 12 }} sm={{ span: 4 }}>
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
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
