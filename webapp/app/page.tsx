import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { destinations } from "@/lib/destinations"
import {
  Clock,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  Globe,
  Award,
} from "lucide-react"

const stats = [
  { value: "12 000+", label: "Voyageurs satisfaits" },
  { value: "200+", label: "Époques disponibles" },
  { value: "100%", label: "Sans paradoxes" },
  { value: "15 ans", label: "D'expérience temporelle" },
]

const values = [
  {
    icon: Shield,
    title: "Sécurité absolue",
    description:
      "Notre technologie de prévention des paradoxes brevetée garantit votre retour en toutes circonstances. Chaque voyage est assuré par la Lloyd's de l'Espace-Temps.",
  },
  {
    icon: Globe,
    title: "200+ époques",
    description:
      "Du Big Bang aux confins du futur, notre catalogue couvre l'intégralité de l'histoire connue de l'univers. Un guide expert vous accompagne à chaque destination.",
  },
  {
    icon: Zap,
    title: "Départ instantané",
    description:
      "Embarquez dans votre chrono-vaisseau et atteignez votre destination en quelques secondes. Vous rentrez toujours avant d'être partis — c'est garanti.",
  },
  {
    icon: Award,
    title: "Agence certifiée",
    description:
      "Seule agence titulaire de la licence Platine délivrée par l'Autorité Temporelle Internationale. Éthique, discrétion et respect du continuum spatio-temporel.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
      >
        {/* Cinematic background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/medias/videos/Cinematic_Eiffel_Tower_Dolly_Zoom.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay — preserves legibility and applies the navy tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.06 0.025 265 / 0.75) 0%, oklch(0.09 0.025 265 / 0.88) 60%, oklch(0.09 0.025 265) 100%)",
            zIndex: 1,
          }}
        />

        {/* Subtle grid pattern on top of the overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 79px, oklch(0.72 0.13 82 / 0.03) 80px), " +
              "repeating-linear-gradient(90deg, transparent, transparent 79px, oklch(0.72 0.13 82 / 0.03) 80px)",
            zIndex: 2,
          }}
        />

        {/* Decorative orbit rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            border: "1px solid oklch(0.72 0.13 82 / 0.08)",
            zIndex: 3,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 900,
            height: 900,
            border: "1px solid oklch(0.72 0.13 82 / 0.05)",
            zIndex: 3,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-xs tracking-widest uppercase border"
            style={{
              background: "oklch(0.72 0.13 82 / 0.12)",
              borderColor: "oklch(0.72 0.13 82 / 0.4)",
              color: "oklch(0.72 0.13 82)",
            }}
          >
            Autorité Temporelle Internationale — Licence Platine
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
            Voyagez à travers{" "}
            <span style={{ color: "oklch(0.72 0.13 82)" }}>le temps</span>,<br />
            pas seulement l'espace.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            La seule agence autorisée à conduire des voyages guidés dans
            l'histoire de l'humanité. Sûr, assuré, et garanti sans paradoxes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-8 gap-2"
              style={{ background: "oklch(0.72 0.13 82)", color: "oklch(0.09 0.025 265)", border: "none" }}
            >
              <Link href="/destinations">
                Explorer les destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8"
              style={{ borderColor: "oklch(0.72 0.13 82 / 0.4)", color: "oklch(0.72 0.13 82)" }}
            >
              <Link href="/#agence">Découvrir l'agence</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" style={{ color: "oklch(0.72 0.13 82)" }} />
            ))}
            <span className="ml-2">
              4,9/5 · 12 000+ voyageurs temporels ravis
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div
            className="w-px h-12"
            style={{ background: "linear-gradient(to bottom, oklch(0.72 0.13 82), transparent)" }}
          />
          <Clock className="h-4 w-4 text-primary animate-pulse" />
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────── */}
      <section
        className="py-12 px-6 border-y"
        style={{ borderColor: "oklch(0.72 0.13 82 / 0.15)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "oklch(0.72 0.13 82)" }}
              >
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Présentation agence ─────────────────────────────────────── */}
      <section id="agence" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <Badge
              variant="secondary"
              className="mb-4 text-xs tracking-widest uppercase"
              style={{
                background: "oklch(0.72 0.13 82 / 0.1)",
                color: "oklch(0.72 0.13 82)",
                border: "none",
              }}
            >
              Notre histoire
            </Badge>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Pionniers du tourisme{" "}
              <span style={{ color: "oklch(0.72 0.13 82)" }}>temporel</span>{" "}
              depuis 2009
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fondée à Genève au lendemain de la première expérience réussie de
              déplacement chronologique, TimeTravelAgency est née d'une
              conviction simple : le voyage dans le temps est trop précieux pour
              rester l'apanage des laboratoires scientifiques.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nos fondateurs — physiciens, historiens et explorateurs — ont conçu
              une expérience où la rigueur scientifique rencontre le luxe du
              voyage sur mesure. Chaque itinéraire est élaboré avec des
              historiens certifiés, validé par l'Autorité Temporelle, et
              accompagné d'un guide expert de l'époque visitée.
            </p>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Une équipe de 48 guides temporels certifiés
              </span>
            </div>
          </div>

          {/* Visual panel */}
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.15 0.05 265) 0%, oklch(0.09 0.025 265) 100%)",
              border: "1px solid oklch(0.72 0.13 82 / 0.2)",
            }}
          >
            {/* Central clock motif */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div
                  className="w-48 h-48 rounded-full flex items-center justify-center"
                  style={{ border: "2px solid oklch(0.72 0.13 82 / 0.3)" }}
                >
                  <div
                    className="w-36 h-36 rounded-full flex items-center justify-center"
                    style={{ border: "1px solid oklch(0.72 0.13 82 / 0.2)" }}
                  >
                    <Clock
                      className="h-16 w-16"
                      style={{ color: "oklch(0.72 0.13 82 / 0.8)" }}
                    />
                  </div>
                </div>
                {/* Orbit dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: "oklch(0.72 0.13 82)",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateX(96px) translateY(-50%)`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Tagline overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                className="text-xs tracking-widest uppercase font-medium"
                style={{ color: "oklch(0.72 0.13 82 / 0.7)" }}
              >
                Fondée en 2009 · Genève, Suisse
              </p>
              <p className="text-sm font-semibold mt-1">
                « Le passé vous appartient. Nous vous y emmenons. »
              </p>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <Separator className="my-16" style={{ background: "oklch(0.72 0.13 82 / 0.1)" }} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col gap-4">
              <div
                className="h-11 w-11 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.72 0.13 82 / 0.12)" }}
              >
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Destinations preview ─────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ background: "oklch(0.11 0.028 265 / 0.6)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 text-xs tracking-widest uppercase"
                style={{
                  background: "oklch(0.72 0.13 82 / 0.1)",
                  color: "oklch(0.72 0.13 82)",
                  border: "none",
                }}
              >
                Destinations vedettes
              </Badge>
              <h2 className="text-4xl font-bold">
                Trois époques,{" "}
                <span style={{ color: "oklch(0.72 0.13 82)" }}>trois vies</span>
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="gap-2 self-start md:self-auto"
              style={{ borderColor: "oklch(0.72 0.13 82 / 0.4)", color: "oklch(0.72 0.13 82)" }}
            >
              <Link href="/destinations">
                Toutes les destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <Link
                key={dest.id}
                href="/destinations"
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] block card-glow transition-transform duration-300 hover:-translate-y-1"
                style={{ border: "1px solid oklch(0.72 0.13 82 / 0.15)" }}
              >
                {/* Hero image (9:16 reels format — perfect for portrait cards) */}
                <Image
                  src={dest.reelsImage}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                />

                {/* Colour tint matching each destination's palette */}
                <div
                  className="absolute inset-0"
                  style={{ background: dest.gradientStyle, opacity: 0.45 }}
                />

                {/* Bottom readability gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.06 0.02 265 / 0.95) 0%, transparent 55%)",
                  }}
                />

                {/* Badge */}
                <div className="absolute top-5 right-5">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm"
                    style={{
                      background: "oklch(0.09 0.025 265 / 0.75)",
                      border: `1px solid ${dest.accentColor}50`,
                      color: dest.accentColor,
                    }}
                  >
                    {dest.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="text-xs tracking-widest uppercase font-medium mb-1"
                    style={{ color: dest.accentColor }}
                  >
                    {dest.era} · {dest.year}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {dest.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">
                      {dest.price}
                    </span>
                    <span
                      className="text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "oklch(0.72 0.13 82)" }}
                    >
                      Découvrir <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-32 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.18 0.06 265) 0%, oklch(0.09 0.025 265) 60%)",
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à{" "}
            <span style={{ color: "oklch(0.72 0.13 82)" }}>traverser le temps</span>{" "}
            ?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Rejoignez les milliers de voyageurs qui ont déjà exploré le passé —
            et le futur. La première consultation est toujours gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-10 gap-2"
              style={{ background: "oklch(0.72 0.13 82)", color: "oklch(0.09 0.025 265)", border: "none" }}
            >
              <Link href="/destinations">
                Commencer mon voyage
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-8 text-center text-xs text-muted-foreground border-t"
        style={{ borderColor: "oklch(0.72 0.13 82 / 0.12)" }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="h-3.5 w-3.5 text-primary" />
          <span className="font-semibold text-foreground">TimeTravelAgency</span>
        </div>
        © {new Date().getFullYear()} TimeTravelAgency · Agréé par l'Autorité Temporelle Internationale ·
        Tous les paradoxes sont assurés.
      </footer>
    </main>
  )
}
