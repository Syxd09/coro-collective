import { STUDIO_INFO } from "../data/materialsData";

export function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <a className="wordmark" href="/">
          CORO<span>®</span>
        </a>
        <p className="footer-tagline">
          Crafted Collective
          <br />
          Architectural Surface Innovation & Execution Partner
        </p>
        <p className="footer-address">
          📍 {STUDIO_INFO.address}
        </p>
      </div>

      <div className="footer-links-grid">
        <div>
          <p className="footer-col-title">Navigation</p>
          <a href="/collections">Material Collections</a>
          <a href="/material-playground">Playground Studio</a>
          <a href="/projects">Architectural Projects</a>
          <a href="/visit">Visit Experience Centre</a>
          <a href="/contact">Contact & Consultations</a>
        </div>

        <div>
          <p className="footer-col-title">Studio & Connect</p>
          <a href={STUDIO_INFO.instagram} target="_blank" rel="noreferrer">
            Instagram {STUDIO_INFO.instagramHandle} ↗
          </a>
          <a href={STUDIO_INFO.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={STUDIO_INFO.googleMapsUrl} target="_blank" rel="noreferrer">
            Find Studio on Google Maps ↗
          </a>
          <span className="footer-hours">{STUDIO_INFO.hours}</span>
        </div>
      </div>

      <div className="footer-end">
        <p>Materials stop being samples and start becoming space.</p>
        <span>© {new Date().getFullYear()} CORO Crafted Collective · Bengaluru</span>
      </div>
    </footer>
  );
}
