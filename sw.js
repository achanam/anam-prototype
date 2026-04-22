const cacheName = 'anam-prototype-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Pas instalasi, simpan semua file ke cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// Ambil file dari cache dulu, kalau gak ada baru ambil dari internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
