# TimeTravelAgency

Agence de voyage temporel fictive de luxe — site web promotionnel construit avec Next.js 15 et l'IA générative.

> « Le passé vous appartient. Nous vous y emmenons. »

---

## Description

TimeTravelAgency est une landing page immersive pour une agence de voyages dans le temps. Le projet met en scène trois destinations emblématiques (Paris 1889, Crétacé −66 Ma, Florence 1504) à travers une interface sombre et dorée, des vidéos cinématiques en fond, et un assistant conversationnel propulsé par Mistral AI.

---

## Technologies

| Couche | Stack |
|---|---|
| Framework | Next.js 15.5 (App Router) |
| UI | React 19 + TypeScript |
| Style | Tailwind CSS v4 · espace colorimétrique oklch |
| Composants | shadcn/ui (Radix UI primitives) |
| Icônes | Lucide React |
| Police | Geist (Vercel) |
| LLM | Mistral AI — `mistral-small-latest` |
| Médias | HTML5 `<video>` + Next.js `<Image>` |

---

## Features

### Page d'accueil (`/`)
- **Hero cinématique** — vidéo en fond plein écran avec double overlay (lisibilité + grille dorée), anneaux orbitaux décoratifs
- **Stats clés** — 12 000+ voyageurs, 200+ époques, 100% sans paradoxes
- **Présentation agence** — histoire, valeurs (Sécurité, Époques, Départ, Certification)
- **Prévisualisation destinations** — 3 cards portrait avec image 9:16, overlay coloré par époque, hover animé

### Galerie destinations (`/destinations`)
- **Cards interactives** — image hero toujours visible, vidéo cinématique qui apparaît au survol (fade-in)
- **Lazy loading vidéo** — `IntersectionObserver` + `rootMargin: 300px` pour pré-charger sans bloquer le rendu initial
- **Overlay coloré par époque** — palettes distinctes (or Belle Époque, vert Crétacé, terre cuite Renaissance)
- **Modal détail** — vidéo autoPlay, description complète, itinéraire jour par jour, points forts, inclus, CTA réservation

### Assistant conversationnel
- **Widget flottant** — bouton doré en bas à droite, présent sur toutes les pages
- **Design cohérent** — thème sombre, bulles or/navy, indicateur de frappe animé
- **Personnalité métier** — conseiller passionné d'histoire, expert des 3 destinations, répond en français
- **Route API sécurisée** — `/api/chat` côté serveur, clé Mistral jamais exposée au client

---

## Outils IA utilisés

Ce projet a été développé en utilisant les outils IA suivants — par souci de transparence :

| Outil | Usage |
|---|---|
| **Claude Sonnet 4.6** (Anthropic) | Génération de l'intégralité du code (composants, routes API, design system, logique) via Claude Code CLI |
| **Mistral AI** (`mistral-small-latest`) | Agent conversationnel intégré dans le site — répond aux questions des visiteurs en temps réel |
| **Génération d'images IA** | Visuels des 3 destinations (hero 16:9, portrait 9:16, carré 1:1) générés par IA |
| **Génération de vidéos IA** | Clips cinématiques des 3 destinations générés par IA |

---

## Installation

### Prérequis
- Node.js 18+

### 1. Cloner et installer

```bash
cd webapp
npm install
```

### 2. Configurer la clé Mistral

Créer un fichier `.env.local` à la racine de `webapp/` :

```env
MISTRAL_API_KEY=your_mistral_api_key_here
```

Obtenir une clé sur [console.mistral.ai](https://console.mistral.ai/).

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

```
webapp/
├── app/
│   ├── api/chat/route.ts      # Route API Mistral
│   ├── destinations/page.tsx  # Galerie + modals
│   ├── layout.tsx             # Layout global + ChatWidget
│   └── page.tsx               # Homepage
├── components/
│   ├── chat-widget.tsx        # Widget chatbot flottant
│   ├── lazy-video.tsx         # Lazy loading vidéo (IntersectionObserver)
│   ├── navbar.tsx             # Navigation fixe
│   └── ui/                    # Composants shadcn/ui
├── lib/
│   └── destinations.ts        # Données et types des destinations
└── public/
    └── medias/
        ├── images/            # WebP 16:9 · 1:1 · 9:16 par destination
        └── videos/            # MP4 cinématiques par destination
```

---

## Crédits

- **[Mistral AI](https://mistral.ai/)** — modèle `mistral-small-latest` pour l'assistant conversationnel
- **[shadcn/ui](https://ui.shadcn.com/)** — composants UI accessibles (Dialog, Badge, Button, Separator…)
- **[Radix UI](https://www.radix-ui.com/)** — primitives headless sous shadcn/ui
- **[Lucide](https://lucide.dev/)** — icônes SVG
- **[Vercel](https://vercel.com/)** — polices Geist, infrastructure de déploiement
- Assets visuels et vidéos — générés par IA, usage strictement pédagogique/démonstration
