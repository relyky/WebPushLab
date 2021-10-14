const SW = '[Service Worker]';

self.addEventListener('install', function (event) {
  console.log(`${SW} install`, event);
});

self.addEventListener('activate', function (event) {
  console.log(`${SW} activate`, event);
});

self.addEventListener('fetch', function (event) {
  console.log(`${SW} fetch`, event);
});

/// 當收到訊息時，顯示訊。
self.addEventListener('push', event => {
  const textMsg = event.data.text(); // 若是純文字訊息用text()函式解開。
  const jsonObj = event.data.json(); // 若是Json物件封包用json()函式解開。
  console.log(`${SW} Push Received.`, { textMsg, jsonObj });

  const { title, body, url, imageUrl } = jsonObj;
  const options = {
    icon: '/images/icon.png',
    badge: '/images/badge.png',
    body,
    image: imageUrl,
    data: {
      url
    }
  };

  // 送出 Notification
  event.waitUntil(self.registration.showNotification(title, options));
});

/// 當點擊訊息時，開啟關聯網址畫面。
self.addEventListener('notificationclick', function (event) {
  console.log(`${SW} Notification click Received.`, { event, notification: event.notification });

  event.notification.close();

  const url = event.notification.data.url;
  if (url) event.waitUntil(clients.openWindow(url));
});

/// Background Synchronization
self.addEventListener('sync', event => {
  if (event.tag == 'sync-messages') {
    console.log('sync-messages', event);
    //event.waitUntil(sendOutboxMessages());
  }
});
