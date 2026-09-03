import type { Metadata } from "next";
import "./globals.css";
import { SampleBoxProvider } from "./context/SampleBoxContext";
import { SampleBoxDrawer } from "./components/SampleBoxDrawer";
import { PageTransition } from "./components/PageTransition";

export const metadata: Metadata = {
  title: "CORO — Crafted Collective | Architectural Surface Studio Bengaluru",
  description: "A material & product innovation experience centre for architects and spatial minds in Mahadevapura, Bengaluru.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SampleBoxProvider>
          <PageTransition>{children}</PageTransition>
          <SampleBoxDrawer />
        </SampleBoxProvider>
      </body>
    </html>
  );
}
