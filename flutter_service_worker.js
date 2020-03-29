'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6d0b38a8ae430a8bace3de661de214a3",
"assets/LICENSE": "2ee61ff4ecde8a20379091913daa931f",
"assets/assets/about.json": "7836bdcd9c4022520d46bf1d10e69729",
"assets/assets/works.json": "69b6a5a415235980096c3771a0d1312b",
"assets/assets/skills.json": "8f75ac0f9b28106634f79f51cfd197e8",
"assets/assets/contents/skills.md": "48175d4f11aac635ef6255d9f64244f4",
"assets/assets/contents/resume.md": "2694accd9ccb9dcdd07afb980cc977c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"main.dart.js": "766eac994cad8a5a0084b59ef7e73087",
"index.html": "9089e4eb13f24f1dc42954ab6355e7b3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
