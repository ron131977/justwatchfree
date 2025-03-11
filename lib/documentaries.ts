// This is a mock implementation - in a real app, this would fetch from an API or database
import { cache } from "react";

export interface Documentary {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number; // in seconds
  views: number;
  category: string;
  tags: string[];
  releaseDate: string;
  director: string;
  featured: boolean;
}

const documentaries: Documentary[] = [
//TV SHOW SECTION
{
  id: "T51",
  slug: "suzhal-the-vortexl-s02",
  title: "Suzhal – The Vortex S02",
  description:
    "In a small South Indian town, a seemingly routine minor case explodes into a twisted crime thriller that rips apart its social fabric.",
  thumbnailUrl:
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/suzhal-the-vortex-2-review-282416753-16x9_0.jpg?VersionId=CM.xr7iLikatTjYy.MjWd.LyZQhbwGze",
  videoUrl:
    "https://short.icu/wlsg4t9Os?thumbnail=https://images.justwatch.com/backdrop/273538563/s640/season-2",
  duration: 22080,
  views: 903000,
  category: "Tvshow",
  tags: [
    "suzhal the vortexl s02 (2025)",
    "suzhal the vortexl s02 (2025) watch online",
    "suzhal the vortexl s02 (2025) watch ",
    "suzhal the vortexl s02 (2025) streaming ",
  ],
  releaseDate: "2025-02-28",
  director: "Sarjun, Bramma G.",
  featured: false,
},
{
  id: "T50",
  slug: "dabba-cartel-s01",
  title: "Dabba Cartel S01",
  description:
    "Five housewives who run a high stakes secret cartel in which style, ambition, love, friendship and betrayal set in the rich 1960s Mumbai.",
  thumbnailUrl:
    "https://tomindia.s3.ap-south-1.amazonaws.com/prod/post/ogImage/1739186216436_69911b2b667b44d2aeceef17e407e3e3_Dabba-Cartel_Webseries_TomorrowsIndia.jpg",
  videoUrl:
    "https://short.icu/TfSsQpXl8?thumbnail=https://static.tnn.in/thumb/msid-117788538,thumbsize-149196,width-448,height-252,resizemode-75/117788538.jpg",
  duration: 20280,
  views: 803000,
  category: "Tvshow",
  tags: [
    "dabba cartel s01 (2025)",
    "dabba cartel s01 (2025) watch online",
    "dabba cartel s01 (2025) watch ",
    "dabba cartel s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-28",
  director: "Hitesh Bhatia",
  featured: false,
},
{
  id: "T49",
  slug: "reacher-s03",
  title: "Reacher S03",
  description:
    "Itinerant former military policeman Jack Reacher solves crimes and metes out his own brand of street justice. Based on the novels by Lee Child.",
  thumbnailUrl:
    "https://www.tvguide.com/a/img/resize/c6d4c07def64a8638a23117ab4156cc39ad66e73/hub/2024/12/06/f8755a4f-451b-4ca1-b57b-e90c5229703d/reachie.jpg?auto=webp&width=1092",
  videoUrl:
    "https://short.icu/-s8i5FIUU?thumbnail=https://i.gadgets360cdn.com/large/image_3_F_1736408509883.jpg",
  duration: 9000,
  views: 1603000,
  category: "Tvshow",
  tags: [
    "reacher s03 (2025)",
    "reacher s03 (2025) watch online",
    "reacher s03 (2025) watch ",
    "reacher s03 (2025) streaming ",
  ],
  releaseDate: "2025-02-20",
  director: "Sam Hill",
  featured: false,
},
{
  id: "T48",
  slug: "running-point-s01",
  title: "Running Point S01",
  description:
    "Isla Gordon, overlooked her whole life, is appointed President of the LA Waves basketball team, a family business. She aims to prove she was the right choice despite skepticism.",
  thumbnailUrl:
    "https://files.spoilertv.com/headers/Running-Point.jpg",
  videoUrl:
    "https://short.icu/Ry9QLbJkFV?thumbnail=https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUl42L3rmzugRiNg_zNtjDp9mrpLOEkEsGScVYqpSjcQj69m6P9i6GlgAOK9ykBx8fuCfHROODHN7k6resZ7iuc61m7LpyTRVaKX.jpg?r=c68",
  duration: 18180,
  views: 903000,
  category: "Tvshow",
  tags: [
    "running point s01 (2025)",
    "running point s01 (2025) watch online",
    "running point s01 (2025) watch ",
    "running point s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-27",
  director: "Michael Weaver",
  featured: false,
},
{
  id: "T47",
  slug: "ziddi-girls-s01",
  title: "Ziddi Girls S01",
  description:
    "Five self-absorbed Gen Z freshers enter Matilda House College, bonding over a year of turmoil, romance, and personal growth as they fiercely defend their school against external threats.",
  thumbnailUrl:
    "https://m.media-amazon.com/images/S/pv-target-images/f16598aea631ed06df4fef09f4f3637ecaeec0c796b5631c8ea0a81343b8d80a.jpg",
  videoUrl:
    "https://short.icu/ZCA7_5EB5?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/85317207ced9f518f0b70e19f5f1070231baa8776012ee3013b38a0c912db107._SX1080_FMjpg_.jpg",
  duration: 18420,
  views: 1203000,
  category: "Tvshow",
  tags: [
    "ziddi girls s01 (2025)",
    "ziddi girls s01 (2025) watch online",
    "ziddi girls s01 (2025) watch ",
    "ziddi girls s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-27",
  director: "Neha Sharma, Shonali Bose, Vasant Nath",
  featured: false,
},
{
  id: "T46",
  slug: "ek-badnaam-aashram-s03",
  title: "Ek Badnaam Aashram S03",
  description:
    "A duplicitous, aashram based, Indian Godman's good deeds serve activities criminal and unholy, such as rapes, murders, drugs, vote bank politics and forced male emasculation. The law and a few crusaders investigate to bring him to account.",
  thumbnailUrl:
    "https://i.ytimg.com/vi/RhCwkmNUV-s/maxresdefault.jpg",
  videoUrl:
    "https://short.icu/O8a1H9M74?thumbnail=https://i.ytimg.com/vi/RhCwkmNUV-s/maxresdefault.jpg",
  duration: 12180,
  views: 1953000,
  category: "Tvshow",
  tags: [
    "ek badnaam aashram s03 (2025)",
    "ek badnaam aashram s03 (2025) watch online",
    "ek badnaam aashram s03 (2025) watch ",
    "ek badnaam aashram s03 (2025) streaming ",
  ],
  releaseDate: "2025-02-21",
  director: "Prakash Jha",
  featured: false,
},
{
  id: "T45",
  slug: "paradise-s01",
  title: "Paradise S01",
  description:
    "A Secret Service agent investigates the murder of a former president in a seemingly peaceful community.",
  thumbnailUrl:
    "https://ntvb.tmsimg.com/assets/p28956879_b_h8_ab.jpg?w=1280&h=720",
  videoUrl:
    "https://short.icu/Ktsqa7wNk?thumbnail=https://blog.reelgood.com/wp-content/uploads/2025/01/Paradise-2025-scaled.webp",
  duration: 21660,
  views: 953000,
  category: "Tvshow",
  tags: [
    "paradise s01 (2025)",
    "paradise s01 (2025) watch online",
    "paradise s01 (2025) watch ",
    "paradise s01 (2025) streaming ",
  ],
  releaseDate: "2025-01-26",
  director: "Glenn Ficarra, John Requa",
  featured: false,
},
{
  id: "T44",
  slug: "the-hunting-party-s01",
  title: "The Hunting Party S01",
  description:
    "Follows a small team of investigators who are assembled to track down and capture the most dangerous killers ever seen, all of whom have just escaped from a top-secret prison that's not supposed to exist.",
  thumbnailUrl:
    "https://resizing.flixster.com/NTu61e7AD8gVbPdRCq1ZcYBvR4Q=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28798890_b_h9_ac.jpg",
  videoUrl:
    "https://short.icu/kP2UOqPwx?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2025/02/The-Hunting-Party-2025-Peacock-Review-1200x900.jpg",
  duration: 10200,
  views: 803000,
  category: "Tvshow",
  tags: [
    "the hunting party s01 (2025)",
    "the hunting party s01 (2025) watch online",
    "the hunting party s01 (2025) watch ",
    "the hunting party s01 (2025) streaming ",
  ],
  releaseDate: "2025-01-19",
  director: "Thor Freudenthal, Blackhorse Lowe",
  featured: false,
},
{
  id: "T43",
  slug: "paatal-lok-s02",
  title: "Paatal Lok S02",
  description:
    "Inspector Hathi Ram Chaudhary, the haggard, unlikely hero, investigates a high-profile murder case that leads him to remote corners of North-East India, where he battles powerful forces and personal tragedies in his pursuit of truth.",
  thumbnailUrl:
    "https://i.ytimg.com/vi/uX8eCqdC39o/maxresdefault.jpg",
  videoUrl:
    "https://short.icu/K7Wlv7WLd?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/03e398facfb8c631ed25e9588bd02008fcdea16c437cff6643fe6e45f83fb7d4._SX1080_FMjpg_.jpg",
  duration: 21480,
  views: 603000,
  category: "Tvshow",
  tags: [
    "paatal lok s02 (2025)",
    "paatal lok s02 (2025) watch online",
    "paatal lok s02 (2025) watch ",
    "paatal lok s02 (2025) streaming ",
  ],
  releaseDate: "2025-01-17",
  director: "Avinash Arun, Prosit Roy",
  featured: false,
},
{
  id: "T42",
  slug: "watson-s01",
  title: "Watson S01",
  description:
    "A year after the death of his friend and partner Sherlock Holmes, Dr. John Watson resumes his medical career at a clinic dedicated to the treatment of rare diseases. However, he soon finds that his old life is not done with him yet.",
  thumbnailUrl:
    "https://m.media-amazon.com/images/S/pv-target-images/688b870632daa68955867b4f2a2e0ae7959ee8e991334fe20fe0d212e7295786.jpg",
  videoUrl:
    "https://short.icu/34x84hCQQ?thumbnail=https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/1048468/27/75/50/asset_marquee_f81e9dfd-f674-4c3e-b150-75496f097d8e.jpg",
  duration: 7740,
  views: 139000,
  category: "Tvshow",
  tags: [
    "watson s01 (2025)",
    "watson s01 (2025) watch online",
    "watson s01 (2025) watch ",
    "watson s01 (2025) streaming ",
  ],
  releaseDate: "2025-01-26",
  director: "Larry Teng",
  featured: false,
},
{
  id: "T41",
  slug: "suits-la-s01",
  title: "Suits LA S01",
  description:
    "Follows a new group led by Ted Black, a former New York prosecutor who built an L.A. law firm that specializes in criminal and entertainment law.",
  thumbnailUrl:
    "https://elcomercio.pe/resizer/v2/5QFX363F5VHHZPHFWYTN77Z5XQ.jpg?auth=00939b899ab425fac1c752378f876eceed8fd27c9049917480c0e80620a6e925&width=1200&height=810&quality=90&smart=true",
  videoUrl:
    "https://short.icu/PmFOUO4EW?thumbnail=https://www.hindustantimes.com/ht-img/img/2025/02/24/550x309/Suits_LA_1740400405418_1740400410107.jpg",
  duration: 2640,
  views: 250000,
  category: "Tvshow",
  tags: [
    "suits la s01 (2025)",
    "suits la s01 (2025) watch online",
    "suits la s01 (2025) watch ",
    "suits la s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-23",
  director: "Anton Cropper, Victoria Mahoney, Christopher Misiano",
  featured: false,
},
{
  id: "T40",
  slug: "the-white-lotus-s03",
  title: "The White Lotus S03",
  description:
    "The exploits of various guests and employees of a luxury resort over the span of a week.",
  thumbnailUrl:
    "https://imageio.forbes.com/specials-images/imageserve/65986a7cb7b40b71bbabcb2d/0x0.jpg?format=jpg&crop=2264,1274,x137,y355,safe&height=900&width=1600&fit=bounds",
  videoUrl:
    "https://short.icu/USy6fJLe2?thumbnail=https://i.ytimg.com/vi/Sp0thA4cDcM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWseJmOxr2FUme29rGCPPj3Oav4A",
  duration: 7260,
  views: 39000,
  category: "Tvshow",
  tags: [
    "the white lotus s03 (2025)",
    "the white lotus s03 (2025) watch online",
    "the white lotus s03 (2025) watch ",
    "the white lotus s03 (2025) streaming ",
  ],
  releaseDate: "2025-02-07",
  director: "Mike White",
  featured: false,
},
{
  id: "T39",
  slug: "school-friends-s03",
  title: "School Friends S03",
  description:
    "A slice-of-life show that explores the lives of 5 quirky school teenagers who've just entered 11th Commerce, as they navigate friendships, heartbreaks, peer pressures, more importantly figuring out who they really want to be.",
  thumbnailUrl:
    "https://i.ytimg.com/vi/5_3jl2kkA2c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCB2q9HlhsmIoUEs23JEpiDxaiPhQ",
  videoUrl:
    "https://short.icu/qXWy_ysD-?thumbnail=https://www.pinkvilla.com/pics/500x500/1626704445_school-friends_202502.jpg",
  duration: 19449,
  views: 759000,
  category: "Tvshow",
  tags: [
    "school friends s03 (2025)",
    "school friends s03 (2025) watch online",
    "school friends s03 (2025) watch ",
    "school friends s03 (2025) streaming ",
  ],
  releaseDate: "2025-02-14",
  director: "Sahil Verma",
  featured: false,
},
{
  id: "T38",
  slug: "a-thousand-blows-s01",
  title: "A Thousand Blows S01",
  description:
    "The fortunes of Hezekiah and Alec, two best friends newly arrived from Jamaica. Fighting for survival in the violent melting pot of Victorian London's East End, they come up against Sugar Goodson, a dangerous, veteran boxer.",
  thumbnailUrl:
    "https://i.imgur.com/IzzBsDg.png?myad",
  videoUrl:
    "https://short.icu/Qq5quTUnf?thumbnail=https://i.imgur.com/IzzBsDg.png?myad",
  duration: 18600,
  views: 259000,
  category: "Tvshow",
  tags: [
    "a thousand blows s01 (2025)",
    "a thousand blows s01 (2025) watch online",
    "a thousand blows s01 (2025) watch ",
    "a thousand blows s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-23",
  director: "Ashley Walters, Coky Giedroyc",
  featured: false,
},
{
  id: "T37",
  slug: "crime-beat-s01",
  title: "Crime Beat S01",
  description:
    "Small-town crime journalist Abhishek finds his life and career affected by a fugitive gangster. As he gets trapped in a web of lies and motives, what price will he pay- to become a renowned reporter?",
  thumbnailUrl:
    "https://i.ytimg.com/vi/aitcEOkQQvY/maxresdefault.jpg",
  videoUrl:
    "https://short.icu/QkTqBJdRi?thumbnail=https://i.ytimg.com/vi/aitcEOkQQvY/maxresdefault.jpg",
  duration: 14700,
  views: 659000,
  category: "Tvshow",
  tags: [
    "crime beat s01 (2025)",
    "crime beat s01 (2025) watch online",
    "crime beat s01 (2025) watch ",
    "crime beat s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-23",
  director: "Sanjeev Kaul, Sudhir Mishra",
  featured: false,
},
{
  id: "T36",
  slug: "zero-day-s01",
  title: "Zero Day S01",
  description:
    "In the midst of crisis: how can we discover the truth when it seems that the world is being destroyed by uncontrollable forces? Also, to what extent are conspiracy theories our own inventions or products of our imagination?",
  thumbnailUrl:
    "https://i.imgur.com/Xf8qqXc.png?dtrcs",
  videoUrl:
    "https://short.icu/7VLd3Ag7G?thumbnail=https://i.imgur.com/Xf8qqXc.png?dtrcs",
  duration: 18480,
  views: 959000,
  category: "Tvshow",
  tags: [
    "zero day s01 (2025)",
    "zero day s01 (2025) watch online",
    "zero day s01 (2025) watch ",
    "zero day s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-20",
  director: "Lesli Linka Glatter",
  featured: false,
},
{
  id: "T35",
  slug: "high-potential-s01",
  title: "High Potential S01",
  description:
    "Thanks to her exceptional mind, single-mom-of-three Morgan is able to help solve a crime as she rearranges evidence during her shift as a cleaner for the police department.",
  thumbnailUrl:
    "https://www.metacritic.com/a/img/catalog/provider/2/13/2-f2759c2435be315e65d327a9d051b005.jpg",
  videoUrl:
    "https://short.icu/EBrJD9ps2?thumbnail=https://www.metacritic.com/a/img/catalog/provider/2/13/2-f2759c2435be315e65d327a9d051b005.jpg",
  duration: 33300,
  views: 400000,
  category: "Tvshow",
  tags: [
    "high potential s01 (2025)",
    "high potential s01 (2025) watch online",
    "high potential s01 (2025) watch ",
    "high potential s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-11",
  director: "Alethea Jones, James Roday Rodriguez",
  featured: false,
},
{
  id: "T34",
  slug: "cobra-kai-s06",
  title: "Cobra Kai S06",
  description:
    "Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.",
  thumbnailUrl:
    "https://hs223eagleexpress.com/wp-content/uploads/2024/10/7.jpg",
  videoUrl:
    "https://short.icu/FBPA8_fBc?thumbnail=https://hs223eagleexpress.com/wp-content/uploads/2024/10/7.jpg",
  duration: 36360,
  views: 1500000,
  category: "Tvshow",
  tags: [
    "cobra kai s06 (2025)",
    "cobra kai s06 (2025) watch online",
    "cobra kai s06 (2025) watch ",
    "cobra kai s06 (2025) streaming ",
  ],
  releaseDate: "2025-02-13",
  director: "Jon Hurwitz, Hayden Schlossberg, Joel Novoa, Josh Heald",
  featured: false,
},
{
  id: "T33",
  slug: "virdee-01",
  title: "Virdee S01",
  description:
    "DCI Harry Virdee must hunt down a killer targeting the Asian community in Bradford, whilst dealing with his chaotic personal life.",
  thumbnailUrl:
    "https://gazettely.com/wp-content/uploads/2025/02/Virdee-Review-4-1024x576.webp",
  videoUrl:
    "https://short.icu/bk949evrt?thumbnail=https://images.justwatch.com/backdrop/324950607/s640/season-1",
  duration: 20700,
  views: 390000,
  category: "Tvshow",
  tags: [
    "virdee 01 (2025)",
    "virdee 01 (2025) watch online",
    "virdee 01 (2025) watch ",
    "virdee 01 (2025) streaming ",
  ],
  releaseDate: "2025-02-10",
  director: "Milad Alami, Mo Ali, Mark Tonderai",
  featured: false,
},
{
  id: "T32",
  slug: "invisible-boys-01",
  title: "Invisible Boys S01",
  description:
    "Everyone in a small town assumes they know you, but when a closeted gay adolescent hooks up with a married guy, it has far-reaching effects for a group of teens who were previously invisible.",
  thumbnailUrl:
    "https://gazettely.com/wp-content/uploads/2025/02/Invisible-Boys-Season-1-Review-1-1024x576.webp",
  videoUrl:
    "https://short.icu/nrz-ja9IR?thumbnail=https://images.justwatch.com/backdrop/324750546/s640/season-1",
  duration: 17280,
  views: 1790000,
  category: "Tvshow",
  tags: [
    "invisible boys 01 (2025)",
    "invisible boys 01 (2025) watch online",
    "invisible boys 01 (2025) watch ",
    "invisible boys 01 (2025) streaming ",
  ],
  releaseDate: "2025-02-13",
  director: "Nicholas Verso",
  featured: false,
},
{
  id: "T32",
  slug: "unforgotten-s06",
  title: "Unforgotten S06",
  description:
    "London detectives investigate crimes from the past, unravelling secrets left buried for years.",
  thumbnailUrl:
    "https://i.ytimg.com/vi/eTzopNGt3uo/maxresdefault.jpg",
  videoUrl:
    "https://short.icu/zOFe2iqHC0?thumbnail=https://i.ytimg.com/vi/eTzopNGt3uo/maxresdefault.jpg",
  duration: 16860,
  views: 790000,
  category: "Tvshow",
  tags: [
    "unforgotten s06 (2025)",
    "unforgotten s06 (2025) watch online",
    "unforgotten s06 (2025) watch ",
    "unforgotten s06 (2025) streaming ",
  ],
  releaseDate: "2025-02-19",
  director: "Andy Wilson",
  featured: false,
},
{
  id: "T31",
  slug: "the-are-murders-s01",
  title: "The Are Murders S01",
  description:
    "A Stockholm detective under internal investigation heads to a ski resort to unwind, until a young girl's disappearance compels her back to work.",
  thumbnailUrl:
    "https://resizing.flixster.com/x7sQ3hfRehwYfbyLZSdLOHwdNAQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29168277_b_h10_ab.jpg",
  videoUrl:
    "https://short.icu/n0H388-Bg?thumbnail=https://resizing.flixster.com/x7sQ3hfRehwYfbyLZSdLOHwdNAQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29168277_b_h10_ab.jpg",
  duration: 10860,
  views: 590000,
  category: "Tvshow",
  tags: [
    "the are murders s01 (2025)",
    "the are murders s01 (2025) watch online",
    "the are murders s01 (2025) watch ",
    "the are murders s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-06",
  director: "Joakim Eliasson, Alain Darborg",
  featured: false,
},
{
  id: "T31",
  slug: "grosse-pointe-garden-society-s01",
  title: "Grosse Pointe Garden Society S01",
  description:
    "Follows four members of a suburban garden club, as they get caught up in murder and mischief, as they strive to flourish.",
  thumbnailUrl:
    "https://imageservice.disco.peacocktv.com/uuid/9aa28020-3836-3c9d-b661-b7cae930aa71/LAND_16_9/432/236?language=eng&territory=US&proposition=NBCUOTT&version=4eebca58-cd73-3aae-87d4-7ca89f693de2",
  videoUrl:
    "https://short.icu/80dwzgy73?thumbnail=https://i.gadgets360cdn.com/large/image_3_F_1740391175321.jpg",
  duration: 2520,
  views: 290000,
  category: "Tvshow",
  tags: [
    "grosse pointe garden society s01 (2025)",
    "grosse pointe garden society s01 (2025) watch online",
    "grosse pointe garden society s01 (2025) watch ",
    "grosse pointe garden society s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-22",
  director: "Maggie Kiley, Phil Traill",
  featured: false,
},
{
  id: "T30",
  slug: "dope-girls-s01",
  title: "Dope Girls S01",
  description:
    "It follows the birth of the nightclub scene in London's Soho",
  thumbnailUrl:
    "https://resizing.flixster.com/OKpGhZrnXdrmIXpv2UB15NCd0uE=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29477718_b_h10_aa.jpg",
  videoUrl:
    "https://short.icu/eBuSV-uMw?thumbnail=https://resizing.flixster.com/OKpGhZrnXdrmIXpv2UB15NCd0uE=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29477718_b_h10_aa.jpg",
  duration: 20220,
  views: 490000,
  category: "Tvshow",
  tags: [
    "dope girls s01 (2025)",
    "dope girls s01 (2025) watch online",
    "dope girls s01 (2025) watch ",
    "dope girls s01 (2025) streaming ",
  ],
  releaseDate: "2025-02-22",
  director: "Miranda Bowen, Shannon Murphy",
  featured: false,
},
{
    id: "T1",
    slug: "prison-cell-211-s01",
    title: "Prison Cell 211 S01",
    description:
      "Follows a riot that took place at a state prison in the Mexican border town of Ciudad Juárez on Dec 31, 2022 that left several dead.",
    thumbnailUrl:
      "https://resizing.flixster.com/1AzdMOLIWfLtgreKSg6vti5ztxk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29223127_b_h10_aa.jpg",
    videoUrl:
      "https://short.icu/sugwOHGmk?thumbnail=https://resizing.flixster.com/1AzdMOLIWfLtgreKSg6vti5ztxk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29223127_b_h10_aa.jpg",
    duration: 13440,
    views: 850000,
    category: "Tvshow",
    tags: [
      "prison cell 211 s01 (2025)",
      "prison cell 211 s01 (2025) watch online",
      "prison cell 211 s01 (2025) watch ",
      "prison cell 211 s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Gerardo Naranjo, Jaime Reynoso",
    featured: true,
  },
  {
    id: "T2",
    slug: "subteran-s01",
    title: "Subteran S01",
    description:
      "A mother working in IT who ends up fighting undercover against the Bucharest criminals who have changed her life.",
    thumbnailUrl:
      "https://resizing.flixster.com/SFE9lBUawrz-9l4VcjAN28MlzBo=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29163641_b_h10_ab.jpg",
    videoUrl:
      "https://short.icu/ye3mrVNl8?thumbnail=https://resizing.flixster.com/SFE9lBUawrz-9l4VcjAN28MlzBo=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29163641_b_h10_ab.jpg",
    duration: 16140,
    views: 850000,
    category: "Tvshow",
    tags: [
      "subteran s01 (2025)",
      "subteran s01 (2025) watch online",
      "subteran s01 (2025) watch ",
      "subteran s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Steve Bailie",
    featured: false,
  },
  {
    id: "T3",
    slug: "cassandra-s01",
    title: "Cassandra S01",
    description:
      "Germanys oldest smart home awakens its AI helper Cassandra after decades when a new family moves in. Cassandra, determined never to be abandoned again, manipulates events using the homes resources to become part of the family.",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/02/Cassandra-2025-Netflix-series-review.jpg",
    videoUrl:
      "https://short.icu/KTsi418-P?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2025/02/Cassandra-2025-Netflix-series-review.jpg",
    duration: 17760,
    views: 850000,
    category: "Tvshow",
    tags: [
      "cassandra s01 (2025)",
      "cassandra s01 (2025) watch online",
      "cassandra s01 (2025) watch ",
      "cassandra s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-06",
    director: "Benjamin Gutsche",
    featured: false,
  },
  {
    id: "T4",
    slug: "hounds-hill-s01",
    title: "Hounds Hill S01",
    description:
      "Famous writer Mikolaj returns to hometown facing blackmail over a book about a past murder. His activist father opposes local corruption. Mikolajs journalist wife investigates, uncovering dark secrets tied to the towns tragic history.",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/01/Hounds-Hill-Netflix-Series-Review-1200x720.jpg",
    videoUrl:
      "https://short.icu/XcZG2MtwTb?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2025/01/Hounds-Hill-Netflix-Series-Review-1200x720.jpg",
    duration: 19020,
    views: 850000,
    category: "Tvshow",
    tags: [
      "hounds hill s01 (2025)",
      "hounds hill s01 (2025) watch online",
      "hounds hill s01 (2025) watch ",
      "hounds hill s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-08",
    director: "Jacek Borcuch, Piotr Domalewski",
    featured: false,
  },
  {
    id: "T5",
    slug: "the-count-of-monte-cristo-s01",
    title: "The Count Of Monte Cristo S01",
    description:
      "Edmond Dantes, a sailor falsely accused of treason, is imprisoned in the Château d'If off Marseille. After escaping, and adopting the identity of the Count of Monte Cristo, he plans revenge against those who wrongly accused him.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/5bcd825e5afb6b39d36c2acc26883f2cc120af6f3757334593aa87cdce837ad3.jpg",
    videoUrl:
      "https://short.icu/fLYvtdgZN?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/5bcd825e5afb6b39d36c2acc26883f2cc120af6f3757334593aa87cdce837ad3.jpg",
    duration: 25080,
    views: 850000,
    category: "Tvshow",
    tags: [
      "the count of monte cristo s01 (2025)",
      "the count of monte cristo s01 (2025) watch online",
      "the count of monte cristo s01 (2025) watch ",
      "the count of monte cristo s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-13",
    director: "Bille August",
    featured: false,
  },
  {
    id: "T6",
    slug: "on-call-s01",
    title: "On Call S01",
    description:
      "Follows a pair of police officers on patrol as they respond to a new radio call, arriving on the scene to resolve incidents.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/368eff53f31a7cec3eccf4af8a63d32f08b4d87b595af1f48a602c0e9587bb3c.jpg",
    videoUrl:
      "https://short.icu/6GsIwm_4C?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/368eff53f31a7cec3eccf4af8a63d32f08b4d87b595af1f48a602c0e9587bb3c.jpg",
    duration: 14100,
    views: 550000,
    category: "Tvshow",
    tags: [
      "on call s01 (2025)",
      "on call s01 (2025) watch online",
      "on call s01 (2025) watch ",
      "on call s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-09",
    director: "Eriq La Salle, Brenna Malloy",
    featured: false,
  },
  {
    id: "T7",
    slug: "sweet-magnolias-s04",
    title: "Sweet Magnolias S04",
    description:
      "Three South Carolina women, best friends since high school, shepherd one another through the complexities of romance, career and family.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/jAVjNVYIIv4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDmIt8FY_58zKmr00mOWpk91yVYKg",
    videoUrl:
      "https://short.icu/oNbsKy1ug?thumbnail=https://i.ytimg.com/vi/jAVjNVYIIv4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDmIt8FY_58zKmr00mOWpk91yVYKg",
    duration: 30240,
    views: 450000,
    category: "Tvshow",
    tags: [
      "sweet magnolias s04 (2025)",
      "sweet magnolias s04 (2025) watch online",
      "sweet magnolias s04 (2025) watch ",
      "sweet magnolias s04 (2025) streaming ",
    ],
    releaseDate: "2025-02-06",
    director: "Sheryl J. Anderson",
    featured: false,
  },
  {
    id: "T8",
    slug: "bada-naam-karenge-s01",
    title: "Bada Naam Karenge S01",
    description:
      "Rishabh and Surbhi's arranged marriage hits turbulence as past secrets resurface. Amid light moments, they navigate an unfolding bond, torn between desires and cultural norms",
    thumbnailUrl:
      "https://blog.reelgood.com/wp-content/uploads/2025/02/sdqsdq.jpg?wsr",
    videoUrl:
      "https://short.icu/o08xRfJQh?thumbnail=https://blog.reelgood.com/wp-content/uploads/2025/02/sdqsdq.jpg?wsr",
    duration: 25980,
    views: 870000,
    category: "Tvshow",
    tags: [
      "bada naam karenge s01 (2025)",
      "bada naam karenge s01 (2025) watch online",
      "bada naam karenge s01 (2025) watch ",
      "bada naam karenge s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "Palash Vaswani",
    featured: false,
  },
  {
    id: "T9",
    slug: "apple-cider-vinegar-s01",
    title: "Apple Cider Vinegar S01",
    description:
      "The life of wellness guru Belle Gibson, who had a large social media following, where she pretended to be suffering from cancer but keeping the disease under control using self-care therapies. She confessed that none of it was true.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNGEzZWNkNzMtYTE4Ni00ZGYxLTg5MTItNzkxZWRiOTJhNDAyXkEyXkFqcGc@._V1_.jpg",
    videoUrl:
      "https://short.icu/8RXKGRDJW?thumbnail=https://m.media-amazon.com/images/M/MV5BNGEzZWNkNzMtYTE4Ni00ZGYxLTg5MTItNzkxZWRiOTJhNDAyXkEyXkFqcGc@._V1_.jpg",
    duration: 22380,
    views: 670000,
    category: "Tvshow",
    tags: [
      "apple cider vinegar s01 (2025)",
      "apple cider vinegar s01 (2025) watch online",
      "apple cider vinegar s01 (2025) watch ",
      "apple cider vinegar s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-06",
    director: "Samantha Strauss",
    featured: false,
  },
  {
    id: "T10",
    slug: "amandaland-s01",
    title: "Amandaland S01",
    description:
      "Amanda, a divorced mother, relocates with her teenagers to South Harlesden. She faces modern parenting issues like teenage rebellion and environmental concerns, while her mother's loneliness adds chaos.",
    thumbnailUrl:
      "https://streamcoimg-a.akamaihd.net/000/153/075/153075-Banner-L2-82d05134ca03e394552ee213bb386d4b.jpg",
    videoUrl:
      "https://short.icu/6_yoAA4pk?thumbnail=https://streamcoimg-a.akamaihd.net/000/153/075/153075-Banner-L2-82d05134ca03e394552ee213bb386d4b.jpg",
    duration: 10320,
    views: 370000,
    category: "Tvshow",
    tags: [
      "amandaland s01 (2025)",
      "amandaland s01 (2025) watch online",
      "amandaland s01 (2025) watch ",
      "amandaland s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Alyssa McClelland, Simon Bird",
    featured: false,
  },
  {
    id: "T11",
    slug: "miss-austen-s01",
    title: "Miss Austen S01",
    description:
      "It follows the lives of Jane Austen and Cassandra, her sister.",
    thumbnailUrl:
      "https://resizing.flixster.com/UZ9qkVXWH93exc270h68TLtq1x8=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29143494_b_h10_aa.jpg",
    videoUrl:
      "https://short.icu/ERw1MGmI6?thumbnail=https://resizing.flixster.com/UZ9qkVXWH93exc270h68TLtq1x8=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29143494_b_h10_aa.jpg",
    duration: 12660,
    views: 570000,
    category: "Tvshow",
    tags: [
      "miss austen s01 (2025)",
      "miss austen s01 (2025) watch online",
      "miss austen s01 (2025) watch ",
      "miss austen s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-08",
    director: "Aisling Walsh",
    featured: false,
  },
  {
    id: "T12",
    slug: "optics-s01",
    title: "Optics S01",
    description:
      "Two young women, unexpectedly promoted, face crises at their PR firm. Managing celebrities and corporate scandals, they uncover a potential firm scandal and suspect sabotage.",
    thumbnailUrl:
      "https://cdn.iview.abc.net.au/thumbs/i/X0_67566b108039f_3600.jpg",
    videoUrl:
      "https://short.icu/KHda7icmV?thumbnail=https://cdn.iview.abc.net.au/thumbs/i/X0_67566b108039f_3600.jpg",
    duration: 10380,
    views: 470000,
    category: "Tvshow",
    tags: [
      "optics s01 (2025)",
      "optics s01 (2025) watch online",
      "optics s01 (2025) watch ",
      "optics s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-29",
    director: "Max Miller",
    featured: false,
  },
  {
    id: "T13",
    slug: "an-t-eilean-s01",
    title: "An t-Eilean S01",
    description:
      "Officer Kat Crichton returns to her island home to investigate a case involving a wealthy tycoon.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/xxTfMsPfr9M/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/nK2K_yKAl?thumbnail=https://i.ytimg.com/vi/xxTfMsPfr9M/maxresdefault.jpg",
    duration: 11880,
    views: 370000,
    category: "Tvshow",
    tags: [
      "an t eilean s01 (2025)",
      "an t eilean s01 (2025) watch online",
      "an t eilean s01 (2025) watch ",
      "an t eilean s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-14",
    director: "Tom Sullivan",
    featured: false,
  },
  {
    id: "T14",
    slug: "brian-and-maggie-s01",
    title: "Brian and Maggie S01",
    description:
      "Brian and Maggie revisits the infamous 1989 television interview between former Prime Minister Margaret Thatcher and journalist Brian Walden, which marked the end of their friendship and catalysed Thatcher's resignation.",
    thumbnailUrl:
      "https://cdn.mos.cms.futurecdn.net/SDZFiMD9SX6CFfpDTjfJZn.jpg",
    videoUrl:
      "https://short.icu/_HOziCi4B?thumbnail=https://dvd-fever.co.uk/dvd-fever/wp-content/uploads/2025/01/brian-and-maggie.jpg",
    duration: 5520,
    views: 390000,
    category: "Tvshow",
    tags: [
      "brian and maggie s01 (2025)",
      "brian and maggie s01 (2025) watch online",
      "brian and maggie s01 (2025) watch ",
      "brian and maggie s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-29",
    director: "Stephen Frears",
    featured: false,
  },
  {
    id: "T15",
    slug: "playing-nice-s01",
    title: "Playing Nice S01",
    description:
      "Two couples discover their toddlers were switched at birth in a hospital mix-up and face the horrifying dilemma of keeping the sons they have raised and loved, or reclaiming their biological child.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/8343630afa4e00ea6178e9369927146bc36d7bad7fda5300405424cb968324ef.jpg",
    videoUrl:
      "https://short.icu/G4BEjJnlh?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/8343630afa4e00ea6178e9369927146bc36d7bad7fda5300405424cb968324ef.jpg",
    duration: 11460,
    views: 590000,
    category: "Tvshow",
    tags: [
      "playing nice s01 (2025)",
      "playing nice s01 (2025) watch online",
      "playing nice s01 (2025) watch ",
      "playing nice s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-05",
    director: "Kate Hewitt",
    featured: false,
  },
  {
    id: "T16",
    slug: "the-lost-women-spies-s01",
    title: "The Lost Women Spies S01",
    description:
      "Vera Atkins' files were kept sealed until after she died, but the story of the female spies and the spy-mistress who led them, which has remained secret for over fifty years, can now be revealed.",
    thumbnailUrl:
      "https://historyuk.s3.eu-west-2.amazonaws.com/s3fs-public/styles/768x432/public/2025-01/the_lost_women_spies-min_0.jpg?VersionId=qOS7yYoLD60gdQC0t_bLI5rPnEqEnYdC&itok=RBKOOiLm",
    videoUrl:
      "https://short.icu/iDLx08s1s?thumbnail=https://historyuk.s3.eu-west-2.amazonaws.com/s3fs-public/styles/768x432/public/2025-01/the_lost_women_spies-min_0.jpg?VersionId=qOS7yYoLD60gdQC0t_bLI5rPnEqEnYdC&itok=RBKOOiLm",
    duration: 17280,
    views: 690000,
    category: "Tvshow",
    tags: [
      "the lost women spies s01 (2025)",
      "the lost women spies s01 (2025) watch online",
      "the lost women spies s01 (2025) watch ",
      "the lost women spies s01 (2025) streaming ",
    ],
    releaseDate: "2024-01-15",
    director: "Patrick Dickinson, Justin Rickett",
    featured: false,
  },
  {
    id: "T17",
    slug: "the-crow-girl-s01",
    title: "The Crow Girl S01",
    description:
      "DCI Jeanette Kilburn and eminent psychotherapist Dr. Sophia Craven join forces to hunt the killer of young men. The investigation takes Jeanette and Sophia into a dangerous world of historic abuse and murder.",
    thumbnailUrl:
      "https://resizing.flixster.com/4zrnTdQ1WT-8P_1PsFAj_Vfa_zI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29215219_b_h9_ac.jpg",
    videoUrl:
      "https://short.icu/pfLMt5f_E?thumbnail=https://images.entertainment.ie/media/qNvL8eup1eTFeKXEG402mjxNAzU.jpg?w=1280&h=768&q=low",
    duration: 17640,
    views: 990000,
    category: "Tvshow",
    tags: [
      "the crow girl s01 (2025)",
      "the crow girl s01 (2025) watch online",
      "the crow girl s01 (2025) watch ",
      "the crow girl s01 (2025) streaming ",
    ],
    releaseDate: "2024-01-15",
    director: "Charles Martin, Rebecca Rycroft",
    featured: false,
  },
  {
    id: "T18",
    slug: "lockerbie-a-search-for-truth-s01",
    title: "Lockerbie A Search For Truth S01",
    description:
      "Pan Am Flight 103 explodes over Lockerbie 38 minutes after takeoff on Dec. 21, 1988, killing 259 on board and 11 on ground. Dr. Jim Swire loses daughter Flora and seeks justice with wife Jane.",
    thumbnailUrl:
      "https://www.peacocktv.com/dam/growth/assets/Originals/lockerbie/updated-trailer.jpg",
    videoUrl:
      "https://short.icu/EcTVyNZbF?thumbnail=https://www.peacocktv.com/dam/growth/assets/Originals/lockerbie/updated-trailer.jpg",
    duration: 16320,
    views: 690000,
    category: "Tvshow",
    tags: [
      "lockerbie a search for truth s01 (2025)",
      "lockerbie a search for truth s01 (2025) watch online",
      "lockerbie a search for truth s01 (2025) watch ",
      "lockerbie a search for truth s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-02",
    director: "Otto Bathurst, Jim Loach",
    featured: false,
  },
  {
    id: "T19",
    slug: "griha-laxmi-s01",
    title: "Griha Laxmi S01",
    description:
      "Laxmi, a housewife in Betalgadh, stumbles upon weed during a police chase and starts selling it to save her family, navigating danger, secrets, and morality to become Betalgadh's queen of weed.",
    thumbnailUrl:
      "https://akamaividz2.zee5.com/image/upload/w_1755,h_987,c_scale,f_webp,q_auto:eco/resources/0-6-4z5685473/list/1920x1080list69578814669f43ff84719ab86014cab1.jpg",
    videoUrl:
      "https://short.icu/yvrw229-6?thumbnail=https://akamaividz2.zee5.com/image/upload/w_1755,h_987,c_scale,f_webp,q_auto:eco/resources/0-6-4z5685473/list/1920x1080list69578814669f43ff84719ab86014cab1.jpg",
    duration: 13260,
    views: 690000,
    category: "Tvshow",
    tags: [
      "griha laxmi s01 (2025)",
      "griha laxmi s01 (2025) watch online",
      "griha laxmi s01 (2025) watch ",
      "griha laxmi s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-16",
    director: "Rumaan Kidwai",
    featured: false,
  },
  {
    id: "T20",
    slug: "kobali-s01",
    title: "Kobali S01",
    description:
      "Two families become entangled in revenge, greed, and payback. Rising tensions unearth buried secrets that impact multiple lives.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BOTk5NWU5MjEtYzNlOC00ZGNiLWJmNGYtZjFkNjhlYzFmZWQzXkEyXkFqcGc@._V1_.jpg",
    videoUrl:
      "https://short.icu/G0SPpqJW6?thumbnail=https://m.media-amazon.com/images/M/MV5BOTk5NWU5MjEtYzNlOC00ZGNiLWJmNGYtZjFkNjhlYzFmZWQzXkEyXkFqcGc@._V1_.jpg",
    duration: 12840,
    views: 490000,
    category: "Tvshow",
    tags: [
      "kobali s01 (2025)",
      "kobali s01 (2025) watch online",
      "kobali s01 (2025) watch ",
      "kobali s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-16",
    director: "Revanth Levaka",
    featured: false,
  },
  {
    id: "T21",
    slug: "the-night-agent-s02",
    title: "The Night Agent S02",
    description:
      "Low-level FBI agent Peter Sutherland works in the basement of the White House manning a phone that never rings - until the night it does, propelling him into a conspiracy that leads all the way to the Oval Office.",
    thumbnailUrl:
      "https://static.toiimg.com/thumb/msid-115296752,width-400,resizemode-4/115296752.jpg",
    videoUrl:
      "https://short.icu/483PB8ZgI?thumbnail=https://static.toiimg.com/thumb/msid-115296752,width-400,resizemode-4/115296752.jpg",
    duration: 30960,
    views: 1490000,
    category: "Tvshow",
    tags: [
      "the night agent s02 (2025)",
      "the night agent s02 (2025) watch online",
      "the night agent s02 (2025) watch ",
      "the night agent s02 (2025) streaming ",
    ],
    releaseDate: "2025-01-23",
    director: "Adam Arkin, Guy Ferland, Millicent Shelton",
    featured: false,
  },
  {
    id: "T22",
    slug: "patience-s01",
    title: "Patience S01",
    description:
      "Patience catalogues evidence in the Yorkshire Police records department. A brilliant self-taught criminologist with keen crime scene instincts, her talent is spotted by Metcalf, opening new worlds for the archivist.",
    thumbnailUrl:
      "https://i1.wp.com/image.tmdb.org/t/p/w1280/gvUddLzXRbPPgrrXkNq5sJY3ynn.jpg?w=1280",
    videoUrl:
      "https://short.icu/_7OgC3doU?thumbnail=https://i1.wp.com/image.tmdb.org/t/p/w1280/gvUddLzXRbPPgrrXkNq5sJY3ynn.jpg?w=1280",
    duration: 16740,
    views: 490000,
    category: "Tvshow",
    tags: [
      "patience s01 (2025)",
      "patience s01 (2025) watch online",
      "patience s01 (2025) watch ",
      "patience s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Maarten Moerkerke",
    featured: false,
  },
  {
    id: "T23",
    slug: "american-primeval-s01",
    title: "American Primeval S01",
    description:
      "It follows the gritty and adventurous exploration of the birth of the American West, the violent collisions of cults, religion, and men and women fighting for control of the new world.",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/01/American-Primeval-2025-Netflix-Series-Review.jpg",
    videoUrl:
      "https://short.icu/EJ0OJSXd8?thumbnail=https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQf1o_hOWd9Agg5F3exbPytvB4o1cIJTntQiKRU9A8eKj5aLUCEAK7QvsfGYjRZ9kfI7HkbYVPWzTx1On2iqbI8y5ml4_N73pbWz39pp07nCGAsJICfYuqRTHltbasnINvRQUmwZIjw33K3FAvQjx.jpg?r=534",
    duration: 18120,
    views: 290000,
    category: "Tvshow",
    tags: [
      "american primeval s01 (2025)",
      "american primeval s01 (2025) watch online",
      "american primeval s01 (2025) watch ",
      "american primeval s01 (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Peter Berg",
    featured: false,
  },
  {
    id: "T24",
    slug: "missing-you-s01",
    title: "Missing You S01",
    description:
      "Detective Kat Donovan's world unravels when she finds her estranged fiancé on a dating app. Leading her to reopen her father's unsolved murder.",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2024/12/Missing-You-2025-Netflix-series-review.jpg",
    videoUrl:
      "https://short.icu/CuYT-k9_a?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2024/12/Missing-You-2025-Netflix-series-review.jpg",
    duration: 13560,
    views: 590000,
    category: "Tvshow",
    tags: [
      "missing you s01 (2025)",
      "missing you s01 (2025) watch online",
      "missing you s01 (2025) watch ",
      "missing you s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-01",
    director: "Nimer Rashed, Isher Sahota",
    featured: false,
  },
  {
    id: "T25",
    slug: "chidiya-udd-s01",
    title: "Chidiya Udd S01",
    description:
      "Chidiya Udd is a story of a 20 year old Seher from Rajasthan and is an intersection between the Mumbai underworld and the red light district. This story depicts her struggle but also her determination to play by her own rules.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/e7de982a539e4caf8eb8e95bee3285bd3f57a8e3f61bcc32f289b99e5bda39d1.jpg",
    videoUrl:
      "https://short.icu/vHTR-LyV8?thumbnail=https://timesofindia.indiatimes.com/photo/117207723.cms",
    duration: 18420,
    views: 390000,
    category: "Tvshow",
    tags: [
      "chidiya udd s01 (2025)",
      "chidiya udd s01 (2025) watch online",
      "chidiya udd s01 (2025) watch ",
      "chidiya udd s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-15",
    director: "Ravi Jadhav",
    featured: false,
  },
  {
    id: "T26",
    slug: "black-warrant-s01",
    title: "Black Warrant S01",
    description:
      "A newly appointed jailer at Tihar Prison confronts widespread corruption and injustice within its walls, forcing him to choose between maintaining the status quo or fighting for reform.",
    thumbnailUrl:
      "https://images.ottplay.com/images/media/gallery/black-warrant-teaser-out-1734598370.jpg",
    videoUrl:
      "https://short.icu/daJ2iAPuU?thumbnail=https://www.masala.com/cloud/2025/01/03/Black-Warrant.jpg",
    duration: 20040,
    views: 390000,
    category: "Tvshow",
    tags: [
      "black warrant s01 (2025)",
      "black warrant s01 (2025) watch online",
      "black warrant s01 (2025) watch ",
      "black warrant s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Vikramaditya Motwane",
    featured: false,
  },
  {
    id: "T27",
    slug: "agra-affair-s01",
    title: "Agra Affair S01",
    description:
      "Akash struggles to save his family's crumbling hotel while pursuing his dream restaurant. He falls for tour guide Tanvi, but their romance faces hurdles. Akash's path intertwines with Megha's, leading to a poignant story of love, ambition.",
    thumbnailUrl:
      "https://static.toiimg.com/photo/msid-117059097.jpeg",
    videoUrl:
      "https://short.icu/daJ2iAPuU?thumbnail=https://static.toiimg.com/photo/msid-117059097.jpeg",
    duration: 9780,
    views: 490000,
    category: "Tvshow",
    tags: [
      "agra affair s01 (2025)",
      "agra affair s01 (2025) watch online",
      "agra affair s01 (2025) watch ",
      "agra affair s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-08",
    director: "Tejasvi Kang",
    featured: false,
  },
  {
    id: "T28",
    slug: "the-secrets-of-the-shiledars-s01",
    title: "The Secrets Of The Shiledars S01",
    description:
      "A secret society unravels a hidden treasure belonging to Chhatrapati Shivaji Maharaj, with Rajeev leading the quest to protect it from falling into wrong hands, ultimately becoming the chief of the Shiledars.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/qMST9Pmyewo/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/a6gFGvNLP?thumbnail=https://i.ytimg.com/vi/qMST9Pmyewo/maxresdefault.jpg",
    duration: 13020,
    views: 690000,
    category: "Tvshow",
    tags: [
      "the secrets of the shiledars s01 (2025)",
      "the secrets of the shiledars s01 (2025) watch online",
      "the secrets of the shiledars s01 (2025) watch ",
      "the secrets of the shiledars s01 (2025) streaming ",
    ],
    releaseDate: "2025-01-31",
    director: "Aditya Sarpotdar",
    featured: false,
  },
  


  //ADULT SECTION
  {
    id: "A34",
    slug: "shudh-shakahari-2025",
    title: "Shudh Shakahari (2025)",
    description:
      "This is the story of a boy who believes that pre-marital relation or sex before marriage is not a good thing either according to the society or according to human ethics. Lucky blieves that physical relation or sexual relation should happen only after marriage. Ruchi is an educated and sophisticated and well cultured girl. For her, the idea of having sex is very clear that sex is a physical need, it is a necessity and it can happen at any time. Its not a taboo. What happens when Ruchi comes into Lucky’s life? Wil Ruchi be able to change Lucky’s mind set?",
    thumbnailUrl:
      "https://pbs.twimg.com/media/GiYLHwVbAAAHJrT?format=jpg&name=large",
    videoUrl:
      "https://short.icu/Ljy7rJhHa?thumbnail=https://pbs.twimg.com/media/GiYLHwVbAAAHJrT?format=jpg&name=large",
    duration: 4920,
    views: 53100,
    category: "Adult",
    tags: [
      "shudh shakahari (2025)",
      "shudh shakahari (2025) watch online",
      "shudh shakahari (2025) watch ",
      "shudh shakahari (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "NA",
    featured: false,
  },
  {
    id: "A33",
    slug: "lag-ja-gale-part2-2025",
    title: "Lag Ja Gale Part 2 (2025)",
    description:
      "Vijendra desperately wants a grandson but learns his son is infertile. He decides to father a child with his daughter-in-law Madhvi himself. Will she accept this outrageous proposal, and will his wish be fulfilled?",
    thumbnailUrl:
      "https://i.ytimg.com/vi/201WiuY3uiw/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/tm5PGfBJL?thumbnail=https://i.ytimg.com/vi/201WiuY3uiw/maxresdefault.jpg",
    duration: 4080,
    views: 950000,
    category: "Adult",
    tags: [
      "lag ja gale part 2 (2025)",
      "lag ja gale part 2 (2025) watch online",
      "lag ja gale part 2 (2025) watch ",
      "lag ja gale part 2 (2025) streaming ",
    ],
    releaseDate: "2025-02-21",
    director: "Fahad Kashmiri",
    featured: true,
  },
  {
    id: "A32",
    slug: "chirag-2025",
    title: "Chirag (2025)",
    description:
      "Chirag – Hulchul Web Series Genre: 18+ | Adult Release Date: 26 February 2025. Language: Hindi",
    thumbnailUrl:
      "https://happy2hub.eu/wp-content/uploads/2025/02/Chirag-an-Hulchul-Web-Series-Starring-Neelam-Bhanushali-and-Mahi-Kaur.jpg",
    videoUrl:
      "https://short.icu/ncErS4lks?thumbnail=https://uncutfun.com/wp-content/uploads/2025/02/Chirag-1-640x360.webp",
    duration: 4080,
    views: 650000,
    category: "Adult",
    tags: [
      "chirag (2025)",
      "chirag (2025) watch online",
      "chirag (2025) watch ",
      "chirag (2025) streaming ",
    ],
    releaseDate: "2025-02-26",
    director: "NA",
    featured: false,
  },
  {
    id: "A31",
    slug: "daman-2025",
    title: "Daman (2025)",
    description:
      "Watch entertainment in all Regional Languages and 10+ Genres! RioPlus has the widest range of Indian.",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1740530780/daman_on3f0v.jpg",
    videoUrl:
      "https://short.icu/CUYx0f7v1?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1740530780/daman_on3f0v.jpg",
    duration: 2100,
    views: 250000,
    category: "Adult",
    tags: [
      "daman (2025)",
      "daman (2025) watch online",
      "daman (2025) watch ",
      "daman (2025) streaming ",
    ],
    releaseDate: "2025-02-21",
    director: "NA",
    featured: false,
  },
  {
    id: "A30",
    slug: "ansh-part1-2025",
    title: "Ansh Part 1 (2025)",
    description:
      "Zamaane Ki Zid Takrayegi, Magar Humari Chaah Ko Kaise Rok Payegi? Humein Hamara Ansh Mile Har Qeemat Pe, Duniya Bhi Humse Yahi Aas Lagayegi.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/IxPtOetIiSI/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/4r_dVDYck?thumbnail=https://i.ytimg.com/vi/IxPtOetIiSI/maxresdefault.jpg",
    duration: 5880,
    views: 790000,
    category: "Adult",
    tags: [
      "ansh part 1 (2025)",
      "ansh part 1 (2025) watch online",
      "ansh part 1 (2025) watch ",
      "ansh part 1 (2025) streaming ",
    ],
    releaseDate: "2025-02-25",
    director: "Fahad Kashmiri",
    featured: false,
  },
  {
    id: "A29",
    slug: "wife-exchange-2025",
    title: "Wife Exchange (2025)",
    description:
      "A seemingly happy family is torn apart by betrayal and forbidden desires. Asha, married to Brijesh, harbors a secret affair with Ritesh, Brijesh’s younger brother and Rinki’s husband. Their deception remains hidden until one fateful day when Rinki catches them red-handed. Heartbroken and seeking justice, Rinki demands consequences, but the revelation ignites Brijesh’s fury. Consumed by rage and revenge, Brijesh makes a shocking demand—he wants to sleep with Rinki as retribution. As love, trust, and morality crumble, the family is thrust into chaos, forcing them to confront the devastating cost of betrayal.",
    thumbnailUrl:
      "https://i1.wp.com/s10.imagetwist.com/th/67733/714ctjmmpixr.jpg?w=1200&resize=1200,0&ssl=1",
    videoUrl:
      "https://short.icu/QSACmv0Wq?thumbnail=https://i1.wp.com/s10.imagetwist.com/th/67733/714ctjmmpixr.jpg?w=1200&resize=1200,0&ssl=1",
    duration: 3660,
    views: 490000,
    category: "Adult",
    tags: [
      "wife exchange (2025)",
      "wife exchange (2025) watch online",
      "wife exchange (2025) watch ",
      "wife exchange (2025) streaming ",
    ],
    releaseDate: "2025-02-14",
    director: "NA",
    featured: false,
  },
  {
    id: "A28",
    slug: "ishq-katilana-2025",
    title: "Ishq Katilana (2025)",
    description:
      "Watch the Awaited Teaser Ishq Katilana. Watch the all new series “Ishq Katilana” coming soon only on ALTT.",
    thumbnailUrl:
      "https://altbalaji-new.multitvsolution.com/obs/source/jpg/1061_67af39c25a737_854x480.jpg",
    videoUrl:
      "https://short.icu/w3JIjtmP1?thumbnail=https://altbalaji-new.multitvsolution.com/obs/source/jpg/1061_67af39c25a737_854x480.jpg",
    duration: 4920,
    views: 590000,
    category: "Adult",
    tags: [
      "ishq katilana (2025)",
      "ishq katilana (2025) watch online",
      "ishq katilana (2025) watch ",
      "ishq katilana (2025) streaming ",
    ],
    releaseDate: "2025-02-14",
    director: "Rafat Abbas Ali, Raifee",
    featured: false,
  },
  {
    id: "A27",
    slug: "lene-ke-dene-2025",
    title: "Lene Ke Dene (2025)",
    description:
      "Pradeep, unhappy with his wife, grows close to Nisha, Sumit's wife. As Nisha takes advantage, Pradeep faces a tough choice.",
    thumbnailUrl:
      "https://www.cinefry.co.in/wp-content/uploads/2025/02/Lene-Ke-Dene.jpg",
    videoUrl:
      "https://short.icu/h4VQ8s61_?thumbnail=https://www.cinefry.co.in/wp-content/uploads/2025/02/Lene-Ke-Dene.jpg",
    duration: 10800,
    views: 790000,
    category: "Adult",
    tags: [
      "lene ke dene (2025)",
      "lene ke dene (2025) watch online",
      "lene ke dene (2025) watch ",
      "lene ke dene (2025) streaming ",
    ],
    releaseDate: "2025-02-11",
    director: "Rafat Abbas Ali, Raifee",
    featured: false,
  },
  {
    id: "A26",
    slug: "swapna-sundariii-2025",
    title: "Swapna Sundariii (2025)",
    description:
      "Hiral Radadiya in Swapna Sundariii (2025). S1.E1 ∙ Swapna Sundariii S01E01. Sun, Feb 2, 2025. Add a plot. Rate. Hiral Radadiya in Swapna Sundariii (2025)",
    thumbnailUrl:
      "https://www.rioplus.in/media/posters/2025-02-0244e64ecb6862471aa62d724bb7540a9e.jpg",
    videoUrl:
      "https://short.icu/p-hbqHFPX?thumbnail=https://www.rioplus.in/media/posters/2025-02-0244e64ecb6862471aa62d724bb7540a9e.jpg",
    duration: 5640,
    views: 390000,
    category: "Adult",
    tags: [
      "swapna sundariii (2025)",
      "swapna sundariii (2025) watch online",
      "swapna sundariii (2025) watch ",
      "swapna sundariii (2025) streaming ",
    ],
    releaseDate: "2025-02-14",
    director: "NA",
    featured: false,
  },
  {
    id: "A25",
    slug: "walker-2025",
    title: "Walker (2025)",
    description:
      "Alexa, a prostitute haunted by her friend's murder, uses herself as bait to find the killer, sleeping with various men in her quest.",
    thumbnailUrl:
      "https://images.justwatch.com/backdrop/326119035/s640/walker-2025",
    videoUrl:
      "https://short.icu/dBqXw7m3v?thumbnail=https://images.justwatch.com/backdrop/326119035/s640/walker-2025",
    duration: 5100,
    views: 1000000,
    category: "Adult",
    tags: [
      "walker (2025)",
      "walker (2025) watch online",
      "walker (2025) watch ",
      "walker (2025) streaming ",
    ],
    releaseDate: "2025-02-28",
    director: "Lawrence Fajardo",
    featured: false,
  },
  {
    id: "A24",
    slug: "tokyo-nights-2025",
    title: "Tokyo Nights (2025)",
    description:
      "Newlywed couple Kara and Max are on their honeymoon when they encounter Kara's ex-boyfriend. Their honeymoon turns even spicier and toured around by Kara's ex-boyfriend.",
    thumbnailUrl:
      "https://simkl.in/fanart/17/17264507988160f787_w.jpg",
    videoUrl:
      "https://short.icu/2G3ONmNLe?thumbnail=https://simkl.in/fanart/17/17264507988160f787_w.jpg",
    duration: 5340,
    views: 950000,
    category: "Adult",
    tags: [
      "tokyo nights (2025)",
      "tokyo nights (2025) watch online",
      "tokyo nights (2025) watch ",
      "tokyo nights (2025) streaming ",
    ],
    releaseDate: "2025-02-21",
    director: "Joey Cruz Manalang",
    featured: false,
  },
  {
    id: "A23",
    slug: "online-selling-2025",
    title: "Online Selling (2025)",
    description:
      "Two women, Melissa and Osang, sell sex items on the black market with ''extra service''. Melissa's life takes a sensual turn when a past lover becomes her customer and is out to get her back.",
    thumbnailUrl:
      "https://image.tmdb.org/t/p/w1280/LbRuVNpMYYlBBzXlG7Zcd2YCyb.jpg",
    videoUrl:
      "https://short.icu/A-9V660Ye?thumbnail=https://image.tmdb.org/t/p/w1280/LbRuVNpMYYlBBzXlG7Zcd2YCyb.jpg",
    duration: 4200,
    views: 750000,
    category: "Adult",
    tags: [
      "online selling (2025)",
      "online selling (2025) watch online",
      "online selling (2025) watch ",
      "online selling (2025) streaming ",
    ],
    releaseDate: "2025-02-14",
    director: "Jacqueline R. Carlos",
    featured: false,
  },
  {
    id: "A1",
    slug: "belyas-2025",
    title: "Belyas (2025)",
    description:
      "A housewife who is tired of her controlling husband takes a different turn when two young prostitutes rent their apartment. As she befriends the two. She begins to admire the sexual freedom they have.",
    thumbnailUrl: "https://i.ytimg.com/vi/rvPT3W5sEBU/sddefault.jpg",
    videoUrl:
      "https://short.icu/SNT0oFuaz?thumbnail=https://i.ytimg.com/vi/rvPT3W5sEBU/sddefault.jpg",
    duration: 4200,
    views: 850000,
    category: "Adult",
    tags: [
      "belyas (2025)",
      "belyas (2025) watch online",
      "belyas (2025) watch ",
      "belyas (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "GB Sampedro",
    featured: false,
  },
  {
    id: "A2",
    slug: "teachers-pet-2025",
    title: "Teachers Pet (2025)",
    description:
      "Robin, a young student, is obsessed with Tanya, his teacher. He then sees Tanya kissing a female student, so he blackmails her. When Robin believes that he is in control, he learns Tanyas dark personality.",
    thumbnailUrl:
      "https://i.ibb.co.com/SwsNyh8/Teachers-Pet-2024-Filipino-Hot-Short-Film-Vivamax.jpg",
    videoUrl:
      "https://short.icu/BPzayARiDj?thumbnail=https://i.ibb.co.com/SwsNyh8/Teachers-Pet-2024-Filipino-Hot-Short-Film-Vivamax.jpg",
    duration: 3900,
    views: 850000,
    category: "Adult",
    tags: [
      "teachers pet (2025)",
      "teachers pet (2025) watch online",
      "teachers pet (2025) watch ",
      "teachers pet (2025) streaming ",
    ],
    releaseDate: "2025-01-03",
    director: "Sigrid Polon",
    featured: false,
  },
  {
    id: "A3",
    slug: "halimuyak-2025",
    title: "Halimuyak (2025)",
    description:
      "Mikee falls for a beautiful perfumer, but their romance is jeopardized when a mysterious fragrance connects their pasts. As secrets unravel, they must confront painful truths and fight to keep their newfound love alive.",
    thumbnailUrl:
      "https://simkl.in/fanart/17/1706376553a8d57816_w.jpg",
    videoUrl:
      "https://short.icu/zF-7RGENG?thumbnail=https://simkl.in/fanart/17/1706376553a8d57816_w.jpg",
    duration: 3900,
    views: 990000,
    category: "Adult",
    tags: [
      "halimuyak (2025)",
      "halimuyak (2025) watch online",
      "halimuyak (2025) watch ",
      "halimuyak (2025) streaming ",
    ],
    releaseDate: "2025-01-09",
    director: "Sigrid Polon",
    featured: false,
  },
  {
    id: "A4",
    slug: "balam-pichkari-part1-2025",
    title: "Balam Pichkari Part 1 (2025)",
    description:
      "Ramu marries into a village of only women, where every woman desires him except his wife. Can he reunite with Jumki?",
    thumbnailUrl:
      "https://m3.imgdf.xyz/mm/Balam.Pichkari.Part01E01_Ullu.png",
    videoUrl:
      "https://short.icu/0og7-qZHT?thumbnail=https://m3.imgdf.xyz/mm/Balam.Pichkari.Part01E01_Ullu.png",
    duration: 5400,
    views: 350000,
    category: "Adult",
    tags: [
      "balam pichkari part1 (2025)",
      "balam pichkari part1 (2025) watch online",
      "balam pichkari part1 (2025) watch ",
      "balam pichkari part1 (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "Sigrid Polon",
    featured: false,
  },
  {
    id: "A5",
    slug: "dekho-magar-pyar-se-part1-2025",
    title: "Dekho Magar Pyar Se Part 1 (2025)",
    description:
      "Prashant's peculiar condition draws Bhushan and Snehlata into his life. As secrets and betrayals surface, a gripping tale of trust, manipulation, and revenge takes an unexpected turn.",
    thumbnailUrl:
      "https://imb.rest/wp-content/uploads/2025/01/photo_2025-01-27_23-18-06.jpg",
    videoUrl:
      "https://short.icu/8tMPjYhpPJ?thumbnail=https://imb.rest/wp-content/uploads/2025/01/photo_2025-01-27_23-18-06.jpg",
    duration: 6180,
    views: 950000,
    category: "Adult",
    tags: [
      "dekho magar pyar se part1 (2025)",
      "dekho magar pyar se part1 (2025) watch online",
      "dekho magar pyar se part1 (2025) watch ",
      "dekho magar pyar se part1 (2025) streaming ",
    ],
    releaseDate: "2025-01-27",
    director: "Rafat Abbas Ali, Raifee",
    featured: false,
  },
  {
    id: "A6",
    slug: "utha-le-jaunga-2025",
    title: "Utha Le Jaunga (2025)",
    description:
      "Balwant and Saket bring their sister's husband, Nitin, home to fulfill ambitions, but unforeseen events turn everything upside down.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/ziM2PLaej5o/sddefault.jpg",
    videoUrl:
      "https://short.icu/Vp3U30R1M?thumbnail=https://i.ytimg.com/vi/ziM2PLaej5o/sddefault.jpg",
    duration: 4740,
    views: 130000,
    category: "Adult",
    tags: [
      "utha le jaunga (2025)",
      "utha le jaunga (2025) watch online",
      "utha le jaunga (2025) watch ",
      "utha le jaunga (2025) streaming ",
    ],
    releaseDate: "2025-01-15",
    director: "Rafat Abbas Ali, Raifee",
    featured: false,
  },
  {
    id: "A7",
    slug: "rakhwala-2025",
    title: "Rakhwala (2025)",
    description:
      "Rakhwala: With Janab Shah, Kamal Krishna Poudyal, Priyanka Chaurasia, Gaurav Sinha.",
    thumbnailUrl:
      "https://www.indianporn365.net/wp-content/uploads/2025/01/Rakhwala-2025-Hulchul-Hindi-Hot-Web-Series-Episode-6.jpg",
    videoUrl:
      "https://short.icu/8At1zNiNU?thumbnail=https://www.indianporn365.net/wp-content/uploads/2025/01/Rakhwala-2025-Hulchul-Hindi-Hot-Web-Series-Episode-6.jpg",
    duration: 6240,
    views: 1250000,
    category: "Adult",
    tags: [
      "rakhwala (2025)",
      "rakhwala (2025) watch online",
      "rakhwala (2025) watch ",
      "rakhwala (2025) streaming ",
    ],
    releaseDate: "2025-01-22",
    director: "NA",
    featured: false,
  },
  {
    id: "A8",
    slug: "badmash-2025",
    title: "Badmash (2025)",
    description:
      "A man who was trying to cross the river of life in 2 boats, would his boat cross?",
    thumbnailUrl:
      "https://www.mastram.app/media/posters/2025-01-0374c970efb0c842c6aad2a46026ad78cf.jpg",
    videoUrl:
      "https://short.icu/jJ7Skxhxl?thumbnail=https://www.mastram.app/media/posters/2025-01-0374c970efb0c842c6aad2a46026ad78cf.jpg",
    duration: 6240,
    views: 1250000,
    category: "Adult",
    tags: [
      "badmash (2025)",
      "badmash (2025) watch online",
      "badmash (2025) watch ",
      "badmash (2025) streaming ",
    ],
    releaseDate: "2025-01-22",
    director: "NA",
    featured: false,
  },
  {
    id: "A9",
    slug: "yaar-gaddar-2025",
    title: "Yaar Gaddar (2025)",
    description:
      "Details · Release date · Jan 18, 2024 (India) · Country of origin. India · Official site. Yaar Pyaar Gaddar · Language. Hindi · Production company · Bigshots",
    thumbnailUrl:
      "https://pbs.twimg.com/media/Gi9hUXba4AELDUh.jpg",
    videoUrl:
      "https://short.icu/7XJglZgBa?thumbnail=https://pbs.twimg.com/media/Gi9hUXba4AELDUh.jpg",
    duration: 1800,
    views: 250000,
    category: "Adult",
    tags: [
      "yaar gaddar (2025)",
      "yaar gaddar (2025) watch online",
      "yaar gaddar (2025) watch ",
      "yaar gaddar (2025) streaming ",
    ],
    releaseDate: "2025-01-18",
    director: "NA",
    featured: false,
  },
  {
    id: "A10",
    slug: "pati-patni-aur-woh-dukaan-2025",
    title: "Pati Patni aur Woh Dukaan (2025)",
    description:
      "Raju, a general store owner makes love to women in his society because their husbands don’t get intimate with them. Someone blackmails Raju which makes him extort money from these women itself. Husbands on the other hand wonder why they can’t make their wive happy.",
    thumbnailUrl:
      "https://altbalaji-new.multitvsolution.com/obs/source/jpg/1061_678a3a7d7d025_854x480.jpg",
    videoUrl:
      "https://short.icu/B8-Vo78j4?thumbnail=https://altbalaji-new.multitvsolution.com/obs/source/jpg/1061_678a3a7d7d025_854x480.jpg",
    duration: 5700,
    views: 1550000,
    category: "Adult",
    tags: [
      "pati patni aur woh dukaan (2025)",
      "pati patni aur woh dukaan (2025) watch online",
      "pati patni aur woh dukaan (2025) watch ",
      "pati patni aur woh dukaan (2025) streaming ",
    ],
    releaseDate: "2025-01-17",
    director: "Saurabh Bhardwaj",
    featured: false,
  },
  {
    id: "A11",
    slug: "kamya-ki-kamna-2025",
    title: "Kamya Ki Kamna (2025)",
    description:
      "Sharad, filled with suspicion, confides in Arjun about his doubts regarding Kamya’s loyalty. Arjun tries to calm him, but Sharad is resolute, determined to uncover the truth. He believes Kamya is hiding something and is ready to confront whoever is involved. With unwavering resolve, Sharad vows to catch the person and expose the affair",
    thumbnailUrl:
      "https://altbalaji-new.multitvsolution.com/obs/source/jpg/1061_677fea3c76699_854x480.jpg",
    videoUrl:
      "https://short.icu/c5z9FLlZh?thumbnail=https://altbalaji-new.multitvsolution.com/obs/source/jpg/1061_677fea3c76699_854x480.jpg",
    duration: 5220,
    views: 550000,
    category: "Adult",
    tags: [
      "kamya ki kamna (2025)",
      "kamya ki kamna (2025) watch online",
      "kamya ki kamna (2025) watch ",
      "kamya ki kamna (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Rafat Abbas Ali, Varsha Hegde",
    featured: false,
  },
  {
    id: "A12",
    slug: "las-ilusyunadas-2025",
    title: "Las Ilusyunadas (2025)",
    description:
      "Emma and Sandra, widowed and haunted by grief, form an unexpected bond that transcends pain. As their relationship deepens amidst memories of their spouses, they question the line between illusion and reality.",
    thumbnailUrl:
      "https://images.justwatch.com/backdrop/323430620/s640/las-ilusyunadas",
    videoUrl:
      "https://short.icu/xYSN2orsb?thumbnail=https://images.justwatch.com/backdrop/323430620/s640/las-ilusyunadas",
    duration: 5400,
    views: 990000,
    category: "Adult",
    tags: [
      "las ilusyunadas (2025)",
      "las ilusyunadas (2025) watch online",
      "las ilusyunadas (2025) watch ",
      "las ilusyunadas (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Roman Perez Jr.",
    featured: false,
  },
  {
    id: "A13",
    slug: "the-pursuit-of-lust-2025",
    title: "The Pursuit of Lust (2025)",
    description:
      "An unsatisfied housewife's longing for pleasure, her passionless husband fails to provide. That is until her spouse's foreigner business client who stays with them for few days, eventually gives in to her desires.",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMsLsM8fYbCexBBgN_4YnZHINuZoXsLJv3g&s",
    videoUrl:
      "https://short.icu/n-wx9Epy4?thumbnail=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMsLsM8fYbCexBBgN_4YnZHINuZoXsLJv3g&s",
    duration: 2280,
    views: 1300000,
    category: "Adult",
    tags: [
      "the pursuit of lust (2025)",
      "the pursuit of lust (2025) watch online",
      "the pursuit of lust (2025) watch ",
      "the pursuit of lust (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Batdelger Byambasuren",
    featured: false,
  },
  {
    id: "A14",
    slug: "wow-mani-2025",
    title: "Wow Mani (2025)",
    description:
      "An unsatisfied housewife's longing for pleasure, her passionless husband fails to provide. That is until her spouse's foreigner business client who stays with them for few days, eventually gives in to her desires.",
    thumbnailUrl:
      "https://i.ibb.co/CBYGQ4c/Wow-Mani-2025-S01-E01-Tagalong-VMAX-WEB-DL-H264-AAC-1080p-720p-Downloa.jpg",
    videoUrl:
      "https://short.icu/PI6VBfN32?thumbnail=https://i.ibb.co/CBYGQ4c/Wow-Mani-2025-S01-E01-Tagalong-VMAX-WEB-DL-H264-AAC-1080p-720p-Downloa.jpg",
    duration: 2460,
    views: 1300000,
    category: "Adult",
    tags: [
      "wow mani (2025)",
      "wow mani (2025) watch online",
      "wow mani (2025) watch ",
      "wow mani (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Dominador Isip III",
    featured: false,
  },
  {
    id: "A15",
    slug: "sponsor-2025",
    title: "Sponsor (2025)",
    description:
      "Sisters Jasmine and Maya struggle financially. Jasmine becomes a sugar baby for a businessman to help her family, but the arrangement threatens both sisters'",
    thumbnailUrl:
      "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FzOSZpcgIdAjWZFfUQv4q5SK8ggh.jpg",
    videoUrl:
      "https://short.icu/RbGoUnb0U?thumbnail=https://img.youtube.com/vi/agkJRuuRLCw/mqdefault.jpg",
    duration: 7080,
    views: 400000,
    category: "Adult",
    tags: [
      "sponsor (2025)",
      "sponsor (2025) watch online",
      "sponsor (2025) watch ",
      "sponsor (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Albert Langitan",
    featured: false,
  },
  {
    id: "A16",
    slug: "mere-angane-mein-2025",
    title: "Mere Angane Mein (2025)",
    description:
      "Sisters Jasmine and Maya struggle financially. Jasmine becomes a sugar baby for a businessman to help her family, but the arrangement threatens both sisters'",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFiu-rwYn1lf0WeXtyEtE1gBsKVUsQBW5tA&s",
    videoUrl:
      "https://short.icu/u50OSSiZf?thumbnail=https://i.ytimg.com/vi/WmOTlcv-LFo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVw6PFlhmfL3OwB0TUATN7Y8Ew3A",
    duration: 6360,
    views: 1400000,
    category: "Adult",
    tags: [
      "mere angane mein (2025)",
      "mere angane mein (2025) watch online",
      "mere angane mein (2025) watch ",
      "mere angane mein (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Rafat Abbas Ali, Raifee",
    featured: false,
  },
  {
    id: "A17",
    slug: "jija-sali-2025",
    title: "Jija Salii (2025)",
    description:
      "Sisters Jasmine and Maya struggle financially. Jasmine becomes a sugar baby for a businessman to help her family, but the arrangement threatens both sisters'",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaR5i46Hxoih1VyxarOriSLhzazbBXwcokg&s",
    videoUrl:
      "https://short.icu/UfxvVQDjp?thumbnail=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaR5i46Hxoih1VyxarOriSLhzazbBXwcokg&s",
    duration: 1440,
    views: 1400000,
    category: "Adult",
    tags: [
      "jija sali (2025)",
      "jija sali (2025) watch online",
      "jija sali (2025) watch ",
      "jija sali (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "NA",
    featured: false,
  },
  {
    id: "A18",
    slug: "chup-chup-ke-2025",
    title: "Chup Chup Ke (2025)",
    description:
      "Details · Release date · January 1, 2025 (India) · Country of origin. India · Official site. Chup Chup Ke · Language. Hindi · Production company · Hulchul Original.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/hdbx-OnRRc0/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/OQvuUKMVr?thumbnail=https://i.ytimg.com/vi/hdbx-OnRRc0/maxresdefault.jpg",
    duration: 5820,
    views: 700000,
    category: "Adult",
    tags: [
      "chup chup ke (2025)",
      "chup chup ke (2025) watch online",
      "chup chup ke (2025) watch ",
      "chup chup ke (2025) streaming ",
    ],
    releaseDate: "2025-02-04",
    director: "NA",
    featured: false,
  },
  {
    id: "A19",
    slug: "hiram-na-sandali-2025",
    title: "Hiram Na Sandali (2025)",
    description:
      "Details · Release date · January 1, 2025 (India) · Country of origin. India · Official site. Chup Chup Ke · Language. Hindi · Production company · Hulchul Original.",
    thumbnailUrl:
      "https://simkl.in/fanart/17/17101059cf6c2ce9cd_w.jpg",
    videoUrl:
      "https://short.icu/9S2GH7NMs?thumbnail=https://simkl.in/fanart/17/17101059cf6c2ce9cd_w.jpg",
    duration: 4200,
    views: 850000,
    category: "Adult",
    tags: [
      "hiram na sandali (2025)",
      "hiram na sandali (2025) watch online",
      "hiram na sandali (2025) watch ",
      "hiram na sandali (2025) streaming ",
    ],
    releaseDate: "2025-01-20",
    director: "GB Sampedro",
    featured: false,
  },
  {
    id: "A20",
    slug: "murder-2025",
    title: "Murder (2025)",
    description:
      "Murder – 2025 – Hindi Hot Web Series – TriFlicks. Latest videos Most viewed videos Longest videos Popular videos Random videos.",
    thumbnailUrl:
      "https://m3.imgdf.xyz/mm/Murder.E04.Triflicks.jpg",
    videoUrl:
      "https://short.icu/X3t2iyboW?thumbnail=https://m3.imgdf.xyz/mm/Murder.E04.Triflicks.jpg",
    duration: 7560,
    views: 250000,
    category: "Adult",
    tags: [
      "murder (2025)",
      "murder (2025) watch online",
      "murder (2025) watch ",
      "murder (2025) streaming ",
    ],
    releaseDate: "2025-01-20",
    director: "NA",
    featured: false,
  },
  {
    id: "A21",
    slug: "virgin-nimmi-2025",
    title: "Virgin Nimmi (2025)",
    description:
      "Virgin Nimmi 2025 Jugnu Originals Hot Web Series Starring Pihu Singh and Pooja Poddar. Virgin Nimmi Season 1 [Jugnu] Web Series",
    thumbnailUrl:
      "https://i.ytimg.com/vi/wVjarK2zCpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnJzCva-5Lr5-tQkibXx8IyK3Vnw",
    videoUrl:
      "https://short.icu/jsdHrnzrF?thumbnail=https://i.ytimg.com/vi/wVjarK2zCpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnJzCva-5Lr5-tQkibXx8IyK3Vnw",
    duration: 6000,
    views: 350000,
    category: "Adult",
    tags: [
      "virgin nimmi (2025)",
      "virgin nimmi (2025) watch online",
      "virgin nimmi (2025) watch ",
      "virgin nimmi (2025) streaming ",
    ],
    releaseDate: "2025-01-24",
    director: "NA",
    featured: false,
  },
  {
    id: "A22",
    slug: "shanno-chudail-2025",
    title: "Shanno Chudail (2025)",
    description:
      "Virgin Nimmi 2025 Jugnu Originals Hot Web Series Starring Pihu Singh and Pooja Poddar. Virgin Nimmi Season 1 [Jugnu] Web Series",
    thumbnailUrl:
      "https://s10.imagetwist.com/th/67311/wwj527nphdvg.jpg",
    videoUrl:
      "https://short.icu/N2X9Bp5eS?thumbnail=https://s10.imagetwist.com/th/67311/wwj527nphdvg.jpg",
    duration: 12180,
    views: 1350000,
    category: "Adult",
    tags: [
      "shanno chudail (2025)",
      "shanno chudail (2025) watch online",
      "shanno chudail (2025) watch ",
      "shanno chudail (2025) streaming ",
    ],
    releaseDate: "2025-01-24",
    director: "NA",
    featured: false,
  },

  //Hindi SECTION
  {
    id: "H26",
    slug: "squad-36-hindi-dubbed-2025",
    title: "स्क्वाड 36 हिंदी (2025)",
    description:
      "अपराध निरोधक ब्रिगेड में स्थानांतरित एक वरिष्ठ अधिकारी दो पूर्व सहकर्मियों की मौत और एक अन्य के लापता होने की जांच करता है, तथा पुलिस बल के भीतर चल रहे कटु विवाद को उजागर करता है।",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/02/Squad-36-Netflix-2025-Thriller-Review.jpg",
    videoUrl:
      "https://short.icu/ssO-uEXZH?thumbnail=https://images.justwatch.com/backdrop/324851006/s640/squad-36",
    duration: 7440,
    views: 155000,
    category: "Hindi-Dubbed",
    tags: [
      "स्क्वाड 36 हिंदी (2025)",
      "स्क्वाड 36 हिंदी (2025) ऑनलाइन देखें",
      "स्क्वाड 36 हिंदी (2025) देखें",
      "स्क्वाड 36 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-27",
    director: "ओलिवियर मार्शल",
    featured: false,
  },
  {
    id: "H25",
    slug: "reacher-s03-hindi-dubbed-2025",
    title: "रीचर सीजन 03 हिंदी (2025)",
    description:
      "ली चाइल्ड के उपन्यास 'पर्सुएडर' पर आधारित, रीचर एक विशाल आपराधिक उद्यम के अंधेरे केंद्र में घुस जाता है, जब वह एक अंडरकवर डीईए मुखबिर को बचाने की कोशिश करता है, जिसका समय खत्म हो रहा है। वहाँ उसे रहस्य और हिंसा की दुनिया मिलती है - और अपने अतीत से कुछ अधूरे कामों का सामना करना पड़ता है।",
    thumbnailUrl:
      "https://www.tvguide.com/a/img/resize/c6d4c07def64a8638a23117ab4156cc39ad66e73/hub/2024/12/06/f8755a4f-451b-4ca1-b57b-e90c5229703d/reachie.jpg?auto=webp&width=1092",
    videoUrl:
      "https://short.icu/eTHerEjO3?thumbnail=https://i.gadgets360cdn.com/large/image_3_F_1736408509883.jpg",
    duration: 12180,
    views: 1125000,
    category: "Hindi-Dubbed",
    tags: [
      "रीचर सीजन 03 हिंदी (2025)",
      "रीचर सीजन 03 हिंदी (2025) ऑनलाइन देखें",
      "रीचर सीजन 03 हिंदी (2025) देखें",
      "रीचर सीजन 03 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-27",
    director: "सैम हिल",
    featured: false,
  },
  {
    id: "H24",
    slug: "running-point-s01-hindi-dubbed-2025",
    title: "रनिंग पॉइंट सीजन 01 हिंदी (2025)",
    description:
      "इस्ला गॉर्डन, जिसे पूरी जिंदगी नजरअंदाज किया गया, को LA वेव्स बास्केटबॉल टीम का अध्यक्ष नियुक्त किया गया, जो एक पारिवारिक व्यवसाय है। उसका लक्ष्य यह साबित करना है कि संदेह के बावजूद वह सही विकल्प थी।",
    thumbnailUrl:
      "https://files.spoilertv.com/headers/Running-Point.jpg",
    videoUrl:
      "https://short.icu/iBsDl6nek?thumbnail=https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUl42L3rmzugRiNg_zNtjDp9mrpLOEkEsGScVYqpSjcQj69m6P9i6GlgAOK9ykBx8fuCfHROODHN7k6resZ7iuc61m7LpyTRVaKX.jpg?r=c68",
    duration: 5640,
    views: 125000,
    category: "Hindi-Dubbed",
    tags: [
      "रनिंग पॉइंट सीजन 01 हिंदी (2025)",
      "रनिंग पॉइंट सीजन 01 हिंदी (2025) ऑनलाइन देखें",
      "रनिंग पॉइंट सीजन 01 हिंदी (2025) देखें",
      "रनिंग पॉइंट सीजन 01 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-27",
    director: "माइकल वीवर",
    featured: false,
  },
  {
    id: "H23",
    slug: "the-wrong-track-hindi-dubbed-2025",
    title: "द रॉन्ग ट्रैक हिंदी (2025)",
    description:
      "एक संघर्षरत तलाकशुदा माँ को अपने भाई के घर पर रहने के लिए स्की करना सीखना होगा और 54 किलोमीटर की कठिन दौड़ पूरी करनी होगी। जैसे-जैसे वह असंभव चुनौती के लिए प्रशिक्षण लेती है, उसे आंतरिक शक्ति का पता चलता है जिसके बारे में उसे कभी पता नहीं था।",
    thumbnailUrl:
      "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcZkcFDn9vRvm4YycBXL2vNqHa9mikq3Qa_EsVZOaOfgss-NFpVNijrT6ylRlgaaX6dpRNNAsriqE4q77TSzliGktw-HOQ3NpYIXOBIBTJsZMqytMBumwrxqgo1kkGEhgqDV.jpg?r=dbe",
    videoUrl:
      "https://short.icu/iA2q80RWb?thumbnail=https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVzd8Ohn4-pCqHnXEbIOET-BFCXz4jwGVQYCDvm0WcgSKsmERsYqaP8VJePAgqroGE3Wv3wa_xyyxCcxwZVajVbMQSzqhvYiWfY-.jpg?r=475",
    duration: 5640,
    views: 125000,
    category: "Hindi-Dubbed",
    tags: [
      "द रॉन्ग ट्रैक हिंदी (2025)",
      "द रॉन्ग ट्रैक हिंदी (2025) ऑनलाइन देखें",
      "द रॉन्ग ट्रैक हिंदी (2025) देखें",
      "द रॉन्ग ट्रैक हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-27",
    director: "हॉल्वर विट्ज़ो",
    featured: false,
  },
  {
    id: "H22",
    slug: "sosyal-climbers-hindi-dubbed-2025",
    title: "सोस्याल क्लाइम्बर्स हिंदी (2025)",
    description:
      "एक घोटाले के जाल में फंसकर भारी कर्ज में फंसकर, दो महत्वाकांक्षी सोशलाइट, अमीर लोगों से उनका पैसा ठगने के लिए फर्जी पहचान पत्र बनाते हैं।",
    thumbnailUrl:
      "https://cdn.technadu.com/wp-content/uploads/2025/02/Sosyal-Climbers.jpg",
    videoUrl:
      "https://short.icu/cmSWtRA8O?thumbnail=https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTsD5dzRWGNhVxRAqABThVvi7CXBZMSYg4ERjKNk1TBPbIeVh0l_hI9-NSJ6XBO_d_MFexsWM6AxKiowKwd8P87AoUBSbET8voP8.jpg?r=c27",
    duration: 6180,
    views: 195000,
    category: "Hindi-Dubbed",
    tags: [
      "सोस्याल क्लाइम्बर्स हिंदी (2025)",
      "सोस्याल क्लाइम्बर्स हिंदी (2025) ऑनलाइन देखें",
      "सोस्याल क्लाइम्बर्स हिंदी (2025) देखें",
      "सोस्याल क्लाइम्बर्स हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-27",
    director: "जेसन पॉल लक्ष्मण",
    featured: false,
  },
  {
    id: "H21",
    slug: "demon-city-hindi-dubbed-2025",
    title: "डेमन सिटी हिंदी (2025)",
    description:
      "अपने परिवार की हत्या के लिए दोषी ठहराए जाने और मृत समझकर छोड़ दिए जाने के बाद, एक पूर्व हत्यारा अपने शहर पर कब्जा कर चुके नकाबपोश 'राक्षसों' से बदला लेने के लिए कुछ भी करने को तैयार है।",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/02/Demon-City-2025-Netflix-Review.jpg",
    videoUrl:
      "https://short.icu/WtV3XGR_m?thumbnail=https://www.chennaitop10.com/wp-content/uploads/2025/02/Demon-City.jpg",
    duration: 6360,
    views: 195000,
    category: "Hindi-Dubbed",
    tags: [
      "डेमन सिटी हिंदी (2025)",
      "डेमन सिटी हिंदी (2025) ऑनलाइन देखें",
      "डेमन सिटी हिंदी (2025) देखें",
      "डेमन सिटी हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-27",
    director: "सेजी तनाका",
    featured: true,
  },
  {
    id: "H20",
    slug: "the-hunting-party-s01-hindi-dubbed-2025",
    title: "द हंटिंग पार्टी सीजन 01 हिंदी (2025)",
    description:
      "यह फिल्म जांचकर्ताओं की एक छोटी सी टीम की कहानी है जो अब तक देखे गए सबसे खतरनाक हत्यारों का पता लगाने और उन्हें पकड़ने के लिए इकट्ठी हुई है, और वे सभी एक ऐसे शीर्ष-गुप्त जेल से भाग निकले हैं जिसका अस्तित्व ही नहीं है।",
    thumbnailUrl:
      "https://resizing.flixster.com/NTu61e7AD8gVbPdRCq1ZcYBvR4Q=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28798890_b_h9_ac.jpg",
    videoUrl:
      "https://short.icu/kjLJ3-MFT?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2025/02/The-Hunting-Party-2025-Peacock-Review-1200x900.jpg",
    duration: 10140,
    views: 75000,
    category: "Hindi-Dubbed",
    tags: [
      "द हंटिंग पार्टी सीजन 01 हिंदी (2025)",
      "द हंटिंग पार्टी सीजन 01 हिंदी (2025) ऑनलाइन देखें",
      "द हंटिंग पार्टी सीजन 01 हिंदी (2025) देखें",
      "द हंटिंग पार्टी सीजन 01 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-19",
    director: "थोर फ्रायडेन्थल, ब्लैकहॉर्स लोवे, मार्कस स्टोक्स",
    featured: false,
  },
  {
    id: "H19",
    slug: "suits-la-s01-hindi-dubbed-2025",
    title: "सूट्स LA सीजन 01 हिंदी (2025)",
    description:
      "यह न्यूयॉर्क के पूर्व अभियोजक टेड ब्लैक के नेतृत्व में एक नए समूह का अनुसरण करता है, जिन्होंने एल.ए. में एक कानूनी फर्म की स्थापना की, जो आपराधिक और मनोरंजन कानून में विशेषज्ञता रखती है।",
    thumbnailUrl:
      "https://elcomercio.pe/resizer/v2/5QFX363F5VHHZPHFWYTN77Z5XQ.jpg?auth=00939b899ab425fac1c752378f876eceed8fd27c9049917480c0e80620a6e925&width=1200&height=810&quality=90&smart=true",
    videoUrl:
      "https://short.icu/H89k-y1mE?thumbnail=https://www.hindustantimes.com/ht-img/img/2025/02/24/550x309/Suits_LA_1740400405418_1740400410107.jpg",
    duration: 2700,
    views: 155000,
    category: "Hindi-Dubbed",
    tags: [
      "सूट्स LA सीजन 01 हिंदी (2025)",
      "सूट्स LA सीजन 01 हिंदी (2025) ऑनलाइन देखें",
      "सूट्स LA सीजन 01 हिंदी (2025) देखें",
      "सूट्स LA सीजन 01 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-23",
    director: "एंटोन क्रॉपर, विक्टोरिया महोनी, क्रिस्टोफर मिसियानो",
    featured: false,
  },
  {
    id: "H18",
    slug: "my-fault-london-hindi-dubbed-2025",
    title: "माई फॉल्ट: लंदन हिंदी (2025)",
    description:
      "एक 18 वर्षीय लड़की अपनी माँ और अमीर सौतेले पिता के साथ अमेरिका से लंदन चली जाती है। वह अपने सौतेले भाई से मिलती है, और उनके प्रयासों के बावजूद उसके प्रति आकर्षण बढ़ता है। जेल से रिहा होने के बाद, उसके अलग हुए पिता को पता चलता है कि वह उससे अनजान है।",
    thumbnailUrl:
      "https://www.midstlive.com/wp-content/uploads/2025/01/my-fault-london-culpa-mia-ott-release-1.png",
    videoUrl:
      "https://short.icu/lwixaE7MM?thumbnail=https://www.midstlive.com/wp-content/uploads/2025/01/my-fault-london-culpa-mia-ott-release-1.png",
    duration: 7200,
    views: 555000,
    category: "Hindi-Dubbed",
    tags: [
      "माई फॉल्ट: लंदन हिंदी (2025)",
      "माई फॉल्ट: लंदन हिंदी (2025) ऑनलाइन देखें",
      "माई फॉल्ट: लंदन हिंदी (2025) देखें",
      "माई फॉल्ट: लंदन हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-12",
    director: "चार्लोट फास्लर, दानी गिर्डवुड",
    featured: false,
  },
  {
    id: "H17",
    slug: "honeymoon-crasher-hindi-dubbed-2025",
    title: "हनीमून क्रैशर हिंदी (2025)",
    description:
      "जब उसकी मंगेतर अपनी पूर्व पत्नी के लिए उसे छोड़ देती है, तो युवक के पास अपनी मां के साथ रोमांटिक हनीमून पर जाने के अलावा कोई विकल्प नहीं बचता।",
    thumbnailUrl:
      "https://i.ytimg.com/vi/M15wyhE9yDw/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/mKrYwky4j?thumbnail=https://i.ytimg.com/vi/M15wyhE9yDw/maxresdefault.jpg",
    duration: 5700,
    views: 356000,
    category: "Hindi-Dubbed",
    tags: [
      "हनीमून क्रैशर हिंदी (2025)",
      "हनीमून क्रैशर हिंदी (2025) ऑनलाइन देखें",
      "हनीमून क्रैशर हिंदी (2025) देखें",
      "हनीमून क्रैशर हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-12",
    director: "निकोलस कुचे",
    featured: false,
  },
  {
    id: "H16",
    slug: "den-of-thieves-2-pantera-hindi-dubbed-2025",
    title: "डेन ऑफ थीव्स 2: पैनटेरा हिंदी (2025)",
    description:
      "बिग निक यूरोप में फिर से शिकार पर है और डॉनी के करीब पहुंच रहा है, जो हीरा चोरों और कुख्यात पैंथर माफिया की विश्वासघाती दुनिया में उलझा हुआ है, क्योंकि वे दुनिया के सबसे बड़े हीरा एक्सचेंज में भारी डकैती की योजना बना रहे हैं।",
    thumbnailUrl:
      "https://img.nowrunning.com/content/movie/2025/den-o-30388/bg_den-of-thieves-2-pantera.jpg",
    videoUrl:
      "https://short.icu/5nmwZhOeU?thumbnail=https://img.nowrunning.com/content/movie/2025/den-o-30388/bg_den-of-thieves-2-pantera.jpg",
    duration: 8640,
    views: 450000,
    category: "Hindi-Dubbed",
    tags: [
      "डेन ऑफ थीव्स 2: पैनटेरा हिंदी (2025)",
      "डेन ऑफ थीव्स 2: पैनटेरा हिंदी (2025) ऑनलाइन देखें",
      "डेन ऑफ थीव्स 2: पैनटेरा हिंदी (2025) देखें",
      "डेन ऑफ थीव्स 2: पैनटेरा हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-10",
    director: "क्रिश्चियन गुडेगास्ट",
    featured: false,
  },
  {
    id: "H15",
    slug: "captain-america-brave-new-world-hindi-dubbed-2025",
    title: "कैप्टन अमेरिका: ब्रेव न्यू वर्ल्ड हिंदी (2025)",
    description:
      "सैम विल्सन, नया कैप्टन अमेरिका, स्वयं को एक अंतर्राष्ट्रीय घटना के बीच पाता है और उसे एक नापाक वैश्विक योजना के पीछे का मकसद पता लगाना है।",
    thumbnailUrl:
      "https://pacificsciencecenter.org/wp-content/uploads/2025/01/cap-america-web-1.jpg",
    videoUrl:
      "https://short.icu/WnKkJoBQ49?thumbnail=https://pacificsciencecenter.org/wp-content/uploads/2025/01/cap-america-web-1.jpg",
    duration: 7080,
    views: 1750000,
    category: "Hindi-Dubbed",
    tags: [
      "कैप्टन अमेरिका: ब्रेव न्यू वर्ल्ड हिंदी (2025)",
      "कैप्टन अमेरिका: ब्रेव न्यू वर्ल्ड हिंदी (2025) ऑनलाइन देखें",
      "कैप्टन अमेरिका: ब्रेव न्यू वर्ल्ड हिंदी (2025) देखें",
      "कैप्टन अमेरिका: ब्रेव न्यू वर्ल्ड हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-14",
    director: "जूलियस ओनाह",
    featured: false,
  },
  {
    id: "H14",
    slug: "the-pitt-s01-hindi-dubbed-2025",
    title: "द पिट सीजन 01 हिंदी (2025)",
    description:
      "पिट्सबर्ग के एक अस्पताल में स्वास्थ्य पेशेवरों के दैनिक जीवन को दर्शाया गया है, जिसमें वे व्यक्तिगत संकटों, कार्यस्थल की राजनीति और गंभीर रूप से बीमार रोगियों के उपचार के भावनात्मक तनाव से जूझते हैं, तथा उनके महान कार्य में अपेक्षित लचीलेपन को दर्शाया गया है।",
    thumbnailUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXggBVnCCQXwgkpN-hCka-l2HF48yr4CHANAS-RHb-rgasdNcIfpALknHrW8NVtMU_Eq9xmGGX3NwvXflQZzo89Tv3qsR2zB4onAQNq56qPce35NOsoasVDJbMm01FG5YHHiZkEOc2U-AXjV35iQmVT0WGc5e4lIUgrOVDUog2QHOf2_mQOg/s1600/d512b1af-a840-11ef-9d42-12722d97%20%281%29.jpg",
    videoUrl:
      "https://short.icu/876otuE0H?thumbnail=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXggBVnCCQXwgkpN-hCka-l2HF48yr4CHANAS-RHb-rgasdNcIfpALknHrW8NVtMU_Eq9xmGGX3NwvXflQZzo89Tv3qsR2zB4onAQNq56qPce35NOsoasVDJbMm01FG5YHHiZkEOc2U-AXjV35iQmVT0WGc5e4lIUgrOVDUog2QHOf2_mQOg/s1600/d512b1af-a840-11ef-9d42-12722d97%20%281%29.jpg",
    duration: 24900,
    views: 750000,
    category: "Hindi-Dubbed",
    tags: [
      "द पिट सीजन 01 हिंदी (2025)",
      "द पिट सीजन 01 हिंदी (2025) ऑनलाइन देखें",
      "द पिट सीजन 01 हिंदी (2025) देखें",
      "द पिट सीजन 01 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-24",
    director: "डेमियन मार्कानो, अमांडा मार्सालिस",
    featured: false,
  },
  {
    id: "H13",
    slug: "the-trauma-code-heroes-on-call-s01-hindi-dubbed-2025",
    title: "द ट्रॉमा कोड: हीरोज ऑन कॉल सीजन 01 हिंदी (2025)",
    description:
      "एक विश्वविद्यालय अस्पताल में आघात विशेषज्ञों की एक विशिष्ट टीम, जिसका नेतृत्व प्रतिभाशाली डॉक्टर बेक कांग-ह्योक कर रहे हैं।",
    thumbnailUrl:
      "https://resizing.flixster.com/1lAPsz0sGZwfZUjMg9fHssaprDc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29270534_b_h10_aa.jpg",
    videoUrl:
      "https://short.icu/9MzReADH8?thumbnail=https://resizing.flixster.com/1lAPsz0sGZwfZUjMg9fHssaprDc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29270534_b_h10_aa.jpg",
    duration: 24900,
    views: 750000,
    category: "Hindi-Dubbed",
    tags: [
      "द ट्रॉमा कोड: हीरोज ऑन कॉल सीजन 01 हिंदी (2025)",
      "द ट्रॉमा कोड: हीरोज ऑन कॉल सीजन 01 हिंदी (2025) ऑनलाइन देखें",
      "द ट्रॉमा कोड: हीरोज ऑन कॉल सीजन 01 हिंदी (2025) देखें",
      "द ट्रॉमा कोड: हीरोज ऑन कॉल सीजन 01 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-24",
    director: "दो-युन ली",
    featured: false,
  },
  {
    id: "H12",
    slug: "the-night-agent-s02-hindi-dubbed-2025",
    title: "द नाईट एजेंट सीजन 02 हिंदी (2025)",
    description:
      "निम्न स्तर का एफबीआई एजेंट पीटर सदरलैंड व्हाइट हाउस के तहखाने में काम करता है और एक ऐसे फोन पर काम करता है जो कभी नहीं बजता - जब तक कि रात को बजता नहीं है, वह उसे एक षड्यंत्र में धकेल देता है जो ओवल ऑफिस तक जाता है।",
    thumbnailUrl:
      "https://static.toiimg.com/thumb/msid-115296752,width-400,resizemode-4/115296752.jpg",
    videoUrl:
      "https://short.icu/KmCMipR0w?thumbnail=https://static.toiimg.com/thumb/msid-115296752,width-400,resizemode-4/115296752.jpg",
    duration: 30960,
    views: 850000,
    category: "Hindi-Dubbed",
    tags: [
      "द नाईट एजेंट सीजन 02 हिंदी (2025)",
      "द नाईट एजेंट सीजन 02 हिंदी (2025) ऑनलाइन देखें",
      "द नाईट एजेंट सीजन 02 हिंदी (2025) देखें",
      "द नाईट एजेंट सीजन 02 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-23",
    director: "एडम आर्किन",
    featured: false,
  },
  {
    id: "H11",
    slug: "cassandra-s01-hindi-dubbed-2025",
    title: "कैसेंड्रा सीजन 01 हिंदी (2025)",
    description:
      "जर्मनी के सबसे पुराने स्मार्ट घर में दशकों बाद एक नए परिवार के आने पर एआई हेल्पर कैसांद्रा की जागृति होती है। कैसांद्रा, जो कभी भी फिर से अकेला नहीं रहना चाहती, वह घर के संसाधनों का उपयोग करके घटनाओं में हेरफेर करती है और परिवार का हिस्सा बन जाती है।",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/02/Cassandra-2025-Netflix-series-review.jpg",
    videoUrl:
      "https://short.icu/qeH9nW4F8?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2025/02/Cassandra-2025-Netflix-series-review.jpg",
    duration: 17760,
    views: 350000,
    category: "Hindi-Dubbed",
    tags: [
      "कैसेंड्रा सीजन 01 हिंदी (2025)",
      "कैसेंड्रा सीजन 01 हिंदी (2025) ऑनलाइन देखें",
      "कैसेंड्रा सीजन 01 हिंदी (2025) देखें",
      "कैसेंड्रा सीजन 01 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-06",
    director: "एलेक्स होम्स, जॉन स्ट्रिकलैंड",
    featured: false,
  },
  {
    id: "H10",
    slug: "the-rig-s02-hindi-dubbed-2025",
    title: "द रिग सीजन 02 हिंदी (2025)",
    description:
      "एक दूरदराज के स्कॉटिश तेल रिग पर श्रमिकों का एक समूह मुख्य भूमि पर लौटने के कारण होता है जब एक रहस्यमय कोहरे ने उन्हें संलग्न किया और अलौकिक बलों को पकड़ लिया जाता है।",
    thumbnailUrl:
      "https://static.wixstatic.com/media/d56877_067128ab9826477ea779f152bb6e36c9~mv2.png/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/d56877_067128ab9826477ea779f152bb6e36c9~mv2.png",
    videoUrl:
      "https://short.icu/_OhKrrP8I?thumbnail=https://deadline.com/wp-content/uploads/2023/02/HLD-THE-RIG.jpg?w=1024",
    duration: 18120,
    views: 550000,
    category: "Hindi-Dubbed",
    tags: [
      "द रिग सीजन 02 हिंदी (2025)",
      "द रिग सीजन 02 हिंदी (2025) ऑनलाइन देखें",
      "द रिग सीजन 02 हिंदी (2025) देखें",
      "द रिग सीजन 02 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-30",
    director: "एलेक्स होम्स, जॉन स्ट्रिकलैंड",
    featured: false,
  },
  {
    id: "H9",
    slug: "american-primeval-s01-hindi-dubbed-2025",
    title: "अमेरिकन प्राइमवल सीजन 01 हिंदी (2025)",
    description:
      "यह अमेरिकी पश्चिम के जन्म, पंथों, धर्मों के हिंसक टकरावों तथा नई दुनिया पर नियंत्रण के लिए संघर्षरत पुरुषों और महिलाओं की साहसिक खोज पर आधारित है।",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/01/American-Primeval-2025-Netflix-Series-Review-1200x720.jpg",
    videoUrl:
      "https://short.icu/xlyioafWG?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2025/01/American-Primeval-2025-Netflix-Series-Review-1200x720.jpg",
    duration: 18120,
    views: 550000,
    category: "Hindi-Dubbed",
    tags: [
      "अमेरिकन प्राइमवल सीजन 01 हिंदी (2025)",
      "अमेरिकन प्राइमवल सीजन 01 हिंदी (2025) ऑनलाइन देखें",
      "अमेरिकन प्राइमवल सीजन 01 हिंदी (2025) देखें",
      "अमेरिकन प्राइमवल सीजन 01 हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-30",
    director: "पीटर बर्ग",
    featured: false,
  },
  {
    id: "H8",
    slug: "back-in-action-hindi-dubbed-2025",
    title: "बैक इन एक्शन हिंदी (2025)",
    description:
      "पूर्व सीआईए जासूस एमिली और मैट को उनकी गुप्त पहचान उजागर होने के बाद जासूसी में वापस खींच लिया जाता है।",
    thumbnailUrl:
      "https://www.filmofilia.com/wp-content/uploads/2025/01/Back-in-Action-1.jpg",
    videoUrl:
      "https://short.icu/AP4gomVgM?thumbnail=https://www.filmofilia.com/wp-content/uploads/2025/01/Back-in-Action-1.jpg",
    duration: 6840,
    views: 550000,
    category: "Hindi-Dubbed",
    tags: [
      "बैक इन एक्शन हिंदी (2025)",
      "बैक इन एक्शन हिंदी (2025) ऑनलाइन देखें",
      "बैक इन एक्शन हिंदी (2025) देखें",
      "बैक इन एक्शन हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-30",
    director: "सेठ गॉर्डन",
    featured: false,
  },
  {
    id: "H1",
    slug: "luccas-world-hindi-dubbed-2025",
    title: "लुकास वर्ल्ड हिंदी (2025)",
    description:
      "अपने बेटे, जो मस्तिष्क पक्षाघात से पीड़ित है, की मदद करने के लिए कृतसंकल्प बारबरा अपने परिवार को प्रायोगिक उपचार के लिए भारत ले जाती है।",
    thumbnailUrl: "https://mp4moviez.ind.in/files/luccas-world.webp",
    videoUrl:
      "https://short.icu/YiXMC1reZ?thumbnail=https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa3Qo1KVTUQ37Bsp2IosTn7WUKCPycwk-1e0q1shYERx4HkCYwIkrjBJQOwkyH_DZjiLz0t34QI-85qyj4_pOyapfHnKWtZSCLvnQmlmHzcyyhWNjdG4LavOjdTOaz-RpC8p0uHbAQkh7B4LAcf9NU0Zj5Y_zVOH22YFXdpB7o7hOAptkCy2vkM1lYS6ciw.jpg?r=5b7",
    duration: 5760,
    views: 850000,
    category: "Hindi-Dubbed",
    tags: [
      "लुकास वर्ल्ड हिंदी (2025)",
      "लुकास वर्ल्ड हिंदी (2025) ऑनलाइन देखें",
      "लुकास वर्ल्ड हिंदी (2025) देखें",
      "लुकास वर्ल्ड हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-07",
    director: "डैन पार्टलैंड",
    featured: false,
  },
  {
    id: "H2",
    slug: "presence-hindi-dubbed-2025",
    title: "प्रेजेंस हिंदी (2025)",
    description:
      "उपनगरों में अपने नए घर में जाने के बाद एक परिवार को यह विश्वास हो जाता है कि वे अकेले नहीं हैं।",
    thumbnailUrl:
      "https://i.ytimg.com/vi/WkPWfYe_IX4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAiCTD5IfF8JZidvfctsYsy7EgW8w",
    videoUrl:
      "https://short.icu/vn3MawEwy?thumbnail=https://i.ytimg.com/vi/WkPWfYe_IX4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAiCTD5IfF8JZidvfctsYsy7EgW8w",
    duration: 7200,
    views: 1212340,
    category: "Hindi-Dubbed",
    tags: [
      "प्रेजेंस हिंदी (2025)",
      "प्रेजेंस हिंदी (2025) ऑनलाइन देखें",
      "प्रेजेंस हिंदी (2025) देखें",
      "प्रेजेंस हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-05",
    director: "स्टीवन सोडरबर्ग",
    featured: false,
  },
  {
    id: "H3",
    slug: "companion-hindi-dubbed-2025",
    title: "साथी हिंदी (2025)",
    description:
      "एक सुदूर केबिन में दोस्तों के साथ सप्ताहांत की छुट्टियां उस समय अराजकता में बदल जाती है, जब पता चलता है कि मेहमानों में से एक रोबोट साथी है।",
    thumbnailUrl:
      "https://www.vitalthrills.com/wp-content/uploads/2025/01/companionmovieheader.jpg",
    videoUrl:
      "https://short.icu/1A4wE0qJs?thumbnail=https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/companion-et00414405-1737629384.jpg",
    duration: 5820,
    views: 350023,
    category: "Hindi-Dubbed",
    tags: [
      "साथी हिंदी (2025)",
      "साथी हिंदी (2025) ऑनलाइन देखें",
      "साथी हिंदी (2025) देखें",
      "साथी हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-31",
    director: "ड्रू हैनकॉक",
    featured: false,
  },
  {
    id: "H4",
    slug: "kinda-pregnant-hindi-dubbed-2025",
    title: "किंदा प्रेग्नेंट हिंदी (2025)",
    description:
      "जब लैनी की घर बसाने और परिवार शुरू करने की योजना विफल हो जाती है, तो वह नकली बेबी बंप लगाती है, झूठ बोलती है और गलती से अपने सपनों के राजकुमार के प्यार में पड़ जाती है।",
    thumbnailUrl:
      "https://i.gadgets360cdn.com/large/image_4_F_1738751563984.jpg",
    videoUrl:
      "https://short.icu/sVqkCnFjF?thumbnail=https://i.gadgets360cdn.com/large/image_4_F_1738751563984.jpg",
    duration: 5820,
    views: 750000,
    category: "Hindi-Dubbed",
    tags: [
      "किंदा प्रेग्नेंट हिंदी (2025)",
      "किंदा प्रेग्नेंट हिंदी (2025) ऑनलाइन देखें",
      "किंदा प्रेग्नेंट हिंदी (2025) देखें",
      "किंदा प्रेग्नेंट हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-05",
    director: "टायलर स्पिंडल",
    featured: false,
  },
  {
    id: "H5",
    slug: "ad-vitam-hindi-dubbed-2025",
    title: "एड विटाम हिंदी (2025)",
    description:
      "एक हत्या के प्रयास से बचने के बाद, फ्रैंक लाज़ारेफ़ को अपनी पत्नी लियो को ढूँढना होगा, जिसे हथियारबंद लोगों के एक रहस्यमय समूह ने अगवा कर लिया है। वह अपने अतीत में उलझा हुआ है और एक ऐसे सरकारी मामले में उलझा हुआ है जो उसके बस की बात नहीं है।",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/01/Ad-Vitam-2025-Netflix-Thriller.jpg",
    videoUrl:
      "https://short.icu/nEdfZ8303?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2025/01/Ad-Vitam-2025-Netflix-Thriller.jpg",
    duration: 5880,
    views: 750000,
    category: "Hindi-Dubbed",
    tags: [
      "एड विटाम हिंदी (2025)",
      "एड विटाम हिंदी (2025) ऑनलाइन देखें",
      "एड विटाम हिंदी (2025) देखें",
      "एड विटाम हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-02-05",
    director: "रोडोल्फ़ लौगा",
    featured: false,
  },
  {
    id: "H6",
    slug: "the-love-scam-hindi-dubbed-2025",
    title: "द लव स्कैम हिंदी (2025)",
    description:
      "कर्ज में डूबे दो भाई एक धनी उत्तराधिकारी को ठगने और नेपल्स में अपने घर को बचाने की योजना बनाते हैं - लेकिन अप्रत्याशित प्रेम जल्द ही योजना को जटिल बना देता है।",
    thumbnailUrl:
      "https://i.ytimg.com/vi/gEuPm4UcjHs/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/x28ZhrvQ8?thumbnail=https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbMCBe-H0oKbGvPDYjmGXoC7Mga09j51PW_l4nox_ZZKFFE2ROJQ1V37rXRk5R1n8ZgfcZpw72P_95bw9-IAF1h3VPtm67EoX22-.jpg?r=627",
    duration: 6060,
    views: 550000,
    category: "Hindi-Dubbed",
    tags: [
      "द लव स्कैम हिंदी (2025)",
      "द लव स्कैम हिंदी (2025) ऑनलाइन देखें",
      "द लव स्कैम हिंदी (2025) देखें",
      "द लव स्कैम हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-17",
    director: "अम्बर्टो कार्टेनी",
    featured: false,
  },
  {
    id: "H7",
    slug: "you-are-cordially-invited-hindi-dubbed-2025",
    title: "आप सादर आमंत्रित हैं हिंदी (2025)",
    description:
      "एक महिला (रीज़ विदरस्पून) अपनी बहन की शानदार शादी की योजना बना रही है और एक युवा दुल्हन के पिता (विल फेरेल) को पता चलता है कि कैरोलिना तट से दूर एक द्वीप पर एक दूरस्थ रिसॉर्ट में उनकी डेस्टिनेशन वेडिंग के लिए डबल बुकिंग हो चुकी है। जब दोनों पक्ष छोटे से स्थान को साझा करने का फैसला करते हैं, तो अराजकता फैल जाती है और हमारे किरदारों की कास्ट खुद के बारे में और अधिक जानने के लिए अपनी खुद की असुरक्षाओं का सामना करना शुरू कर देती है।",
    thumbnailUrl:
      "https://i.ytimg.com/vi/vUuFuMD7CXA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOYZUhdsC-eB1Jb937R5gldZAscQ",
    videoUrl:
      "https://short.icu/938UOcUwW?thumbnail=https://i.ytimg.com/vi/vUuFuMD7CXA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOYZUhdsC-eB1Jb937R5gldZAscQ",
    duration: 6660,
    views: 550000,
    category: "Hindi-Dubbed",
    tags: [
      "आप सादर आमंत्रित हैं हिंदी (2025)",
      "आप सादर आमंत्रित हैं हिंदी (2025) ऑनलाइन देखें",
      "आप सादर आमंत्रित हैं हिंदी (2025) देखें",
      "आप सादर आमंत्रित हैं हिंदी (2025) स्ट्रीमिंग",
    ],
    releaseDate: "2025-01-30",
    director: "निकोलस स्टोलर",
    featured: false,
  },
  // {
  //   id: "M68",
  //   slug: "love-forever-2025",
  //   title: "Love Forever (2025)",
  //   description:
  //     "The plans of Stockholmers Hanna and Samuel of an intimate countryside wedding in Gotland are shattered by family and friends.",
  //   thumbnailUrl:
  //     "https://theeurotvplace.com/wp-content/uploads/2025/01/Love-Forever.jpg",
  //   videoUrl:
  //     "https://short.icu/YKsYzsb_S?thumbnail=https://theeurotvplace.com/wp-content/uploads/2025/01/Love-Forever.jpg",
  //   duration: 5760,
  //   views:  126100,
  //   category: "Movie",
  //   tags: [
  //     "love forever (2025)",
  //     "love forever (2025) watch online",
  //     "love forever (2025) watch ",
  //     "love forever (2025) streaming ",
  //   ],
  //   releaseDate: "2025-02-14",
  //   director: "Staffan Lindberg",
  //   featured: false,
  // },



  //MOVIES SECTION
  {
    id: "M75",
    slug: "superboys-of-malegaon-2025",
    title: "Superboys of Malegaon (2025)",
    description:
      "The journey of an aspiring filmmaker as he bands together his group of friends to make a film for his town, Malegaon.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/R-yr-dYpwCE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBSuki6QFiITYPIfW43RnbcvJNbBg",
    videoUrl:
      "https://short.icu/Ck9SsKvmr?thumbnail=https://variety.com/wp-content/uploads/2024/09/Superboys-of-Malegaon-1.jpg",
    duration: 7620,
    views:  926100,
    category: "Movie",
    tags: [
      "superboys of malegaon (2025)",
      "superboys of malegaon (2025) watch online",
      "superboys of malegaon (2025) watch ",
      "superboys of malegaon (2025) streaming ",
    ],
    releaseDate: "2025-01-28",
    director: "Reema Kagti",
    featured: true,
  },
  {
    id: "M74",
    slug: "crazxy-2025",
    title: "Crazxy (2025)",
    description:
      "Abhimanyu Sood. Good surgeon. Bad father. Questionable human being. He is having the worst day of his life.",
    thumbnailUrl:
      "https://media.assettype.com/freepressjournal/2025-02-27/ti2jq8rm/Crazxy-Review.jpg",
    videoUrl:
      "https://short.icu/rJWAWA1IF?thumbnail=https://images.news18.com/ibnlive/uploads/2025/02/Sohum-Shah-Crazxy-2025-02-c8929cbe75bcf13efd59752dc036a906-16x9.jpg?impolicy=website&width=640&height=360",
    duration: 5460,
    views:  26100,
    category: "Movie",
    tags: [
      "crazxy (2025)",
      "crazxy (2025) watch online",
      "crazxy (2025) watch ",
      "crazxy (2025) streaming ",
    ],
    releaseDate: "2025-01-28",
    director: "Girish Kohli",
    featured: false,
  },
  {
    id: "M73",
    slug: "uppercut-2025",
    title: "Uppercut (2025)",
    description:
      "Follows Toni's journey from seeking boxing training from Elliott, a gym owner, to becoming a pioneering female boxing manager guiding Payne to a championship fight, while drawing upon lessons learned from Elliott.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/J2RfczEiz8w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCGbA4gGiXHfuWL_viA4ax8TknZQ",
    videoUrl:
      "https://short.icu/qw9KfuAGdr?thumbnail=https://i.ytimg.com/vi/J2RfczEiz8w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCGbA4gGiXHfuWL_viA4ax8TknZQ",
    duration: 6240,
    views:  806100,
    category: "Movie",
    tags: [
      "uppercut (2025)",
      "uppercut (2025) watch online",
      "uppercut (2025) watch ",
      "uppercut (2025) streaming ",
    ],
    releaseDate: "2025-01-23",
    director: "Torsten Ruether",
    featured: false,
  },
  {
    id: "M72",
    slug: "the-wrong-track-2025",
    title: "The Wrong Track (2025)",
    description:
      "A struggling divorced mom must learn to ski and complete a grueling 54km race to stay at her brother's place. As she trains for the impossible challenge, she discovers inner strength she never knew she had.",
    thumbnailUrl:
      "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcZkcFDn9vRvm4YycBXL2vNqHa9mikq3Qa_EsVZOaOfgss-NFpVNijrT6ylRlgaaX6dpRNNAsriqE4q77TSzliGktw-HOQ3NpYIXOBIBTJsZMqytMBumwrxqgo1kkGEhgqDV.jpg?r=dbe",
    videoUrl:
      "https://short.icu/jdV-iXoEy?thumbnail=https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVzd8Ohn4-pCqHnXEbIOET-BFCXz4jwGVQYCDvm0WcgSKsmERsYqaP8VJePAgqroGE3Wv3wa_xyyxCcxwZVajVbMQSzqhvYiWfY-.jpg?r=475",
    duration: 5640,
    views:  306100,
    category: "Movie",
    tags: [
      "the wrong track (2025)",
      "the wrong track (2025) watch online",
      "the wrong track (2025) watch ",
      "the wrong track (2025) streaming ",
    ],
    releaseDate: "2025-02-27",
    director: "Hallvar Witzø",
    featured: false,
  },
  {
    id: "M71",
    slug: "sosyal-climbers-2025",
    title: "Sosyal Climbers (2025)",
    description:
      "Stuck with a massive debt after falling for a scam, two wannabe socialites create elaborate fake identities to swindle the rich out of their money.",
    thumbnailUrl:
      "https://cdn.technadu.com/wp-content/uploads/2025/02/Sosyal-Climbers.jpg",
    videoUrl:
      "https://short.icu/BqkWgLgsB?thumbnail=https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTsD5dzRWGNhVxRAqABThVvi7CXBZMSYg4ERjKNk1TBPbIeVh0l_hI9-NSJ6XBO_d_MFexsWM6AxKiowKwd8P87AoUBSbET8voP8.jpg?r=c27",
    duration: 6180,
    views:  106100,
    category: "Movie",
    tags: [
      "sosyal climbers (2025)",
      "sosyal climbers (2025) watch online",
      "sosyal climbers (2025) watch ",
      "sosyal climbers (2025) streaming ",
    ],
    releaseDate: "2025-02-27",
    director: "Jason Paul Laxamana",
    featured: false,
  },
  {
    id: "M70",
    slug: "demon-city-2025",
    title: "Demon City (2025)",
    description:
      "Framed for his family's murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked 'demons' who have taken over his city.",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/02/Demon-City-2025-Netflix-Review.jpg",
    videoUrl:
      "https://short.icu/ACMnroTob?thumbnail=https://www.chennaitop10.com/wp-content/uploads/2025/02/Demon-City.jpg",
    duration: 6360,
    views:  1106100,
    category: "Movie",
    tags: [
      "demon city (2025)",
      "demon city (2025) watch online",
      "demon city (2025) watch ",
      "demon city (2025) streaming ",
    ],
    releaseDate: "2025-02-27",
    director: "Seiji Tanaka",
    featured: false,
  },
  {
    id: "M69",
    slug: "dil-dosti-aur-dogs-2025",
    title: "Dil Dosti Aur Dogs (2025)",
    description:
      "The film offers a few heartwarming moments and an abundance of adorable canine companions, but it ultimately stumbles due to weak storytelling and uninspired performances.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/nBc1-XWMjKA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLClyCCi7LWU-jrPd-2CSJrKTWJB5A",
    videoUrl:
      "https://short.icu/EOetiIeUR?thumbnail=https://m.media-amazon.com/images/M/MV5BYWVmMzE4ZGEtZWY0Yi00MzA3LWEyZDItZTRlZTQxNjk0NzAwXkEyXkFqcGc@._V1_.jpg",
    duration: 6060,
    views:  706100,
    category: "Movie",
    tags: [
      "dil dosti aur dogs (2025)",
      "dil dosti aur dogs (2025) watch online",
      "dil dosti aur dogs (2025) watch ",
      "dil dosti aur dogs (2025) streaming ",
    ],
    releaseDate: "2025-02-28",
    director: "Viral Shah",
    featured: false,
  },
  {
    id: "M68",
    slug: "return-to-office-2025",
    title: "Return To Office (2025)",
    description:
      "After making the return to the office on a hybrid schedule, two coworkers known to each other only as Ms. Monday and Mr. Tuesday start sending friendly notes, sparking an office romance.",
    thumbnailUrl:
      "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2F7%2Fgracenote%2F779d6665b868607b72bca5d923b9ed5c.jpg",
    videoUrl:
      "https://short.icu/1jR5M71Sm?thumbnail=https://images.squarespace-cdn.com/content/v1/53d8f450e4b0ddeb5ce066e5/7b3522e6-7a5d-4aaa-9e3c-b278f508bf80/ReturnToOffice.jpg",
    duration: 5040,
    views:  406100,
    category: "Movie",
    tags: [
      "return to office (2025)",
      "return to office (2025) watch online",
      "return to office (2025) watch ",
      "return to office (2025) streaming ",
    ],
    releaseDate: "2025-02-15",
    director: "Peter Benson",
    featured: false,
  },
  {
    id: "M67",
    slug: "sugar-mama-2025",
    title: "Sugar Mama (2025)",
    description:
      "A college student finds himself at the center of a wealthy businesswoman's deadly scheme.",
    thumbnailUrl:
      "https://bossip.com/wp-content/uploads/sites/28/2025/01/17358257628352.jpg?w=1024&strip=all&quality=80",
    videoUrl:
      "https://short.icu/aWlzrTQ1E?thumbnail=https://canvas-lb.tubitv.com/opts/gbjTfJ-OoUGnjw==/6f3e10f8-9bbe-4451-a4d6-9368385265a3/CIAPELgIOgUxLjEuNg==",
    duration: 5640,
    views:  206100,
    category: "Movie",
    tags: [
      "sugar mama (2025)",
      "sugar mama (2025) watch online",
      "sugar mama (2025) watch ",
      "sugar mama (2025) streaming ",
    ],
    releaseDate: "2025-01-03",
    director: "Lesley Demetriades",
    featured: false,
  },
  {
    id: "M67",
    slug: "sisterhood-inc-2025",
    title: "Sisterhood.Inc.. (2025)",
    description:
      "Corporate exec Megan starts a board of directors to improve her younger sister's chaotic life and finds romance with a psych professor who uncovers her tough demeanor.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/466bee34853d35f7baff161daae21bdbf893cf24982904a3e7ab1c76e256d22c.jpg",
    videoUrl:
      "https://short.icu/SKPweY7GX?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/466bee34853d35f7baff161daae21bdbf893cf24982904a3e7ab1c76e256d22c.jpg",
    duration: 5040,
    views:  176100,
    category: "Movie",
    tags: [
      "sisterhood inc (2025)",
      "sisterhood inc (2025) watch online",
      "sisterhood inc (2025) watch ",
      "sisterhood inc (2025) streaming ",
    ],
    releaseDate: "2025-02-22",
    director: "Lesley Demetriades",
    featured: false,
  },
  {
    id: "M66",
    slug: "bone-face-2025",
    title: "Bone Face (2025)",
    description:
      "When a masked killer slaughters several campers in a small town, a sheriff and a deputy track the murderer to a local diner where, using their investigative skills, they must discover which person in the diner is the actual killer.",
    thumbnailUrl:
      "https://i0.wp.com/fzmovies.com.ng/wp-content/uploads/2025/02/Bone-Face-2025.jpg?resize=678%2C381&ssl=1",
    videoUrl:
      "https://short.icu/_tXQOn3eJ?thumbnail=https://i0.wp.com/fzmovies.com.ng/wp-content/uploads/2025/02/Bone-Face-2025.jpg?resize=678%2C381&ssl=1",
    duration: 9240,
    views:  106100,
    category: "Movie",
    tags: [
      "bone face (2025)",
      "bone face (2025) watch online",
      "bone face (2025) watch ",
      "bone face (2025) streaming ",
    ],
    releaseDate: "2025-01-21",
    director: "Michael Donovan Horn",
    featured: false,
  },
  {
    id: "M65",
    slug: "vidaamuyarchi-2025",
    title: "Vidaamuyarchi (2025)",
    description:
      "A married couple's trip takes an unsettling turn when the wife goes missing, prompting the husband's frantic search while an unknown villain creates obstacles.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/Fcdd6_QJLv8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5WdwuZaKy1UbT4fVFg8X398eQsA",
    videoUrl:
      "https://short.icu/exrWS4af7?thumbnail=https://assets-in.bmscdn.com/discovery-catalog/events/et00408788-hqkcdlqwcj-landscape.jpg",
    duration: 9240,
    views: 956100,
    category: "Movie",
    tags: [
      "Vidaamuyarchi (2025)",
      "Vidaamuyarchi (2025) watch online",
      "Vidaamuyarchi (2025) watch ",
      "Vidaamuyarchi (2025) streaming ",
    ],
    releaseDate: "2025-02-06",
    director: "Magizh Thirumeni",
    featured: false,
  },
  {
    id: "M64",
    slug: "jilabi-2025",
    title: "Jilabi (2025)",
    description:
      "Jilabi: Directed by Nitin Kamble, Vishram Chavan. With Ruhi Aalve, Aditya Bhalerao, Priyanka Bhattacharjee, Ashwini Chavare.",
    thumbnailUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00420885-snqvbfbarh-landscape.jpg",
    videoUrl:
      "https://short.icu/goR10ggLe?thumbnail=https://assets-in.bmscdn.com/discovery-catalog/events/et00420885-snqvbfbarh-landscape.jpg",
    duration: 3720,
    views: 256100,
    category: "Movie",
    tags: [
      "jilabi (2025)",
      "jilabi (2025) watch online",
      "jilabi (2025) watch ",
      "jilabi (2025) streaming ",
    ],
    releaseDate: "2025-02-21",
    director: "Nitin Kamble",
    featured: false,
  },
  {
    id: "M63",
    slug: "cleaner-2025",
    title: "Cleaner (2025)",
    description:
      "Criminal activists hijack a gala, taking 300 hostages. One extremist plans mass murder as a message to the world. An Ex-soldier turned window cleaner now works to rescue the hostages.",
    thumbnailUrl:
      "https://ntvb.tmsimg.com/assets/p28990405_v_h8_aa.jpg?w=960&h=540",
    videoUrl:
      "https://short.icu/qjmHfT1CF?thumbnail=https://ntvb.tmsimg.com/assets/p28990405_v_h8_aa.jpg?w=960&h=540",
    duration: 5820,
    views: 656100,
    category: "Movie",
    tags: [
      "cleaner (2025)",
      "cleaner (2025) watch online",
      "cleaner (2025) watch ",
      "cleaner (2025) streaming ",
    ],
    releaseDate: "2025-02-21",
    director: "Martin Campbell",
    featured: false,
  },
  {
    id: "M62",
    slug: "the-monkey-2025",
    title: "The Monkey (2025)",
    description:
      "When twin brothers Bill and Hal find their father's old monkey toy in the attic, a series of gruesome deaths start. The siblings decide to throw the toy away and move on with their lives, growing apart over the years.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/8pGDA9To3AA/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/V9dTk7zGh?thumbnail=https://i.ytimg.com/vi/8pGDA9To3AA/maxresdefault.jpg",
    duration: 5940,
    views: 256100,
    category: "Movie",
    tags: [
      "the monkey (2025)",
      "the monkey (2025) watch online",
      "the monkey (2025) watch ",
      "the monkey (2025) streaming ",
    ],
    releaseDate: "2025-02-21",
    director: "Oz Perkins",
    featured: false,
  },
  {
    id: "M61",
    slug: "mere-husband-ki-biwi-2025",
    title: "Mere Husband Ki Biwi (2025)",
    description:
      "A Delhi professional navigates a complicated love triangle when his old flame returns to his life just as he begins falling for someone new, leading to a series of comedic misunderstandings.",
    thumbnailUrl:
      "https://www.midstlive.com/wp-content/uploads/2025/02/Mere-Husband-Ki-Biwi-1-585x390.png",
    videoUrl:
      "https://short.icu/afRrEoX41?thumbnail=https://www.bollywoodhungama.com/wp-content/uploads/2025/02/Mere-Husband-Ki-Biwi-18.jpg",
    duration: 8520,
    views: 499100,
    category: "Movie",
    tags: [
      "mere husband ki biwi (2025)",
      "mere husband ki biwi (2025) watch online",
      "mere husband ki biwi (2025) watch ",
      "mere husband ki biwi (2025) streaming ",
    ],
    releaseDate: "2025-02-21",
    director: "Mudassar Aziz",
    featured: false,
  },
  {
    id: "M60",
    slug: "pyaar-testing-2025",
    title: "Pyaar Testing (2025)",
    description:
      "Dhruv and Amrita, potential marriage partners, decided to live together before the wedding to test their compatibility. As they spend time together, the question arises that whether they develop romantic feelings between them.",
    thumbnailUrl:
      "https://i.gadgets360cdn.com/large/image_3_F_1738658719275.jpg",
    videoUrl:
      "https://short.icu/43sCWJ1fCK?thumbnail=https://i.gadgets360cdn.com/large/image_3_F_1738658719275.jpg",
    duration: 9840,
    views: 359100,
    category: "Movie",
    tags: [
      "pyaar testing (2025)",
      "pyaar testing (2025) watch online",
      "pyaar testing (2025) watch ",
      "pyaar testing (2025) streaming ",
    ],
    releaseDate: "2025-02-14",
    director: "Saptaraj Chakraborty, Shiva Varma",
    featured: false,
  },
  {
    id: "M59",
    slug: "brave-the-dark-2025",
    title: "Brave the Dark (2025)",
    description:
      "Haunted by torturous childhood memories, Nate Williams finds himself engulfed in darkness. When his drama teacher, Mr. Deen bails him out of jail and takes him in, Nate must confront his past before it leads to his own destruction.",
    thumbnailUrl:
      "https://images.angelstudios.com/image/upload/f_auto/q_auto/v1735840872/brave-the-dark-horiz-img-01.png",
    videoUrl:
      "https://short.icu/6HJtD6_by?thumbnail=https://images.angelstudios.com/image/upload/f_auto/q_auto/v1735840872/brave-the-dark-horiz-img-01.png",
    duration: 6720,
    views: 859100,
    category: "Movie",
    tags: [
      "brave the dark (2025)",
      "brave the dark (2025) watch online",
      "brave the dark (2025) watch ",
      "brave the dark (2025) streaming ",
    ],
    releaseDate: "2025-02-27",
    director: "Damian Harris",
    featured: false,
  },
  {
    id: "M58",
    slug: "honeymoon-crasher-2025",
    title: "Honeymoon Crasher (2025)",
    description:
      "When his fiancee dumps him at the altar for her ex, a young man is left with no alternative but to go on his romantic honeymoon with his mother.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/M15wyhE9yDw/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/YRJWBS2mP?thumbnail=https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSYpafGV0y5Pi4iPvdlgSqbEbt7hi9NgqTkXy5ZF7w2jT-KPHv8e13klmGSHT3RmkqGm1-c8X1jTnH1SkopUFBDE-9IagAA2ADvH.jpg?r=999",
    duration: 5580,
    views: 767100,
    category: "Movie",
    tags: [
      "honeymoon crasher (2025)",
      "honeymoon crasher (2025) watch online",
      "honeymoon crasher (2025) watch ",
      "honeymoon crasher (2025) streaming ",
    ],
    releaseDate: "2025-02-12",
    director: "Nicolas Cuche",
    featured: false,
  },
  {
    id: "M57",
    slug: "loveyapa-2025",
    title: "Loveyapa (2025)",
    description:
      "The madness after a couple exchanges their mobile phones and begins to unearth bitter truth about each other.",
    thumbnailUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/loveyapa-et00427632-1738580822.jpg",
    videoUrl:
      "https://short.icu/T1keok7kb8?thumbnail=https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/loveyapa-et00427632-1738580822.jpg",
    duration: 8229,
    views: 367100,
    category: "Movie",
    tags: [
      "loveyapa (2025)",
      "loveyapa (2025) watch online",
      "loveyapa (2025) watch ",
      "loveyapa (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "Advait Chandan",
    featured: false,
  },
  {
    id: "M56",
    slug: "dhoom-dhaam-2025",
    title: "Dhoom Dhaam (2025)",
    description:
      "Veer Poddar and Koyal Chadda are a mismatched couple, who get into an arranged marriage. A case of mistaken identity forces this newly married couple to go on the run on their wedding night and search for the mysterious 'Charlie'.",
    thumbnailUrl:
      "https://resizing.flixster.com/lf37LQjMEnOQpZomm7zl-mOZy6w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29386127_v_h9_aa.jpg",
    videoUrl:
      "https://short.icu/vrWapt4Sy?thumbnail=https://resizing.flixster.com/lf37LQjMEnOQpZomm7zl-mOZy6w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29386127_v_h9_aa.jpg",
    duration: 6480,
    views: 559100,
    category: "Movie",
    tags: [
      "dhoom-dhaam (2025)",
      "dhoom-dhaam (2025) watch online",
      "dhoom-dhaam (2025) watch ",
      "dhoom-dhaam (2025) streaming ",
    ],
    releaseDate: "2025-02-14",
    director: "Rishab Seth",
    featured: false,
  },
  {
    id: "M55",
    slug: "bobby-aur-rishi-ki-love-story-2025",
    title: "Bobby Aur Rishi Ki Love Story (2025)",
    description:
      "Sparks fly between Bobby and Rishi in the heart of cambridge but life forces them apart. Years after, will the star crossed lovers get a second chance?",
    thumbnailUrl:
      "https://i.ytimg.com/vi/ihwhmu7X3Vk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmM3qnk3qN6aHelEDzli2L6s4g_Q",
    videoUrl:
      "https://short.icu/gNV6B53l_?thumbnail=https://i.ytimg.com/vi/ihwhmu7X3Vk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmM3qnk3qN6aHelEDzli2L6s4g_Q",
    duration: 5829,
    views: 753100,
    category: "Movie",
    tags: [
      "bobby aur rishi ki love story (2025)",
      "bobby aur rishi ki love story (2025) watch online",
      "bobby aur rishi ki love story (2025) watch ",
      "bobby aur rishi ki love story (2025) streaming ",
    ],
    releaseDate: "2025-02-11",
    director: "Kunal Kohli",
    featured: false,
  },
  {
    id: "M54",
    slug: "ek-anjaan-rishtey-ka-guilt-4-2025",
    title: "Ek Anjaan Rishtey Ka Guilt 4 (2025)",
    description:
      "Rhea and Ansh Singh, a daring couple, play a gamble that puts their marriage on the line. Will 7 days with the flamboyant Vikram Ahuja be the ultimate temptation?",
    thumbnailUrl:
      "https://i.ytimg.com/vi/6ARFCVioU_s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvZMSld0k8jdhaab8vRRm4Um-qxw",
    videoUrl:
      "https://short.icu/Ze397fI1V?thumbnail=https://i.ytimg.com/vi/6ARFCVioU_s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvZMSld0k8jdhaab8vRRm4Um-qxw",
    duration: 9960,
    views: 513100,
    category: "Movie",
    tags: [
      "ek anjaan rishtey ka guilt 4 (2025)",
      "ek anjaan rishtey ka guilt 4 (2025) watch online",
      "ek anjaan rishtey ka guilt 4 (2025) watch ",
      "ek anjaan rishtey ka guilt 4 (2025) streaming ",
    ],
    releaseDate: "2025-02-13",
    director: "Shoib Nikash Shah",
    featured: false,
  },
  {
    id: "M53",
    slug: "the-gorge-2025",
    title: "The Gorge (2025)",
    description:
      "Two highly-trained operatives become close after being sent to protect opposite sides of a mysterious gorge. When an evil emerges, they must work together to survive what lies within.",
    thumbnailUrl:
      "https://4kwallpapers.com/images/wallpapers/the-gorge-2025-5120x2880-20243.jpg",
    videoUrl:
      "https://short.icu/pi-hb_wGS?thumbnail=https://4kwallpapers.com/images/wallpapers/the-gorge-2025-5120x2880-20243.jpg",
    duration: 7620,
    views: 813100,
    category: "Movie",
    tags: [
      "the gorge (2025)",
      "the gorge (2025) watch online",
      "the gorge (2025) watch ",
      "the gorge (2025) streaming ",
    ],
    releaseDate: "2025-02-14",
    director: "Scott Derrickson",
    featured: false,
  },
  {
    id: "M52",
    slug: "my-fault-london-2025",
    title: "My Fault: London (2025)",
    description:
      "An 18-year-old girl moves from America to London with her mother and wealthy stepfather. She meets her stepbrother, and an attraction brews despite their efforts. Unaware, her estranged father tracks her down after release from prison",
    thumbnailUrl:
      "https://www.midstlive.com/wp-content/uploads/2025/01/my-fault-london-culpa-mia-ott-release-1.png",
    videoUrl:
      "https://short.icu/u1PaNdGxd?thumbnail=https://www.midstlive.com/wp-content/uploads/2025/01/my-fault-london-culpa-mia-ott-release-1.png",
    duration: 7200,
    views: 513100,
    category: "Movie",
    tags: [
      "my fault london (2025)",
      "my fault london (2025) watch online",
      "my fault london (2025) watch ",
      "my fault london (2025) streaming ",
    ],
    releaseDate: "2025-02-13",
    director: "Charlotte Fassler, Dani Girdwood",
    featured: false,
  },
  {
    id: "M51",
    slug: "captain-america-brave-new-world-2025",
    title: "Captain America: Brave New World (2025)",
    description:
      "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
    thumbnailUrl:
      "https://pacificsciencecenter.org/wp-content/uploads/2025/01/cap-america-web-1.jpg",
    videoUrl:
      "https://short.icu/tAUn18bzY?thumbnail=https://pacificsciencecenter.org/wp-content/uploads/2025/01/cap-america-web-1.jpg",
    duration: 7080,
    views: 1213100,
    category: "Movie",
    tags: [
      "captain america brave new world (2025)",
      "captain america brave new world (2025) watch online",
      "captain america brave new world (2025) watch ",
      "captain america brave new world (2025) streaming ",
    ],
    releaseDate: "2025-02-14",
    director: "Julius Onah",
    featured: false,
  },
  {
    id: "M51",
    slug: "one-of-them-days-2025",
    title: "One Of Them Days (2025)",
    description:
      "When best friends and roommates Dreux and Alyssa discover Alyssa's boyfriend has blown their rent money, the duo finds themselves going to extremes in a race against the clock to avoid eviction and keep their friendship intact.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/StbJiumDNOA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFCgUzubJGnRE6CFvp0RJoyMNpBA",
    videoUrl:
      "https://short.icu/0Fxr1iISy?thumbnail=https://i.ytimg.com/vi/StbJiumDNOA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFCgUzubJGnRE6CFvp0RJoyMNpBA",
    duration: 5820,
    views: 13100,
    category: "Movie",
    tags: [
      "one of them days (2025)",
      "one of them days (2025) watch online",
      "one of them days (2025) watch ",
      "one of them days (2025) streaming ",
    ],
    releaseDate: "2025-01-17",
    director: "Nick Cassavetes",
    featured: false,
  },
  {
    id: "M50",
    slug: "marked-men-2025",
    title: "Marked Men (2025)",
    description:
      "Shaw has loved Rule since she saw him, but Rule doesn't see her as a suitable match, but a night of drinking and secrets leads them to question if they can be together without ruining their relationship...or each other.",
    thumbnailUrl:
      "https://ntvb.tmsimg.com/assets/p27860692_v_h8_ab.jpg?w=1280&h=720",
    videoUrl:
      "https://short.icu/TOWfW7xlW?thumbnail=https://ntvb.tmsimg.com/assets/p27860692_v_h8_ab.jpg?w=1280&h=720",
    duration: 5580,
    views: 73100,
    category: "Movie",
    tags: [
      "marked men (2025)",
      "marked men (2025) watch online",
      "marked men (2025) watch ",
      "marked men (2025) streaming ",
    ],
    releaseDate: "2025-01-21",
    director: "Nick Cassavetes",
    featured: false,
  },
  {
    id: "M49",
    slug: "the-wish-swap-2025",
    title: "The Wish Swap (2025)",
    description:
      "When Casey and Henry celebrate their birthdays at the same restaurant, they make birthday wishes at the same time, which are granted. However, they end up getting each other's wishes. Stars Emily Tennant and Jake Foy.",
    thumbnailUrl:
      "https://ntvb.tmsimg.com/assets/p29138741_v_h8_aa.jpg?w=1280&h=720",
    videoUrl:
      "https://short.icu/GlYZdc5Mm?thumbnail=https://ntvb.tmsimg.com/assets/p29138741_v_h8_aa.jpg?w=1280&h=720",
    duration: 5040,
    views: 36100,
    category: "Movie",
    tags: [
      "the wish swap (2025)",
      "the wish swap (2025) watch online",
      "the wish swap (2025) watch ",
      "the wish swap (2025) streaming ",
    ],
    releaseDate: "2025-02-08",
    director: "David I. Strasser",
    featured: false,
  },
  {
    id: "M48",
    slug: "black-diamond-2025",
    title: "Black Diamond (2025)",
    description:
      "Follows a young woman whose idyllic life with her hedge funder boyfriend turns it into a deadly triangle of lust, obsession and murder after meeting a local cowboy handyman.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/210717c5919098216dc44babd5700089b7d8b7544c317ca1cce33b72007506fc.jpg",
    videoUrl:
      "https://short.icu/AXWB-SIyI?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/210717c5919098216dc44babd5700089b7d8b7544c317ca1cce33b72007506fc.jpg",
    duration: 5340,
    views: 43100,
    category: "Movie",
    tags: [
      "black diamond (2025)",
      "black diamond (2025) watch online",
      "black diamond (2025) watch ",
      "black diamond (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Judd Bloch",
    featured: false,
  },
  {
    id: "M47",
    slug: "the-perfect-setting-2025",
    title: "The Perfect Setting (2025)",
    description:
      "An aspiring jewelry designer returns to Belgium to visit her grandfather and hopefully win the Valentines Day Diamond Contest.",
    thumbnailUrl:
      "https://ntvb.tmsimg.com/assets/p28926371_v_h8_aa.jpg?w=960&h=540",
    videoUrl:
      "https://short.icu/CRkla3Qzb?thumbnail=https://ntvb.tmsimg.com/assets/p28926371_v_h8_aa.jpg?w=960&h=540",
    duration: 5040,
    views: 73100,
    category: "Movie",
    tags: [
      "the perfect setting (2025)",
      "the perfect setting (2025) watch online",
      "the perfect setting (2025) watch ",
      "the perfect setting (2025) streaming ",
    ],
    releaseDate: "2025-01-25",
    director: "Jonathan Wright",
    featured: false,
  },
  {
    id: "M46",
    slug: "green-and-gold-2025",
    title: "Green and Gold (2025)",
    description:
      "Foreclosure looms over Wisconsin dairy farmer Buck (Craig T. Nelson). With mounting debt and the land his family has cultivated for four generations at risk, Buck refuses to give up his legacy without a fight. Buck’s granddaughter (Madison Lawlor) works alongside him but dreams of a career in music. Her aspirations are fanned by an emerging friendship with a famous musician (Brandon Sklenar), but chasing her dreams might take her far from the farm. With time running out, Buck places a daring Super Bowl bet on his beloved Green Bay Packers, risking it all to save everything he holds dear.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/cIYZ5rWQNtg/maxresdefault.jpg",
    videoUrl:
      "https://short.icu/4wNHuP4KO?thumbnail=https://i.ytimg.com/vi/cIYZ5rWQNtg/maxresdefault.jpg",
    duration: 5460,
    views: 33100,
    category: "Movie",
    tags: [
      "green and gold (2025)",
      "green and gold (2025) watch online",
      "green and gold (2025) watch ",
      "green and gold (2025) streaming ",
    ],
    releaseDate: "2025-01-03",
    director: "Anders Lindwall",
    featured: false,
  },
  {
    id: "M45",
    slug: "sniper-the-last-stand-2025",
    title: "Sniper:The Last Stand (2025)",
    description:
      "To stop an arms dealer (Arnold Vosloo) from unleashing a deadly superweapon, Ace sniper Brandon Beckett (Chad Michael Collins) and Agent Zero (Ryan Robbins) are deployed to Costa Verde to lead a group of elite soldiers against an unrelenting militia. Taking an untested sniper under his wing, Beckett faces his newest challenge: giving orders instead of receiving them. With both time and ammo running low in a race to save humanity, the team must overcome all odds just to survive.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/gcqiVzKnkWA/hq720.jpg?sqp=-/&rs=AOn4CLBl0_C5bWuQnwpzZBODkTJ5YY5aDg",
    videoUrl:
      "https://short.icu/-8myjPwzi?thumbnail=https://i.ytimg.com/vi/gcqiVzKnkWA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBl0_C5bWuQnwpzZBODkTJ5YY5aDg",
    duration: 5940,
    views: 73100,
    category: "Movie",
    tags: [
      "sniper the last stand (2025)",
      "sniper the last stand (2025) watch online",
      "sniper the last stand (2025) watch ",
      "sniper the last stand (2025) streaming ",
    ],
    releaseDate: "2025-01-21",
    director: "Danishka Esterhazy",
    featured: false,
  },
  {
    id: "M44",
    slug: "wish-you-were-here-2025",
    title: "Wish You Were Here (2025)",
    description:
      "Julia Stiles makes her directorial debut in a brilliantly warm and romantic film based on the bestselling novel,  Wish You Were Here. Isabelle Fuhrman, Mena Massoud, Jennifer Grey and Kelsey Grammer star in a fascinating movie about leaving the everyday world behind to take a chance on true romance. When the perfect night with a perfect stranger ends suddenly the next morning, Charlotte searches for answers and meaning in her disappointing life until she uncovers a secret that changes everything.",
    thumbnailUrl:
      "https://ntvb.tmsimg.com/assets/p29045819_v_h8_ab.jpg?w=1280&h=720",
    videoUrl:
      "https://short.icu/lrMArwkGe?thumbnail=https://ntvb.tmsimg.com/assets/p29045819_v_h8_ab.jpg?w=1280&h=720",
    duration: 5940,
    views: 73100,
    category: "Movie",
    tags: [
      "wish you were here (2025)",
      "wish you were here (2025) watch online",
      "wish you were here (2025) watch ",
      "wish you were here (2025) streaming ",
    ],
    releaseDate: "2025-01-17",
    director: "Julia Stiles",
    featured: false,
  },
  {
    id: "M43",
    slug: "youre-cordially-invited-2025",
    title: "Youre Cordially Invited (2025)",
    description:
      "A woman (Reese Witherspoon) planning her sister’s perfect wedding and the father (Will Ferrell) of a young bride-to-be find out that they are double booked for their destination wedding at a remote resort on an island off the Carolina coast. When both parties decide to share the small venue, chaos ensues and our cast of characters begin to face their own insecurities learning more about themselves.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/vUuFuMD7CXA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOYZUhdsC-eB1Jb937R5gldZAscQ  ",
    videoUrl:
      "https://short.icu/WgYcsGCK3?thumbnail=https://i.ytimg.com/vi/vUuFuMD7CXA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOYZUhdsC-eB1Jb937R5gldZAscQ",
    duration: 6540,
    views: 53100,
    category: "Movie",
    tags: [
      "youre cordially invited (2025)",
      "youre cordially invited (2025) watch online",
      "youre cordially invited (2025) watch ",
      "youre cordially invited (2025) streaming ",
    ],
    releaseDate: "2025-01-30",
    director: "Nicholas Stoller",
    featured: false,
  },
  {
    id: "M42",
    slug: "valiant-one-2025",
    title: "Valiant One (2025)",
    description:
      "With tensions between North and South Korea, a US helicopter crashes on the North Korean side. Now the survivors must work together to protect a civilian tech specialist and find their way out without the help of US military support.A routine mission goes awry when a U.S. army helicopter crashes deep within North Korean territory. Now, a team of non-combat tech specialists, led by Captain Edward Brockman (Stokes), must navigate the hostile terrain and fend off North Korean forces as they desperately race to escort a civilian tech specialist across the treacherous Demilitarized Zone.",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKg_LkwAakgZhR79jsXslJxw5gR6hahLoHrw&s",
    videoUrl:
      "https://short.icu/ferW2LJKL?thumbnail=https://dx35vtwkllhj9.cloudfront.net/briarcliffentertainment/valiant-one/images/regions/us/share.jpg",
    duration: 5160,
    views: 73100,
    category: "Movie",
    tags: [
      "valiant one (2025)",
      "valiant one (2025) watch online",
      "valiant one (2025) watch ",
      "valiant one (2025) streaming ",
    ],
    releaseDate: "2025-01-30",
    director: "Steve Barnett",
    featured: false,
  },
  {
    id: "M41",
    slug: "companion-2025",
    title: "Companion (2025)",
    description:
      "A weekend getaway with friends at a remote cabin turns into chaos after it's revealed that one of the guests is not what they seem.",
    thumbnailUrl:
      "https://www.chennaitop10.com/wp-content/uploads/2025/01/Companion-2025-movie-review-1.jpg",
    videoUrl:
      "https://short.icu/cnnbaV0sV?thumbnail=https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/companion-et00414405-1737629384.jpg",
    duration: 5820,
    views: 43100,
    category: "Movie",
    tags: [
      "companion (2025)",
      "companion (2025) watch online",
      "companion (2025) watch ",
      "companion (2025) streaming ",
    ],
    releaseDate: "2025-01-31",
    director: "Drew Hancock",
    featured: false,
  },
  {
    id: "M40",
    slug: "creep-box-2025",
    title: "Creep Box (2025)",
    description:
      "A scientist uses groundbreaking technology to communicate with the deceased but once he is through the looking glass, there is no turning back. A technician for a shadowy tech firm whose devices allow for communication with the dead investigates both a murder case and a suicide looking for answers. As his mind begins to slip, he slowly starts to descend into obsession.",
    thumbnailUrl:
      "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2Ff%2Fplex%2Ffd75ad50-f5ff-45d3-b42b-cfcc71f8696b.jpg",
    videoUrl:
      "https://short.icu/AZUyKwJxX?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/5023f642358520314d5ef2ccb3ada61ca7f1c301a4959d13efe21e815e446f0a.jpg",
    duration: 5700,
    views: 23100,
    category: "Movie",
    tags: [
      "creep box (2025)",
      "creep box (2025) watch online",
      "creep box (2025) watch ",
      "creep box (2025) streaming ",
    ],
    releaseDate: "2025-01-09",
    director: "Patrick Biesemans",
    featured: false,
  },
  {
    id: "M39",
    slug: "piglet-2025",
    title: "Piglet (2025)",
    description:
      "On Kate's 21st birthday camping trip, her friends encounter Piglet, a monstrous human-pig hybrid who brutally murders one of them. They uncover Piglet's origins and Kate must confront her past to survive the relentless killer.",
    thumbnailUrl:
      "https://www.voicesfromthebalcony.com/wp-content/uploads/2025/01/Piglet-Banner.jpg",
    videoUrl:
      "https://short.icu/yE-djVuzh?thumbnail=https://www.voicesfromthebalcony.com/wp-content/uploads/2025/01/Piglet-Banner.jpg",
    duration: 4920,
    views: 53100,
    category: "Movie",
    tags: [
      "piglet (2025)",
      "piglet (2025) watch online",
      "piglet (2025) watch ",
      "piglet (2025) streaming ",
    ],
    releaseDate: "2025-01-25",
    director: "Andrea M. Catinella",
    featured: false,
  },
  {
    id: "M38",
    slug: "into-the-deep-2025",
    title: "Into The Deep (2025)",
    description:
      "Richard Dreyfuss returns to face off against the ocean’s most deadly predator in this jaws-some underwater thriller. Off the coast of Madagascar, a young father and his daughter, Cassidy, share a playful swim until a looming shark attack shatters their idyllic moment. Traumatised by the incident, Cassidy grows into adulthood plagued by fear, until her grandfather, Seamus, an oceanography professor, takes her under his wing to conquer her demons. Years later, Cassidy, now married to Gregg, embarks on a dive expedition to Reunion Island, only to find herself entangled in a perilous situation involving modern-day pirates and a vengeful great white shark. Forced to confront her deepest fears to survive, Cassidy must navigate treacherous waters both physical and psychological, grappling with her past trauma while facing imminent danger.",
    thumbnailUrl:
      "https://www.heavenofhorror.com/wp-content/uploads/2025/01/Into-the-deep-2025-shark-thriller-review-1200x720.jpg",
    videoUrl:
      "https://short.icu/CAhPQvbrV?thumbnail=https://www.heavenofhorror.com/wp-content/uploads/2025/01/Into-the-deep-2025-shark-thriller-review-1200x720.jpg",
    duration: 5340,
    views: 103100,
    category: "Movie",
    tags: [
      "into the deep (2025)",
      "into the deep (2025) watch online",
      "into the deep (2025) watch ",
      "into the deep (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "Christian Sesma",
    featured: false,
  },
  {
    id: "M37",
    slug: "alarum-2025",
    title: "Alarum (2025)",
    description:
      "An action-thriller about two married spies caught in the crosshairs of an international intelligence network that will stop at nothing to obtain a critical asset. Joe (Eastwood) and Lara (Fitzgerald) are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as  ALARUM. Two rogue spies go off-grid, marry, and come under attack at their remote cabin hideaway by various intel agencies seeking a stolen hard drive.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/WxmVAtUmSiw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYl3hxXoOdJ8sde8BO-8ek2IE43A",
    videoUrl:
      "https://short.icu/sTAVXl2rT?thumbnail=https://i.ytimg.com/vi/WxmVAtUmSiw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYl3hxXoOdJ8sde8BO-8ek2IE43A",
    duration: 5640,
    views: 503100,
    category: "Movie",
    tags: [
      "alarum (2025)",
      "alarum (2025) watch online",
      "alarum (2025) watch ",
      "alarum (2025) streaming ",
    ],
    releaseDate: "2025-01-16",
    director: "Michael Polish",
    featured: false,
  },
  {
    id: "M36",
    slug: "den-of-thieves2-pantera-2025",
    title: "Den of Thieves 2: Pantera (2025)",
    description:
      "The sequel picks up with Big Nick tracking down bad guys on the streets of Europe and getting closer to capturing Donnie (Jackson). Donnie, meanwhile, has become caught up in the dangerous world of diamond thieves and the Panther mafia, as a heist on the world's largest diamond exchange is being planned. Big Nick is back on the hunt in Europe and closing in on Donnie, who is embroiled in the treacherous world of diamond thieves and the infamous Panther mafia, as they plot a massive heist of the world's largest diamond exchange.",
    thumbnailUrl:
      "https://weliveentertainment.com/wp-content/uploads/2025/01/https-3A-2F-2Fcdn.evbuc_.com-2Fimages-2F924038513-2F575655774365-2F1-2Foriginal.20241228-023925.jpg",
    videoUrl:
      "https://short.icu/ivlmoChtA?thumbnail=https://weliveentertainment.com/wp-content/uploads/2025/01/https-3A-2F-2Fcdn.evbuc_.com-2Fimages-2F924038513-2F575655774365-2F1-2Foriginal.20241228-023925.jpg",
    duration: 6540,
    views: 303100,
    category: "Movie",
    tags: [
      "den of thieves 2 pantera (2025)",
      "den of thieves 2 pantera (2025) watch online",
      "den of thieves 2 pantera (2025) watch ",
      "den of thieves 2 pantera (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Christian Gudegast",
    featured: false,
  },
  {
    id: "M35",
    slug: "the-gardener-2025",
    title: "The Gardener (2025)",
    description:
      "Serge holds a state secret. He, his family and gardener Leo appear on a government death list. They attempt to devise a plan to stay alive.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/ZLrAVWhRDh0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ1Vq_Om_wO0lWpXk9wUHAfYguuA",
    videoUrl:
      "https://short.icu/v52QrwiEV?thumbnail=https://i.ytimg.com/vi/ZLrAVWhRDh0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ1Vq_Om_wO0lWpXk9wUHAfYguuA",
    duration: 6540,
    views: 903100,
    category: "Movie",
    tags: [
      "the gardener (2025)",
      "the gardener (2025) watch online",
      "the gardener (2025) watch ",
      "the gardener (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "David Charhon",
    featured: false,
  },
  {
    id: "M34",
    slug: "polar-opposites-2025",
    title: "Polar Opposites (2025)",
    description:
      "Emma needs to get to Antarctica to reach her father and travels to South America but can't get on a boat for the last leg. She sneaks onto a cruise ship and meets engineer Andy.",
    thumbnailUrl:
      "https://ntvb.tmsimg.com/assets/p29052225_b_h8_aa.jpg?w=1280&h=720",
    videoUrl:
      "https://short.icu/fsOwx0iC0?thumbnail=https://ntvb.tmsimg.com/assets/p29052225_b_h8_aa.jpg?w=1280&h=720",
    duration: 5040,
    views: 403100,
    category: "Movie",
    tags: [
      "polar opposites (2025)",
      "polar opposites (2025) watch online",
      "polar opposites (2025) watch ",
      "polar opposites (2025) streaming ",
    ],
    releaseDate: "2025-01-11",
    director: "Colin Theys",
    featured: false,
  },
  {
    id: "M33",
    slug: "back-in-action-2025",
    title: "Back in Action (2025)",
    description:
      "Former CIA spies Emily and Matt are pulled back into espionage after their secret identities are exposed.",
    thumbnailUrl:
      "https://www.filmofilia.com/wp-content/uploads/2025/01/Back-in-Action-1.jpg",
    videoUrl:
      "https://short.icu/rbH28i_2e?thumbnail=https://www.filmofilia.com/wp-content/uploads/2025/01/Back-in-Action-1.jpg",
    duration: 6840,
    views: 703100,
    category: "Movie",
    tags: [
      "back in action (2025)",
      "back in action (2025) watch online",
      "back in action (2025) watch ",
      "back in action (2025) streaming ",
    ],
    releaseDate: "2025-01-30",
    director: "Seth Gordon",
    featured: false,
  },
  {
    id: "M32",
    slug: "sky-force-2025",
    title: "Sky Force (2025)",
    description:
      "Skyforce unravels a gripping tale inspired by true events from one of the deadliest air strikes between India and Pakistan. A hero lost, a comrade's quest for truth-an epic tribute to bravery, sacrifice, and unbreakable courage.",
    thumbnailUrl:
      "https://www.chennaitop10.com/wp-content/uploads/2025/01/et00371539-rmgsshjdlz-landscape.jpg",
    videoUrl:
      "https://short.icu/dsGrOMVze?thumbnail=https://img.mensxp.com/media/content/2025/Jan/header_67931f6768aa6.jpeg",
    duration: 7320,
    views: 403100,
    category: "Movie",
    tags: [
      "sky force (2025)",
      "sky force (2025) watch online",
      "sky force (2025) watch ",
      "sky force (2025) streaming ",
    ],
    releaseDate: "2025-01-05",
    director: "Abhishek Anil Kapur, Sandeep Kewlani",
    featured: false,
  },
  {
    id: "M31",
    slug: "wolf-man-2025",
    title: "Wolf Man (2025)",
    description:
      "A family at a remote farmhouse is attacked by an unseen animal, but as the night stretches on, the father begins to transform into something unrecognizable.",
    thumbnailUrl:
      "https://indieentertainmentmedia.com/wp-content/uploads/2025/01/wolfmanbanner-599x330-1.jpg",
    videoUrl:
      "https://short.icu/G7Gpsn03L?thumbnail=https://indieentertainmentmedia.com/wp-content/uploads/2025/01/wolfmanbanner-599x330-1.jpg",
    duration: 6300,
    views: 1303100,
    category: "Movie",
    tags: [
      "wolf man (2025)",
      "wolf man (2025) watch online",
      "wolf man (2025) watch ",
      "wolf man (2025) streaming ",
    ],
    releaseDate: "2025-01-28",
    director: "Leigh Whannell",
    featured: false,
  },
  {
    id: "M30",
    slug: "the-bear-lake-murders-2025",
    title: "The Bear Lake Murders (2025)",
    description:
      "A sheriff teams up with a big-city detective to uncover the truth behind a series of annual deaths in a resort town. Their investigation leads them to believe that a killer, hidden among tourists and residents, is preying on vacationers every year.",
    thumbnailUrl:
      "https://i0.wp.com/lifetimeuncorked.com/wp-content/uploads/2025/01/p28991091_v_h8_aa-1.jpg",
    videoUrl:
      "https://short.icu/BAdYSd-bs?thumbnail=https://i0.wp.com/lifetimeuncorked.com/wp-content/uploads/2025/01/p28991091_v_h8_aa-1.jpg",
    duration: 5220,
    views: 903100,
    category: "Movie",
    tags: [
      "the bear lake murders (2025)",
      "the bear lake murders (2025) watch online",
      "the bear lake murders (2025) watch ",
      "the bear lake murders (2025) streaming ",
    ],
    releaseDate: "2025-01-12",
    director: "Danny J. Boyle",
    featured: false,
  },
  {
    id: "M29",
    slug: "unstoppable-2025",
    title: "Unstoppable (2025)",
    description:
      "Centers around the life of wrestler Anthony Robles, who was born with one leg and won a national championship in 2011 while competing at Arizona State University.",
    thumbnailUrl:
      "https://ntvb.tmsimg.com/assets/p28031079_v_h8_aa.jpg?w=1280&h=720",
    videoUrl:
      "https://short.icu/e4E37sNA4?thumbnail=https://ntvb.tmsimg.com/assets/p28031079_v_h8_aa.jpg?w=1280&h=720",
    duration: 6960,
    views: 303100,
    category: "Movie",
    tags: [
      "unstoppable (2025)",
      "unstoppable (2025) watch online",
      "unstoppable (2025) watch ",
      "unstoppable (2025) streaming ",
    ],
    releaseDate: "2025-01-16",
    director: "William Goldenberg",
    featured: false,
  },
  {
    id: "M28",
    slug: "sons-of-ecstasy-2025",
    title: "Sons Of Ecstasy (2025)",
    description:
      "In 1990s Arizona, an English stockbroker clashes with a mobster's son over the ecstasy trade. The Gravano family shares their perspective as two unlikely rivals vie for control amid guns, gangsters, and raves in the desert.",
    thumbnailUrl:
      "https://vmndims.binge.com.au/api/v2/img/677dac55e4b01289960a7dae-1736289426130?location=tile&imwidth=1280",
    videoUrl:
      "https://short.icu/zOPjqeq-T?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/a97d39aaf923893231bd25b76284269e7b637a38355bc67fe8a6eef06b46a682._SX1080_FMjpg_.jpg",
    duration: 5460,
    views: 103100,
    category: "Movie",
    tags: [
      "sons of ecstasy (2025)",
      "sons of ecstasy (2025) watch online",
      "sons of ecstasy (2025) watch ",
      "sons of ecstasy (2025) streaming ",
    ],
    releaseDate: "2025-01-09",
    director: "Elli Hakami, Julian P. Hobbs",
    featured: false,
  },
  {
    id: "M27",
    slug: "my-argentine-heart-2025",
    title: "My Argentine Heart (2025)",
    description:
      "Abril goes to Argentina to save her family ranch from being bought by her ex. But when outside forces threaten the ranch the pair must come together, rekindling their love in the process.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BN2ZkM2MwNGItZjA2MS00MmNkLTlhZWUtOGI1ZDA3ODhkYjgyXkEyXkFqcGc@._V1_.jpg",
    videoUrl:
      "https://short.icu/PTkIN1rfO?thumbnail=https://m.media-amazon.com/images/M/MV5BN2ZkM2MwNGItZjA2MS00MmNkLTlhZWUtOGI1ZDA3ODhkYjgyXkEyXkFqcGc@._V1_.jpg",
    duration: 5040,
    views: 503100,
    category: "Movie",
    tags: [
      "my argentine heart (2025)",
      "my argentine heart (2025) watch online",
      "my argentine heart (2025) watch ",
      "my argentine heart (2025) streaming ",
    ],
    releaseDate: "2025-01-18",
    director: "Terry Ingram",
    featured: false,
  },
  {
    id: "M26",
    slug: "flight-risk-2025",
    title: "Flight Risk (2025)",
    description:
      "A pilot transports an Air Marshal accompanying a fugitive to trial. As they cross the Alaskan wilderness, tensions soar and trust is tested, as not everyone on board is who they seem.",
    thumbnailUrl:
      "https://www.geeksandgamers.com/wp-content/uploads/2025/01/Flight-Risk-Cover.jpg",
    videoUrl:
      "https://short.icu/WLM5gP-vt?thumbnail=https://www.geeksandgamers.com/wp-content/uploads/2025/01/Flight-Risk-Cover.jpg",
    duration: 5460,
    views: 703100,
    category: "Movie",
    tags: [
      "flight risk (2025)",
      "flight risk (2025) watch online",
      "flight risk (2025) watch ",
      "flight risk (2025) streaming ",
    ],
    releaseDate: "2025-01-24",
    director: "Mel Gibson",
    featured: false,
  },
  {
    id: "M25",
    slug: "presence-2025",
    title: "Presence (2025)",
    description:
      "A family becomes convinced they are not alone after moving into their new home in the suburbs.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/WkPWfYe_IX4/mqdefault.jpg",
    videoUrl:
      "https://short.icu/2132U9YM9?thumbnail=https://i.ytimg.com/vi/WkPWfYe_IX4/mqdefault.jpg",
    duration: 5040,
    views: 303100,
    category: "Movie",
    tags: [
      "presence (2025)",
      "presence (2025) watch online",
      "presence (2025) watch ",
      "presence (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Steven Soderbergh",
    featured: false,
  },
  {
    id: "M24",
    slug: "star-trek-section31-2025",
    title: "Star Trek Section 31 (2025)",
    description:
      "In Star Trek: Section 31, Emperor Philippa Georgiou joins a secret division of Starfleet tasked with protecting the United Federation of Planets, and must face the sins of her past.",
    thumbnailUrl:
      "https://blog.trekcore.com/wp-content/uploads/2024/12/tw-s31-trailer.jpg",
    videoUrl:
      "https://short.icu/K4oEMO_B_?thumbnail=https://blog.trekcore.com/wp-content/uploads/2024/12/tw-s31-trailer.jpg",
    duration: 5700,
    views: 193100,
    category: "Movie",
    tags: [
      "star trek section 31 (2025)",
      "star trek section 31 (2025) watch online",
      "star trek section 31 (2025) watch ",
      "star trek section 31 (2025) streaming ",
    ],
    releaseDate: "2025-01-24",
    director: "Olatunde Osunsanmi",
    featured: false,
  },
  {
    id: "M23",
    slug: "sweet-dreams-2025",
    title: "Sweet Dreams (2025)",
    description:
      "Two strangers begin dreaming about each other, sparking a search to unravel the mystery. Is their connection a surreal coincidence, or something more real than they could imagine?",
    thumbnailUrl:
      "https://i.ytimg.com/vi/H9Buj12s7SM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAcjb7LvEvQGrEICg98XE7Zwjnmbg",
    videoUrl:
      "https://short.icu/MwBH5Rb35?thumbnail=https://i.ytimg.com/vi/H9Buj12s7SM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAcjb7LvEvQGrEICg98XE7Zwjnmbg",
    duration: 6420,
    views: 123100,
    category: "Movie",
    tags: [
      "sweet dreams (2025)",
      "sweet dreams (2025) watch online",
      "sweet dreams (2025) watch ",
      "sweet dreams (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Victor Mukherjee",
    featured: false,
  },
  {
    id: "M22",
    slug: "match-fixing-2025",
    title: "Match Fixing (2025)",
    description:
      "Match Fixing is an upcoming political thriller based on the book 'The Game Behind Saffron Terror' by Col. Kanwar Khatana (Retd.). The film is directed by Kedaar Gaekwad and produced by Pallavi Gurjar's ArtArena Creations Pvt. Ltd.",
    thumbnailUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00416594-wtbswakdhv-landscape.jpg",
    videoUrl:
      "https://short.icu/9tPlcpndm?thumbnail=https://assets-in.bmscdn.com/discovery-catalog/events/et00416594-wtbswakdhv-landscape.jpg",
    duration: 8760,
    views: 893100,
    category: "Movie",
    tags: [
      "match fixing (2025)",
      "match fixing (2025) watch online",
      "match fixing (2025) watch ",
      "match fixing (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Kedar Prabhakar Gaekwad",
    featured: false,
  },
  {
    id: "M21",
    slug: "emergency-2025",
    title: "Emergency (2025)",
    description:
      "1975. A chronicle of the incidents that took place under the leadership of Mrs. Indira Gandhi, one of the most powerful women in Indian history.",
    thumbnailUrl:
      "https://images.moneycontrol.com/static-mcnews/2025/01/20250109094725_IMG_7182.png?impolicy=website&width=770&height=431",
    videoUrl:
      "https://short.icu/AOs6_QWOo?thumbnail=https://imgeng.jagran.com/images/2024/08/29/article/image/Emergency%20OTT%20Release-1724913313837.jpg",
    duration: 8760,
    views: 563100,
    category: "Movie",
    tags: [
      "emergency (2025)",
      "emergency (2025) watch online",
      "emergency (2025) watch ",
      "emergency (2025) streaming ",
    ],
    releaseDate: "2025-01-17",
    director: "Kangana Ranaut",
    featured: false,
  },
  {
    id: "M1",
    slug: "the-mehta-boys-2025",
    title: "The Mehta Boys (2025)",
    description:
      "A father and son embark on an involuntary 48-hour odyssey, navigating clashing perspectives as they confront the intricate nuances of their strained relationship.",
    thumbnailUrl:
      "https://pimwp.s3-accelerate.amazonaws.com/2025/01/Untitled-design-2025-01-29T195340.696.jpg",
    videoUrl:
      "https://short.icu/qzExMsMvCy?thumbnail=https://pimwp.s3-accelerate.amazonaws.com/2025/01/Untitled-design-2025-01-29T195340.696.jpg",
    duration: 6960,
    views: 920000,
    category: "Movie",
    tags: [
      "the mehta boys (2025)",
      "the mehta boys (2025) watch online",
      "the mehta boys (2025) watch ",
      "the mehta boys (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "Boman Irani",
    featured: false,
  },
  {
    id: "M8",
    slug: "fight-or-flight-2025",
    title: "Fight Or Flight (2025)",
    description:
      'Fight Or Flight aint gonna be winning any Oscars. Not a negative in any respect though. This is the kind of fun wild ride that is, dare I say, intelligently ridiculous entertaining. Recycling bits of the old schtick of bringing an agent back in from the cold with many borrowed bits and pieces taken to an absurdly concocted whole. A lot of the credit goes to the performance of Josh Harnett being able to pull-off great action melded to wicked good comedy. The production values feel high, but the sum of the deliberate crazed rough edges give it a "not Hollywood" zeitgeist. I liked the co-star a lot and the supporting cast pulled off a simmering comic-book feel to the production, especially the villain and hero characters. This is a park your left brain popcorn flick. So, if you enjoy this type of always moving escapism (you know who you are) its highly recommended.',
    thumbnailUrl:
      "https://i.ytimg.com/vi/lfrv4fwEHyE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABzIyef19tx_5x52uARmGDaYIbCg",
    videoUrl:
      "https://short.icu/oRwA5Jpvp?thumbnail=https://i.ytimg.com/vi/lfrv4fwEHyE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABzIyef19tx_5x52uARmGDaYIbCg",
    duration: 5820,
    views: 1500000,
    category: "Movie",
    tags: [
      "fight or flight (2025)",
      "fight or flight (2025) watch online",
      "fight or flight (2025) watch ",
      "fight or flight (2025) streaming ",
    ],
    releaseDate: "2025-02-28",
    director: "James Madigan",
    featured: false,
  },
  {
    id: "M2",
    slug: "heart-eyes-2025",
    title: "Heart Eyes (2025)",
    description:
      'For the past several years, the "Heart Eyes Killer" has wreaked havoc on Valentines Day by stalking and murdering romantic couples. This Valentines Day, no couple is safe.',
    thumbnailUrl:
      "https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/02/Heart-Eyes-2025-Review-Future-of-the-Force.jpg?fit=1024%2C576&ssl=1",
    videoUrl:
      "https://short.icu/eU7x4cuxu?thumbnail=https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/02/Heart-Eyes-2025-Review-Future-of-the-Force.jpg?fit=1024%2C576&ssl=1",
    duration: 5340,
    views: 2300000,
    category: "Movie",
    tags: [
      "heart eyes (2025)",
      "heart eyes (2025) watch online",
      "heart eyes (2025) watch ",
      "heart eyes (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "Josh Ruben",
    featured: false,
  },
  {
    id: "M3",
    slug: "love-hurts-2025",
    title: "Love Hurts (2025)",
    description:
      "A realtor is pulled back into the life he left behind after his former partner-in-crime resurfaces with an ominous message. With his crime-lord brother also on his trail, he must confront his past and the history he never fully buried.",
    thumbnailUrl:
      "https://movies.universalpictures.com/media/04-lh-dm-mobile-banner-1080x745-fri-rr-f01-012825-67a29d839d774-1.jpg",
    videoUrl:
      "https://short.icu/b3O26PZpO?thumbnail=https://movies.universalpictures.com/media/04-lh-dm-mobile-banner-1080x745-fri-rr-f01-012825-67a29d839d774-1.jpg",
    duration: 4980,
    views: 1800000,
    category: "Movie",
    tags: [
      "love hurts (2025)",
      "love hurts (2025) watch online",
      "love hurts (2025) watch ",
      "love hurts (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "Jonathan Eusebio",
    featured: false,
  },
  {
    id: "M4",
    slug: "henry-danger-the-movie-2025",
    title: "Henry Danger: The Movie (2025)",
    description:
      'A theatrical film based on the Nickelodeon Show "Henry Danger."',
    thumbnailUrl:
      "https://i.ytimg.com/vi/RISVGV9SbDM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAQBehFhS8tv7iQldoG7kZ6v80Dng",
    videoUrl:
      "https://short.icu/ANVm_UPed?thumbnail=https://i.ytimg.com/vi/RISVGV9SbDM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAQBehFhS8tv7iQldoG7kZ6v80Dng",
    duration: 5160,
    views: 1200000,
    category: "Movie",
    tags: [
      "henry danger the movie (2025)",
      "henry danger the movie (2025) watch online",
      "henry danger the movie (2025) watch ",
      "henry danger the movie (2025) streaming ",
    ],
    releaseDate: "2025-01-17",
    director: "Joe Menendez",
    featured: false,
  },
  {
    id: "M5",
    slug: "man-with-no-past-2025",
    title: "Man With No Past (2025)",
    description:
      '"Amnesiac man awakens in unknown city, seeks truth about past. Aided by allies, infiltrates powerful gang, engages in time-transcending battle while fate looms.',
    thumbnailUrl:
      "https://i.ytimg.com/vi/NrY4GuKoQwc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA7h3zp9SJjPgUxqT_Su7JR1cpY-w",
    videoUrl:
      "https://short.icu/B7RKfbMdr?thumbnail=https://i.ytimg.com/vi/NrY4GuKoQwc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA7h3zp9SJjPgUxqT_Su7JR1cpY-w",
    duration: 6120,
    views: 950000,
    category: "Movie",
    tags: [
      "man with no past (2025)",
      "man with no past (2025) watch online",
      "man with no past (2025) watch ",
      "man with no past (2025) streaming ",
    ],
    releaseDate: "2025-01-14",
    director: "James Bamford",
    featured: false,
  },
  {
    id: "M6",
    slug: "peter-pans-neverland-nightmare-2025",
    title: "Peter Pans Neverland Nightmare (2025)",
    description:
      'Wendy Darling strikes out in an attempt to rescue her brother Michael from "the clutches of the evil Peter Pan." Along the way she meets Tinkerbell, who will be seen taking heroin, believing that its pixie dust.',
    thumbnailUrl:
      "https://image.tmdb.org/t/p/w1280/tHv9oYcVel8KG9Eb0B39VxMSEmV.jpg",
    videoUrl:
      "https://short.icu/PHvOGMaBo?thumbnail=https://image.tmdb.org/t/p/w1280/tHv9oYcVel8KG9Eb0B39VxMSEmV.jpg",
    duration: 5340,
    views: 780000,
    category: "Movie",
    tags: [
      "peter pans neverland nightmare (2025)",
      "peter pans neverland nightmare (2025) watch online",
      "peter pans neverland nightmare (2025) watch ",
      "peter pans neverland nightmare (2025) streaming ",
    ],
    releaseDate: "2025-01-13",
    director: "Scott Chambers",
    featured: false,
  },
  {
    id: 'M7',
    slug: 'luccas-world-2025',
    title: 'Luccas World (2025)',
    description: 'Determined to help her son, who has cerebral palsy, Bárbara takes her family to India for an experimental treatment.',
    thumbnailUrl: 'https://mp4moviez.ind.in/files/luccas-world.webp',
    videoUrl: 'https://short.icu/MeZeLdPLx?thumbnail=https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa3Qo1KVTUQ37Bsp2IosTn7WUKCPycwk-1e0q1shYERx4HkCYwIkrjBJQOwkyH_DZjiLz0t34QI-85qyj4_pOyapfHnKWtZSCLvnQmlmHzcyyhWNjdG4LavOjdTOaz-RpC8p0uHbAQkh7B4LAcf9NU0Zj5Y_zVOH22YFXdpB7o7hOAptkCy2vkM1lYS6ciw.jpg?r=5b7',
    duration: 5760,
    views: 1100000,
    category: 'Movie',
    tags: [ 'luccas world (2025)', 'luccas world (2025) watch online', 'luccas world (2025) watch ', 'luccas world (2025) streaming '],
    releaseDate: '2025-01-31',
    director: 'Mariana Chenillo',
    featured: false
  },
  {
    id: "M9",
    slug: "mrs-2025",
    title: "Mrs (2025)",
    description:
      "The life of a married girl who finds her identity amidst navigating her life in kitchen.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/BxnCNl9KE6E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCYRzId7eIl5Z3B4MUN2RYI0DSIA",
    videoUrl:
      "https://short.icu/GA8J8O9jz?thumbnail=https://i.ytimg.com/vi/BxnCNl9KE6E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCYRzId7eIl5Z3B4MUN2RYI0DSIA",
    duration: 6360,
    views: 1300000,
    category: "Movie",
    tags: [
      "mrs (2025)",
      "mrs (2025) watch online",
      "mrs (2025) watch ",
      "mrs (2025) streaming ",
    ],
    releaseDate: "2025-02-07",
    director: "Arati Kadav",
    featured: false,
  },
  {
    id: "M10",
    slug: "deva-2025",
    title: "Deva (2025)",
    description:
      "A brilliant yet rebellious police officer uncovers a web of deceit and betrayal while investigating a high-profile case.",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkD7fzHHhGAw8ZWqLLoSNuCeKst0C-11wUwg&s",
    videoUrl:
      "https://short.icu/cYe80l2VX?thumbnail=https://static.toiimg.com/thumb/msid-115765023,width-400,resizemode-4/115765023.jpg",
    duration: 9360,
    views: 850000,
    category: "Movie",
    tags: [
      "deva (2025)",
      "deva (2025) watch online",
      "deva (2025) watch ",
      "deva (2025) streaming ",
    ],
    releaseDate: "2025-01-31",
    director: "Rosshan Andrrews",
    featured: false,
  },
  {
    id: "M11",
    slug: "saale-aashiq-2025",
    title: "Saale Aashiq (2025)",
    description:
      "The story is about standing up to the hate politics, age-old traditions and an eventual death threats as a couple faces opposition from their respective families.",
    thumbnailUrl:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202501/Saale_Aashiq_1_1737030430.jpg?downsize=400:*",
    videoUrl:
      "https://short.icu/Mlg2yErs7?thumbnail=https://assets.gadgets360cdn.com/pricee/assets/product/202501/Saale_Aashiq_1_1737030430.jpg?downsize=400:*",
    duration: 7200,
    views: 971234,
    category: "Movie",
    tags: [
      "saale aashiq (2025)",
      "saale aashiq (2025) watch online",
      "saale aashiq (2025) watch ",
      "saale aashiq (2025) streaming ",
    ],
    releaseDate: "2025-02-01",
    director: "Siddharth Singh, Garima Wahal",
    featured: false,
  },
  {
    id: "M12",
    slug: "pati-patni-aur-padosan-2025",
    title: "Pati Patni Aur Padosan (2025)",
    description:
      "A housewife's fascination with her secretive new neighbor turns dangerous when she discovers the woman's dark past and must protect her husband from becoming the neighbor's next victim.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNWEwOWM1YTItMzkyNi00NDY4LWE5ZjQtZmQxMjFiOGJjYWRhXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
    videoUrl:
      "https://short.icu/DXV_PiBCQ?thumbnail=https://i.ytimg.com/vi/o1ICE7ukEEE/maxresdefault.jpg",
    duration: 9420,
    views: 603000,
    category: "Movie",
    tags: [
      "pati patni aur padosan (2025)",
      "pati patni aur padosan (2025) watch online",
      "pati patni aur padosan (2025) watch ",
      "pati patni aur padosan (2025) streaming ",
    ],
    releaseDate: "2025-02-25",
    director: "Raaj Shetty",
    featured: false,
  },
  {
    id: "M13",
    slug: "mordern-society-2025",
    title: "Mordern Society (2025)",
    description:
      "A housewife's fascination with her secretive new neighbor turns dangerous when she discovers the woman's dark past and must protect her husband from becoming the neighbor's next victim.",
    thumbnailUrl:
      "https://www.mastram.app/media/posters/2025-01-30e836ce76bdda40acb4238210382322ea.jpg",
    videoUrl:
      "https://short.icu/EIkznxb3R?thumbnail=https://www.mastram.app/media/posters/2025-01-30e836ce76bdda40acb4238210382322ea.jpg",
    duration: 1260,
    views: 203000,
    category: "Movie",
    tags: [
      "mordern society (2025)",
      "mordern society (2025) watch online",
      "mordern society (2025) watch ",
      "mordern society (2025) streaming ",
    ],
    releaseDate: "2025-02-02",
    director: "NA",
    featured: false,
  },
  {
    id: "M14",
    slug: "the-storyteller-2025",
    title: "The Storyteller (2025)",
    description:
      "Based on Satyajit Ray's short story \"Golpo Boliye Tarini Khuro\" about originality versus plagiarism.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/aM8rXa15u-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCMS0FUq2z-RvzpzDSzedI9CpvCw",
    videoUrl:
      "https://short.icu/5r0qpsvZ-?thumbnail=https://i.ytimg.com/vi/aM8rXa15u-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCMS0FUq2z-RvzpzDSzedI9CpvCw",
    duration: 6960,
    views: 403000,
    category: "Movie",
    tags: [
      "the storyteller (2025)",
      "the storyteller (2025) watch online",
      "the storyteller (2025) watch ",
      "the storyteller (2025) streaming ",
    ],
    releaseDate: "2025-01-28",
    director: "Ananth Mahadevan",
    featured: false,
  },
  {
    id: "M15",
    slug: "hisaab-barabar-2025",
    title: "Hisaab Barabar (2025)",
    description:
      "Based on Satyajit Ray's short story Golpo Boliye Tarini Khuro about originality versus plagiarism.",
    thumbnailUrl:
      "https://filminformation.com/wp-content/uploads/2025/01/hisab-barabar.jpg",
    videoUrl:
      "https://short.icu/TrRlfszyY?thumbnail=https://filminformation.com/wp-content/uploads/2025/01/hisab-barabar.jpg",
    duration: 6720,
    views: 503000,
    category: "Movie",
    tags: [
      "hisaab barabar (2025)",
      "hisaab barabar (2025) watch online",
      "hisaab barabar (2025) watch ",
      "hisaab barabar (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Ashwani Dhir",
    featured: false,
  },
  {
    id: "M16",
    slug: "personal-trainer-2025",
    title: "Personal Trainer (2025)",
    description:
      "At an upscale gym, fitness and ambition mix with murder, secrets, and betrayal. As lives overlap, hidden motives emerge. In this web of love, greed, and deception, trust is scarce and survival paramount.",
    thumbnailUrl:
      "https://images1.hungama.com/tr:n-a_169_m/c/1/101/6d3/123652799/123652799_1920x1080.jpg?version=23_16",
    videoUrl:
      "https://short.icu/XujxF_ze6?thumbnail=https://i.ytimg.com/vi/yQlTfnZkPns/hqdefault.jpg",
    duration: 7140,
    views: 303100,
    category: "Movie",
    tags: [
      "personal trainer (2025)",
      "personal trainer (2025) watch online",
      "personal trainer (2025) watch ",
      "personal trainer (2025) streaming ",
    ],
    releaseDate: "2025-01-23",
    director: "Amit Khanna",
    featured: false,
  },
  {
    id: "M17",
    slug: "hum-aapke-hai-wo-2025",
    title: "Hum Aapke Hai Wo (2025)",
    description:
      "A tale of dark family secrets, greed, and betrayal, where Disha seeks justice for her sister's death, uncovering conspiracies as love and revenge intertwine with Pritam's manipulations to seize his brother's empire, igniting a relentless pursuit of truth.",
    thumbnailUrl:
      "https://media-files.atrangii.in/media-metadata/677487d73db97806fe6bfd99",
    videoUrl:
      "https://short.icu/2bcLgjcra?thumbnail=https://media-files.atrangii.in/media-metadata/676da1873db97806fe6979b5",
    duration: 4740,
    views: 603100,
    category: "Movie",
    tags: [
      "hum aapke hai wo (2025)",
      "hum aapke hai wo (2025) watch online",
      "hum aapke hai wo (2025) watch ",
      "hum aapke hai wo (2025) streaming ",
    ],
    releaseDate: "2025-01-03",
    director: "Sanjeev Srivastava",
    featured: false,
  },
  {
    id: "M18",
    slug: "fateh-2025",
    title: "Fateh (2025)",
    description:
      "Follows a former gangster who is hired to guard a young woman named Khushi. In order to keep her safe, Fateh must employ all of his abilities while simultaneously attempting to learn the truth about the threats made against her.",
    thumbnailUrl:
      "https://static.digit.in/product/fateh-dba8cb908f.jpeg",
    videoUrl:
      "https://short.icu/ayaCQqVXg?thumbnail=https://static.digit.in/product/fateh-dba8cb908f.jpeg",
    duration: 7620,
    views: 303100,
    category: "Movie",
    tags: [
      "fateh (2025)",
      "fateh (2025) watch online",
      "fateh (2025) watch ",
      "fateh (2025) streaming ",
    ],
    releaseDate: "2025-01-10",
    director: "Sonu Sood",
    featured: false,
  },
  {
    id: "M19",
    slug: "ek-anchaahi-jalan-2025",
    title: "Ek Anchaahi Jalan (2025)",
    description:
      "A perfect marriage, a hidden storm. Aakash's quest for validation leads him to his wife's best friend, sparking a web of emotions that threatens to destroy everything. Will love prevail or will jealousy consume them?",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDweQ85tfhpCXZTI4wqkDoaIVmKLrCYxcEA&s",
    videoUrl:
      "https://short.icu/2Nb5WhS9i?thumbnail=https://cineru.lk/wp-content/uploads/2025/02/ek-anchahi-jalan-660x330.jpg",
    duration: 5220,
    views: 33100,
    category: "Movie",
    tags: [
      "ek anchaahi jalan (2025)",
      "ek anchaahi jalan (2025) watch online",
      "ek anchaahi jalan (2025) watch ",
      "ek anchaahi jalan (2025) streaming ",
    ],
    releaseDate: "2025-02-05",
    director: "Ajay V.",
    featured: false,
  },
  {
    id: "M20",
    slug: "mission-grey-house-2025",
    title: "Mission Grey House (2025)",
    description:
      "Boy dons police uniform to fight criminals, pursuing his dream of becoming an officer. Kiara's father, an IG, learns of his actions and warns him about potential consequences.",
    thumbnailUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00426221-jnrndsrqau-landscape.jpg",
    videoUrl:
      "https://short.icu/7tAka12yN?thumbnail=https://assets-in.bmscdn.com/discovery-catalog/events/et00426221-jnrndsrqau-landscape.jpg",
    duration: 7080,
    views: 63100,
    category: "Movie",
    tags: [
      "mission grey house (2025)",
      "mission grey house (2025) watch online",
      "mission grey house (2025) watch ",
      "mission grey house (2025) streaming ",
    ],
    releaseDate: "2025-01-17",
    director: "Naushad Siddiqui",
    featured: false,
  },
  
];

export const getAllDocumentaries = cache(async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return documentaries;
});

export const getFeaturedDocumentaries = cache(async (limit?: number) => {
  const featured = documentaries.filter((doc) => doc.featured);
  return limit ? featured.slice(0, limit) : featured;
});

export const getRecentDocumentaries = cache(async (limit?: number) => {
  // Sort by release date (newest first)
  const sorted = [...documentaries].sort(
    (a, b) =>
      new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
});

export const getDocumentaryBySlug = cache(async (slug: string) => {
  return documentaries.find((doc) => doc.slug === slug) || null;
});

export const getRelatedDocumentaries = cache(
  async (id: string, category: string, limit = 4) => {
    // Get documentaries in the same category, excluding the current one
    const related = documentaries
      .filter((doc) => doc.id !== id && doc.category === category)
      .slice(0, limit);

    // If we don't have enough related docs by category, add some featured ones
    if (related.length < limit) {
      const featured = documentaries
        .filter(
          (doc) =>
            doc.id !== id &&
            doc.featured &&
            !related.some((r) => r.id === doc.id)
        )
        .slice(0, limit - related.length);

      return [...related, ...featured];
    }

    return related;
  }
);

export const getDocumentariesByCategory = cache(async (category: string) => {
  return documentaries.filter((doc) => doc.category === category);
});

export const searchDocumentaries = cache(async (query: string) => {
  const searchTerm = query.toLowerCase();
  return documentaries.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm) ||
      doc.description.toLowerCase().includes(searchTerm) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
});
