"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { LazyVideo } from "@/components/lazy-video"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { destinations, type Destination } from "@/lib/destinations"
import {
  Clock,
  MapPin,
  Shield,
  Zap,
  Check,
  ChevronRight,
  X,
  Calendar,
} from "lucide-react"

const difficultyColor: Record<string, string> = {
  Accessible: "#4a9e5c",
  Modéré: "#C9A84C",
  Aventurier: "#e05c4a",
}

function DestinationCard({
  dest,
  index,
  onSelect,
}: {
  dest: Destination
  index: number
  onSelect: (d: Destination) => void
}) {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden cursor-pointer card-glow transition-all duration-300 hover:-translate-y-2 flex flex-col"
      style={{ border: "1px solid oklch(0.72 0.13 82 / 0.18)" }}
      onClick={() => onSelect(dest)}
    >
      {/* ── Visual area ───────────────────────────────────────────── */}
      <div className="relative h-72 overflow-hidden bg-black">
        {/* Static hero image — shown immediately, acts as video poster */}
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading={index === 0 ? "eager" : "lazy"}
          priority={index === 0}
        />

        {/* Lazy video — loads when card scrolls into view, overlays the image */}
        <LazyVideo
          src={dest.video}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
          style={{ zIndex: 1 }}
        />

        {/* Colour-tint overlay matching each era's palette (unifies Crétacé white bg) */}
        <div
          className="absolute inset-0"
          style={{ background: dest.gradientStyle, opacity: 0.4, zIndex: 2 }}
        />

        {/* Bottom fade for text legibility */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(to top, oklch(0.09 0.025 265) 0%, transparent 100%)",
            zIndex: 3,
          }}
        />

        {/* Top-right badge */}
        <div className="absolute top-4 right-4" style={{ zIndex: 4 }}>
          <span
            className="text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm"
            style={{
              background: "oklch(0.06 0.02 265 / 0.85)",
              border: `1px solid ${dest.accentColor}55`,
              color: dest.accentColor,
            }}
          >
            {dest.badge}
          </span>
        </div>

        {/* Hover CTA overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "oklch(0.06 0.02 265 / 0.35)", zIndex: 5 }}
        >
          <span
            className="text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl"
            style={{
              background: dest.accentColor,
              color: "oklch(0.09 0.025 265)",
            }}
          >
            Voir les détails <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* ── Text content ──────────────────────────────────────────── */}
      <div
        className="flex flex-col flex-1 p-6"
        style={{ background: "oklch(0.13 0.03 265)" }}
      >
        <p
          className="text-xs tracking-widest uppercase font-medium mb-1"
          style={{ color: dest.accentColor }}
        >
          {dest.era} · {dest.year}
        </p>
        <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
          {dest.shortDescription}
        </p>

        <Separator style={{ background: `${dest.accentColor}25` }} />

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">À partir de</p>
            <p className="text-2xl font-bold">{dest.price}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-0.5">Durée</p>
            <p className="text-sm font-semibold">{dest.duration}</p>
            <span
              className="text-xs px-2 py-0.5 rounded mt-1 inline-block"
              style={{
                background: `${difficultyColor[dest.difficulty]}18`,
                color: difficultyColor[dest.difficulty],
              }}
            >
              {dest.difficulty}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

