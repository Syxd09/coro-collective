"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSampleBox } from "../context/SampleBoxContext";

export function Nav({ light = false }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { samples, setIsDrawerOpen } = useSampleBox();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const isHome = pathname === "/";

  const navLinks = [
    { href: "/collections", label: "Collections" },
    { href: "/material-playground", label: "Playground" },
    { href: "/projects", label: "Projects" },
    { href: "/visit", label: "Visit Studio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`inner-nav ${isHome ? "home-nav" : ""} ${
          isHome && !scrolled ? "transparent-hero" : ""
        } ${light ? "pale" : ""} ${scrolled ? "scrolled" : ""}`}
      >
        <Link className="wordmark" href="/">
          CORO<span>®</span>
        </Link>

        <div className="inner-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}

          {/* Sample Box Trigger Button */}
          <button
            className="sample-box-badge-btn"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Sample Tray"
          >
            <span>Sample Tray</span>
            <small>{samples.length}</small>
          </button>
        </div>

        <div className="nav-controls-mobile">
          <button
            className="sample-box-badge-btn mobile-only"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Sample Tray"
          >
            <small>{samples.length}</small>
          </button>

          <button
            className="menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Link className="wordmark" href="/" onClick={() => setMobileMenuOpen(false)}>
                CORO<span>®</span>
              </Link>
              <button
                className="menu-toggle-btn"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "#fff", fontSize: "28px" }}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label} <span>→</span>
                </Link>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#bfae9b" }}>
                Mahadevapura Studio, Bengaluru
              </p>
              <button
                className="button light"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDrawerOpen(true);
                }}
              >
                Open Sample Tray ({samples.length}) ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
