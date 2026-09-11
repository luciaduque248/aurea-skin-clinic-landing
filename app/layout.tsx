import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurea-skin-clinic-landing.vercel.app"),
  title: "AUREA Skin Clinic — Dermatology Landing Page Concept",
  description:
    "Caso conceptual de landing page para dermatología estética enfocado en confianza clínica, UX responsive, agendamiento y marketing de salud responsable.",
  applicationName: "AUREA Skin Clinic",
  authors: [{ name: "Sara Duque" }],
  creator: "Sara Duque",
  keywords: [
    "landing page",
    "dermatology",
    "aesthetic medicine",
    "UX/UI",
    "frontend",
    "booking UX",
    "responsive design",
    "portfolio",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "AUREA Skin Clinic — Landing Page Concept",
    description:
      "Caso de portafolio de dermatología estética centrado en confianza, valoración responsable y conversión sin claims inventados.",
    url: "/",
    siteName: "AUREA Skin Clinic",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUREA Skin Clinic — Landing Page Concept",
    description:
      "Caso conceptual de dermatología estética enfocado en UX, frontend y conversión responsable.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
