"use client";

import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { CustomSelect } from "../components/CustomSelect";
import { STUDIO_INFO } from "../data/materialsData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    studio: "",
    email: "",
    phone: "",
    interest: "Material Consultation & Sampling",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <Nav light />

      <section className="contact-grid">
        <header>
          <p className="section-number">Start a Conversation</p>
          <h1>
            What are you<br />
            <i>trying to create?</i>
          </h1>
          <p>
            Tell us about your project brief, space feeling, or material specification requirement. Visit us at our Mahadevapura experience centre in Bengaluru or order physical samples.
          </p>

          <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "24px" }}>
            <p className="mini-label" style={{ color: "#f4ede4" }}>Direct Studio Contact:</p>
            <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "8px 0" }}>
              📍 {STUDIO_INFO.address}
            </p>
            <p style={{ fontSize: "13px", margin: "4px 0" }}>
              ✉️ <a href={`mailto:${STUDIO_INFO.email}`} style={{ textDecoration: "underline" }}>{STUDIO_INFO.email}</a>
            </p>
            <p style={{ fontSize: "13px", margin: "4px 0" }}>
              📞 {STUDIO_INFO.phone}
            </p>
          </div>
        </header>

        {submitted ? (
          <div
            style={{
              background: "#ede8df",
              color: "var(--ink)",
              padding: "40px",
              borderRadius: "4px",
            }}
          >
            <div style={{ fontSize: "36px", color: "var(--clay)", marginBottom: "16px" }}>✦</div>
            <h2 style={{ fontSize: "36px", margin: "0 0 12px" }}>Enquiry Received</h2>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Thank you, <strong>{form.name || "Design Partner"}</strong>! Our material team at the Mahadevapura studio will review your project requirements and respond within 24 business hours.
            </p>
            <small style={{ display: "block", marginTop: "20px", fontSize: "11px", color: "#666" }}>
              Direct email: {STUDIO_INFO.email}
            </small>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Your Name *
              <input
                required
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>

            <label>
              Company / Studio
              <input
                placeholder="e.g. Studio Earthform"
                value={form.studio}
                onChange={(e) => setForm({ ...form, studio: e.target.value })}
              />
            </label>

            <label>
              Email Address *
              <input
                required
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>

            <label>
              Phone Number *
              <input
                required
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>

            <div className="full">
              <label>Primary Focus</label>
              <CustomSelect
                value={form.interest}
                onChange={(val) => setForm({ ...form, interest: val })}
                options={[
                  "Material Consultation & Sampling",
                  "Project Execution & Site Mockup",
                  "Bengaluru Studio Visit Appointment",
                  "Custom Terrazzo / Surface Specification",
                ]}
                theme="terracotta"
              />
            </div>

            <label className="full">
              Project Details & Timeline
              <textarea
                placeholder="Tell us a little about the project location, approximate area, or specific material family you want to explore..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>

            <button className="button dark" type="submit" style={{ gridColumn: "1 / -1", width: "max-content" }}>
              Send Consultation Brief ↗
            </button>
          </form>
        )}
      </section>

      <Footer />
    </main>
  );
}
