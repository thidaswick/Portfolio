import { NextRequest, NextResponse } from 'next/server'
import { PORTFOLIO_SYSTEM_PROMPT } from '@/lib/chatbotKnowledge'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured on the server.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const messages = Array.isArray(body?.messages) ? (body.messages as ChatMessage[]) : []

    const sanitized = messages
      .filter(
        (message) =>
          message &&
          (message.role === 'user' || message.role === 'assistant') &&
          typeof message.content === 'string' &&
          message.content.trim().length > 0
      )
      .slice(-12)
      .map((message) => ({
        role: message.role,
        content: message.content.trim().slice(0, 2000),
      }))

    if (sanitized.length === 0) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.4,
        max_tokens: 450,
        messages: [
          { role: 'system', content: PORTFOLIO_SYSTEM_PROMPT },
          ...sanitized,
        ],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      const message =
        data?.error?.message || 'OpenAI request failed. Please try again shortly.'
      return NextResponse.json({ error: message }, { status: response.status })
    }

    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "I couldn't generate a reply just now. Please try again."

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json(
      { error: 'Unexpected server error while contacting OpenAI.' },
      { status: 500 }
    )
  }
}
