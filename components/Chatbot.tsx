'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa'
import { chatSuggestions, getFallbackReply } from '@/lib/chatbotKnowledge'

type Message = {
  id: string
  role: 'bot' | 'user'
  text: string
}

const welcomeMessage: Message = {
  id: 'welcome',
  role: 'bot',
  text: "Hi! I'm Thidas's AI portfolio assistant. Ask about his experience, skills, projects, or how to reach him.",
}

export default function Chatbot() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([welcomeMessage])
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!listRef.current) return
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, typing, open])

  const sendMessage = async (raw: string) => {
    const text = raw.trim()
    if (!text || typing) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
    }

    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput('')
    setTyping(true)

    try {
      const history = nextMessages
        .filter((message) => message.id !== 'welcome')
        .map((message) => ({
          role: message.role === 'user' ? 'user' : 'assistant',
          content: message.text,
        }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })

      const data = await response.json()
      const reply =
        typeof data?.reply === 'string' && data.reply.trim()
          ? data.reply.trim()
          : typeof data?.error === 'string'
            ? data.error
            : getFallbackReply(text)

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'bot',
          text: reply,
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'bot',
          text: getFallbackReply(text),
        },
      ])
    } finally {
      setTyping(false)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    void sendMessage(input)
  }

  if (!mounted) return null

  return createPortal(
    <div className="pointer-events-none fixed bottom-5 right-5 z-[9999] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto mb-4 flex h-[min(34rem,72vh)] w-[min(22.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.4rem] border border-line bg-[color-mix(in_srgb,var(--bg-elevated)_96%,transparent)] shadow-[0_18px_50px_rgba(16,24,28,0.18)] backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-3 border-b border-line bg-accent-soft/70 px-4 py-3.5">
              <div>
                <p className="font-display text-base font-semibold text-ink">Ask Thidas</p>
                <p className="text-xs text-muted">AI assistant · powered by OpenAI</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-line p-2 text-ink-soft transition-colors hover:border-accent hover:text-accent"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'rounded-br-md bg-ink text-[var(--bg)]'
                        : 'rounded-bl-md border border-line bg-surface-page text-ink-soft'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-line bg-surface-page px-3.5 py-2.5 text-sm text-muted">
                    Thinking…
                  </div>
                </div>
              )}
            </div>

            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
                {chatSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void sendMessage(suggestion)}
                    className="rounded-full border border-line px-3 py-1.5 text-left text-xs font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-line p-3">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask anything about Thidas..."
                className="w-full rounded-full border border-line bg-surface-page px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                aria-label="Chat message"
              />
              <button
                type="submit"
                disabled={typing}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-deep disabled:opacity-60"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_30px_rgba(13,143,134,0.35)] transition-colors hover:bg-accent-deep"
        aria-label={open ? 'Close portfolio chatbot' : 'Open portfolio chatbot'}
      >
        {open ? <FaTimes className="text-lg" /> : <FaComments className="text-lg" />}
      </motion.button>
    </div>,
    document.body
  )
}
