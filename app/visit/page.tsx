"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { CustomSelect } from "../components/CustomSelect";
import { STUDIO_INFO } from "../data/materialsData";

const TIME_SLOTS = [
  { id: "slot-morning", time: "10:30 AM – 12:30 PM", label: "Morning Light Session (Best for Natural Daylight)" },
  { id: "slot-afternoon", time: "02:00 PM – 04:00 PM", label: "Afternoon Focus Session (Deep Material Spec)" },
  { id: "slot-evening", time: "04:30 PM – 06:30 PM", label: "Evening Ambience Session (Warm Lighting Review)" },
];

const SESSION_PURPOSES = [
  "Architect & Interior Team Walkthrough",
  "Homeowner Turnkey Interior Consultation (Kitchen / Wardrobe / Living)",
  "Material Spec & Custom Terrazzo Mixology",
  "Physical Sample Box Collection & Curation",
  "Technical Drawing & Site Execution Review",
];

const GROUP_SIZES = [
  "Solo Designer / Specialist (1 Person)",
  "Design Pair / Architect + Client (2 People)",
  "Studio Design Team (3–5 People)",
  "Developer / Project Leadership Group (5+ People)",
];

export default function VisitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const [visitForm, setVisitForm] = useState({
    name: "",
    studioOrHome: "",
    email: "",
    phone: "",
    visitDate: "",
    timeSlot: TIME_SLOTS[0].time,
    purpose: SESSION_PURPOSES[0],
    groupSize: GROUP_SIZES[1],
    bringingPlans: false,
    needsSamples: true,
    hasActiveSite: false,
    specialNotes: "",
  });

  // Calculate default min date as tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split("T")[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = "CORO-VST-" + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomCode);
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <main className="visit-page">
      <Nav light />

      {/* VISIT HERO HEADER */}
      <section className="visit-hero">
        <div>
          <p className="section-number">Bengaluru Experience Centre</p>
          <h1>
            Schedule your<br />
            <i>studio visit.</i>
          </h1>
          <p>
            Experience materials in architectural scale. Touch in-situ terrazzo, compare metallic mesh opacities, and review turnkey interior joinery in our <strong>Mahadevapura</strong> studio.
          </p>
        </div>
      </section>

      {/* DEDICATED VISIT SCHEDULING FORM & STUDIO INFO */}
      <section className="visit-booking-section section" id="booking">
        <div className="visit-booking-grid">
          {/* Left Column: Studio Atmosphere & Address */}
          <div className="visit-info-column">
            <div className="info-card">
              <span className="eyebrow" style={{ color: "var(--clay)" }}>Studio Coordinates</span>
              <h3>The Experience Centre</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "12px 0 20px" }}>
                📍 {STUDIO_INFO.address}
              </p>

              <div className="studio-meta-grid">
                <div>
                  <small>Operating Hours</small>
                  <span>Mon – Sat: 10 AM – 7 PM</span>
                </div>
                <div>
                  <small>Studio Concierge</small>
                  <span>{STUDIO_INFO.phone}</span>
                </div>
                <div>
                  <small>Direct Email</small>
                  <span>{STUDIO_INFO.email}</span>
                </div>
                <div>
                  <small>Access</small>
                  <span>Dedicated visitor parking available</span>
                </div>
              </div>

              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                <a
                  className="arrow-link"
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--ink)" }}
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            <div className="visit-perks-box">
              <h4>What to expect during your appointment:</h4>
              <ul>
                <li>
                  <i>✦</i>
                  <div>
                    <strong>Full-Scale Mockups:</strong> Test seamless solid surfaces, monolithic island blocks, and acoustic felt panels.
                  </div>
                </li>
                <li>
                  <i>✦</i>
                  <div>
                    <strong>Custom Terrazzo Bar:</strong> Formulate custom marble chip blends and matrix pigments with our lab team.
                  </div>
                </li>
                <li>
                  <i>✦</i>
                  <div>
                    <strong>Physical Sample Curation:</strong> Leave with a tailored wooden sample box curated for your active project.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Dedicated Appointment Scheduler Form */}
          <div className="visit-form-column">
            {submitted ? (
              <div className="visit-confirmation-card">
                <div className="conf-badge">✦ Studio Appointment Confirmed</div>
                <h2>We look forward to hosting you.</h2>
                <p className="conf-ref">
                  Appointment Reference: <strong>{bookingRef}</strong>
                </p>

                <div className="conf-summary-grid">
                  <div>
                    <small>Guest Name</small>
                    <span>{visitForm.name}</span>
                  </div>
                  <div>
                    <small>Studio / Project</small>
                    <span>{visitForm.studioOrHome || "Private Project"}</span>
                  </div>
                  <div>
                    <small>Scheduled Date</small>
                    <span>{visitForm.visitDate || "Upcoming Date"}</span>
                  </div>
                  <div>
                    <small>Reserved Time Slot</small>
                    <span>{visitForm.timeSlot}</span>
                  </div>
                  <div>
                    <small>Consultation Scope</small>
                    <span>{visitForm.purpose}</span>
                  </div>
                  <div>
                    <small>Group Size</small>
                    <span>{visitForm.groupSize}</span>
                  </div>
                </div>

                <div className="conf-notice">
                  <p>
                    A confirmation calendar invite and studio entry directions have been dispatched to <strong>{visitForm.email}</strong>. Our studio concierge will have your material table prepared.
                  </p>
                </div>

                <div className="conf-actions">
                  <button
                    type="button"
                    className="button dark"
                    onClick={() => setSubmitted(false)}
                  >
                    Modify / Book Another Visit
                  </button>
                  <Link className="button light" href="/">
                    Return to Homepage ↗
                  </Link>
                </div>
              </div>
            ) : (
              <form className="visit-scheduler-form" onSubmit={handleBookingSubmit}>
                <div className="form-header">
                  <p className="mini-label" style={{ color: "var(--clay)" }}>Reserve Dedicated Session</p>
                  <h3>Book an In-Studio Appointment</h3>
                  <p>Appointments ensure a dedicated material specialist and private sample table are reserved for you.</p>
                </div>

                {/* 1. Date & Slot Selection */}
                <div className="form-section-title">
                  <span>01</span>
                  <h4>Select Date & Preferred Time</h4>
                </div>

                <div className="form-row-2">
                  <label>
                    Preferred Date *
                    <input
                      type="date"
                      required
                      min={minDateStr}
                      value={visitForm.visitDate}
                      onChange={(e) => setVisitForm({ ...visitForm, visitDate: e.target.value })}
                      className="visit-date-input"
                    />
                  </label>

                  <div>
                    <label>Preferred Time Slot *</label>
                    <CustomSelect
                      value={visitForm.timeSlot}
                      onChange={(val) => setVisitForm({ ...visitForm, timeSlot: val })}
                      options={TIME_SLOTS.map((s) => s.time)}
                      theme="light"
                    />
                  </div>
                </div>

                {/* 2. Purpose & Group Size */}
                <div className="form-section-title">
                  <span>02</span>
                  <h4>Session Focus & Attendees</h4>
                </div>

                <div className="form-row-2">
                  <div>
                    <label>Session Focus</label>
                    <CustomSelect
                      value={visitForm.purpose}
                      onChange={(val) => setVisitForm({ ...visitForm, purpose: val })}
                      options={SESSION_PURPOSES}
                      theme="light"
                    />
                  </div>

                  <div>
                    <label>Party / Group Size</label>
                    <CustomSelect
                      value={visitForm.groupSize}
                      onChange={(val) => setVisitForm({ ...visitForm, groupSize: val })}
                      options={GROUP_SIZES}
                      theme="light"
                    />
                  </div>
                </div>

                {/* 3. Project Context Checkboxes */}
                <div className="form-section-title">
                  <span>03</span>
                  <h4>Preparation & Deliverables</h4>
                </div>

                <div className="visit-checkbox-group">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={visitForm.bringingPlans}
                      onChange={(e) => setVisitForm({ ...visitForm, bringingPlans: e.target.checked })}
                    />
                    <span>We will bring architectural CAD floor plans / moodboards</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={visitForm.needsSamples}
                      onChange={(e) => setVisitForm({ ...visitForm, needsSamples: e.target.checked })}
                    />
                    <span>We would like to take physical curated sample swatches</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={visitForm.hasActiveSite}
                      onChange={(e) => setVisitForm({ ...visitForm, hasActiveSite: e.target.checked })}
                    />
                    <span>We have an active residential / commercial project under construction</span>
                  </label>
                </div>

                {/* 4. Contact Information */}
                <div className="form-section-title">
                  <span>04</span>
                  <h4>Visitor Information</h4>
                </div>

                <div className="form-row-2">
                  <label>
                    Full Name *
                    <input
                      required
                      placeholder="e.g. Ar. Ananya Rao"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                    />
                  </label>

                  <label>
                    Design Practice / Residence
                    <input
                      placeholder="e.g. Atelier Studio / Indiranagar Home"
                      value={visitForm.studioOrHome}
                      onChange={(e) => setVisitForm({ ...visitForm, studioOrHome: e.target.value })}
                    />
                  </label>
                </div>

                <div className="form-row-2">
                  <label>
                    Email Address *
                    <input
                      required
                      type="email"
                      placeholder="ananya@design.in"
                      value={visitForm.email}
                      onChange={(e) => setVisitForm({ ...visitForm, email: e.target.value })}
                    />
                  </label>

                  <label>
                    Contact Phone *
                    <input
                      required
                      type="tel"
                      placeholder="+91 98450 12345"
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                    />
                  </label>
                </div>

                <label className="full-label">
                  Special Notes / Specific Materials of Interest (Optional)
                  <textarea
                    rows={3}
                    placeholder="e.g. Interested in seeing kitchen island terrazzo slabs, bronze mesh doors for walk-in wardrobes..."
                    value={visitForm.specialNotes}
                    onChange={(e) => setVisitForm({ ...visitForm, specialNotes: e.target.value })}
                  />
                </label>

                <button
                  type="submit"
                  className="button dark submit-btn"
                >
                  Confirm Studio Appointment ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
