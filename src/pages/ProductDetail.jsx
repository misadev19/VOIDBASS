import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import "../styles/ProductDetail.css";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <main className="product-not-found">
        <p>PRODUCT NOT FOUND</p>

        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  // Increase the quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease the quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // Add to cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <main className="product-detail">
      {/* BACK */}
      <div className="product-back">
        <Link to="/products">← Back to products</Link>
      </div>

      {/* PRODUCT */}
      <section className="product-main">
        {/* IMAGE */}
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          <span className="product-image-number">01 / 01</span>
        </div>

        {/* INFO */}
        <div className="product-info">
          <div className="product-info-top">
            <p className="product-category">{product.category}</p>

            <h1 className="product-name">{product.name}</h1>

            <p className="product-price">¥{product.price.toLocaleString()}</p>

            <p className="product-description">{product.description}</p>
          </div>

          {/* QUANTITY / PURCHASE */}
          <div className="product-purchase">
            <div className="quantity-wrapper">
              <span className="quantity-label">QUANTITY</span>

              <div className="quantity-control">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className="add-cart"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="product-details">
        <div className="product-details-label">
          <span>02</span>
          <span>DETAILS</span>
        </div>

        <div className="product-details-content">
          <h2>
            Built for
            <br />
            <span>the sound.</span>
          </h2>

          <ul className="product-specs">
            {product.features.map((feature, index) => (
              <li key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="product-specifications">
        <div className="product-details-label">
          <span>03</span>

          <span>
            SPECIFICATIONS
            <em>TECHNICAL DATA</em>
          </span>
        </div>

        <div className="product-specifications-content">
          <div className="specifications-header">
            <span>TECHNICAL DATA</span>

            <span>
              01 —{" "}
              {String(Object.keys(product.specifications).length).padStart(
                2,
                "0",
              )}
            </span>
          </div>

          <div className="specifications-table">
            {Object.entries(product.specifications).map(
              ([key, value], index) => (
                <div className="specification-row" key={key}>
                  <span className="specification-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="specification-key">{key}</span>

                  <span className="specification-value">{value}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <p>VOIDBASS</p>

        <h2>
          Hear
          <br />
          <span>different.</span>
        </h2>

        <Link to="/products" className="product-cta-link">
          <span>Explore all products</span>

          <span className="product-cta-arrow">→</span>
        </Link>
      </section>
    </main>
  );
};

export default ProductDetail;
