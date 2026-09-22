import { NextRequest, NextResponse } from 'next/server'
import { ValidationError } from 'yup'
import { contactValidationSchema } from '@/lib/contact'

const WINDOW_MS = 60_000
const MAX_REQUESTS = 5
const requests = new Map<string, { count: number; startedAt: number }>()

function getClientKey(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anonymous'
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')

  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ error: 'Origem não autorizada.' }, { status: 403 })
  }

  const key = getClientKey(request)
  const now = Date.now()
  const current = requests.get(key)
  const entry = current && now - current.startedAt < WINDOW_MS
    ? current
    : { count: 0, startedAt: now }

  if (entry.count >= MAX_REQUESTS) {
    return NextResponse.json({ error: 'Muitas tentativas. Tente novamente em instantes.' }, { status: 429 })
  }

  entry.count += 1
  requests.set(key, entry)

  try {
    const values = await contactValidationSchema.validate(await request.json(), { abortEarly: false, stripUnknown: true })
    const endpoint = process.env.SUBMIT_FORM_ENDPOINT || 'https://submit-form.com/kLkLgWqF9'
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
      signal: AbortSignal.timeout(10_000),
    })

    if (!response.ok) return NextResponse.json({ error: 'Não foi possível enviar a mensagem.' }, { status: 502 })
    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ error: 'Confira os campos do formulário.', fields: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Erro ao processar a mensagem.' }, { status: 500 })
  }
}
