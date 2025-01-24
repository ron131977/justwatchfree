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

  return (
    <>
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
