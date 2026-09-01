"use client";

import { useEffect, useState } from "react";
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
        className={`inner-nav ${light ? "pale" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <a className="wordmark" href="/">
          CORO<span>®</span>
        </a>

        <div className="inner-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </a>
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
            <a className="wordmark" href="/">
              CORO<span>®</span>
            </a>
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label} <span>→</span>
                </a>
              ))}
            </div>
            <div className="mobile-menu-footer">
              <p>Mahadevapura Studio, Bengaluru</p>
              <button
                className="button light"
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
