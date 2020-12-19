export default function PopProducts({ popPD }) {
  return (
    <div className="product-list">
      <min>
        {popPD.map((product) => {
          return (
            <div className="product">
              <h2 className="product__title">{product.title}</h2>
              <p className="product__description">{product.description}</p>

              <img
                src={product.image}
                alt={product.title}
                width="100%"
                height="500px"
                className="product__image"
              />
              <div className="product__price-button-container">
                <div className="product__price">฿ xxx.xx</div>
                <button
                  className="snipcart-add-item product__button   "
                  data-item-id="1"
                  data-item-image="/images/01.jpg"
                  data-item-name="cats"
                  data-item-url="/"
                  data-item-price="300"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </min>
    </div>
  );
}
