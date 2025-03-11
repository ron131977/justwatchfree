import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { Suspense } from 'react'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"),
  title: {
    default: "JustWatch Free - Watch Movies, Series & More",
    template: "%s | JustWatch Free",
  },
  description:
    "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
  keywords: ["justwatch",
    "just watch free",
    "justwatch free movies",
    "justwatch .com free",
    "just watch movies online free",
    "movies",
    "TV series",
    "video",
    "free movies",
    "free TV series",
    "watch movie online",
    "watch TV series online",
    "free movie streaming",
    "free TV series streaming",
    "video streaming",
    "entertainment",
    "watch online",
  ],
  authors: [{ name: "JustWatch Free Team" }],
  creator: "JustWatch Free",
  publisher: "JustWatch Free",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app",
    title: "JustWatch Free - Watch Movies, Series & More",
    description: "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
    siteName: "JustWatch Free",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "JustWatch Free",
      },
    ],
    fbAppId: "1130894345478856", // Added Facebook App ID
  },
  twitter: {
    card: "summary_large_image",
    title: "JustWatch Free - Watch Movies, Series & More",
    description: "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/og_image.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/site.webmanifest`,
  generator: 'justwatchfree',
  // Added canonical URL
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app",
  },
  verification: {
    yandex: "16ee45b58396521f",
    bing: "695BD01C3BC615AB69B7E9C3B718EB74",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Script
                id="google-analytics"
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-P3E2NGMBQ1"
              />
              <Script id="ga-config" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P3E2NGMBQ1');
          `}
              </Script>

              {/* <Script id="ad-script-1" strategy="lazyOnload">
                {`(function(d,z,s){
              s.src='https://'+d+'/401/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('groleegni.net',9067306,document.createElement('script'))`}
              </Script>


              <Script id="ad-script-2" strategy="lazyOnload">
                {`(function(d,z,s){
              s.src='https://'+d+'/401/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('gizokraijaw.net',9067296,document.createElement('script'))`}
              </Script>


              <Script id="ad-script-3" strategy="lazyOnload">
                {`(function(d,z,s){
              s.src='https://'+d+'/400/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('vemtoutcheeg.com',8640330,document.createElement('script'))`}
              </Script> */}
              {/* Clicky Analytics Scripts */}
              <Script async data-id="101480127" src="//static.getclicky.com/js" />
              <Script async data-id="101480127" src="/69e4fc5642f327d1b.js" />
            </div>
            <Toaster />
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}



// import './globals.css'