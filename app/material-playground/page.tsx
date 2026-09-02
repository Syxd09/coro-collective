"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { MATERIALS_DATA, MaterialItem } from "../data/materialsData";
import { useSampleBox } from "../context/SampleBoxContext";

export default function Playground() {
  const [material, setMaterial] = useState<MaterialItem>(MATERIALS_DATA[0]);
  const [finish, setFinish] = useState<string>(MATERIALS_DATA[0].finishes[0]);
  const [space, setSpace] = useState("Hospitality");
  const [lightingMode, setLightingMode] = useState<"daylight" | "warm">("daylight");

  const { toggleSample, isSampleAdded } = useSampleBox();

  const handleSelectMaterial = (item: MaterialItem) => {
    setMaterial(item);
    setFinish(item.finishes[0]);
  };

  return (
    <main className="playground-page">
      <Nav />
      <header className="playground-intro">
        <p className="section-number">Studio Material Playground</p>
        <h1>
          Make room for<br />
          <i>tactile curiosity.</i>
        </h1>
        <p>
          Select a specimen, tweak tactile finishes, observe light behavior, and curate your physical sample box.
        </p>
      </header>

      <section className="explorer">
        <aside>
          <p className="mini-label">01 / Choose specimen ({MATERIALS_DATA.length} Available)</p>
          <div className="specimen-list" style={{ maxHeight: "380px", overflowY: "auto", paddingRight: "8px" }}>
            {MATERIALS_DATA.map((item) => (
              <button
                className={material.id === item.id ? "picked" : ""}
                onClick={() => handleSelectMaterial(item)}
                key={item.id}
              >
                <b>{item.name}</b>
                <span>{item.code}</span>
              </button>
            ))}
          </div>

          <div style={{ marginTop: "24px" }}>
            <p className="mini-label">02 / Select finish</p>
            <div className="finish-pills">
              {material.finishes.map((f) => (
                <button
                  key={f}
                  className={`finish-pill-btn ${finish === f ? "active" : ""}`}
                  onClick={() => setFinish(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-select">
            <p className="mini-label">03 / Architectural setting</p>
            {["Hospitality", "Residence", "Workplace", "Outdoor Pavilion"].map((item) => (
              <button
                onClick={() => setSpace(item)}
                className={space === item ? "active" : ""}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <div
          className="playground-result"
          style={{
            backgroundImage: `url(${material.image})`,
          }}
        >
          <div className={`visual-pane-overlay ${lightingMode}`} />

          <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between" }}>
            <span className="eyebrow" style={{ color: "#fff" }}>
              {material.code} · {material.category}
            </span>
            <div className="light-btn-group">
              <button
                className={`light-btn ${lightingMode === "daylight" ? "active" : ""}`}
                onClick={() => setLightingMode("daylight")}
              >
                Daylight
              </button>
              <button
                className={`light-btn ${lightingMode === "warm" ? "active" : ""}`}
                onClick={() => setLightingMode("warm")}
              >
                Warm Interior
              </button>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <h2>
              {material.name}<br />
              for <i>{space}.</i>
            </h2>

            <p style={{ maxWidth: "420px" }}>
              Selected finish: <strong>{finish}</strong>. {material.fullDetails}
            </p>

            <div className="spec-mini-grid" style={{ maxWidth: "440px" }}>
              <div className="spec-item">
                <small>Origin / Build</small>
                <span>{material.specifications.origin}</span>
              </div>
              <div className="spec-item">
                <small>Stain / Slip Rating</small>
                <span>{material.specifications.stainRating} / {material.specifications.slipRating}</span>
              </div>
            </div>

            <div className="actions" style={{ marginTop: "24px" }}>
              <button
                className="button light"
                onClick={() => toggleSample(material)}
              >
                {isSampleAdded(material.id)
                  ? "✓ In Sample Box"
                  : "+ Add to Sample Box"}
              </button>
              <Link className="button dark" href="/contact">
                Initiate Project Spec ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
