import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// All public pages are open — no auth, no bot blocking.
// The matcher ensures this middleware never runs on static files,
// images, or Next.js internals, so crawlers always get direct access
// to robots.txt, og:image, and other static assets.
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Run middleware only on page routes — skip:
     *   _next/static  — built JS/CSS bundles
     *   _next/image   — image optimisation API
     *   images/       — public images (og:image, preview, etc.)
     *   favicon.ico
     *   robots.txt
     *   sitemap.xml
     */
    '/((?!_next/static|_next/image|images/|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)',
  ],
}
