"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { MATERIALS_DATA, MaterialItem } from "../data/materialsData";
import { useSampleBox } from "../context/SampleBoxContext";

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { toggleSample, isSampleAdded } = useSampleBox();

  const categories = ["All", "Surfaces", "Screens", "Acoustics", "Flooring", "Outdoor", "Furniture"];

  const filteredMaterials =
    activeCategory === "All"
      ? MATERIALS_DATA
      : MATERIALS_DATA.filter((m) => m.category === activeCategory);

  return (
    <main className="inner-page">
      <Nav />
      <header className="page-intro">
        <p className="section-number">The CORO Collective Catalog</p>
        <h1>
          Materials with<br />
          <i>a point of view.</i>
        </h1>
        <p>
          Eight material families of surface, screening, sound control, and spatial possibility—each ready to be specified into architectural space.
        </p>
      </header>

      <section className="filter-bar">
        <span className="filter-label">Filter by Application:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      <section className="collection-list">
        {filteredMaterials.map((item, index) => (
          <article className="collection-row" key={item.id}>
            <div className="collection-image">
              <img src={item.image} alt={item.name} />
            </div>

            <span className="row-number">
              0{index + 1}
              <br />
              <small style={{ fontSize: "9px", color: "var(--clay)" }}>
                {item.code}
              </small>
            </span>

            <div>
              <h2>CORO {item.name}</h2>
              <em>{item.tagline}</em>
              <p>{item.fullDetails}</p>

              <div
                className="spec-mini-pills"
                style={{
                  display: "flex",
                  gap: "12px",
                  fontSize: "11px",
                  marginTop: "12px",
                  color: "#6b645b",
                  fontFamily: "DM Mono",
                }}
              >
                <span>Density: {item.specifications.density}</span>
                <span>•</span>
                <span>Stain: {item.specifications.stainRating}</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
              <button
                className={`card-sample-btn ${isSampleAdded(item.id) ? "added" : ""}`}
                onClick={() => toggleSample(item)}
                style={{ padding: "8px 14px", fontSize: "11px" }}
              >
                {isSampleAdded(item.id) ? "✓ In Sample Box" : "+ Add Sample"}
              </button>

              <Link
                href="/contact"
                aria-label={`Discuss ${item.name}`}
                style={{
                  width: "42px",
                  height: "42px",
                  border: "1px solid var(--ink)",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "18px",
                }}
              >
                ↗
              </Link>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
