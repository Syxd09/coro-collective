export interface MaterialItem {
  id: string;
  code: string;
  name: string;
  tagline: string;
  category: "Surfaces" | "Screens" | "Acoustics" | "Flooring" | "Outdoor" | "Furniture";
  description: string;
  fullDetails: string;
  image: string;
  tone: string;
  finishes: string[];
  specifications: {
    origin: string;
    density: string;
    stainRating: string;
    slipRating: string;
    applications: string;
    customization: string;
  };
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  typology: string;
  architect: string;
  materialsUsed: string[];
  image: string;
  quote: string;
  year: string;
}

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "tessera",
    code: "CORO-TS-01",
    name: "Tessera™",
    tagline: "Layered surfaces & in-situ terrazzo",
    category: "Surfaces",
    description: "Cement tiles, in-situ terrazzo, ceramic and expressive aggregate surfaces crafted for grounded floors and architectural feature walls.",
    fullDetails: "Tessera combines traditional aggregate craftsmanship with modern binder technology. Suitable for high-footfall commercial rotundas, hospitality foyers, and bespoke residential landscapes.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=85",
    tone: "clay",
    finishes: ["Honed", "Polished", "Brushed", "Micro-Terrazzo"],
    specifications: {
      origin: "Crafted in Bengaluru Studio",
      density: "2,400 kg/m³",
      stainRating: "Class A (Sealed)",
      slipRating: "R10 / P3",
      applications: "Flooring, wall cladding, integrated basin counters",
      customization: "Custom marble chip ratios & matrix tinting"
    }
  },
  {
    id: "poroso",
    code: "CORO-PR-02",
    name: "Poroso™",
    tagline: "Architectural mesh & spatial screens",
    category: "Screens",
    description: "Precision wire mesh and architectural screening systems designed to filter light, manage air, and shape tactile spatial boundaries.",
    fullDetails: "Woven metallic meshes and micro-perforated partitions that act as semi-translucent room dividers, facade solar shading, and ambient backdrop drapery.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
    tone: "mesh",
    finishes: ["Anodized Bronze", "Raw Stainless", "Matte Black Powdercoat", "Champagne Brass"],
    specifications: {
      origin: "Precision Woven Execution",
      density: "Open area 35% – 68%",
      stainRating: "Non-porous / UV Resistant",
      slipRating: "N/A (Spatial Filter)",
      applications: "Ceiling features, spatial dividers, staircase balustrades",
      customization: "Custom mesh weave density & cable pitch"
    }
  },
  {
    id: "rocco",
    code: "CORO-RC-03",
    name: "Rocco™",
    tagline: "Bespoke solid surface & seamless formwork",
    category: "Surfaces",
    description: "Thermoformable acrylic solid surface and Corian fabrication enabling fluid monolithic counters, custom sinks, and sculpted joinery.",
    fullDetails: "Rocco offers seamless, hygienic surface continuity with invisible joins. Designed for bespoke kitchen islands, luxury washrooms, and sculpted reception desks.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    tone: "stone",
    finishes: ["Silk Matte", "Satin Polished", "Textured Slate"],
    specifications: {
      origin: "Advanced Thermoforming Fabrication",
      density: "1,750 kg/m³",
      stainRating: "Stain Proof / Non-Porous",
      slipRating: "R9",
      applications: "Countertops, wash basins, curved wall features",
      customization: "Seamless thermoforming & backlighting translucency"
    }
  },
  {
    id: "aria",
    code: "CORO-AR-04",
    name: "Aria™",
    tagline: "Acoustic architecture & felt drapery",
    category: "Acoustics",
    description: "Felt-led acoustic baffles, quiet wall tiles, and sound-absorbing architectural layers for spaces that need to sound as serene as they look.",
    fullDetails: "Engineered high-density PET felt layers designed to dampen reverberation while adding visual warmth and textural softness to office spaces and auditoriums.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    tone: "felt",
    finishes: ["Heather Oat", "Charcoal Slate", "Terracotta Clay", "Deep Forest"],
    specifications: {
      origin: "Recycled Acoustic Felt Fiber",
      density: "NRC 0.85 – 0.95",
      stainRating: "Hydrophobic Treatment",
      slipRating: "N/A (Acoustic Wall)",
      applications: "Ceiling baffles, wall paneling, modular acoustic pods",
      customization: "CNC grooving, beveling, 3D thermo-molding"
    }
  },
  {
    id: "fresco",
    code: "CORO-FR-05",
    name: "Fresco™",
    tagline: "Outdoor living & weatherproof surfaces",
    category: "Outdoor",
    description: "Weatherproof exterior stone, breathable terra slabs, and UV-stabilized exterior modules for outdoor pavilions, courtyards, and terraces.",
    fullDetails: "Fresco translates indoor refinement into resilient outdoor environments capable of enduring tropical weather, heavy monsoon rain, and direct sunlight.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    tone: "green",
    finishes: ["Flamed Stone", "Bush-Hammered", "Textured Sand"],
    specifications: {
      origin: "Weather-Resistant Natural Aggregate",
      density: "2,650 kg/m³",
      stainRating: "UV & Frost Resistant",
      slipRating: "R11 / P4 (High Wet Traction)",
      applications: "Courtyard paving, pool surrounds, exterior facades",
      customization: "Custom slab sizing & anti-slip scoring"
    }
  },
  {
    id: "planko",
    code: "CORO-PL-06",
    name: "Planko™",
    tagline: "Grounded flooring & engineered tactile wood",
    category: "Flooring",
    description: "Thoughtfully aged timber planks, engineered hardwood, and wide-plank tactile flooring with rich grain definition.",
    fullDetails: "Planko celebrates natural timber characteristics with eco-conscious matte oil finishes that age gracefully over time.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85",
    tone: "wood",
    finishes: ["Smoked Oak Matte", "Raw Linen Wash", "Brushed Walnut", "Ebonized Ash"],
    specifications: {
      origin: "Sustainably Sourced Engineered Hardwood",
      density: "780 kg/m³",
      stainRating: "Hard-wax Oil Protected",
      slipRating: "R10",
      applications: "Residential flooring, executive suites, retail pop-ups",
      customization: "Herringbone, Chevron, wide-plank custom sizing"
    }
  },
  {
    id: "mateos",
    code: "CORO-MT-07",
    name: "Mateos™",
    tagline: "Flexible furniture & architectural joinery",
    category: "Furniture",
    description: "Modular structural seating, monolithic stone blocks, and fluid joinery crafted for dynamic spaces.",
    fullDetails: "Designed to adapt seamlessly as environments evolve, combining solid surface elements with tactile upholstery.",
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=85",
    tone: "clay",
    finishes: ["Matte Anodized", "Oil-Rubbed Wood", "Sculpted Solid Surface"],
    specifications: {
      origin: "Architectural Metalwork & Joinery",
      density: "Variable Structural Build",
      stainRating: "Commercial Grade Coating",
      slipRating: "N/A",
      applications: "Lobby benches, reception seating, display plinths",
      customization: "Modular dimensions & upholstery options"
    }
  },
  {
    id: "velare",
    code: "CORO-VL-08",
    name: "Velare™",
    tagline: "Soft architectural layers & wall treatments",
    category: "Surfaces",
    description: "Tactile wall coverings, micro-cement glazes, and subtle surface patinas that infuse spaces with depth and light play.",
    fullDetails: "Velare transforms bare walls into quiet canvas surfaces through multi-layered lime plasters, silk wall textiles, and soft mineral washes.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    tone: "sand",
    finishes: ["Mineral Wash", "Lime Stucco", "Woven Silk Weave"],
    specifications: {
      origin: "Hand-Applied Mineral Wash",
      density: "1.2 mm Micro-Layer",
      stainRating: "Washable Protective Sealer",
      slipRating: "N/A",
      applications: "Interior feature walls, ceiling drops, curving niches",
      customization: "Custom pigment matching & textural depth"
    }
  }
];

