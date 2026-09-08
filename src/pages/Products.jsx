import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../styles/Products.css";

import products from "../data/products";

const Products = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================================
         HERO
      ================================= */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .from(".products-eyebrow", {
          y: 25,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".products-title-line",
          {
            y: "110%",
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
          },
          "-=0.4",
        )
        .from(
          ".products-intro",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="products">
      {/* HERO */}
      <section className="products-hero" ref={heroRef}>
        <p className="products-eyebrow">VOIDBASS / PRODUCTS</p>

        <h1 className="products-title">
          <span className="products-title-wrap">
            <span className="products-title-line">SOUND</span>
          </span>

          <span className="products-title-wrap">
            <span className="products-title-line products-title-muted">
              MATTERS.
            </span>
          </span>
        </h1>

        <p className="products-intro">
          Designed for those who listen differently.
          <br />
          Explore the VOIDBASS collection.
        </p>
      </section>

      {/* PRODUCT LIST */}
      <section className="products-list">
        <div className="products-header">
          <span>01 / COLLECTION</span>
          <span>{products.length} PRODUCTS</span>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <Link
              to={`/products/${product.id}`}
              className="product-card"
              key={product.id}
            >
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />

                <span className="product-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="product-card-info">
                <div>
                  <p className="product-card-category">{product.category}</p>
                  <h2>{product.name}</h2>
                </div>

                <p className="product-card-price">
                  ¥{product.price.toLocaleString()}
                </p>
              </div>

              <p className="product-card-description">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
