import Hero from '@/components/hero';
import ShowsContainer from '@/components/shows-container';
import { siteConfig } from '@/configs/site';
import { Genre } from '@/enums/genre';
import { RequestType, type ShowRequest } from '@/enums/request-type';
import { getRandomShow } from '@/lib/utils';
import MovieService from '@/services/MovieService';
import { type CategorizedShows, MediaType, type Show } from '@/types';
import Script from "next/script";

export const revalidate = 3600;

export default async function AnimePage() {
  const h1 = `${siteConfig.name} Anime`;
  const requests: ShowRequest[] = [
    {
      title: 'Anime TV Shows Latest',
      req: { requestType: RequestType.ANIME_LATEST, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Anime TV Shows Trending',
      req: {
        requestType: RequestType.ANIME_TRENDING,
        mediaType: MediaType.TV,
      },
      visible: true,
    },
    {
      title: 'Anime TV Shows Top Rated',
      req: {
        requestType: RequestType.ANIME_TOP_RATED,
        mediaType: MediaType.TV,
      },
      visible: true,
    },
    {
      title: 'Netflix Anime TV Shows',
      req: { requestType: RequestType.ANIME_NETFLIX, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Anime Movies Latest',
      req: {
        requestType: RequestType.ANIME_LATEST,
        mediaType: MediaType.MOVIE,
      },
      visible: true,
    },
    {
      title: 'Anime Movies Top Rated',
      req: {
        requestType: RequestType.ANIME_TOP_RATED,
        mediaType: MediaType.MOVIE,
      },
      visible: true,
    },
  ];
  let allShows = await MovieService.getShows(requests);
  allShows = allShows.map((category: CategorizedShows) => {
    return {
      ...category,
      shows: category.shows.map((show: Show) => {
        return {
          ...show,
          media_type: category.title.includes('Movies')
            ? MediaType.MOVIE
            : MediaType.TV,
        };
      }),
    };
  });
  const randomShow: Show | null = getRandomShow(allShows);

  const uwatchfreeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Justwatch Free™ ",
        "url": "https://justwatchfree.vercel.app/",
        "image": "https://justwatchfree.vercel.app/favicon.ico",
        "logo": {
          "@type": "ImageObject",
          "url": "https://justwatchfree.vercel.app/logo.png",
          "width": 280,
          "height": 80
        }
      },
      {
        "@type": "WebSite",
        "url": "https://justwatchfree.vercel.app/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://justwatchfree.vercel.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  const rankMathSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Dr Trailer",
        "url": "https://gravatar.com/drtrailer2022",
        "image": "https://gravatar.com/drtrailer2022"
      },
      {
        "@type": "Organization",
        "name": "Justwatch Free™ ",
        "url": "https://justwatchfree.vercel.app"
      },
      {
        "@type": "WebSite",
        "url": "https://justwatchfree.vercel.app",
        "name": "Justwatch Free™ ",
        "publisher": {
          "@type": "Organization",
          "name": "Justwatch Free™ "
        }
      },
      {
        "@type": "WebPage",
        "url": "https://justwatchfree.vercel.app/",
        "name": "Movie",
        "datePublished": "2024-01-13T13:00:00+00:00",
        "dateModified": "2024-01-13T13:13:00+00:00",
        "author": {
          "@type": "Person",
          "name": "Dr Trailer",
          "url": "https://gravatar.com/drtrailer2022",
          "image": "https://gravatar.com/drtrailer2022"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Justwatch Free™ "
        }
      }
    ]
  };
  
  return (
    <>
      <Script type="application/ld+json">
        {JSON.stringify(uwatchfreeSchema)}
      </Script>
      <Script type="application/ld+json">
        {JSON.stringify(rankMathSchema)}
      </Script>
      <h1 className="hidden">{h1}</h1>
      <Hero randomShow={randomShow} />
      <ShowsContainer shows={allShows} />
       {/* Google Tag Manager Script */}
       <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-P3E2NGMBQ1"
                strategy="lazyOnload"
                async
            />
            <Script id="google-tag-manager" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-P3E2NGMBQ1');
                `}
            </Script>

        {/* First Script */}
            <Script id="ad-script-1" strategy="lazyOnload">
                      {`(function(d,z,s){
                          s.src='https://'+d+'/401/'+z;
                          try {
                              (document.body || document.documentElement).appendChild(s);
                          } catch(e) {
                              console.error('Error loading script:', e);
                          }
                      })('groleegni.net',8845819,document.createElement('script'))`}
                  </Script>
      
                  {/* Second Script */}
                  <Script id="ad-script-2" strategy="lazyOnload">
                      {`(function(d,z,s){
                          s.src='https://'+d+'/400/'+z;
                          try {
                              (document.body || document.documentElement).appendChild(s);
                          } catch(e) {
                              console.error('Error loading script:', e);
                          }
                      })('vemtoutcheeg.com',8845846,document.createElement('script'))`}
                  </Script>
    </>
  );
}
