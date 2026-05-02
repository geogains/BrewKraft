import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''

  // Allow Facebook / social scrapers
  if (
    userAgent.includes('facebookexternalhit') ||
    userAgent.includes('Twitterbot') ||
    userAgent.includes('WhatsApp') ||
    userAgent.includes('Slackbot')
  ) {
    return NextResponse.next()
  }

  return NextResponse.next()
}