"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INTERIOR_SERVICES, InteriorService } from "../data/materialsData";

export function InteriorsSection() {
  const [activeTab, setActiveTab] = useState<string>("bespoke-kitchens");

  const currentService: InteriorService =
    INTERIOR_SERVICES.find((s) => s.id === activeTab) || INTERIOR_SERVICES[0];

  return (
    <section className="interiors-section section" id="interiors">
      <div className="section-head-flex">
        <div>
          <p className="section-number">04 / Turnkey Interiors & Joinery</p>
          <h2>
            From raw material<br />
            to <i>crafted living.</i>
          </h2>
        </div>
        <p className="section-desc">
          CORO designs and executes turnkey architectural interiors in Bengaluru—from bespoke monolithic kitchens and walk-in wardrobe suites to full-home spatial transformations.
        </p>
      </div>

      {/* Interior Service Category Tabs */}
      <div className="interior-tabs">
        {INTERIOR_SERVICES.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`interior-tab-btn ${
              activeTab === item.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(item.id)}
            aria-pressed={activeTab === item.id}
          >
            <span>{item.category}</span>
          </button>
        ))}
      </div>

      {/* Interactive Interior Showcase Grid */}
      <div className="interior-showcase-grid">
        <div className="interior-content-panel">
          <span className="eyebrow" style={{ color: "var(--clay)" }}>
            {currentService.category} · Execution Specialty
          </span>
          <h3>{currentService.title}</h3>
          <p className="interior-subtitle">{currentService.subtitle}</p>
          <p className="interior-body">{currentService.description}</p>

          <div className="interior-highlights">
            <p className="mini-label">Key Engineering Details:</p>
            <ul>
              {currentService.highlights.map((h, i) => (
                <li key={i}>
                  <i>✦</i>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="interior-materials-used">
            <p className="mini-label">Integrated Material Families:</p>
            <div className="material-pills">
              {currentService.materialsFeatured.map((mat) => (
                <span key={mat} className="mat-pill">
                  {mat}
                </span>
              ))}
            </div>
          </div>

          <div className="actions" style={{ marginTop: "28px" }}>
            <Link className="button dark" href="/contact">
              Initiate Interior Brief ↗
            </Link>
            <Link className="text-link" href="/projects" style={{ color: "var(--ink)", borderColor: "var(--ink)" }}>
              View Case Studies <span>→</span>
            </Link>
          </div>
        </div>

        <div className="interior-image-panel">
          <img
            key={currentService.id}
            src={currentService.image}
            alt={currentService.title}
            className="interior-showcase-img"
          />
          <div className="interior-img-overlay">
            <span className="interior-badge">📍 Bengaluru Studio Execution</span>
            <span className="interior-title-overlay">{currentService.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