function DestinationModal({
  dest,
  open,
  onClose,
}: {
  dest: Destination | null
  open: boolean
  onClose: () => void
}) {
  if (!dest) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0"
        style={{
          background: "oklch(0.11 0.028 265)",
          border: "1px solid oklch(0.72 0.13 82 / 0.22)",
        }}
      >
        {/* ── Modal video header ─────────────────────────────────── */}
        <div className="relative h-56 overflow-hidden rounded-t-xl bg-black">
          {/* Static image shown while video loads */}
          <Image
            src={dest.heroImage}
            alt={dest.name}
            fill
            className="object-cover"
            sizes="672px"
            priority
          />

          {/* Cinematic video — autoPlay since user explicitly opened the modal */}
          <video
            key={dest.id}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          >
            <source src={dest.video} type="video/mp4" />
          </video>

          {/* Era tint */}
          <div
            className="absolute inset-0"
            style={{ background: dest.gradientStyle, opacity: 0.35, zIndex: 2 }}
          />

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20"
            style={{
              background: "linear-gradient(to top, oklch(0.11 0.028 265) 0%, transparent 100%)",
              zIndex: 3,
            }}
          />

          {/* Era label */}
          <div className="absolute bottom-4 left-6" style={{ zIndex: 4 }}>
            <p
              className="text-xs tracking-widest uppercase font-medium mb-0.5"
              style={{ color: dest.accentColor }}
            >
              {dest.era} · {dest.year}
            </p>
            <p className="text-2xl font-bold">{dest.name}</p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-white/10"
            style={{ background: "oklch(0.09 0.025 265 / 0.75)", zIndex: 4 }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* ── Modal body ────────────────────────────────────────── */}
        <div className="p-6 space-y-6">
          <DialogHeader>
            <DialogTitle className="sr-only">{dest.name}</DialogTitle>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {dest.fullDescription}
            </p>
          </DialogHeader>

          {/* Quick stats */}
          <div
            className="grid grid-cols-3 gap-4 rounded-xl p-4"
            style={{ background: "oklch(0.09 0.025 265 / 0.6)" }}
          >
            <div className="text-center">
              <Calendar className="h-4 w-4 mx-auto mb-1 text-primary" />
              <p className="text-xs text-muted-foreground">Durée</p>
              <p className="text-sm font-semibold">{dest.duration}</p>
            </div>
            <div className="text-center">
              <Zap className="h-4 w-4 mx-auto mb-1 text-primary" />
              <p className="text-xs text-muted-foreground">Difficulté</p>
              <p className="text-sm font-semibold" style={{ color: difficultyColor[dest.difficulty] }}>
                {dest.difficulty}
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-4 w-4 mx-auto mb-1 text-primary" />
              <p className="text-xs text-muted-foreground">Prix</p>
              <p className="text-sm font-semibold">{dest.price}</p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Points forts
            </h4>
            <ul className="space-y-2">
              {dest.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: dest.accentColor }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <Separator style={{ background: "oklch(0.72 0.13 82 / 0.1)" }} />

          {/* Itinerary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Itinéraire
            </h4>
            <div className="space-y-3">
              {dest.itinerary.map((step, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <div
                    className="shrink-0 font-mono text-xs px-2 py-1 rounded h-fit whitespace-nowrap"
                    style={{ background: `${dest.accentColor}18`, color: dest.accentColor }}
                  >
                    {step.day}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.activity}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator style={{ background: "oklch(0.72 0.13 82 / 0.1)" }} />

          {/* Included */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-primary" />
              Inclus dans le voyage
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dest.included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: dest.accentColor }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-3 pt-2 border-t"
            style={{ borderColor: "oklch(0.72 0.13 82 / 0.12)" }}
          >
            <Button
              className="flex-1 font-semibold"
              style={{
                background: dest.accentColor,
                color: "oklch(0.09 0.025 265)",
                border: "none",
              }}
            >
              Réserver — {dest.price}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              style={{ borderColor: "oklch(0.72 0.13 82 / 0.3)", color: "oklch(0.72 0.13 82)" }}
            >
              Retour
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function DestinationsPage() {
  const [selected, setSelected] = useState<Destination | null>(null)
  const [open, setOpen] = useState(false)

  function handleSelect(dest: Destination) {
    setSelected(dest)
    setOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Page hero ──────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.18 0.05 265) 0%, oklch(0.09 0.025 265) 60%)",
        }}
      >
        <Badge
          variant="secondary"
          className="mb-4 text-xs tracking-widest uppercase"
          style={{
            background: "oklch(0.72 0.13 82 / 0.1)",
            color: "oklch(0.72 0.13 82)",
            border: "none",
          }}
        >
          3 destinations d'exception
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Nos{" "}
          <span style={{ color: "oklch(0.72 0.13 82)" }}>destinations</span>
          <br />
          vedettes
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Survolez une carte pour voir la vidéo cinématique. Cliquez pour
          explorer l'itinéraire complet, les points forts et les tarifs.
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" />
            Départ instantané
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-primary" />
            Garanti sans paradoxes
          </span>
        </div>
      </section>

      {/* ── Cards grid ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {destinations.map((dest, i) => (
            <DestinationCard
              key={dest.id}
              dest={dest}
              index={i}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-12">
          Toutes nos destinations sont disponibles sur devis personnalisé.{" "}
          <span style={{ color: "oklch(0.72 0.13 82)" }}>
            La première consultation est gratuite.
          </span>
        </p>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-8 text-center text-xs text-muted-foreground border-t"
        style={{ borderColor: "oklch(0.72 0.13 82 / 0.12)" }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="h-3.5 w-3.5 text-primary" />
          <span className="font-semibold text-foreground">TimeTravelAgency</span>
        </div>
        © {new Date().getFullYear()} TimeTravelAgency · Agréé par l'Autorité Temporelle Internationale
      </footer>

      {/* ── Detail modal ───────────────────────────────────────────── */}
      <DestinationModal dest={selected} open={open} onClose={() => setOpen(false)} />
    </main>
  )
}
