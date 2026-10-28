import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/profile";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const description = "Portafolio de Gustavo Vargas, desarrollador de software en Chihuahua: aplicaciones web, aplicaciones Android y sistemas informáticos.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: "Gustavo Vargas | Desarrollador de Software", template: "%s | Gustavo Vargas" },
  description,
  keywords: ["Gustavo Vargas", "Gustavo Vargas desarrollador de software", "Desarrollador web Chihuahua", "Desarrollador Android", "Portafolio de Gustavo Vargas"],
  authors: [{ name: profile.name }],
  openGraph: { title: "Gustavo Vargas | Desarrollador de Software", description, type: "website", locale: "es_MX", siteName: "Gustavo Vargas" },
  twitter: { card: "summary", title: "Gustavo Vargas | Desarrollador de Software", description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
