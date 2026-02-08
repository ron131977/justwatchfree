import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Justwatch Free Official | Premium Video Entertainment",
        "url": "https://justwatchfree.vercel.app/",
        "description": "Justwatch Free Official - Stream thousands of Movies, TV Shows, and Live Sports for free in HD quality. No registration required.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://justwatchfree.vercel.app/#/?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "name": "Justwatch Free Official",
        "url": "https://justwatchfree.vercel.app/",
        "logo": "https://justwatchfree.vercel.app/logo.png",
        "sameAs": [
          "https://facebook.com/Justwatchfreeofficial",
          "https://twitter.com/Justwatchfreeofficial"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@Justwatchfreeofficial",
          "contactType": "customer support"
        }
      },
      {
        "@type": "CollectionPage",
        "name": "Streaming Library",
        "description": "Browse our extensive collection of Movies, TV Shows, Live Sports, and Live TV Channels.",
        "url": "https://justwatchfree.vercel.app/",
        "hasPart": [
          {
            "@type": "SiteNavigationElement",
            "name": "Movies",
            "url": "https://justwatchfree.vercel.app/movies",
            "description": "Watch the latest blockbuster movies in HD."
          },
          {
            "@type": "SiteNavigationElement",
            "name": "TV Shows",
            "url": "https://justwatchfree.vercel.app/tv",
            "description": "Stream trending TV series and episodes."
          },
          {
            "@type": "SiteNavigationElement",
            "name": "Live Sports",
            "url": "https://justwatchfree.vercel.app/sports",
            "description": "Live coverage of Premier League, NBA, F1, and more."
          },
          {
            "@type": "SiteNavigationElement",
            "name": "Live TV",
            "url": "https://justwatchfree.vercel.app/live",
            "description": "24/7 Live TV Channels for News and Entertainment."
          }
        ]
      }
    ]
  };

  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
               {/* Google Translate Init Script */}
           <script 
          type="text/javascript" 
          dangerouslySetInnerHTML={{
            __html: `
              window.googleTranslateElementInit = function() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false
                }, 'google_translate_element');
              };
            `
          }}
        />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}