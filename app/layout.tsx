import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUREA Skin Clinic — Portfolio Landing Page",
  description: "Conversion landing page for a fictional skin and laser clinic. The case study emphasizes trust, ethical health marketing, responsive booking UX, accessibility, SEO and performance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
