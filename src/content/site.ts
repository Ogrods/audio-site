export const siteUrl = "https://audio.danogrodnik.com";

export const siteProfile = {
  name: "Dan Ogrodnik",
  title: "Musician · Music Director · Session & Live Engineer",
  tagline:
    "CalArts MFA / Hartt BM. Tracking, mixing, and live sound (FOH / monitors). Open to live sound, studio, and audio apprenticeship paths.",
  email: "dan@danogrodnik.com",
  phone: "",
  location: "Los Angeles / Crestline, CA",
  resumePdf: "/Dan_Ogrodnik_Audio_Resume.pdf",
  webdevUrl: "https://www.danogrodnik.com",
  bookingUrl: "",
  contactMessage:
    "Hiring for live sound, session engineering, music direction, or studio / apprenticeship work? Email me - I respond promptly.",
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
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const reviews = [
  {
    quote:
      "With the success of ensembles such as Repercussion Unit, Hands On'Semble, HazMat Percussion Duo, Limbs, Duo Jalal, Rhein Percussion, and percussionists Greg Meyer, B. Michael Williams, and Shane Shanahan, among many others, world percussion compositions are increasing in quality and quantity.",
    source: "Percussive Notes",
  },
];

export const proofImages = [
  { src: "/images/proof/proof-1.jpeg", alt: "Performance still" },
  { src: "/images/proof/proof-2.jpg", alt: "Stage still" },
  { src: "/images/proof/proof-3.jpeg", alt: "Ensemble still" },
  { src: "/images/proof/proof-4.jpeg", alt: "Studio still" },
  { src: "/images/proof/proof-5.jpeg", alt: "Live performance" },
  { src: "/images/proof/proof-6.jpeg", alt: "Percussion setup" },
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
  "Classically trained percussionist with 10+ years as a professional musician, music director, session player, and session / live engineer. CalArts MFA (Multi-Focus Percussion) and Hartt BM. Multi-genre performer across classical, rock, jazz, Latin, African, Brazilian, Indian, steelpan, and more.",
  "Active on the West Coast new music and recording scene - studios including Capitol A/B and The Getty Villa; ensembles and projects including Izela, ZAUB, Sin Color, Rhein Percussion, and many others. Music-directs ensembles, prepares charts, runs rehearsals, and keeps shows on time.",
  "Engineers recording sessions (tracking and mixing) in Pro Tools, Reaper, Ableton Live, and Logic Pro; MaxMSP for custom tools. Runs live sound (FOH / monitors) for rehearsals, concerts, and school / theater events. Teaching and clinician work remain part of the craft, not the primary hire pitch.",
];

export const hireFor = [
  {
    title: "Live sound",
    bullets: [
      "FOH and monitors for rehearsals, concerts, and events",
      "Load-in / load-out, stage management, show pacing",
      "Instrument inventory and tech support",
    ],
  },
  {
    title: "Session engineer",
    bullets: [
      "Tracking and recording sessions",
      "Mixing in Pro Tools, Reaper, Ableton, Logic",
      "MaxMSP for custom tools and experiments",
    ],
  },
  {
    title: "Music direction",
    bullets: [
      "Ensemble direction and rehearsal leadership",
      "Charts, cues, and on-time show delivery",
      "Artist logistics and production ops experience (incl. LA Phil artist desk)",
    ],
  },
  {
    title: "Musician",
    bullets: [
      "Session percussion across classical, contemporary, and world contexts",
      "Improvisation and multi-genre adaptability",
      "Credits include Izela album I on Bandcamp",
    ],
  },
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
  "Interactive music implementation",
];
