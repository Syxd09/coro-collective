import React from "react";
import Link from "next/link";
import { PROJECT_CASE_STUDIES } from "../data/materialsData";

export function ProjectsSection() {
  return (
    <section className="projects-showcase section" id="projects">
      <div className="section-head-flex">
        <div>
          <p className="section-number">05 / Execution Portfolio</p>
          <h2>
            Materials made <i>real.</i>
          </h2>
        </div>
        <p className="section-desc">
          From Sadashivnagar to Whitefield, explore recent spatial projects executed in collaboration with leading architects and interior studios.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECT_CASE_STUDIES.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image-wrap">
              <img src={project.image} alt={project.title} />
              <span className="project-year">{project.year}</span>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-tag">{project.typology}</span>
                <span className="project-loc">📍 {project.location}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-arch">Architect / Studio: <strong>{project.architect}</strong></p>

              <div className="project-materials">
                <small>Specified Materials:</small>
                <div className="material-pills">
                  {project.materialsUsed.map((mat) => (
                    <span key={mat} className="mat-pill">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <blockquote className="project-quote">
                “{project.quote}”
              </blockquote>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-cta-box">
        <div>
          <h3>Have an architectural brief or surface requirement?</h3>
          <p>Bring your floor plans or sample requests to our Mahadevapura studio.</p>
        </div>
        <Link className="button dark" href="/contact">
          Initiate Project Brief ↗
        </Link>
      </div>
    </section>
  );
}
