"use client";

import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";

const heroImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=90"
];

const collections = [
  { name: "Tessera™", type: "Layered surfaces", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85", tone: "clay" },
  { name: "Poroso™", type: "Spatial screens", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=85", tone: "mesh" },
  { name: "Fresco™", type: "Outdoor living", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", tone: "green" },
  { name: "Aria™", type: "Acoustic architecture", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85", tone: "felt" },
  { name: "Planko™", type: "Grounded flooring", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85", tone: "wood" },
  { name: "Rocco™", type: "Bespoke surfaces", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85", tone: "stone" },
];

const materialOptions = [
  { id: "rocco", label: "Rocco", note: "seamless solid surface", className: "rocco" },
  { id: "tessera", label: "Tessera", note: "tile & terrazzo", className: "tessera" },
  { id: "poroso", label: "Poroso", note: "architectural mesh", className: "poroso" },
  { id: "aria", label: "Aria", note: "acoustic felt", className: "aria" },
];

export default function Home() {
  const [material, setMaterial] = useState(materialOptions[0]);
  const [scene, setScene] = useState("Hospitality");
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setHeroIndex(index => (index + 1) % heroImages.length), 5600); return () => window.clearInterval(timer); }, []);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const updateNav = () => setScrolled(window.scrollY > 60); updateNav(); window.addEventListener("scroll", updateNav, { passive: true }); return () => window.removeEventListener("scroll", updateNav); }, []);

  return <main>
    <section className="hero" id="top">
      <div className="hero-slides">{heroImages.map((image, index) => <div key={image} className={`hero-slide ${heroIndex === index ? "current" : ""}`} style={{backgroundImage:`linear-gradient(90deg,rgba(19,19,17,.75),rgba(19,19,17,.12)),url(${image})`}} />)}</div>
      <nav className={`nav home-nav ${scrolled ? "scrolled" : ""}`}><a className="wordmark" href="#top">CORO<span>®</span></a><div className="nav-links"><a href="/collections">Collections</a><a href="/material-playground">Material playground</a><a href="/visit">Visit</a><a href="/contact">Contact</a></div><button className="menu" aria-label="Open menu">☰</button></nav>
      <div className="hero-grain" />
      <div className="hero-copy"><p className="eyebrow">Crafted collective · Bengaluru</p><h1>Explore<br/><i>possibility.</i></h1><p className="lede">A material and product innovation experience centre for the curious minds shaping space.</p><div className="actions"><a className="button light" href="#playground">Enter CORO <b>↘</b></a><a className="text-link" href="#collections">Explore materials <span>→</span></a></div></div>
      <div className="hero-caption"><span>0{heroIndex + 1} — 04</span><span>Materials become ideas. Ideas become forms.</span></div>
      <div className="hero-pagination">{heroImages.map((_, index) => <button key={index} aria-label={`Show image ${index + 1}`} className={heroIndex === index ? "active" : ""} onClick={() => setHeroIndex(index)} />)}</div><a className="scroll-cue" href="#intro">Scroll to discover <span>↓</span></a>
    </section>

    <section className="intro section" id="intro"><p className="section-number">01 / A different kind of material library</p><div className="intro-grid"><h2>Not a catalogue.<br/>A <i>playground</i><br/>for design.</h2><div><p className="large-copy">CORO brings together materials, product innovation, craft and thoughtful guidance—so your next idea has somewhere to begin.</p><a className="arrow-link" href="#worlds">Discover the collective <span>↘</span></a></div></div><div className="ticker"><span>CURIOUS</span><i>✦</i><span>TACTILE</span><i>✦</i><span>ARCHITECTURAL</span><i>✦</i><span>HUMAN</span><i>✦</i></div></section>

    <section className="worlds" id="worlds"><div className="world-title"><p className="section-number">02 / Made for every kind of curious</p><h2>Find your way <i>in.</i></h2></div><div className="world-list">
      {[['01','The Creator','Experiment. Specify. Create.','For architects, designers and makers who see a material as the beginning of a conversation.'],['02','The Explorer','Touch. Compare. Discover.','For those drawn to texture, tone and the pleasure of finding the unexpected.'],['03','The Everyman','Understand. Choose. Create.','For everyone ready to make a space feel more considered and more their own.']].map(([num,title,tag,copy])=><article className="world" key={title}><span>{num}</span><div><h3>{title}</h3><em>{tag}</em></div><p>{copy}</p><button aria-label={`Explore ${title}`}>↗</button></article>)}
    </div></section>

    <section className="playground section" id="playground"><p className="section-number">03 / Interactive material playground</p><div className="playground-heading"><h2>What could it<br/><i>become?</i></h2><p>Begin with a material. Follow it into a space.</p></div><div className="playground-shell"><div className="material-pane"><p className="mini-label">Choose a material</p>{materialOptions.map(item=><button key={item.id} onClick={()=>setMaterial(item)} className={material.id===item.id?'selected':''}><span>{item.label}</span><small>{item.note}</small><b>→</b></button>)}<div className="scene-buttons"><p className="mini-label">Imagine a setting</p>{["Hospitality","Residential","Workplace"].map(item=><button onClick={()=>setScene(item)} className={scene===item?'active':''} key={item}>{item}</button>)}</div></div><div className={`visual-pane ${material.className}`}><div className="visual-copy"><p>Now imagining</p><h3>{material.label}<br/>in <i>{scene}.</i></h3><a href="#visit">Talk to a material specialist <span>↗</span></a></div><div className="material-swatch"/></div></div></section>

    <section className="collection-section" id="collections"><div className="collection-head"><p className="section-number">04 / Explore CORO</p><h2>Eight worlds.<br/><i>One collective.</i></h2><p>Each family is a different invitation to explore how a space can look, feel and perform.</p></div><div className="collection-grid">{collections.map((item,index)=><a className={`collection-card ${item.tone}`} href="#visit" key={item.name}><img src={item.image} alt=""/><div className="card-shade"/><div className="card-top"><span>0{index+1}</span><span>Explore ↗</span></div><div className="card-bottom"><h3>CORO {item.name}</h3><p>{item.type}</p></div></a>)}</div><div className="more-collections"><p>Also in the collective</p><span>Mateos™</span><i>·</i><span>Velare™</span><a href="#visit">View all collections →</a></div></section>

    <section className="story section"><div className="story-image"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85" alt="Sculptural interior"/></div><div className="story-copy"><p className="section-number">05 / Design stories</p><p className="quote">“The right material doesn’t finish a room. It gives it a point of view.”</p><a className="arrow-link" href="#visit">Read a material story <span>↘</span></a></div></section>

    <section className="visit" id="visit"><div className="visit-photo"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85" alt="Contemporary interior"/></div><div className="visit-panel"><p className="section-number">06 / Come experience CORO</p><h2>Made to be<br/><i>experienced.</i></h2><p>Visit our Bengaluru experience centre to compare, discuss, touch and discover materials in real life.</p><div className="actions"><a className="button dark" href="mailto:hello@corocraftedcollective.com">Book a visit <b>↗</b></a><a className="text-link dark-text" href="https://www.instagram.com/coro.crafted.collective/" target="_blank">Follow the CORO world <span>→</span></a></div><small>Appointments and opening hours are confirmed directly with the CORO team.</small></div></section>

    <Footer/>
  </main>;
}
