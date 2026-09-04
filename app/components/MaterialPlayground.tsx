"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MATERIALS_DATA, MaterialItem } from "../data/materialsData";
import { useSampleBox } from "../context/SampleBoxContext";

export function MaterialPlayground() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(
    MATERIALS_DATA[0]
  );
  const [selectedFinish, setSelectedFinish] = useState<string>(
    MATERIALS_DATA[0].finishes[0]
  );
  const [scene, setScene] = useState<string>("Hospitality");
  const [lightingMode, setLightingMode] = useState<"daylight" | "warm">(
    "daylight"
  );

  const { toggleSample, isSampleAdded } = useSampleBox();

  const handleMaterialChange = (mat: MaterialItem) => {
    setSelectedMaterial(mat);
    setSelectedFinish(mat.finishes[0]);
  };

  return (
    <section className="playground section" id="playground">
      <p className="section-number">03 / Studio Material Playground</p>
      <div className="playground-heading">
        <h2>
          What could it<br />
          <i>become?</i>
        </h2>
        <p>
          Select a specimen, tweak tactile finishes, toggle lighting temperature, and save swatches to your sample box.
        </p>
      </div>

      <div className="playground-shell">
        <div className="material-pane">
          <p className="mini-label">01 / Choose a material family (Scroll for all 8)</p>
          <div className="material-family-list">
            {MATERIALS_DATA.map((item) => {
              const isSelected = selectedMaterial.id === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleMaterialChange(item)}
                  className={isSelected ? "selected" : ""}
                  aria-pressed={isSelected}
                >
                  <span>{item.name}</span>
                  <small>{item.tagline}</small>
                  <b>→</b>
                </button>
              );
            })}
          </div>

          <div className="finish-selector">
            <p className="mini-label">02 / Select tactile finish</p>
            <div className="finish-pills">
              {selectedMaterial.finishes.map((finish) => {
                const isActive = selectedFinish === finish;
                return (
                  <button
                    type="button"
                    key={finish}
                    className={`finish-pill-btn ${isActive ? "active" : ""}`}
                    onClick={() => setSelectedFinish(finish)}
                    aria-pressed={isActive}
                  >
                    {finish}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="scene-buttons">
            <p className="mini-label">03 / Setting context</p>
            <div className="scene-buttons-group">
              {["Hospitality", "Residential", "Workplace", "Outdoor Pavilion"].map(
                (item) => {
                  const isActive = scene === item;
                  return (
                    <button
                      type="button"
                      onClick={() => setScene(item)}
                      className={isActive ? "active" : ""}
                      key={item}
                      aria-pressed={isActive}
                    >
                      {item}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="visual-pane">
          <img
            key={selectedMaterial.id}
            src={selectedMaterial.image}
            alt={selectedMaterial.name}
            className="visual-pane-img"
          />
          <div className={`visual-pane-overlay ${lightingMode}`} />

          <div className="lighting-toggle">
            <span
              className="eyebrow"
              style={{
                color: "#fff",
                background: "rgba(0,0,0,0.45)",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              {selectedMaterial.code} · {selectedMaterial.category}
            </span>
            <div className="light-btn-group">
              <button
                type="button"
                className={`light-btn ${
                  lightingMode === "daylight" ? "active" : ""
                }`}
                onClick={() => setLightingMode("daylight")}
              >
                Daylight 5500K
              </button>
              <button
                type="button"
                className={`light-btn ${
                  lightingMode === "warm" ? "active" : ""
                }`}
                onClick={() => setLightingMode("warm")}
              >
                Warm 3000K
              </button>
            </div>
          </div>

          <div className="visual-copy">
            <p>Active Specimen & Context</p>
            <h3>
              {selectedMaterial.name}<br />
              <i>in {scene}.</i>
            </h3>

            <div className="spec-mini-grid">
              <div className="spec-item">
                <small>Selected Finish</small>
                <span>{selectedFinish}</span>
              </div>
              <div className="spec-item">
                <small>Density / Strength</small>
                <span>{selectedMaterial.specifications.density}</span>
              </div>
              <div className="spec-item">
                <small>Stain Resistance</small>
                <span>{selectedMaterial.specifications.stainRating}</span>
              </div>
              <div className="spec-item">
                <small>Applications</small>
                <span>{selectedMaterial.specifications.applications}</span>
              </div>
            </div>

            <div className="visual-actions">
              <button
                type="button"
                className="button light"
                onClick={() => toggleSample(selectedMaterial)}
              >
                {isSampleAdded(selectedMaterial.id)
                  ? "✓ In Sample Box"
                  : "+ Add to Sample Box"}
              </button>
              <Link
                className="text-link"
                href="/contact"
                style={{ color: "#fff" }}
              >
                Discuss technical drawing ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
