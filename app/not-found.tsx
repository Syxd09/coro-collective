import Link from "next/link";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export default function NotFound() {
  return (
    <main className="inner-page">
      <Nav />
      <section style={{ textAlign: "center", padding: "160px 20px 100px" }}>
        <p className="section-number">404 · Page Not Found</p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 6vw, 84px)",
            margin: "20px 0",
          }}
        >
          Space Not Found.
        </h1>
        <p
          style={{
            maxWidth: "440px",
            margin: "0 auto 30px",
            color: "#666",
            fontSize: "15px",
            lineHeight: "1.6",
          }}
        >
          The material, project, or page you are looking for does not exist in the CORO collective catalog.
        </p>
        <Link href="/" className="button dark">
          Return to Experience Centre ↗
        </Link>
      </section>
      <Footer />
    </main>
  );
}
