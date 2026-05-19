"use client"

import { useEffect, useRef } from "react"

interface LazyVideoProps {
  src: string
  className?: string
  /** Extra styles applied to the <video> element */
  style?: React.CSSProperties
}

/**
 * Loads and plays the video only when it enters the viewport.
 * Uses IntersectionObserver with a 300px rootMargin so the video
 * is ready slightly before the user scrolls to it.
 */
export function LazyVideo({ src, className, style }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !el.src) {
          el.src = src
          el.load()
          el.play().catch(() => {
            // Autoplay blocked by browser — video will stay paused until user interacts
          })
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: "300px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      className={className}
      style={style}
    />
  )
}
