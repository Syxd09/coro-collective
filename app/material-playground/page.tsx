"use client";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { MaterialPlayground } from "../components/MaterialPlayground";

export default function Playground() {
  return (
    <main className="inner-page">
      <Nav />
      <header className="page-intro" style={{ paddingBottom: "20px" }}>
        <p className="section-number">Studio Material Playground</p>
        <h1>
          Make room for<br />
          <i>tactile curiosity.</i>
        </h1>
        <p>
          Select a specimen, tweak tactile finishes, observe daylight and warm lighting behavior, and curate your physical sample box.
        </p>
      </header>

      <MaterialPlayground />

      <Footer />
    </main>
  );
}

