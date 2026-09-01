import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CORO — Crafted Collective",
  description: "A material and product innovation experience centre in Bengaluru.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
