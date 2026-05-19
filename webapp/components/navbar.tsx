import Link from "next/link"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: "linear-gradient(to bottom, oklch(0.09 0.025 265 / 0.95), transparent)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.72 0.13 82 / 0.12)",
      }}
    >
      <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-wide">
        <Clock className="h-5 w-5 text-primary" />
        <span>
          <span className="text-primary">Time</span>Travel
          <span className="text-primary">Agency</span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <Link href="/destinations" className="hover:text-primary transition-colors duration-200">
          Destinations
        </Link>
        <Link href="/#agence" className="hover:text-primary transition-colors duration-200">
          L'agence
        </Link>
        <Link href="/#contact" className="hover:text-primary transition-colors duration-200">
          Contact
        </Link>
      </nav>

      <Button
        asChild
        size="sm"
        className="text-primary-foreground font-semibold"
        style={{ background: "oklch(0.72 0.13 82)", border: "none" }}
      >
        <Link href="/destinations">Réserver un voyage</Link>
      </Button>
    </header>
  )
}
