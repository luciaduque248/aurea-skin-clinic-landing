import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurea-skin-clinic-landing.vercel.app"),
  title: "AUREA Skin Clinic — Premium Aesthetic Clinic Landing",
  description:
    "Caso conceptual de landing page para una clínica estética premium, enfocado en UX/UI, frontend responsive, agendamiento y comunicación responsable.",
  applicationName: "AUREA Skin Clinic",
  authors: [{ name: "Sara Duque" }],
  creator: "Sara Duque",
  keywords: [
    "landing page",
    "aesthetic clinic",
    "dermatology",
    "UX/UI",
    "frontend",
    "booking UX",
    "responsive design",
    "portfolio",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "AUREA Skin Clinic — Premium Aesthetic Landing",
    description:
      "Caso de portafolio para una clínica estética premium con experiencia refinada, valoración responsable y conversión sin claims inventados.",
    url: "/",
    siteName: "AUREA Skin Clinic",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUREA Skin Clinic — Premium Aesthetic Landing",
    description:
      "Concepto de clínica estética premium enfocado en UX/UI, frontend y conversión responsable.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
