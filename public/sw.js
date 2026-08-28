const CACHE_NAME = 'glamorous-pwa-v1'
const OFFLINE_URL = '/offline'

const PRECACHE_ASSETS = [
  '/',
  OFFLINE_URL,
  '/manifest.webmanifest',
  '/site.webmanifest',
  '/favicon.svg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((name) => {
            if (name !== CACHE_NAME) {
              return caches.delete(name)
            }
          })
        )
      )
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Ignore non-GET and cross-origin requests
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return
  }

  // Navigation requests: Network First, fallback to cached page or /offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone))
          }
          return response
        })
        .catch(async () => {
          const cachedResponse = await caches.match(request)
          if (cachedResponse) return cachedResponse
          const offlineFallback = await caches.match(OFFLINE_URL)
          if (offlineFallback) return offlineFallback
          return new Response('You are currently offline. Please reconnect to view Glamorous.', {
            headers: { 'Content-Type': 'text/plain' },
          })
        })
    )
    return
  }

  // Static assets (images, fonts, scripts, styles): Stale-While-Revalidate
  if (
    request.destination === 'image' ||
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone()
              caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache))
            }
            return networkResponse
          })
          .catch(() => cachedResponse)

        return cachedResponse || fetchPromise
      })
    )
  }
})
