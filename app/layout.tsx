import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = "https://halim-portfolio.vercel.app";
const siteName = "Halim Shabalout Portfolio";
const siteTitle = "Halim Shabalout | Full-Stack Software Engineer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Halim Shabalout",
  },

  description:
    "Full-Stack Software Engineer specializing in TypeScript, Next.js, NestJS, React, Node.js, and AI-powered web applications. Experienced in building scalable software, RESTful APIs, and modern user experiences. Based in Jeddah, Saudi Arabia and open to full-time opportunities.",
  
  verification: {
    google: "hte6DbkMp91aeOs7NKcUlIOVzHxuQnjjmS09REmFXWo",
  },

  keywords: [
    "Halim Shabalout",
    "Full-Stack Software Engineer",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "REST API",
    "AI",
    "AI Integration",
    "Jeddah",
    "Saudi Arabia",
  ],

  authors: [
    {
      name: "Halim Shabalout",
      url: siteUrl,
    },
  ],

  creator: "Halim Shabalout",
  publisher: "Halim Shabalout",

  applicationName: siteName,

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: siteTitle,

    description:
      "Portfolio of Halim Shabalout — Full-Stack Software Engineer specializing in Next.js, NestJS, TypeScript, scalable web applications, and AI-powered software.",

    url: siteUrl,

    siteName,

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Halim Shabalout — Full-Stack Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteTitle,

    description:
      "Portfolio of Halim Shabalout — Full-Stack Software Engineer specializing in Next.js, NestJS, TypeScript, and AI-powered software.",

    images: ["/og-image.jpg"],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0a0a0a",
    },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Halim Shabalout",

  url: siteUrl,

  jobTitle: "Full-Stack Software Engineer",

  description:
    "Full-Stack Software Engineer specializing in TypeScript, Next.js, NestJS, React, Node.js, and AI-powered web applications.",

  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "REST APIs",
    "Artificial Intelligence",
    "AI Integration",
  ],

  address: {
    "@type": "PostalAddress",
    addressLocality: "Jeddah",
    addressCountry: "SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>

      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
