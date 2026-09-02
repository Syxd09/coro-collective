import React, { useState } from "react";
import Link from "next/link";
import { useSampleBox } from "../context/SampleBoxContext";
import { STUDIO_INFO } from "../data/materialsData";

export function SampleBoxDrawer() {
  const {
    samples,
    removeSample,
    clearSamples,
    isDrawerOpen,
    setIsDrawerOpen,
    requestModalOpen,
    setRequestModalOpen,
  } = useSampleBox();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    studio: "",
    email: "",
    phone: "",
    projectType: "Residential Architecture",
    notes: "",
    dispatchType: "Physical Sample Box Delivery",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRequestModalOpen(false);
      setIsDrawerOpen(false);
    }, 2800);
  };

  return (
    <>
      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Slide-over Drawer */}
      <aside className={`sample-drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div>
            <p className="eyebrow">Material Curator</p>
            <h3>Sample Box ({samples.length}/4)</h3>
          </div>
          <button
            className="drawer-close"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close sample tray"
          >
            ✕
          </button>
        </div>

        <div className="drawer-body">
          {samples.length === 0 ? (
            <div className="drawer-empty">
              <p className="mini-label">Your sample box is empty</p>
              <p>
                Explore our collections or material playground and add up to 4
                specimen swatches for tactile physical review.
              </p>
              <Link
                href="/collections"
                onClick={() => setIsDrawerOpen(false)}
                className="button dark"
              >
                Browse Collections ↗
              </Link>
            </div>
          ) : (
            <div className="sample-list">
              <p className="drawer-note">
                Selected specimens will be packed in custom CORO sample boxes
                with physical spec sheets.
              </p>
              {samples.map((item) => (
                <div className="sample-card-row" key={item.id}>
                  <div className="sample-thumb">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="sample-info">
                    <span className="sample-code">{item.code}</span>
                    <h4>{item.name}</h4>
                    <small>{item.tagline}</small>
                  </div>
                  <button
                    className="sample-remove"
                    onClick={() => removeSample(item.id)}
                    title="Remove sample"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {samples.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-actions">
              <button
                className="button light"
                onClick={() => setRequestModalOpen(true)}
              >
                Request Physical Samples ↗
              </button>
              <button className="text-btn" onClick={clearSamples}>
                Clear tray
              </button>
            </div>
            <small>Dispatch target: 48 Hours within India</small>
          </div>
        )}
      </aside>

      {/* Sample Request Modal */}
      {requestModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => setRequestModalOpen(false)}
            >
              ✕
            </button>

            {submitted ? (
              <div className="modal-success">
                <div className="success-icon">✦</div>
                <h3>Sample Box Request Confirmed</h3>
                <p>
                  Thank you! Our material specialists at the Mahadevapura studio
                  are preparing your selected sample box. We will contact you at{" "}
                  <strong>{formData.email || "your provided email"}</strong> with
                  courier tracking details.
                </p>
                <small>Studio Contact: {STUDIO_INFO.email}</small>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="modal-form">
                <p className="section-number">Dispatch & Consultation Request</p>
                <h2>
                  Order Physical <i>Specimens.</i>
                </h2>
                <p className="modal-sub">
                  Selected ({samples.length} items):{" "}
                  {samples.map((s) => s.name).join(", ")}
                </p>

                <div className="form-grid">
                  <label>
                    Full Name *
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ananya Rao"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </label>

                  <label>
                    Architecture Studio / Firm
                    <input
                      type="text"
                      placeholder="e.g. Studio Earthform"
                      value={formData.studio}
                      onChange={(e) =>
                        setFormData({ ...formData, studio: e.target.value })
                      }
                    />
                  </label>

                  <label>
                    Work Email *
                    <input
                      required
                      type="email"
                      placeholder="ananya@studio.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </label>

                  <label>
                    Contact Phone *
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </label>

                  <label className="full">
                    Request Mode
                    <select
                      value={formData.dispatchType}
                      onChange={(e) =>
                        setFormData({ ...formData, dispatchType: e.target.value })
                      }
                    >
                      <option>Physical Sample Box Delivery (Courier)</option>
                      <option>Collect at Mahadevapura Studio</option>
                      <option>Schedule In-Person Material Consultation</option>
                    </select>
                  </label>

                  <label className="full">
                    Project Context & Location
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project location, timeline, or surface square footage..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </label>
                </div>

                <div className="form-actions">
                  <button type="submit" className="button dark">
                    Submit Sample Request ↗
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
