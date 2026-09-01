import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
const collections = [
  ["Tessera™", "Layered surfaces", "Cement tiles, terrazzo, ceramic and expressive surfaces for floors and walls.", "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1300&q=85"],
  ["Poroso™", "Spatial screens", "Wire mesh and architectural screening that shape light, air and connection.", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1300&q=85"],
  ["Fresco™", "Outdoor living", "Outdoor environments considered as complete places to gather, rest and stay awhile.", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=85"],
  ["Aria™", "Acoustic architecture", "Felt-led acoustic layers for spaces that need to sound as good as they look.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=85"],
  ["Planko™", "Grounded flooring", "Textured floors with a warm, considered point of view.", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1300&q=85"],
  ["Mateos™", "Flexible furniture", "Configurable pieces for environments that change with the people in them.", "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1300&q=85"],
  ["Rocco™", "Bespoke surfaces", "Solid surface, fabrication and form—in one continuous architectural expression.", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1300&q=85"],
  ["Velare™", "Soft architectural layers", "Wall coverings, blinds and surface treatments that shape atmosphere.", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1300&q=85"]
];
export default function Collections(){return <main className="inner-page"><Nav/><header className="page-intro"><p className="section-number">The CORO collective</p><h1>Materials with<br/><i>a point of view.</i></h1><p>Eight worlds of material, product and possibility—each ready to enter a new space.</p></header><section className="collection-list">{collections.map(([name,type,description,image],index)=><article className="collection-row" key={name}><div className="collection-image"><img src={image} alt=""/></div><span className="row-number">0{index+1}</span><div><h2>CORO {name}</h2><em>{type}</em><p>{description}</p></div><a href="/contact" aria-label={`Discuss ${name}`}>↗</a></article>)}</section><Footer/></main>}
