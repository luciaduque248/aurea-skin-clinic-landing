import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurea-skin-clinic-landing.vercel.app"),
  title: "AUREA Skin Clinic — Beauty-Tech Aesthetic Landing",
  description:
    "Caso conceptual de landing page para una clínica estética contemporánea con dirección beauty-tech, UX responsive, agendamiento y comunicación de salud responsable.",
  applicationName: "AUREA Skin Clinic",
  authors: [{ name: "Sara Duque" }],
  creator: "Sara Duque",
  keywords: [
    "landing page",
    "aesthetic clinic",
    "dermatology",
    "beauty tech",
    "UX/UI",
    "frontend",
    "booking UX",
    "responsive design",
    "portfolio",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "AUREA Skin Clinic — Beauty-Tech Landing Concept",
    description:
      "Caso de portafolio para una clínica estética con identidad beauty-tech, valoración responsable y conversión sin claims inventados.",
    url: "/",
    siteName: "AUREA Skin Clinic",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUREA Skin Clinic — Beauty-Tech Landing Concept",
    description:
      "Concepto de clínica estética enfocado en beauty-tech, UX, frontend y conversión responsable.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
