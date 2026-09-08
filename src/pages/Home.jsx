import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Home.css";

import products from "../data/products";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const conceptRef = useRef(null);
  const featuredRef = useRef(null);
  const ctaRef = useRef(null);

  const featuredProducts = [
    products.find((product) => product.id === "vb-02"),
    products.find((product) => product.id === "vb-s02"),
  ];

  const galleryProducts = products.slice(0, 4);

  const handleSocialClick = (e) => {
    e.preventDefault();

    alert(
      "Thank you for your interest!\n\nThis is a concept website created for portfolio purposes.",
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ========================================
        HERO
      ======================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        // BACKGROUND
        .from(".hero-background", {
          opacity: 0,
          scale: 1.08,
          duration: 1.8,
          ease: "power2.out",
        });

      /* ========================================
        HERO BACKGROUND — SLOW MOTION
      ======================================== */

      gsap.to(".hero-background", {
        backgroundPosition: "65% 40%",
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* ========================================
         ENGINEERING
      ======================================== */

      gsap.to(".engineering-track", {
        xPercent: -50,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      /* ========================================
         CONCEPT
      ======================================== */

      const conceptTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: conceptRef.current,
          start: "top 70%",
        },
      });

      conceptTimeline
        .to(".concept-line-1 span", {
          opacity: 1,
          x: 0,
          duration: 0.035,
          stagger: 0.035,
          ease: "power2.out",
        })
        .to(
          ".concept-line-2 span",
          {
            opacity: 1,
            x: 0,
            duration: 0.035,
            stagger: 0.035,
            ease: "power2.out",
          },
          "+=0.1",
        )
        .to(
          ".concept-line-3 span",
          {
            opacity: 1,
            x: 0,
            duration: 0.035,
            stagger: 0.035,
            ease: "power2.out",
          },
          "+=0.1",
        )
        .to(
          ".concept-line-4 span",
          {
            opacity: 1,
            x: 0,
            duration: 0.045,
            stagger: 0.05,
            ease: "power2.out",
          },
          "+=0.15",
        );

      gsap.from(".concept-mobile-line", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: conceptRef.current,
          start: "top 70%",
        },
      });

      /* ========================================
         FEATURED COLLECTION
      ======================================== */

      gsap.from(".featured-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".featured-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 65%",
        },
      });

      gsap.utils.toArray(".featured-image").forEach((image) => {
        gsap.to(image, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      /* ========================================
         PRODUCTS
      ======================================== */

      gsap.from(".products-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: ".products-section",
          start: "top 75%",
        },
      });

      gsap.from(".product-gallery-item", {
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".product-gallery",
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="home">
      {/* ========================================
          01 HERO
      ======================================== */}

      <section ref={heroRef} className="hero-section">
        <div className="hero-background">
          <img src="/images/hero/hero.jpg" alt="" />
        </div>

        <div className="hero-inner">
          <div className="hero-eyebrow">VOIDBASS / AUDIO ENGINEERING</div>

          <div className="hero-title">
            <div className="hero-title-mask">
              <h1 className="hero-title-line">ENGINEERED</h1>
            </div>

            <div className="hero-title-mask">
              <h1 className="hero-title-line hero-title-outline">
                FOR SILENCE.
              </h1>
            </div>
          </div>

          <div className="hero-meta">
            <span>01</span>
            <span>PRECISION AUDIO</span>
          </div>
        </div>
      </section>

      {/* ========================================
          02 ENGINEERING
      ======================================== */}

      <section className="engineering-section">
        <div className="engineering-label">02 / ENGINEERING</div>

        <div className="engineering-marquee">
          <div className="engineering-track">
            <div className="engineering-group">
              <span>PRECISION AUDIO</span>
              <span>ADVANCED ACOUSTICS</span>
              <span>HIGH-RESOLUTION SOUND</span>
              <span>PURE SIGNAL</span>
              <span>LOW DISTORTION</span>
              <span>ENGINEERED SOUND</span>
            </div>

            <div className="engineering-group" aria-hidden="true">
              <span>PRECISION AUDIO</span>
              <span>ADVANCED ACOUSTICS</span>
              <span>HIGH-RESOLUTION SOUND</span>
              <span>PURE SIGNAL</span>
              <span>LOW DISTORTION</span>
              <span>ENGINEERED SOUND</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
        03 CONCEPT
      ======================================== */}

      <section ref={conceptRef} className="concept-section">
        <div className="section-number">03 / CONCEPT</div>

        {/* DESKTOP */}
        <div className="concept-content concept-desktop">
          <div className="concept-line-wrap">
            <p className="concept-line concept-line-1">
              {"MASSIVE SOUND.".split("").map((char, index) => (
                <span key={index}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </p>
          </div>

          <div className="concept-line-wrap">
            <p className="concept-line concept-line-2">
              {"PURE WEIGHT.".split("").map((char, index) => (
                <span key={index}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </p>
          </div>

          <div className="concept-line-wrap">
            <p className="concept-line concept-line-3">
              {"DEEP IMPACT.".split("").map((char, index) => (
                <span key={index}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </p>
          </div>

          <div className="concept-line-wrap">
            <p className="concept-line concept-line-large concept-line-4">
              {"FEEL IT.".split("").map((char, index) => (
                <span key={index}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </p>
          </div>

          <Link to="/about" className="text-link">
            VIEW MORE
            <span className="text-link-arrow">→</span>
          </Link>
        </div>

        {/* MOBILE */}
        <div className="concept-mobile">
          <div className="concept-mobile-line concept-mobile-line-1">
            MASSIVE SOUND.
          </div>

          <div className="concept-mobile-line concept-mobile-line-2">
            PURE WEIGHT.
          </div>

          <div className="concept-mobile-line concept-mobile-line-3">
            DEEP IMPACT.
          </div>

          <div className="concept-mobile-line concept-mobile-line-4">
            FEEL IT.
          </div>

          <Link to="/about" className="text-link">
            VIEW MORE
            <span className="text-link-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* ========================================
          04 FEATURED COLLECTION
      ======================================== */}

      <section ref={featuredRef} className="featured-section">
        <div className="section-heading-row">
          <div className="section-number">04 / FEATURED COLLECTION</div>

          <h2 className="featured-heading">
            SELECTED
            <br />
            FOR YOU.
          </h2>
        </div>

        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              className="featured-card"
              key={product.id}
            >
              <div className="featured-image-wrap">
                <img
                  className="featured-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="featured-info">
                <div>
                  <p className="product-category">{product.category}</p>

                  <h3>{product.name}</h3>
                </div>

                <span>¥{product.price.toLocaleString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================
          05 PRODUCTS
      ======================================== */}

      <section className="products-section">
        <div className="section-heading-row">
          <div className="section-number">05 / PRODUCTS</div>

          <h2 className="products-heading">
            FIND YOUR
            <br />
            FREQUENCY.
          </h2>
        </div>

        <div className="product-gallery">
          {galleryProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              className="product-gallery-item"
              key={product.id}
            >
              <div className="product-gallery-image">
                <img src={product.image} alt={product.name} />

                <div className="product-gallery-overlay">
                  <span>VIEW PRODUCT</span>
                  <FiArrowUpRight />
                </div>
              </div>

              <div className="product-gallery-info">
                <span>{product.name}</span>
                <span>{product.category}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="products-all">
          <Link to="/products" className="text-link">
            VIEW ALL PRODUCTS
            <span className="text-link-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* ========================================
          06 CTA
      ======================================== */}

      <section ref={ctaRef} className="cta-section">
        <div className="cta-background" />

        <div className="cta-content">
          <div className="section-number">06 / VOIDBASS</div>

          <div className="cta-title">
            <div className="cta-title-mask">
              <h2 className="cta-title-line">FIND YOUR</h2>
            </div>

            <div className="cta-title-mask">
              <h2 className="cta-title-line">SOUND.</h2>
            </div>
          </div>

          <div className="cta-bottom">
            <div className="social-links">
              <a href="#" aria-label="Instagram" onClick={handleSocialClick}>
                <FiInstagram />
              </a>

              <a href="#" aria-label="X" onClick={handleSocialClick}>
                <FaXTwitter />
              </a>

              <a href="#" aria-label="Facebook" onClick={handleSocialClick}>
                <FiFacebook />
              </a>
            </div>

            <span className="cta-brand">VOIDBASS</span>
          </div>
          <p className="cta-disclaimer">
            This website is a fictional demo site created for portfolio
            purposes.
            <br className="mobile-only-break" />
            It is not affiliated with any company or organization.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
