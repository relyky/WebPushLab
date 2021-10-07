using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Server.ProtectedBrowserStorage;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using WebPush;
using WebPushDemo.Model;

namespace WebPushDemo.Pages.PushMessage
{
    partial class _PushMessage
    {
        [Inject] ILogger<_PushMessage> logger { get; init; }
        [Inject] IConfiguration Configuration { get; init; }
        [Inject] Data.SubscriptionStoreService subsStore { get; init; }


        #region State
        FcmPushInfo data = new FcmPushInfo
        {
            title = "我出運了",
            body = "不小心中了彩卷200億。",
            url = "http://www.asiavista.com.tw",
            imageUrl = "http://www.asiavista.com.tw/AppPortal/images/logo.png"
        };
        string result;
        bool f_Loading = false;
        #endregion

        async Task HandleValidSubmit(EditContext ctx)
        {
            try
            {
                f_Loading = true;
                await Task.Delay(500); // 跑太快了拉長一點時間
                if (String.IsNullOrWhiteSpace(data.title))
                {
                    result = "訊息抬頭不可空白！";
                    return;
                }

                if (String.IsNullOrWhiteSpace(data.body))
                {
                    result = "訊息內容不可空白！";
                    return;
                }

                var subsList = await Task.Run(() => subsStore.GetSubscriptionAll());

                var vapidDetails = new VapidDetails(
                    subject: @"mailto:relyky@gmail.com",
                    publicKey: Configuration["VapidKeys:PublicKey"],
                    privateKey: Configuration["VapidKeys:PrivateKey"]);

                foreach (var c in subsList)
                {
                    var subs = c.subscription;
                    var subscription = new PushSubscription(
                        endpoint: subs.endpoint,
                        p256dh: subs.keys.p256dh,
                        auth: subs.keys.auth);

                    string payload = JsonSerializer.Serialize(data);

                    var pusher = new WebPushClient();
                    Task _ = pusher.SendNotificationAsync(subscription, payload, vapidDetails); // 不再 await，將以非同步推送訊息。 

                    //try
                    //{
                    //    var pusher = new WebPushClient();
                    //    await pusher.SendNotificationAsync(subscription, payload, vapidDetails);
                    //    result = "已送出訊息：" + payload;
                    //}
                    //catch (WebPushException exception)
                    //{
                    //    result = $"送出訊息失敗！StatusCode:{exception.StatusCode}, Message:{exception.Message}";
                    //}
                }

                result = $"已送出訊息 at {DateTime.Now:HH:mm:ss}。";
            }
            finally
            {
                f_Loading = false;
            }
        }
    }

    class FcmPushInfo
    {
        public string title { get; set; }
        public string body { get; set; }
        public string url { get; set; }
        public string imageUrl { get; set; }
    }


}
