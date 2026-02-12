import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { AlertTriangle } from 'lucide-react';

function MyApp({ Component, pageProps }: AppProps) {
  const [showSecurityWarning, setShowSecurityWarning] = useState(false);
  const router = useRouter();

   // FIRST AD SCRIPT LOADER
  useEffect(() => {
    // Load ad scripts after page load to prevent blocking
    const loadAdScripts = () => {
      // Load first ad script
      const adScript1 = document.createElement('script');
      adScript1.innerHTML = `(function(s){s.dataset.zone='10583867',s.src='gizokraijaw.net/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`;
      document.head.appendChild(adScript1);

      // Load second ad script
      const adScript2 = document.createElement('script');
      adScript2.innerHTML = `(function(s){s.dataset.zone='10583864',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`;
      document.head.appendChild(adScript2);

      // Load third ad script
      // const adScript3 = document.createElement('script');
      // adScript3.innerHTML = `(function(s){s.dataset.zone='207021',s.src='https://quge5.com/88/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`;
      // document.head.appendChild(adScript3);
    };

    // Load ads after page is fully loaded
    if (document.readyState === 'complete') {
      loadAdScripts();
    } else {
      window.addEventListener('load', loadAdScripts);
    }

    return () => {
      window.removeEventListener('load', loadAdScripts);
    };
  }, []);

  // SECOND AD SCRIPT LOADER WITH CLICKY
  useEffect(() => {
    // Load ad scripts after page load to prevent blocking
    const loadAdScripts = () => {
      // Load first ad script
      const adScript1 = document.createElement('script');
      adScript1.innerHTML = `(function(s){s.dataset.zone='10583867',s.src='gizokraijaw.net/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`;
      document.head.appendChild(adScript1);

      // Load second ad script
      const adScript2 = document.createElement('script');
      adScript2.innerHTML = `(function(s){s.dataset.zone='10583864',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`;
      document.head.appendChild(adScript2);

      // Load clicky script
      const clickyScript1 = document.createElement('script');
      clickyScript1.async = true;
      clickyScript1.setAttribute('data-id', '101501170');
      clickyScript1.src = '//static.getclicky.com/js';
      document.head.appendChild(clickyScript1);


      // Load additional script
      const clickyScript2 = document.createElement('script');
      clickyScript2.async = true;
      clickyScript2.setAttribute('data-id', '101501170');
      clickyScript2.src = '/fde4207833.js';
      document.head.appendChild(clickyScript2);
    };

    // Load ads after page is fully loaded
    if (document.readyState === 'complete') {
      loadAdScripts();
    } else {
      window.addEventListener('load', loadAdScripts);
    }

    return () => {
      window.removeEventListener('load', loadAdScripts);
    };
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setShowSecurityWarning(true);
      setTimeout(() => setShowSecurityWarning(false), 2000);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="min-h-screen bg-miraj-black text-white font-sans selection:bg-miraj-red selection:text-white flex flex-col">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="canonical" href="https://justwatchfree.vercel.app/" />
        <title>Justwatch Free Official | Premium Video Entertainment</title>
        
              
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P3E2NGMBQ1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P3E2NGMBQ1');
            `,
          }}
        />
      </Head>
      {/* Security Warning Toast */}
      <div 
        className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-300 pointer-events-none ${
          showSecurityWarning ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="bg-red-600/95 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold shadow-2xl border border-white/20 flex items-center gap-3">
           <AlertTriangle size={20} className="text-white" />
           <span className="text-sm md:text-base">Right click is disabled</span>
        </div>
      </div>

      <Navbar />
      
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </div>
  );
}

export default MyApp;