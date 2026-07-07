import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://halim-portfolio.vercel.app"),

  title: "Halim Shabalout | Full-Stack Software Engineer",

  description:
    "Full-Stack Software Engineer specializing in TypeScript, Next.js, NestJS, React, Node.js, and AI-powered web applications. Experienced in building scalable software, RESTful APIs, and modern user experiences. Based in Jeddah, Saudi Arabia and open to full-time opportunities.",

  keywords: [
    "Halim Shabalout",
    "Full-Stack Software Engineer",
    "Full-Stack Developer",
    "Software Engineer",
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
      url: "https://halim-portfolio.vercel.app",
    },
  ],

  creator: "Halim Shabalout",

  publisher: "Halim Shabalout",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Halim Shabalout | Full-Stack Software Engineer",
    description:
      "Portfolio of Halim Shabalout — Full-Stack Software Engineer specializing in Next.js, NestJS, TypeScript, scalable web applications, and AI-powered software.",
    url: "https://halim-portfolio.vercel.app",
    siteName: "Halim Shabalout Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Halim Shabalout Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halim Shabalout | Full-Stack Software Engineer",
    description:
      "Portfolio of Halim Shabalout — Full-Stack Software Engineer specializing in Next.js, NestJS, TypeScript, and AI-powered software.",
    images: ["/og-image.jpg"],
  },

  category: "Technology",
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