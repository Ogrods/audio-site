export const siteUrl = "https://audio.danogrodnik.com";

export const siteProfile = {
  name: "Dan Ogrodnik",
  title: "Session & Live Musician · Music Director · Session & Live Engineer",
  tagline:
    "CalArts MFA / Hartt BM. World and classical percussion for sessions, stages, and pits - with music direction and tracking / live sound when the room needs it.",
  email: "dan@danogrodnik.com",
  phone: "",
  location: "Los Angeles / Crestline, CA",
  resumePdf: "/Dan_Ogrodnik_Audio_CV.pdf",
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
      "Dan Ogrodnik's knowledge of hand drumming styles knows no bounds.",
    source: "Iambic 5 Music & Reviews",
  },
  {
    quote:
      "The rhythm was thunderous as four percussionists created a cacophony of beats and tempo... drawing a huge ovation. This group's drum kit, bongos and an assortment of other hand percussion was unique and original.",
    source: "Jambands.com",
  },
];

export type ProofImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export const proofImages: ProofImage[] = [
  {
    src: "/images/proof/c-01.jpeg",
    alt: "Playing outdoor hand drum",
    objectPosition: "center 20%",
  },
  {
    src: "/images/proof/c-02.jpg",
    alt: "Studio session group",
    objectPosition: "center center",
  },
  {
    src: "/images/proof/c-03.jpeg",
    alt: "Marimba performance",
    objectPosition: "center 30%",
  },
  {
    src: "/images/proof/c-04.jpg",
    alt: "Playing carved wooden drum",
    objectPosition: "35% center",
  },
  {
    src: "/images/proof/c-05.jpeg",
    alt: "Percussion ensemble on stage",
    objectPosition: "center 40%",
  },
  {
    src: "/images/proof/c-06.jpg",
    alt: "World music ensemble",
    objectPosition: "center center",
  },
  {
    src: "/images/proof/c-07.jpg",
    alt: "Live percussion quartet",
    objectPosition: "center 35%",
  },
  {
    src: "/images/proof/c-08.jpg",
    alt: "Outdoor tambourine",
    objectPosition: "70% center",
  },
  {
    src: "/images/proof/c-09.jpg",
    alt: "Tabla performance",
    objectPosition: "center 35%",
  },
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

export const videos = [
  {
    id: "3FF-_p08OfE",
    title: "Percussion Reel",
    detail: "Dan Ogrodnik - Percussionist",
    kind: "youtube" as const,
  },
  {
    id: "Ykh95s9pGjs",
    title: "Purushakara (Live)",
    detail: "Izela - Handbag Factory DTLA",
    kind: "youtube" as const,
  },
  {
    id: "ts1L3FHm4Hs",
    title: "Incense",
    detail: "Frame drum solo on Cooperman Bodhran",
    kind: "youtube" as const,
  },
  {
    id: "17ZkbpJOKhk",
    title: "Levitation",
    detail: "ZAUB - Live Session at Kingsize North",
    kind: "youtube" as const,
  },
  {
    id: "jHuQBPSG2NE",
    title: "The Process of Invention",
    detail: "Deane - California Institute of the Arts",
    kind: "youtube" as const,
  },
];

export const aboutParagraphs = [
  "Session and live percussionist with an MFA in Multi-Focus Percussion from CalArts and a BM from The Hartt School. Study includes a residency in Ghana (Dagara Music Center / Dagbe Music Center). I work across classical and contemporary repertoire and world traditions - Latin, African, Brazilian, Indian, Persian, steelpan, and more.",
  "For 5+ years I was a live accompanist at the USC Glorya Kaufman School of Dance - Contemporary, Afro-Cuban, Partnering, Modern, Hip-Hop, Jazz, Commercial Dance, Dunham Technique, improvisation, and guest clinicians. Instructors I've played for include Desmond Richardson, Dwight Rhoden, Patrick Corbin, Victor Quijada, and the Complexions Contemporary Ballet Summer Intensive. I've also composed and performed original music for Kaufman choreography.",
  "Other headline credits: West Coast premiere of John Luther Adams's Inuksuit (Ojai, curated by Steven Schick); Hands On'Semble with Rhein Percussion at The Blue Whale; Bella Strings at The Beverly Hilton for King Salman of Saudi Arabia; Capitol Records sessions. Artists and projects include Izela, ZAUB, Sin Color, Kan Wakan, Sofi Mkheyan, Saba Alizadeh, Vinny Golia, and Sulley Imoro.",
  "I music-direct, track and mix in Pro Tools, Reaper, Ableton Live, and Logic Pro (MaxMSP for custom tools), and run live sound (FOH / monitors) when the gig calls for it. Teaching and clinics (CalArts, Evergreen) are part of the craft.",
];

export const services = [
  {
    title: "Session & live musician",
    body: "World and classical percussion for studio dates, concerts, festivals, theater pits, and dance-class accompaniment. Multi-genre, chart-ready, and comfortable improvising.",
  },
  {
    title: "Music direction",
    body: "Ensemble direction, chart prep, rehearsals, cues, and show pacing so the night stays on time.",
  },
  {
    title: "Session & live engineering",
    body: "Tracking and mixing in Pro Tools, Reaper, Ableton, and Logic. Live sound for FOH and monitors, plus load-in and stage support.",
  },
  {
    title: "Teaching & clinics",
    body: "Private study, classroom work, and guest masterclasses - including CalArts Percussion Forum and school clinics.",
  },
];

export const selectedCredits = [
  "CalArts MFA (Multi-Focus Percussion); Hartt BM; Ghana residency (Dagara / Dagbe)",
  "USC Glorya Kaufman School of Dance - live accompanist, 5+ years (Contemporary, Afro-Cuban, Hip-Hop, Jazz, and more; instructors incl. Desmond Richardson, Dwight Rhoden, Patrick Corbin, Victor Quijada; Complexions Contemporary Ballet Summer Intensive)",
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
