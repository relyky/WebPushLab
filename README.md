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

> 於行動平台`Andriod`與`iOS`對WebPush的支援不完整。若要在`Andriod`與`iOS`使用FCM以可以支援WebPush的應用，官方有分別為`Andriod`與`iOS`提供native SDK的支援。[在 Android 上設置 Firebase Cloud Messaging 客戶端應用](https://firebase.google.com/docs/cloud-messaging/android/client?hl=zh-tw)、[在 iOS 上設置 Firebase Cloud Messaging 客戶端應用](https://firebase.google.com/docs/cloud-messaging/ios/client?hl=zh-tw)。

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

# Summary
以整體來說FCM WebPush的指令設計成熟度是不夠的，就應用來說還是可以滿足server push messsage to client這一項需求。    
說它不成熟的原因之一是行動平台尚未“直接支援”當然這與安全性有關，FCM只靠SSL來做安全性的把關，這顯然不足，現在可以弄到免費SSL的管道也不是沒有，也就是SSL的安全性保證已被打破。  
不成熟的原因之二是FCM WebPush機制運作起來其實是三方的整合，FCM, Web Push Server, Web Push Client，更正確來是說三方的配合尤其是client端，這三方的WebPush相關指令並非一套所以說成熟度不足。   
再來是FCM尚未收費未來也不能保證持續免費，免費這件事本身就不合理不合成本，所以不成熟也可以理解，所以FCM更像是一種“公關或廣告”手段。  
不成熟的原因之三是，Web Push並非標準也不是協定連共同規範都算不上，實際上以現在來說Web Push可以說等同FCM。   
結論的結論，FCM WebPush是可以用的若有跨平台的WebPush需求(大概是社交類的應用)。若只是單一系統內的Web Push機制其實用long polling這類老手段依然是很好的解，更好一點就是採用SignalR同類的工具來實現都比用FCM實作Web Push在安全性與成熟度都更好。   
> ※ 推測大概也是安全性的關係，所以在行動平台上(iOS,Android)的FCM現在也只提供native app的支援。
