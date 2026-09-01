"use client";

import { useEffect, useState } from "react";

export function Nav({ light = false }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 60); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return <nav className={`inner-nav ${light ? "pale" : ""} ${scrolled ? "scrolled" : ""}`}>
    <a className="wordmark" href="/">CORO<span>®</span></a>
    <div className="inner-links">
      <a href="/collections">Collections</a>
      <a href="/material-playground">Playground</a>
      <a href="/visit">Visit</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>;
}
