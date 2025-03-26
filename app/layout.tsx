import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import { SITE_NAME, SITE_URL } from "@/lib/tmdb"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Stream Movies and TV Shows`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `Stream your favorite movies and TV shows on ${SITE_NAME}. Search for content and enjoy high-quality streaming.`,
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
    "watch online"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} - Stream Movies and TV Shows`,
    description: `Stream your favorite movies and TV shows on ${SITE_NAME}. Search for content and enjoy high-quality streaming.`,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Stream Movies and TV Shows`,
    description: `Stream your favorite movies and TV shows on ${SITE_NAME}. Search for content and enjoy high-quality streaming.`,
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to TMDB API and image domains */}
        <link rel="preconnect" href="https://api.themoviedb.org" />
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="dns-prefetch" href="https://api.themoviedb.org" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        {/* Plyr CSS for video player */}
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
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
           
              <Script id="ad-script-1" strategy="lazyOnload">
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
              </Script>
              {/* Clicky Analytics Scripts */}
              <Script async data-id="101480127" src="//static.getclicky.com/js" />
              <Script async data-id="101480127" src="/69e4fc5642f327d1b.js" />
              
     {/* <script async data-id="101481316" src="//static.getclicky.com/js"></script> 
      <script async data-id="101481316" src="/aa60065f29f93898.js"></script> */}
         
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'