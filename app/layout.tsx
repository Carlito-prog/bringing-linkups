import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google"
import "./globals.css";
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const interSans = Inter({
  variable: "--font-inter"
})

const merriweather = Merriweather({
  variable: "--font-merri"
})

export const metadata: Metadata = {
  title: "Bringing Link Ups (BLU)",
  description:
    "BLU is a social event platform designed to use content to connect people through real-world experiences, nearby events, and shared interests.",

  icons: {
    icon: "/images/live-events.png",
  },
  openGraph: {
    title: "Bringing Link Ups (BLU)",
    description:
      "Discover events, meet people nearby, and build real-world connections with BLU.",
    url: "https://www.bringinglinkups.com",
    siteName: "Bringing Link Ups",
    images: [
      {
        url: "https://www.bringinglinkups.com/images/live-feed.png",
        width: 1200,
        height: 630,
        alt: "Bringing Link Ups",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bringing Link Ups (BLU)",
    description:
      "Scroll through content to find events and meaningful real-world connections nearby.",
    images: ["https://www.bringinglinkups.com/images/live-feed.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${merriweather.variable} antialiased bg-repeat bg-[url(/images/asphalt.png)] text-white w-screen min-h-screen m-0 p-0`}>
        <div className="max-w-[1600px] mx-auto relative">
          <Navbar />
        </div>
        {children}
        <div className="bg-black">
          <Footer />
        </div>
      </body>
    </html>
  );
}
