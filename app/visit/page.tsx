import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { STUDIO_INFO } from "../data/materialsData";

export default function Visit() {
  return (
    <main className="visit-page">
      <Nav light />

      <section className="visit-hero">
        <div>
          <p className="section-number">Bengaluru Experience Centre</p>
          <h1>
            Come curious.<br />
            <i>Leave inspired.</i>
          </h1>
          <p>
            Step into our studio in <strong>Mahadevapura, Bengaluru</strong>. Compare finishes, study aggregate light reflection, and curate physical sample boxes in person.
          </p>
          <Link className="button light" href="/contact">
            Schedule Studio Visit ↗
          </Link>
        </div>
      </section>

      <section className="visit-details">
        <div>
          <p className="section-number">Studio Address & Hours</p>
          <h2>
            A place for<br />
            <i>material thinking.</i>
          </h2>
          <div style={{ marginTop: "30px" }}>
            <p className="mini-label" style={{ color: "var(--clay)" }}>Exact Studio Location:</p>
            <p style={{ fontSize: "16px", lineHeight: "1.6", fontWeight: 500, margin: "8px 0 20px" }}>
              📍 {STUDIO_INFO.address}
            </p>
            <a
              className="arrow-link"
              href={STUDIO_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>

        <div className="visit-list">
          <p>Touch in-situ terrazzo specimens, wire mesh weaves, and thermoformed surfaces in natural light.</p>
          <p>Bring floor plans, CAD drawings, or material boards for collaborative studio review.</p>
          <p>Meet our technical specialists for slip-rating verification and site execution coordination.</p>

          <div style={{ marginTop: "40px", background: "rgba(0,0,0,0.05)", padding: "20px", borderRadius: "8px" }}>
            <small style={{ fontSize: "12px", display: "block", color: "var(--ink)" }}>
              <strong>Operating Hours:</strong> {STUDIO_INFO.hours}
            </small>
            <small style={{ fontSize: "11px", display: "block", color: "#666", marginTop: "4px" }}>
              Appointments are confirmed directly with our team to ensure dedicated specialist guidance.
            </small>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
