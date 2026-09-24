import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";
import aboutHero from "../assets/hero/about-hero.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const philosophyRef = useRef(null);
  const technologyRef = useRef(null);
  const materialsRef = useRef(null);
  const ctaRef = useRef(null);

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
        .from(".about-eyebrow", {
          y: 25,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".about-title-line",
          {
            y: "110%",
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
          },
          "-=0.4",
        );

      /* ================================
        HERO IMAGE
      ================================ */

      gsap.from(".about-hero-image img", {
        scale: 1.12,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        delay: 0.2,
      });

      /* ================================
         BRAND CONCEPT
      ================================= */

      gsap.from(".about-intro .about-section-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-intro-heading-line", {
        y: "110%",
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".about-intro-text p", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 60%",
        },
      });

      /* ================================
         PHILOSOPHY
      ================================= */

      gsap.from(".about-philosophy-quote-line", {
        y: "110%",
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".about-philosophy .about-section-content > p", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: "top 55%",
        },
      });

      /* ================================
         TECHNOLOGY
      ================================= */

      gsap.from(".about-tech-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologyRef.current,
          start: "top 70%",
        },
      });

      /* ================================
         MATERIALS
      ================================= */

      gsap.from(".about-material h3", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: materialsRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".about-material p", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: materialsRef.current,
          start: "top 65%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="about" ref={aboutRef}>
      {/* HERO */}
      <section className="about-hero" ref={heroRef}>
        <p className="about-eyebrow">VOIDBASS / ABOUT</p>

        <h1 className="about-title">
          <span className="about-title-line">SOUND</span>
          <span className="about-title-line">WITHOUT</span>
          <span className="about-title-line about-title-muted">
            COMPROMISE.
          </span>
        </h1>
      </section>

      {/* HERO IMAGE */}
      <section className="about-hero-image">
        <img src={aboutHero} alt="" />
      </section>

      {/* BRAND CONCEPT */}
      <section className="about-intro" ref={introRef}>
        <p className="about-section-label">01 / BRAND CONCEPT</p>

        <div className="about-intro-text">
          <div className="about-intro-heading">
            <div className="about-intro-heading-wrap">
              <span className="about-intro-heading-line">Sound should be</span>
            </div>

            <div className="about-intro-heading-wrap">
              <span className="about-intro-heading-line">
                felt, not just heard.
              </span>
            </div>
          </div>

          <p>
            VOIDBASS is an audio brand built around one simple idea: sound
            should be felt, not just heard.
          </p>

          <p>
            We engineer headphones and speakers with a focus on precision,
            power, and an uncompromising listening experience.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="about-section about-philosophy" ref={philosophyRef}>
        <div className="about-section-label">02 / PHILOSOPHY</div>

        <div className="about-section-content">
          <h2 className="about-philosophy-quote">
            <span className="about-philosophy-quote-wrap">
              <span className="about-philosophy-quote-line">No noise.</span>
            </span>

            <span className="about-philosophy-quote-wrap">
              <span className="about-philosophy-quote-line">
                <span>Just sound.</span>
              </span>
            </span>
          </h2>

          <p>
            Every VOIDBASS product is built around one idea: remove everything
            that doesn&apos;t matter and focus on what does.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="about-section" ref={technologyRef}>
        <div className="about-section-label">03 / TECHNOLOGY</div>

        <div className="about-section-content">
          <div className="about-tech-list">
            <div className="about-tech-item">
              <span className="about-tech-number">01</span>

              <div>
                <h3>Precision Audio</h3>
                <p>
                  Carefully tuned sound designed to reveal detail without
                  unnecessary coloration.
                </p>
              </div>
            </div>

            <div className="about-tech-item">
              <span className="about-tech-number">02</span>

              <div>
                <h3>Advanced Acoustics</h3>
                <p>
                  Acoustic engineering focused on depth, clarity, and controlled
                  low-frequency response.
                </p>
              </div>
            </div>

            <div className="about-tech-item">
              <span className="about-tech-number">03</span>

              <div>
                <h3>Pure Signal</h3>
                <p>
                  Every component is designed to preserve the character and
                  detail of the original signal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="about-section about-materials" ref={materialsRef}>
        <div className="about-section-label">04 / MATERIALS</div>

        <div className="about-section-content">
          <div className="about-material-grid">
            <div className="about-material">
              <h3>Aluminum</h3>
              <p>
                Lightweight, durable, and precisely machined for a refined
                structural foundation.
              </p>
            </div>

            <div className="about-material">
              <h3>Memory Foam</h3>
              <p>
                Designed for long listening sessions with a secure and
                comfortable fit.
              </p>
            </div>

            <div className="about-material">
              <h3>Precision Drivers</h3>
              <p>
                Engineered to deliver powerful low frequencies and detailed
                high-resolution sound.
              </p>
            </div>

            <div className="about-material">
              <h3>Minimal Design</h3>
              <p>Nothing unnecessary. Every element exists for a reason.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" ref={ctaRef}>
        <p className="about-cta-eyebrow">VOIDBASS</p>

        <h2>
          <span className="about-cta-title-wrap">
            <span className="about-cta-title-line">Find your</span>
          </span>

          <span className="about-cta-title-wrap">
            <span className="about-cta-title-line">frequency.</span>
          </span>
        </h2>

        <Link to="/contact" className="text-link">
          <span>Get in touch</span>
          <span className="text-link-arrow">→</span>
        </Link>
      </section>
    </main>
  );
}

export default About;
