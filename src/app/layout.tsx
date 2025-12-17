import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Clarion | AI-Powered Hiring. Zero Ghosting.",
  description:
    "Get matched with real opportunities. Get actionable feedback on every application. AI-powered recruitment that works for everyone.",
  keywords: [
    "AI recruitment",
    "hiring platform",
    "talent verification",
    "skills assessment",
    "job matching",
    "career feedback",
  ],
  openGraph: {
    title: "Clarion | AI-Powered Hiring. Zero Ghosting.",
    description:
      "Get matched with real opportunities. Get actionable feedback on every application.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
