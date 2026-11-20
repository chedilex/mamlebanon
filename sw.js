// MAM Lebanon service worker: shows notifications (local test + future server push).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'MAM Lebanon', {
    body: d.body || '', icon: './assets/icons/icon-192.png', badge: './assets/icons/badge-96.png',
    data: { url: d.url || './index.html#notifications' }
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './index.html', self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    const c = cs[0];
    if (c) { c.focus(); return 'navigate' in c ? c.navigate(url) : undefined; }
    return self.clients.openWindow(url);
  }));
});
