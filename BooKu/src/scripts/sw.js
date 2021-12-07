/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request);
});
