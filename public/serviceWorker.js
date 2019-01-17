let cacheName = "SWP-v1";
let cacheList = ["/views/index.html",
                 "/scripts/index.js"];

self.addEventListener("install", e => {
  console.log("Service Worker: Installed");

  e.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(cacheList);
      })
  );
});

self.addEventListener("activate", e => {
  console.log("Service Worker: Activated");

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cache => {
          return cache != cacheName;
        }).map(cache => {
          return caches.delete(cache);
        })
      )
    })
  )
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => {return response || fetch(e.request)})
  )
});
