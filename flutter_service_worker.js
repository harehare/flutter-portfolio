'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "437034aafd1a9d0e04e7bb56b3446870",
"/": "437034aafd1a9d0e04e7bb56b3446870",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/assets/about.json": "7836bdcd9c4022520d46bf1d10e69729",
"assets/assets/works.json": "867110f45f1a185f4ee5cd5f2170647c",
"assets/assets/blog.json": "b7e021fbd33bcc6b8a0bcc184261d922",
"assets/assets/contents/skills.md": "48175d4f11aac635ef6255d9f64244f4",
"assets/assets/contents/resume.md": "2694accd9ccb9dcdd07afb980cc977c7",
"assets/assets/posts/2020-05-05.md": "8492799abf9a38d13d3054fbe302395f",
"assets/assets/skills.json": "8f75ac0f9b28106634f79f51cfd197e8",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "1e650e975b20869b6835c6230c7a4b4a",
"assets/LICENSE": "b0b1396f915783031fd0413024b55cbe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "ebbecbb09d86ce2ff87fe73311e09e7c",
"manifest.json": "a60f4fa20a686cbf8dfac881241d008b"
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
