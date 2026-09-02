import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PROJECT_CASE_STUDIES, STUDIO_INFO } from "../data/materialsData";

export default function ProjectsPage() {
  return (
    <main className="inner-page">
      <Nav />

      <header className="page-intro">
        <p className="section-number">Execution Portfolio</p>
        <h1>
          Architectural<br />
          <i>collaborations.</i>
        </h1>
        <p>
          Discover featured residential, commercial, and hospitality projects where CORO acted as material innovator and execution partner.
        </p>
      </header>

      <section className="collection-list" style={{ paddingTop: "20px" }}>
        {PROJECT_CASE_STUDIES.map((project, idx) => (
          <article className="collection-row" key={project.id} style={{ gridTemplateColumns: "38% 50px 1fr" }}>
            <div className="collection-image" style={{ height: "300px" }}>
              <img src={project.image} alt={project.title} />
            </div>

            <span className="row-number">
              0{idx + 1}
              <br />
              <small style={{ color: "var(--clay)" }}>{project.year}</small>
            </span>

            <div>
              <span className="mini-label" style={{ color: "var(--clay)", display: "block", marginBottom: "6px" }}>
                {project.typology} · 📍 {project.location}
              </span>
              <h2>{project.title}</h2>
              <p style={{ fontStyle: "italic", color: "#59534c", margin: "6px 0 16px" }}>
                Architectural Partner: <strong>{project.architect}</strong>
              </p>

              <div style={{ margin: "16px 0" }}>
                <small className="mini-label">Specified Materials:</small>
                <div className="material-pills" style={{ marginTop: "6px" }}>
                  {project.materialsUsed.map((m) => (
                    <span key={m} className="mat-pill" style={{ background: "var(--sand)", color: "var(--ink)" }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <blockquote className="project-quote" style={{ color: "var(--ink)", marginTop: "16px" }}>
                “{project.quote}”
              </blockquote>
            </div>
          </article>
        ))}
      </section>

      <section className="section" style={{ background: "var(--sand)", textAlign: "center" }}>
        <p className="section-number">Collaborate With CORO</p>
        <h2 style={{ fontSize: "52px" }}>
          Have an active spatial brief in <i>Bengaluru?</i>
        </h2>
        <p style={{ maxWidth: "500px", margin: "0 auto 30px", fontSize: "15px", lineHeight: "1.6" }}>
          Our technical team in Mahadevapura assists with aggregate sampling, metal trim details, and site mockups.
        </p>
        <Link className="button dark" href="/contact">
          Schedule Technical Consultation ↗
        </Link>
      </section>

      <Footer />
    </main>
  );
}
