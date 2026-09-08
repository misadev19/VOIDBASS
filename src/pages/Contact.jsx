import { useEffect } from "react";
import gsap from "gsap";

import "../styles/Contact.css";

const Contact = () => {
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
        .from(".contact-eyebrow", {
          y: 25,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".contact-title-line",
          {
            y: "110%",
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
          },
          "-=0.4",
        );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for your interest!\n\nThis is a concept website created for portfolio purposes.\nNo actual messages will be sent.",
    );

    e.target.reset();
  };

  return (
    <main className="contact">
      {/* HERO */}
      <section className="contact-hero">
        <p className="contact-eyebrow">Get in touch</p>

        <h1 className="contact-title">
          <span className="contact-title-wrap">
            <span className="contact-title-line">CONTACT</span>
          </span>

          <span className="contact-title-wrap">
            <span className="contact-title-line contact-title-muted">
              VOIDBASS.
            </span>
          </span>
        </h1>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        <div className="contact-description">
          <p className="contact-label">01 / CONTACT</p>

          <h2>
            Let's make
            <br />
            some noise.
          </h2>

          <p>
            Have a question, a project in mind, or simply want to talk sound?
            Send us a message and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us what's on your mind."
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </section>

      {/* NOTE */}
      <p className="contact-note">
        We usually respond within 1–3 business days.
      </p>
    </main>
  );
};

export default Contact;
