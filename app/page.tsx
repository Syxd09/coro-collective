"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ProjectsSection } from "./components/ProjectsSection";
import { MaterialPlayground } from "./components/MaterialPlayground";
import { InteriorsSection } from "./components/InteriorsSection";
import { MATERIALS_DATA, STUDIO_INFO } from "./data/materialsData";
import { useSampleBox } from "./context/SampleBoxContext";

interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  titleItalic: string;
  lede: string;
  manifesto: string;
  primaryCta: { label: string; href: string; icon: string };
  secondaryCta: { label: string; href: string };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "Crafted Collective · Mahadevapura, Bengaluru",
    title: "Explore",
    titleItalic: "possibility.",
    lede: "A material & product innovation experience centre for architects and spatial minds shaping space in Bengaluru and beyond.",
    manifesto: "Materials stop being samples and start becoming space.",
    primaryCta: { label: "Enter Playground", href: "#playground", icon: "↘" },
    secondaryCta: { label: "Explore 8 Material Families", href: "/collections" },
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "Turnkey Interiors & Joinery · Bespoke Living",
    title: "Sculpt",
    titleItalic: "living space.",
    lede: "Monolithic terrazzo kitchen islands, custom wire-mesh joinery suites, and seamless solid surfaces executed for private homes.",
    manifesto: "From raw aggregate formulation to turnkey architectural interior execution.",
    primaryCta: { label: "Explore Interiors", href: "#interiors", icon: "↘" },
    secondaryCta: { label: "Book Studio Consultation", href: "/visit" },
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "Acoustic Engineering · Tactile Warmth",
    title: "Calm",
    titleItalic: "the room.",
    lede: "Micro-perforated felt partitions, sculpted timber acoustic baffles, and textural sound-absorbing architectural surfaces.",
    manifesto: "Acoustic engineering paired with warm tactile material honesty.",
    primaryCta: { label: "View Material Specs", href: "/collections", icon: "↗" },
    secondaryCta: { label: "Order Curated Samples", href: "/collections" },
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "In-Situ Terrazzo · Custom Aggregate Bar",
    title: "Curate",
    titleItalic: "raw earth.",
    lede: "Formulate custom Italian marble chip blends, mineral matrix pigments, and monolithic cast floors directly with our laboratory.",
    manifesto: "Custom aggregate mixology and technical site mockup testing in Bengaluru.",
    primaryCta: { label: "Visit Experience Centre", href: "/visit", icon: "↗" },
    secondaryCta: { label: "Schedule Project Spec", href: "/contact" },
  },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const { toggleSample, isSampleAdded } = useSampleBox();

  useEffect(() => {
    const timer = window.setInterval(
      () => setHeroIndex((index) => (index + 1) % HERO_SLIDES.length),
      5600
    );
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[heroIndex];

  return (
    <main>
      <Nav />

      {/* HERO SECTION */}
      <section className="hero" id="top">
        <div className="hero-slides">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.image}
              className={`hero-slide ${heroIndex === index ? "current" : ""}`}
              style={{
                backgroundImage: `linear-gradient(90deg,rgba(19,19,17,.78),rgba(19,19,17,.18)),url(${slide.image})`,
              }}
            />
          ))}
        </div>

        <div className="hero-grain" />

        <div className="hero-copy">
          <div key={heroIndex} className="hero-copy-inner">
            <p className="eyebrow" style={{ color: "#d9d1c7" }}>
              {currentSlide.eyebrow}
            </p>
            <h1>
              {currentSlide.title}
              <br />
              <i>{currentSlide.titleItalic}</i>
            </h1>
            <p className="lede">{currentSlide.lede}</p>
            <div className="actions">
              {currentSlide.primaryCta.href.startsWith("#") ? (
                <a className="button light" href={currentSlide.primaryCta.href}>
                  {currentSlide.primaryCta.label} <b>{currentSlide.primaryCta.icon}</b>
                </a>
              ) : (
                <Link className="button light" href={currentSlide.primaryCta.href}>
                  {currentSlide.primaryCta.label} <b>{currentSlide.primaryCta.icon}</b>
                </Link>
              )}

              <Link
                className="text-link"
                href={currentSlide.secondaryCta.href}
                style={{ color: "#fff" }}
              >
                {currentSlide.secondaryCta.label} <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-footer-bar">
          <div className="hero-caption">
            <span className="hero-slide-num">0{heroIndex + 1} — 0{HERO_SLIDES.length}</span>
            <span key={heroIndex} className="hero-manifesto hero-manifesto-animated">
              {currentSlide.manifesto}
            </span>
          </div>

          <div className="hero-controls">
            <div className="hero-pagination">
              {HERO_SLIDES.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Show slide ${index + 1}`}
                  className={heroIndex === index ? "active" : ""}
                  onClick={() => setHeroIndex(index)}
                />
              ))}
            </div>

            <a className="scroll-cue" href="#intro">
              Scroll to discover <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro section" id="intro">
        <p className="section-number">01 / A different kind of material library</p>
        <div className="intro-grid">
          <h2>
            Not a catalogue.<br />
            A <i>playground</i><br />
            for design.
          </h2>
          <div>
            <p className="large-copy">
              CORO brings together architectural surfaces, product innovation, aggregate craft, and technical site execution—so your next design brief has somewhere inspiring to begin.
            </p>
            <a className="arrow-link" href="#worlds">
              Discover the collective <span>↘</span>
            </a>
          </div>
        </div>
        <div className="ticker">
          <span>IN-SITU TERRAZZO</span>
          <i>✦</i>
          <span>SOLID SURFACE FORM</span>
          <i>✦</i>
          <span>ARCHITECTURAL WIRE MESH</span>
          <i>✦</i>
          <span>ACOUSTIC FELT</span>
          <i>✦</i>
          <span>ENGINEERED TIMBER</span>
          <i>✦</i>
        </div>
      </section>

      {/* AUDIENCE / WORLDS */}
      <section className="worlds" id="worlds">
        <div className="world-title">
          <p className="section-number">02 / Design Personas</p>
          <h2>
            Made for every<br /><i>curious mind.</i>
          </h2>
        </div>
        <div className="world-list">
          {[
            [
              "01",
              "The Creator",
              "Architects & Interior Designers",
              "Specify aggregate mixes, custom mesh weaves, and monolithic thermoformed surface details for high-end briefs.",
            ],
            [
              "02",
              "The Explorer",
              "Spatial Enthusiasts & Studio Makers",
              "Touch, compare, feel light reflectance, and test physical material swatches in our Bengaluru studio.",
            ],
            [
              "03",
              "The Builder",
              "Developers & Project Partners",
              "Rely on verified technical slip ratings, stain resistance, and precise site execution guidance.",
            ],
          ].map(([num, title, tag, copy]) => (
            <article className="world" key={title}>
              <span>{num}</span>
              <div>
                <h3>{title}</h3>
                <em>{tag}</em>
              </div>
              <p>{copy}</p>
              <Link
                className="button light"
                href="/visit"
                style={{
                  padding: "10px 18px",
                  justifySelf: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "inline-flex",
                }}
              >
                Explore ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* INTERACTIVE MATERIAL PLAYGROUND */}
      <MaterialPlayground />

      {/* TURNKEY HOME INTERIORS & JOINERY */}
      <InteriorsSection />

      {/* COLLECTIONS GRID */}
      <section className="collection-section" id="collections">
        <div className="collection-head">
          <p className="section-number">05 / Material Families</p>
          <h2>
            Eight worlds.<br />
            <i>One collective.</i>
          </h2>
          <p>
            Each family represents an invitation to explore how physical materials elevate architectural tone, tactile acoustics, and surface longevity.
          </p>
        </div>

        <div className="collection-grid">
          {MATERIALS_DATA.map((item, index) => (
            <div className={`collection-card ${item.tone}`} key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="card-shade" />
              <div className="card-top">
                <span>0{index + 1}</span>
                <span>{item.category}</span>
              </div>
              <div className="card-bottom">
                <h3>CORO {item.name}</h3>
                <p>{item.tagline}</p>
                <button
                  type="button"
                  className={`card-sample-btn ${
                    isSampleAdded(item.id) ? "added" : ""
                  }`}
                  onClick={() => toggleSample(item)}
                >
                  {isSampleAdded(item.id)
                    ? "✓ In Sample Tray"
                    : "+ Add Sample"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* COLLECTIONS CATALOG CTA BANNER */}
        <div className="collections-catalog-banner">
          <div>
            <span className="eyebrow" style={{ color: "var(--clay)" }}>The Complete Material Archive</span>
            <h3>Explore all 8 tactile families & engineering specifications.</h3>
            <p>Compare surface density, slip resistance ratings, and architectural finish variants.</p>
          </div>
          <Link className="button dark" href="/collections">
            Open Full Material Catalog ↗
          </Link>
        </div>
      </section>

      {/* ARCHITECTURAL PROJECTS SECTION */}
      <ProjectsSection />

      {/* VISIT EXPERIENCE CENTRE */}
      <section className="home-visit" id="visit">
        <div className="home-visit-photo">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
            alt="CORO Experience Centre Bangalore"
          />
        </div>
        <div className="home-visit-panel">
          <p className="eyebrow" style={{ color: "#f7dcd5" }}>07 / Visit the Experience Centre</p>
          <h2>
            Made to be<br />
            <i>experienced.</i>
          </h2>
          <p>
            Visit our studio in <strong>Mahadevapura, Bengaluru</strong> to study material light play, request sample boxes, and consult with our technical specialists.
          </p>
          <p className="studio-address-highlight" style={{ fontSize: "13px", opacity: 0.9, margin: "16px 0", color: "#f9ede8" }}>
            📍 {STUDIO_INFO.address}
          </p>

          <div className="actions">
            <Link className="button dark" href="/contact">
              Book Studio Appointment <b>↗</b>
            </Link>
            <a
              className="text-link"
              href={STUDIO_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}
            >
              Follow {STUDIO_INFO.instagramHandle} <span>→</span>
            </a>
          </div>

          <small style={{ marginTop: "30px", opacity: 0.8, fontSize: "11px", lineHeight: "1.5", color: "#f9ede8" }}>
            Appointments and opening hours ({STUDIO_INFO.hours}) are confirmed directly with the CORO technical team.
          </small>
        </div>
      </section>

      <Footer />
    </main>
  );
}
