import { NextResponse } from 'next/server'

const REALM = 'HEIMDALL analyst area'

function isProtectedPath(pathname) {
  return pathname === '/analyst' || pathname.startsWith('/analyst/')
}

function unauthorized(message = 'Authentication required') {
  return new NextResponse(message, {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0'
    }
  })
}

function forbidden(message = 'Analyst area is not configured') {
  return new NextResponse(message, {
    status: 503,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0'
    }
  })
}

function decodeBasicAuth(value) {
  if (!value || !value.startsWith('Basic ')) return null

  try {
    const decoded = atob(value.slice('Basic '.length))
    const separatorIndex = decoded.indexOf(':')
    if (separatorIndex === -1) return null

    return {
      login: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1)
    }
  } catch (error) {
    return null
  }
}

export function middleware(request) {
  const { pathname } = request.nextUrl

  if (!isProtectedPath(pathname)) {
    return NextResponse.next()
  }

  const expectedLogin = process.env.HEIMDALL_ANALYST_LOGIN || 'heimdall'
  const expectedPassword = process.env.HEIMDALL_ANALYST_PASSWORD || process.env.HEIMDALL_ADMIN_SECRET || ''

  if (!expectedPassword) {
    return forbidden('HEIMDALL analyst area is closed. Set HEIMDALL_ANALYST_PASSWORD in Vercel Environment Variables.')
  }

  const credentials = decodeBasicAuth(request.headers.get('authorization'))

  if (!credentials) {
    return unauthorized()
  }

  const loginMatches = credentials.login === expectedLogin
  const passwordMatches = credentials.password === expectedPassword

  if (!loginMatches || !passwordMatches) {
    return unauthorized('Invalid login or password')
  }

  const response = NextResponse.next()
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive')
  return response
}

export const config = {
  matcher: ['/analyst/:path*']
}
