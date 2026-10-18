import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgressBar } from "@/components/shared/scroll-progress-bar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0C" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://youngd.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cao Tan Duy (YoungD) — Full Stack Developer",
    template: "%s | YoungD Portfolio",
  },
  description:
    "Production-ready personal portfolio of Cao Tan Duy (YoungD), a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL.",
  keywords: [
    "Cao Tan Duy",
    "YoungD",
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "ChiNex",
    "Web Developer Vietnam",
  ],
  authors: [{ name: "Cao Tan Duy", url: "https://github.com/duycao04" }],
  creator: "Cao Tan Duy (YoungD)",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cao Tan Duy (YoungD) Portfolio",
    title: "Cao Tan Duy (YoungD) — Full Stack Developer",
    description:
      "Building thoughtful digital experiences, from frontend to backend. Explore projects, technical skills, and case studies.",
    images: [
      {
        url: "/images/projects/chinex/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Cao Tan Duy (YoungD) Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cao Tan Duy (YoungD) — Full Stack Developer",
    description: "Building thoughtful digital experiences, from frontend to backend.",
    images: ["/images/projects/chinex/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Cao Tan Duy",
      alternateName: "YoungD",
      jobTitle: "Full Stack Developer",
      url: siteUrl,
      image: `${siteUrl}/images/projects/chinex/cover.jpg`,
      sameAs: ["https://github.com/duycao04"],
      email: "mailto:dcao59995@gmail.com",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Cao Đẳng Công Thương TP.HCM",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Go",
        "PostgreSQL",
        "Tailwind CSS",
        "Ant Design",
        "Progressive Web Apps",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Cao Tan Duy (YoungD) — Full Stack Developer Portfolio",
      description:
        "Production-ready personal portfolio of Cao Tan Duy (YoungD), a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-[var(--accent-glow)] selection:text-[var(--accent-primary)]">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent-primary)] focus:text-black focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <AntdRegistry>
          <ThemeProvider>
            <ScrollProgressBar />
            <Navbar />
            <main id="main-content" className="pt-16">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
