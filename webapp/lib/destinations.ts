export type Difficulty = "Accessible" | "Modéré" | "Aventurier"

export type Destination = {
  id: string
  name: string
  era: string
  year: string
  badge: string
  tagline: string
  shortDescription: string
  fullDescription: string
  gradientStyle: string
  accentColor: string
  highlights: string[]
  itinerary: { day: string; activity: string }[]
  price: string
  duration: string
  difficulty: Difficulty
  included: string[]
  icon: string
  /* Media assets — served from /public/medias/ */
  heroImage: string    // 16:9
  squareImage: string  // 1:1
  reelsImage: string   // 9:16
  video: string
}

export const destinations: Destination[] = [
  {
    id: "paris-1889",
    name: "Paris, 1889",
    era: "Belle Époque",
    year: "1889",
    badge: "Coup de cœur",
    tagline: "L'inauguration du siècle",
    shortDescription:
      "Assistez à l'inauguration de la Tour Eiffel et plongez dans l'effervescence de l'Exposition Universelle.",
    fullDescription:
      "Paris en 1889, c'est la capitale du monde en fête. Gustave Eiffel vient d'achever sa tour en métal — symbole du génie humain — et l'Exposition Universelle attire des millions de visiteurs du monde entier. Les Grands Boulevards s'illuminent à la lumière électrique, les cafés bourdonnent de conversations artistiques, et Montmartre vit ses heures dorées. Vous dînerez dans les mêmes brasseries que Toulouse-Lautrec et danserez dans les mêmes cabarets que Sarah Bernhardt.",
    gradientStyle:
      "linear-gradient(135deg, #3d1f00 0%, #1a0d00 40%, #0d0a00 70%, #1a1205 100%)",
    accentColor: "#C9A84C",
    highlights: [
      "Inauguration de la Tour Eiffel (31 mars 1889)",
      "Visite guidée de l'Exposition Universelle",
      "Soirée au Moulin Rouge — ouverture officielle",
      "Ateliers d'artistes à Montmartre",
      "Dîner Belle Époque au Grand Véfour",
    ],
    itinerary: [
      { day: "Jour 1", activity: "Arrivée à Paris, installation en hôtel d'époque, visite du Trocadéro" },
      { day: "Jour 2", activity: "Inauguration de la Tour Eiffel, déjeuner sur le Champ-de-Mars" },
      { day: "Jour 3", activity: "Exposition Universelle — Pavillon des Arts, Galerie des Machines" },
      { day: "Jour 4", activity: "Montmartre, ateliers d'artistes, soirée cabaret" },
      { day: "Jour 5", activity: "Grands Boulevards, Opéra Garnier, retour chrono-spatial" },
    ],
    price: "4 800 €",
    duration: "5 jours",
    difficulty: "Accessible",
    included: [
      "Chrono-transport aller-retour",
      "Hébergement d'époque",
      "Guide temporel certifié",
      "Assurance anti-paradoxe",
      "Tenues Belle Époque fournies",
    ],
    icon: "🗼",
    heroImage: "/medias/images/paris/PARIS-1889-HERO-16-9.webp",
    squareImage: "/medias/images/paris/PARIS-1889-INSTA-1-1.webp",
    reelsImage: "/medias/images/paris/PARIS-1889-REELS-9-16.webp",
    video: "/medias/videos/Cinematic_Eiffel_Tower_Dolly_Zoom.mp4",
  },
  {
    id: "cretace",
    name: "Période Crétacée",
    era: "Mésozoïque",
    year: "−66 Ma",
    badge: "Aventure extrême",
    tagline: "Avant l'extinction",
    shortDescription:
      "Traversez des jungles luxuriantes et observez les derniers dinosaures dans leur habitat naturel, 66 millions d'années avant notre ère.",
    fullDescription:
      "Le Crétacé supérieur est le dernier chapitre de l'ère des dinosaures. Les continents sont encore différents, la chaleur est tropicale, et la végétation est une explosion de fougères géantes et de conifères anciens. Vous observerez des troupeaux de Tricératops paître dans des clairières, des Ptérosaures planer au-dessus de mers peu profondes, et — depuis une plateforme d'observation sécurisée — vous croiserez peut-être le regard d'un Tyrannosaurus Rex. Une expérience qui redéfinit la notion de voyage extraordinaire.",
    gradientStyle:
      "linear-gradient(135deg, #001a05 0%, #002a0a 30%, #001510 60%, #000d05 100%)",
    accentColor: "#4a9e5c",
    highlights: [
      "Observation de T-Rex en habitat naturel (distance sécurisée)",
      "Troupeaux de Tricératops et Hadrosaures",
      "Ptérosaures et faune ailée du Crétacé",
      "Forêts de cycas géants et végétation préhistorique",
      "Coucher de soleil sur la mer de Thétys",
    ],
    itinerary: [
      { day: "H+0", activity: "Briefing de sécurité temporelle, équipement bio-filtrant" },
      { day: "H+2", activity: "Arrivée en clairière sécurisée, première observation de la faune" },
      { day: "H+6", activity: "Trek guidé jusqu'au point d'observation T-Rex" },
      { day: "H+14", activity: "Crépuscule sur la mer de Thétys, observation des Ptérosaures" },
      { day: "H+24", activity: "Retour chrono-spatial — vous rentrez avant d'être partis" },
    ],
    price: "12 000 €",
    duration: "24 h guidées",
    difficulty: "Aventurier",
    included: [
      "Chrono-transport",
      "Combinaison bio-filtrante haute protection",
      "Guide paléontologue embarqué",
      "Assurance prédateurs Niveau 5",
      "Kit de survie temporelle d'urgence",
    ],
    icon: "🦕",
    heroImage: "/medias/images/cretace/CRETACE-HERO-16-9.webp",
    squareImage: "/medias/images/cretace/CRETACE-INSTA-1-1.webp",
    reelsImage: "/medias/images/cretace/CRETACE-REELS-9-16.webp",
    video: "/medias/videos/Cinematic_Dinosaur_Reveal_Video.mp4",
  },
  {
    id: "florence-1504",
    name: "Florence, 1504",
    era: "Haute Renaissance",
    year: "1504",
    badge: "Culture & Art",
    tagline: "Au cœur du génie",
    shortDescription:
      "Côtoyez Léonard de Vinci et Michel-Ange dans la Florence des Médicis, au sommet de la Renaissance italienne.",
    fullDescription:
      "Florence en 1504 est le centre névralgique de la civilisation occidentale. Michel-Ange vient de terminer son David — vous assisterez à son installation triomphale sur la Piazza della Signoria. Léonard de Vinci peint dans son atelier et accepte parfois des visiteurs de marque. La famille Médicis, mécènes de génie, finance une explosion artistique sans précédent. Les rues de l'Oltrarno résonnent du bruit des marteaux des sculpteurs et des discussions philosophiques des humanistes.",
    gradientStyle:
      "linear-gradient(135deg, #2a0e00 0%, #1a0800 40%, #120500 70%, #1a0a00 100%)",
    accentColor: "#D4824A",
    highlights: [
      "Installation du David de Michel-Ange (mai 1504)",
      "Visite de l'atelier de Léonard de Vinci",
      "Audience privée au Palazzo Medici-Riccardi",
      "Baptistère et Duomo de Florence",
      "Dîner de cour à la Renaissance florentine",
    ],
    itinerary: [
      { day: "Jour 1", activity: "Arrivée à Florence, installation, visite de l'Oltrarno" },
      { day: "Jour 2", activity: "Installation du David — cérémonie sur la Piazza della Signoria" },
      { day: "Jour 3", activity: "Atelier de Léonard de Vinci, galeries privées des Médicis" },
      { day: "Jour 4", activity: "Palazzo Medici, jardins de Boboli, rencontres avec humanistes" },
      { day: "Jour 5", activity: "Duomo, baptistère, Mercato Vecchio, retour chrono-spatial" },
    ],
    price: "6 200 €",
    duration: "5 jours",
    difficulty: "Modéré",
    included: [
      "Chrono-transport aller-retour",
      "Logement en villa de l'époque",
      "Guide historien spécialisé Renaissance",
      "Tenues Renaissance fournies",
      "Assurance anti-paradoxe premium",
    ],
    icon: "🎨",
    heroImage: "/medias/images/florence/RENAISSANCE-FLORENCE-HERO-16-9.webp",
    squareImage: "/medias/images/florence/RENAISSANCE-FLORENCE-INSTA-1-1.webp",
    reelsImage: "/medias/images/florence/RENAISSANCE-FLORENCE-REELS-9-16.webp",
    video: "/medias/videos/Renaissance_Hall_Cinematic_Tracking_Shot.mp4",
  },
]
