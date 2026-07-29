export const siteUrl = "https://audio.danogrodnik.com";

export const siteProfile = {
  name: "Dan Ogrodnik",
  title: "Session & Live Musician · Music Director · Session & Live Engineer",
  tagline:
    "CalArts MFA / Hartt BM. World and classical percussion for sessions, stages, and pits - with music direction and tracking / live sound when the room needs it.",
  email: "dan@danogrodnik.com",
  phone: "",
  location: "Los Angeles / Crestline, CA",
  resumePdf: "/Dan_Ogrodnik_Audio_Resume.pdf",
  cvPdf: "/Dan_Ogrodnik_Audio_CV.pdf",
  webdevUrl: "https://www.danogrodnik.com",
  bookingUrl: "",
  contactMessage:
    "Booking session or live musician work, music direction, or studio / live sound support? Email me - I respond quickly.",
  social: [
    { label: "SoundCloud", url: "https://soundcloud.com/ogrods" },
    { label: "Instagram", url: "https://instagram.com/ogrods" },
    {
      label: "YouTube",
      url: "https://www.youtube.com/watch?v=3FF-_p08OfE",
    },
    {
      label: "Izela Bandcamp",
      url: "https://izelamusic.bandcamp.com/album/i-2",
    },
  ],
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const reviews = [
  {
    quote:
      "With the success of ensembles such as Repercussion Unit, Hands On'Semble, HazMat Percussion Duo, Limbs, Duo Jalal, Rhein Percussion, and percussionists Greg Meyer, B. Michael Williams, and Shane Shanahan, among many others, world percussion compositions are increasing in quality and quantity.",
    source: "Percussive Notes",
  },
  {
    quote:
      "The rhythm was thunderous as four percussionists created a cacophony of beats and tempo... drawing a huge ovation. This group's drum kit, bongos and an assortment of other hand percussion was unique and original, and certainly worth seeking out at future performances.",
    source: "Jambands.com",
  },
  {
    quote:
      "Dan Ogrodnik's knowledge of hand drumming styles knows no bounds.",
    source: "Iambic 5 Music & Reviews",
  },
];

export type ProofImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export const proofImages: ProofImage[] = [
  { src: "/images/proof/g-01.jpg", alt: "Playing outdoor hand drum" },
  { src: "/images/proof/g-02.jpg", alt: "Percussion performance" },
  { src: "/images/proof/g-03.jpg", alt: "Ensemble rehearsal" },
  { src: "/images/proof/g-04.jpg", alt: "Studio session group" },
  { src: "/images/proof/g-05.jpg", alt: "Stage performance" },
  { src: "/images/proof/g-06.jpg", alt: "Percussionist with drums" },
  { src: "/images/proof/g-07.jpg", alt: "Live music performance" },
  { src: "/images/proof/g-08.jpg", alt: "Percussion ensemble on stage" },
  { src: "/images/proof/g-09.jpg", alt: "Portrait with instruments" },
  { src: "/images/proof/g-10.jpg", alt: "World percussion session" },
  { src: "/images/proof/g-11.jpg", alt: "Marimba performance" },
  { src: "/images/proof/g-12.jpg", alt: "Concert stage percussion" },
  { src: "/images/proof/g-13.jpg", alt: "Hand drum performance" },
  { src: "/images/proof/g-14.jpg", alt: "Musician with frame drum" },
  { src: "/images/proof/g-15.jpg", alt: "Drum circle performance" },
  { src: "/images/proof/g-16.jpg", alt: "Playing carved wooden drum" },
  { src: "/images/proof/g-17.jpg", alt: "Percussionist mid-performance" },
  { src: "/images/proof/g-18.jpg", alt: "Hand percussion detail" },
  { src: "/images/proof/g-19.jpg", alt: "World music ensemble" },
  { src: "/images/proof/g-20.jpg", alt: "Live percussionist" },
  { src: "/images/proof/g-21.jpg", alt: "Festival stage performance" },
  { src: "/images/proof/g-22.jpg", alt: "Ensemble with drums and strings" },
  { src: "/images/proof/g-23.jpg", alt: "Studio session musicians" },
  { src: "/images/proof/g-24.jpg", alt: "Percussion performance close-up" },
  { src: "/images/proof/g-25.jpg", alt: "Musician portrait" },
  { src: "/images/proof/g-26.jpg", alt: "Group performance on stage" },
  { src: "/images/proof/g-27.jpg", alt: "Outdoor ensemble" },
  { src: "/images/proof/g-28.jpg", alt: "Live percussion quartet" },
  { src: "/images/proof/g-29.jpg", alt: "Playing hand drum outdoors" },
  { src: "/images/proof/g-30.jpg", alt: "Tabla performance" },
  { src: "/images/proof/g-31.jpg", alt: "Stage wide shot" },
  { src: "/images/proof/g-32.jpg", alt: "Performance photo" },
  { src: "/images/proof/g-33.jpg", alt: "Outdoor tambourine" },
  { src: "/images/proof/g-34.jpg", alt: "Large ensemble on stage" },
  { src: "/images/proof/g-35.jpg", alt: "Session musicians in studio" },
];

export type SoundCloudTrack = {
  id: string;
  title: string;
  artist: string;
  url: string;
};

export type SoundCloudGroup = {
  id: string;
  label: string;
  tracks: SoundCloudTrack[];
};

export const soundCloudGroups: SoundCloudGroup[] = [
  {
    id: "izela",
    label: "Izela",
    tracks: [
      {
        id: "316410190",
        title: "Euclid",
        artist: "Izela",
        url: "https://soundcloud.com/izelamusic/euclid",
      },
    ],
  },
  {
    id: "zaub",
    label: "ZAUB",
    tracks: [
      {
        id: "296116123",
        title: "Hollow Book",
        artist: "ZAUB",
        url: "https://soundcloud.com/zaubnasty/hollow-book-unreleased",
      },
      {
        id: "257510454",
        title: "Collisions",
        artist: "ZAUB",
        url: "https://soundcloud.com/zaubnasty/collisions-1",
      },
    ],
  },
  {
    id: "collaborations",
    label: "Collaborations",
    tracks: [
      {
        id: "211233356",
        title: "Mexico",
        artist: "Paul Matthis",
        url: "https://soundcloud.com/paulmatthis/mexico-1",
      },
      {
        id: "275532666",
        title: "Pregunto",
        artist: "Sin Color",
        url: "https://soundcloud.com/sin_color/pregunto",
      },
      {
        id: "161316347",
        title: "Fall Down",
        artist: "wearesuspect",
        url: "https://soundcloud.com/wearesuspect/fall-down",
      },
      {
        id: "94592956",
        title: "Luna Sobre Matanzas",
        artist: "Sean Fitzpatrick 5",
        url: "https://soundcloud.com/sean-fitzpatrick-2/luna-sobre-matanzas-by-celia",
      },
      {
        id: "87730072",
        title: "Asterozoa - IV. Ambulacral Groove",
        artist: "Paul Matthis",
        url: "https://soundcloud.com/paulmatthis/asterozoa-iv-ambulacral-groove",
      },
      {
        id: "95631643",
        title: "Manj Score",
        artist: "Feat. Saara Maria and Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/manj-score-feat-saara-maria",
      },
    ],
  },
  {
    id: "solo",
    label: "Solo / Ensemble",
    tracks: [
      {
        id: "93326252",
        title: "Three Kanjiras",
        artist: "Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/three-kanjiras",
      },
      {
        id: "46637961",
        title: "Cross Pulses - Rhein Percussion (Capitol Records)",
        artist: "Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/cross-pulses-rhein-quartet",
      },
      {
        id: "138117306",
        title: "Doce De Coco (Jacob do Bandolim)",
        artist: "Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/doce-de-coco-jacob-do-bandolim",
      },
      {
        id: "90075654",
        title: "Kayikci > Yuksek Yuksek Tepeler",
        artist: "Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/kayikci-yuksek-yuksek-tepeler",
      },
      {
        id: "94400583",
        title: "Trio for Ogun by N. Scott Robinson",
        artist: "Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/trio-for-ogun-by-n-scott",
      },
      {
        id: "56793624",
        title: "Abuelo - Saba Alizadeh (Capitol Records)",
        artist: "Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/abuelo-saba-alizadeh-capitol",
      },
      {
        id: "97666081",
        title: "Play One for Keith - Hartt Steel Band",
        artist: "Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/play-one-for-keith-steel-band",
      },
      {
        id: "97668140",
        title: "Omolode/Alaro (Cuba)",
        artist: "Dan Ogrodnik",
        url: "https://soundcloud.com/ogrods/omolode-alaro-cuba",
      },
    ],
  },
];

export type SiteVideo = {
  id: string;
  title: string;
  detail: string;
  kind: "youtube";
  relatedUrl?: string;
  relatedLabel?: string;
};

export const videos: SiteVideo[] = [
  {
    id: "3FF-_p08OfE",
    title: "Percussion Reel",
    detail: "Dan Ogrodnik - Percussionist",
    kind: "youtube",
  },
  {
    id: "Ykh95s9pGjs",
    title: "Purushakara (Live)",
    detail: "Izela - Handbag Factory DTLA",
    kind: "youtube",
  },
  {
    id: "ts1L3FHm4Hs",
    title: "Incense",
    detail: "Frame drum solo on Cooperman Bodhran",
    kind: "youtube",
  },
  {
    id: "17ZkbpJOKhk",
    title: "Levitation",
    detail: "ZAUB - Live Session at Kingsize North",
    kind: "youtube",
  },
  {
    id: "jHuQBPSG2NE",
    title: "The Process of Invention",
    detail: "Deane - California Institute of the Arts",
    kind: "youtube",
  },
  {
    id: "QNcJJf6lnD8",
    title: "If You Can Read",
    detail: "Jeremy Siskind's Housewarming Project - pandeiro",
    kind: "youtube",
    relatedUrl: "https://jeremysiskind.com/2018/01/video-5-if-you-can-read/",
    relatedLabel: "Read the blog post on Jeremy Siskind's site",
  },
];

export const aboutParagraphs = [
  "Session and live percussionist with an MFA in Multi-Focus Percussion from CalArts and a BM from The Hartt School. Study includes a residency in Ghana (Dagara Music Center / Dagbe Music Center). I work across classical and contemporary repertoire and world traditions - Latin, African, Brazilian, Indian, Persian, steelpan, and more.",
  "For 5+ years I was a live accompanist at the USC Glorya Kaufman School of Dance - Contemporary, Afro-Cuban, Partnering, Modern, Hip-Hop, Jazz, Commercial Dance, Dunham Technique, improvisation, and guest clinicians. Instructors I've played for include Desmond Richardson, Dwight Rhoden, Patrick Corbin, Victor Quijada, and the Complexions Contemporary Ballet Summer Intensive. I've also composed and performed original music for Kaufman choreography.",
  "Other headline credits: West Coast premiere of John Luther Adams's Inuksuit (Ojai, curated by Steven Schick); Hands On'Semble with Rhein Percussion at The Blue Whale; Bella Strings at The Beverly Hilton for King Salman of Saudi Arabia; Capitol Records sessions. Artists and projects include Izela, ZAUB, Sin Color, Kan Wakan, Sofi Mkheyan, Saba Alizadeh, Vinny Golia, and Sulley Imoro.",
  "I music-direct, track and mix in Pro Tools, Reaper, Ableton Live, and Logic Pro (MaxMSP for custom tools), and run live sound (FOH / monitors) when the gig calls for it. Teaching and clinics (CalArts, Evergreen) are part of the work.",
];

export const services = [
  {
    title: "Session & live musician",
    body: "World and classical percussion for studio dates, concerts, festivals, theater pits, and dance-class accompaniment. I read charts, play to click when needed, and stay easy to work with in the room. Kit, snare, timpani, mallets, and hand percussion across Latin, African, Brazilian, Indian, Persian, steelpan, and contemporary repertoire. Five-plus years as live accompanist at USC Kaufman; Capitol sessions, ensemble records, and pit work when the show demands it. I learn the charts ahead of the date, stay with the arrangement, and improvise when it helps.",
  },
  {
    title: "Music direction",
    body: "Musical direction for rehearsals and show night: chart preparation, cue maps, tempo maps, and calling the room so the band and tech stay aligned. Ableton Live show playback for click-tracked performances: programming click, count-ins, spoken/MIDI cues, and multitrack backing stems with dedicated sends to FOH and monitors. Live laptop performance management: showfile structure, scene/clip triggering, session automation, and reliable onstage playback so the band stays with the click for the whole show.",
  },
  {
    title: "Session & live engineering",
    body: "Tracking and mixing for percussion-forward and ensemble sessions in Pro Tools, Reaper, Ableton Live, and Logic Pro, with MaxMSP when a custom tool or process helps the take. Live sound for FOH and monitors: gain structure, clear cue mixes, and keep the mix usable when the room gets loud. Load-in, stage plot support, and production backup from years on CalArts / theater crews and PAC-scale school venues. Useful when one person needs to cover both chairs.",
  },
  {
    title: "Teaching & clinics",
    body: "Private studio (100+ students) and classroom teaching across drum set, snare, timpani, mallets, and hand drums, plus theory when it serves the player. Guest masterclasses and clinics including CalArts Percussion Forum and school programs; prior college lecturing in Music Theory, Musicianship, and Rhythm Skills. Curriculum that builds technique, listening, and ensemble habits. Built for players who want lessons from someone still on gigs.",
  },
];

export const selectedCredits = [
  "CalArts MFA (Multi-Focus Percussion); Hartt BM; Ghana residency (Dagara / Dagbe)",
  "USC Glorya Kaufman School of Dance - live accompanist, 5+ years (Contemporary, Afro-Cuban, Hip-Hop, Jazz, and more; instructors incl. Desmond Richardson, Dwight Rhoden, Patrick Corbin, Victor Quijada; Complexions Contemporary Ballet Summer Intensive)",
  "AGBU Manoukian High School - Faculty, Stage Design and Production (2017-2018); live sound/lighting and events at the AGBU Vatche & Tamar Manoukian Performing Arts Center",
  "John Luther Adams, Inuksuit - West Coast premiere, Ojai Music Festival (curated by Steven Schick)",
  "Hands On'Semble with Rhein Percussion - The Blue Whale",
  "Bella Strings - The Beverly Hilton, for King Salman of Saudi Arabia",
  "Capitol Records sessions (incl. Cross Pulses, Abuelo; Celia Cruz track selected for mastering)",
  "Izela I; ZAUB; Sin Color; theater pits including The Boy from Oz and Spring Awakening",
];

export const toolsClaimed = [
  "Pro Tools",
  "Reaper",
  "Ableton Live",
  "Logic Pro",
  "MaxMSP",
];

export const toolsLearning = [
  "Wwise",
  "FMOD",
  "Unity audio",
  "Unreal audio / MetaSounds",
];
