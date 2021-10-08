# Web Push Lab
Web Push Server practices with Blazor Server App.

# Development Environment
* Visual Studio 2019
* .NET5
* Blazor Server App

# Key Point
* 到現在(2021年)為止 Web Push 似乎只能透過[FCM (Firebase Cloud Messaging)](https://firebase.google.com/docs/cloud-messaging)傳遞，故在實作訂閱(subscribeUser)時不用指定也會拿到FCM的 endpoint 網址。
* FCM在Web Push的應用機制中只佔一小部份，不過是最關鍵的部份，負責自Server端將訊息送到Client端。
* 在俱體實作上有兩個階段，第一個階段是用戶訂閱，有三個關鍵動作：
 1. register sw.js：向Browser註冊`ServiceWorker`。關鍵指令：`navigator.serviceWorker.register()`。
 2. subscribe：向FCM下達訂閱需求將會拿到[PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)。關鍵指令：`swRegistration.pushManager.subscribe()`。
 3. storeUserSubscription：管理 UserSubscription 的部份由應用模組自行管理，其中前一步驟拿到的`PushSubscription`並沒有與用戶關聯起來，這個關聯要自已處理並自已保存。
* 實作上第二階段就可以透過FCM來推送訊息給用戶。當`sw.js`收到訊息時再利用[Notification](https://developer.mozilla.org/zh-TW/docs/Web/API/notification)通知到用戶。

> 於行動平台`Andriod`與`iOS`對WebPush的支援不完整。若要在`Andriod`與`iOS`使用FCM以可以支援WebPush的應用，FCB官方有分別為`Andriod`與`iOS`提供native SDK的支援。[在 Android 上設置 Firebase Cloud Messaging 客戶端應用](https://firebase.google.com/docs/cloud-messaging/android/client?hl=zh-tw)、[在 iOS 上設置 Firebase Cloud Messaging 客戶端應用](https://firebase.google.com/docs/cloud-messaging/ios/client?hl=zh-tw)。

# Architure Diagram
![Web Push Server Architecture](https://github.com/relyky/WebPushLab/blob/main/doc/Web%20Push%20Server%20Architecture.svg)

# Appendix
* [Add push notifications to a web app](https://codelabs.developers.google.com/codelabs/push-notifications/#0)
* [Push Companion](https://web-push-codelab.glitch.me/)
* [Push Notifications codelab](https://github.com/GoogleChromeLabs/web-push-codelab)
* [web-push-csharp](https://github.com/web-push-libs/web-push-csharp)
* [Push Notifications and ASP.NET Core - Part 1 (Push API)](https://www.tpeczek.com/2017/12/push-notifications-and-aspnet-core-part.html?m=1)
* [實作Web Notifications實現訊息推播](https://blog.gofa.cloud/Article/post/aDJN2aJ1#%E8%A8%82%E9%96%B1Push%E4%B8%A6%E8%A8%98%E9%8C%84%E8%A8%82%E9%96%B1%E8%B3%87%E8%A8%8A)
* [Service Worker介紹](https://cythilya.github.io/2017/07/16/service-worker/)
* [Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
* [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker)
* [PushManager](https://developer.mozilla.org/en-US/docs/Web/API/PushManager)
