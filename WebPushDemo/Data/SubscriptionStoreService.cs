using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using System.Runtime.Serialization;
using WebPushDemo.Model;
using System.Runtime.Serialization.Formatters.Binary;

namespace WebPushDemo.Data
{
    public class SubscriptionStoreService
    {
        readonly IMemoryCache cache;

        static object _lockObj = new object(); 

        public SubscriptionStoreService(IMemoryCache _cache)
        {
            cache = _cache;
        }

        public void UpdateSubscription(UserSubscriptionInfo subs)
        {
            lock (_lockObj)
            {
                var subsRepo = cache.Get<Dictionary<string, UserSubscriptionInfo>>("WebPush:UserSubs") ?? new Dictionary<string, UserSubscriptionInfo>();
                
                if (subs.subscription == null)
                {
                    //## 取消訂閱
                    subsRepo.Remove(subs.userCode);
                }
                else
                {
                    //## 新增或更新訂閱
                    subsRepo[subs.userCode] = subs;
                }

                cache.Set("WebPush:UserSubs", subsRepo);
            }
        }

        public List<UserSubscriptionInfo> GetSubscriptionAll()
        {
            lock (_lockObj)
            {
                var subsRepo = cache.Get<Dictionary<string, UserSubscriptionInfo>>("WebPush:UserSubs") ?? new Dictionary<string, UserSubscriptionInfo>();
                var dataList = subsRepo.Select(c => c.Value).ToList();
                return dataList;
            }
        }

        public Dictionary<string, UserSubscriptionInfo> GetRawData()
        {
            lock (_lockObj)
            {
                var subsRepo = cache.Get<Dictionary<string, UserSubscriptionInfo>>("WebPush:UserSubs") ?? new Dictionary<string, UserSubscriptionInfo>();
                return subsRepo;
            }
        }

        public void FillRawData(Dictionary<string, UserSubscriptionInfo> rawData)
        {
            lock (_lockObj)
            {
                cache.Set<Dictionary<string, UserSubscriptionInfo>>("WebPush:UserSubs", rawData);
            }
        }

    }
}