export interface InteriorService {
  id: string;
  title: string;
  subtitle: string;
  category: "Kitchens" | "Wardrobes" | "Living Rooms" | "Turnkey Execution";
  description: string;
  highlights: string[];
  materialsFeatured: string[];
  image: string;
}

export const INTERIOR_SERVICES: InteriorService[] = [
  {
    id: "bespoke-kitchens",
    title: "Bespoke & Modular Kitchens",
    subtitle: "Monolithic islands, seamless thermoforming & stone craftsmanship",
    category: "Kitchens",
    description: "Architectural kitchens engineered for high-performance living. Seamless Corian and solid surface counters, in-situ terrazzo island plinths, soft-closing European hardware, and integrated undermount basins.",
    highlights: [
      "Seamless monolithic countertops with invisible joints",
      "Custom in-situ terrazzo & quartz island plinths",
      "Concealed appliance integration & Blum/Hettich hardware",
      "Anti-fingerprint acrylic & matte lacquer cabinetry"
    ],
    materialsFeatured: ["Rocco™ Solid Surface", "Tessera™ Terrazzo", "Planko™ Smoked Oak"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "custom-wardrobes",
    title: "Walk-In Suites & Wardrobes",
    subtitle: "Architectural mesh screens, fluted glass & tailored dressing joinery",
    category: "Wardrobes",
    description: "Custom wardrobe systems designed with spatial transparency. Featuring anodized bronze mesh door panels, integrated ambient warm LED channel profiles, Italian drawer organizers, and rich veneer carcases.",
    highlights: [
      "Woven metallic mesh & fluted bronze glass shutters",
      "Integrated 3000K warm ambient channel lighting",
      "Custom velvet/leatherette organizers & jewelry trays",
      "Floor-to-ceiling seamless aluminum frame profiles"
    ],
    materialsFeatured: ["Poroso™ Architectural Mesh", "Planko™ Fluted Timber", "Velare™ Silk Linings"],
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "living-spatial-framing",
    title: "Living Spaces & Bespoke Joinery",
    subtitle: "Acoustic timber slat walls, floating credenzas & in-situ terrazzo flooring",
    category: "Living Rooms",
    description: "Turnkey living room environments that unite tactile acoustics with minimal structural joinery. Sculpted micro-cement fireplace features, custom display shelving, and acoustic felt ceiling drops.",
    highlights: [
      "Seamless in-situ terrazzo continuous monolithic flooring",
      "Acoustical felt & smoked timber fluted feature walls",
      "Minimal floating entertainment credenzas & display niches",
      "Integrated architectural lighting & brass trims"
    ],
    materialsFeatured: ["Tessera™ In-Situ", "Aria™ Acoustic Felt", "Mateos™ Custom Joinery"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "turnkey-execution",
    title: "Turnkey Home & Space Execution",
    subtitle: "From CAD shop drawings to precision site handover in Bengaluru",
    category: "Turnkey Execution",
    description: "End-to-end interior execution partner for architects and discerning homeowners. We take care of millwork shop drawings, sample mockups, precision factory fabrication, on-site MEP coordination, and flawless handover.",
    highlights: [
      "Dedicated technical project leads & site engineers",
      "Precision in-house CNC millwork & thermoforming",
      "Rigorous on-site execution benchmarks & milestone tracking",
      "Complete post-handover warranty & maintenance support"
    ],
    materialsFeatured: ["Complete CORO Material Ecosystem"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
  }
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "fursat-residence",
    title: "Fursat Residence",
    location: "Sadashivnagar, Bengaluru",
    typology: "Private Luxury Residence",
    architect: "Checkered Spaces",
    materialsUsed: ["Tessera™ In-Situ Terrazzo", "Rocco™ Solid Surface", "Poroso™ Wire Mesh Screen"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    quote: "CORO provided custom terrazzo aggregate mixes and precision metal edge trims that anchored our courtyard living space.",
    year: "2025"
  },
  {
    id: "atelier-lounge",
    title: "The Atelier Studio & Lounge",
    location: "Indiranagar, Bengaluru",
    typology: "Boutique Hospitality",
    architect: "Studio Earthform",
    materialsUsed: ["Aria™ Acoustic Baffles", "Planko™ Smoked Oak", "Velare™ Lime Stucco"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    quote: "The acoustic warmth from Aria felt panels transformed the conversational atmosphere of the main cocktail lounge.",
    year: "2025"
  },
  {
    id: "vayu-pavilion",
    title: "Vayu Courtyard Pavilion",
    location: "Whitefield, Bengaluru",
    typology: "Commercial Experience Center",
    architect: "Apex Architectural Practice",
    materialsUsed: ["Fresco™ Outdoor Slabs", "Poroso™ Mesh Facade", "Mateos™ Plinths"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    quote: "From initial sample swatches to final site alignment in Mahadevapura, CORO was an irreplaceable execution partner.",
    year: "2026"
  }
];

export const STUDIO_INFO = {
  name: "CORO Crafted Collective",
  tagline: "A material & product innovation experience centre",
  taglineSub: "Design execution partner for architects & spatial minds",
  address: "Bangalore Co-Operative Industrial Estate, B Narayanapura, Dooravani Nagar, Mahadevapura, Bengaluru, Karnataka 560016",
  googleMapsUrl: "https://maps.google.com/?q=Mahadevapura+Bengaluru",
  phone: "+91 98450 12345 / +91 80 4123 9876",
  email: "hello@corocraftedcollective.com",
  instagram: "https://www.instagram.com/coro.crafted.collective/",
  instagramHandle: "@coro.crafted.collective",
  linkedin: "https://www.linkedin.com/company/corocraftedcollective/",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM (By Appointment & Studio Visits)"
};
