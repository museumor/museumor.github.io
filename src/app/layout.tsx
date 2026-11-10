import type { Metadata } from "next";
import { Instrument_Sans, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";

// Body copy.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

// Titles. Its round geometric forms echo the MOR logomark.
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  ...pageMetadata({
    title: SITE_NAME,
    description: "A free social VR museum for immersive art, evolving exhibitions, and shared experiences with artists and friends.",
    path: "/",
    absoluteTitle: true,
  }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  // Pages set their own canonical; don't let every page inherit "/".
  alternates: undefined,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; connect-src 'self';" 
        />
      </head>
      <body
        className={`${instrumentSans.variable} ${jost.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
