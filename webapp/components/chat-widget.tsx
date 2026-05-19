"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { MessageCircle, X, Send, Clock } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

const WELCOME: Message = {
  role: "assistant",
  content:
    "Bonjour ! Je suis votre conseiller en voyages temporels. Comment puis-je vous aider à choisir votre prochaine aventure à travers le temps ?",
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  async function handleSend(e?: FormEvent) {
    e?.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: "user", content: text }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Je n'ai pas pu vous répondre. Veuillez réessayer." },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Désolé, une perturbation temporelle a interrompu la connexion. Veuillez réessayer dans un instant.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Chat window ─────────────────────────────────────────────── */}
      {open && (
        <div
          className="flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: "min(384px, calc(100vw - 3rem))",
            maxHeight: "min(500px, calc(100vh - 6rem))",
            background: "oklch(0.11 0.028 265)",
            border: "1px solid oklch(0.72 0.13 82 / 0.25)",
            boxShadow:
              "0 0 60px oklch(0.72 0.13 82 / 0.08), 0 24px 48px oklch(0 0 0 / 0.5)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{
              background: "oklch(0.09 0.025 265)",
              borderBottom: "1px solid oklch(0.72 0.13 82 / 0.18)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.72 0.13 82 / 0.15)" }}
              >
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">Conseiller temporel</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "#4a9e5c" }}
                  />
                  En ligne
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg transition-colors hover:bg-white/5"
              aria-label="Fermer le chat"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] text-sm leading-relaxed rounded-2xl px-3.5 py-2.5"
                  style={
                    msg.role === "user"
                      ? {
                          background: "oklch(0.72 0.13 82)",
                          color: "oklch(0.09 0.025 265)",
                          borderBottomRightRadius: "4px",
                        }
                      : {
                          background: "oklch(0.15 0.04 265)",
                          color: "oklch(0.88 0.015 85)",
                          border: "1px solid oklch(0.72 0.13 82 / 0.12)",
                          borderBottomLeftRadius: "4px",
                        }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 rounded-2xl"
                  style={{
                    background: "oklch(0.15 0.04 265)",
                    border: "1px solid oklch(0.72 0.13 82 / 0.12)",
                    borderBottomLeftRadius: "4px",
                  }}
                >
                  <span className="inline-flex items-center gap-1">
                    {[0, 150, 300].map((delay) => (
                      <span
                        key={delay}
                        className="block w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{
                          background: "oklch(0.72 0.13 82)",
                          animationDelay: `${delay}ms`,
                        }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex gap-2 p-3 shrink-0"
            style={{ borderTop: "1px solid oklch(0.72 0.13 82 / 0.12)" }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez-moi vos questions sur les voyages temporels..."
              disabled={loading}
              className="flex-1 text-sm rounded-xl px-3 py-2 outline-none bg-transparent placeholder:text-muted-foreground/50 disabled:opacity-60"
              style={{
                background: "oklch(0.09 0.025 265)",
                border: "1px solid oklch(0.72 0.13 82 / 0.2)",
                color: "oklch(0.94 0.015 85)",
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="h-9 w-9 shrink-0 rounded-xl flex items-center justify-center transition-opacity disabled:opacity-40"
              style={{ background: "oklch(0.72 0.13 82)" }}
              aria-label="Envoyer"
            >
              <Send className="h-4 w-4" style={{ color: "oklch(0.09 0.025 265)" }} />
            </button>
          </form>
        </div>
      )}

      {/* ── Floating toggle button ───────────────────────────────────── */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="h-14 w-14 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{
          background: "oklch(0.72 0.13 82)",
          boxShadow:
            "0 0 32px oklch(0.72 0.13 82 / 0.45), 0 4px 20px oklch(0 0 0 / 0.45)",
        }}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {open ? (
          <X className="h-6 w-6" style={{ color: "oklch(0.09 0.025 265)" }} />
        ) : (
          <MessageCircle className="h-6 w-6" style={{ color: "oklch(0.09 0.025 265)" }} />
        )}
      </button>
    </div>
  )
}
