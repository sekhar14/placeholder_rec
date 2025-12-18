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
  title: "Clarion | AI-Powered Hiring for Recruiters",
  description:
    "Upload resumes, add your JD, and let AI screen and rank candidates instantly. Never ghost a candidate again. Chrome extension coming soon.",
  keywords: [
    "recruitment software",
    "AI recruitment",
    "resume screening",
    "candidate ranking",
    "hiring automation",
    "ATS alternative",
    "recruiter tools",
    "candidate management",
    "hiring pipeline",
  ],
  openGraph: {
    title: "Clarion | AI-Powered Hiring for Recruiters",
    description:
      "Upload resumes and JDs. AI screens and ranks candidates instantly. Zero ghosted candidates.",
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
