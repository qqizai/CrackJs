

var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
    , o = s(n(423))
    , i = s(n(59))
    , a = s(n(432))
    , u = n(48)
    , l = n(14);
function s(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function c() {
    return {
        "x-app-version": "",
        "x-device-id": window.waitpay_device_id,
        "x-device-system": l.PLATFORM_IS_IOS ? "iOS_qq_web" : "Android_qq_web",
        "x-device-version": "",
        "x-device-brand": "",
        "x-device-model": "",
        "x-position": u.store.getState().position.latitude + "," + u.store.getState().position.longitude,
        "x-location": "" + escape(u.store.getState().position.city),
        "x-connection": "wifi",
        "x-channel": i.default.CHANNEL_ID
    }
}
function f(e) {
    if (!i.default.PRODUCTION || "{" === e[0])
        return JSON.parse(e);
    var t = void 0;
    return t = (t = a.default.decode(e).slice(10)).split("").map(function(e) {
        return e.charCodeAt(0)
    }),
        t = new Uint8Array(t),
        t = o.default.inflate(t),
        t = function(e) {
            var t = void 0
                , n = void 0
                , r = void 0
                , o = void 0
                , i = void 0
                , a = void 0;
            t = "",
                r = e.length,
                n = 0;
            for (; n < r; )
                switch ((o = e[n++]) >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        t += String.fromCharCode(o);
                        break;
                    case 12:
                    case 13:
                        i = e[n++],
                            t += String.fromCharCode((31 & o) << 6 | 63 & i);
                        break;
                    case 14:
                        i = e[n++],
                            a = e[n++],
                            t += String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | (63 & a) << 0)
                }
            return t
        }(t = new Uint16Array(t)),
        t = decodeURIComponent(t),
        JSON.parse(t)
}

var data = "N2ZjMWE2ZWVlOXic7VvZcts6Ev0aPlqFHd2PpJffcIFYHE1s2aMlmczXT4Ok\n" +
    "SEYiFcWWdTNVqdJlaBLE0micc7qBW9iqEGKzddvdhm4KWdL19Wu+Fbd0fYmb\n" +
    "jXuK/av+xTpuds/b7nlTyfNys/9bV+2jZWgfcCtAqvbDsHSrt+Xq6XH/kq6C\n" +
    "S8FB6r7259fV03K7C13DnMuFFMpYjsiZVbIr5bajQkIuuDCSobSWCaWMaUut\n" +
    "3Muo//e2gPsCquJeFxUr4KG4NwVCgc1NhQWa/AruCrRNGci/fHNfVDZ/XvGi\n" +
    "ks2NKAAHSy1Xj2u37ZpiC9Dt87cvr6uhfQ5GMGEUV7z/8ntcPn3pTCcXaIyx\n" +
    "7YvN627t49hQ3oFFr5k2LFkTa4QI0WhE4W1kqPo6a7eJ1J3V1/bTG77goKGz\n" +
    "W00vwhVM8t0tX9zycbN7eXHrH22Dq93zc/vWL7c/Hg8mR+fmqofmxhZ431fl\n" +
    "vj09vq2Xfu8QdsE6G23duvNc6IqGQM65GdUKBZS5j1QrjYnGOm4Hb4uq7Nvx\n" +
    "NINPr+ujjplcrrzdf8Aao2GuJdeOeeD7KmjMT/Fxt37uP/+y3b5tmtsH+i1f\n" +
    "nhZkmW3+7839WPjXF3r635gX4IP0MUUpXNTN7HofVcLotUSkBcD94m311LcU\n" +
    "aMW5lR/6aRfq68vQkc3jN/e8DI+r1+9tke16F/fLl5p9ITd4/Pa681/i3oZH\n" +
    "S5euWoOzqCOy4KSOwuvgtQFvJVplpe0b7KqiCX97e17SzU9G3C/8vjgt3uex\n" +
    "jVVR3Wa/I2OTp5aseYKNsVvva1cUg4VuypS5MH1o7/Lzw147KbRNPmCqvQ2S\n" +
    "CaY4JE79R+WMZmf2+iUSxLjVZ3Ra383MRd+V0aRM2G/UtX1V5BH+dbfajpAo\n" +
    "N/zzu+2Pt9H43HKE6Ycd2cb/bD9nhpRiQhNYGzZPCxxAGOIG9gtikJbPEoLd\n" +
    "4/ARDbRYNWCezTgHplnrplvi3ZOzQd+KadRHAEJpsNbMoL5mjOk51K+phsCd\n" +
    "YT7oWso6RhMFXZ1VCrQZ6jxGfXJ6BXOofwkLfB7G594fYbyew3iqsipAdRiP\n" +
    "zU2pitLmV8ALlBmp6fvqgQvZOW7mPJXhHxpkJxtUTfnSdJxHg4aWQGxRls3o\n" +
    "aQGYxWJxDmMc2BByA3h7AaJ4pEabMpqaERrzhZqiP+3+T8gXapLucjm8lR+j\n" +
    "juSeN+/gDi8iST/SLDZJTzeROIPLYLiz0kgRLsQd1DJNG9KPNZaneTIZFPPs\n" +
    "VkUpGyegiWg0ADT6pQEqu5BnUIngTjPHapZMykRIfBxrSZyiBK3BVF+GSmbH\n" +
    "sIfW1lXpl11bN2IMs48ju7sqo2SjXYhRPnHeuNZC9B09JheltWKof0EtFpXk\n" +
    "9NPIYI5jUEjCdkCpCOEnyeZYMxM0qDyJ7SsQnZ7EqoGJFpfPZJ0eJg8jDU6r\n" +
    "WmkrRmA94hzWo+sR38SEyXrJacFiLRkIR78gI4VeAVKMs3zDFgo5798eEM6F\n" +
    "rfB5zKPMBPPgHPPo7Lzkm9lnqdeNFqIRVHeda8PgYv90dJF1u2PSCpWYMigS\n" +
    "c8YwDXUEq10drxFd/BZGnUAhut7wcWcnoCi+vG1/nA1G2S0eirJqkOWuc1BS\n" +
    "EuVDh0fzWEPLTaM0ypwQs0woUrJ86PMU4HDCGT0HNFaCmFazpihbpWKyW2dm\n" +
    "aDusPowikrolJTSL+vdQRBkvMUjvUYYaMEJitUCbLNO1FTydQBEjtbJqGkXe\n" +
    "M9Qri9RZqOhFqs2Ks1Ord02XW/CozlSWV0ELK1Mw0jgaiQrgdKg5EhMSa0bn\n" +
    "CDz+osU70YIzUELACawQwIyWAk5iBckgyDlRkJzhHGZICgCNIHiXyKbFicmO\n" +
    "iOWwam7FnpwPUn9H62sIHVsSJLkF2Qkzq991MRbFUq1zl3edzahYvilznWI+\n" +
    "lp6MpEEaYbUYsjdjMLIUfysu5gBJeHRopScEst4KI72QQTHtg+NOhIGmDwCJ\n" +
    "usKVknYOjw7M907DfTpUCf07OdOjWs+aVsjuX7XyjYal/wg4Y8TKD4r45gGp\n" +
    "ngfvakiJMc9VqqUCnkyNwgorRW10qhf/ert6itVoASEwboJhBK70r9B19F4n\n" +
    "9Art4JqnI0z/NMSiE4nKUxEVnhEHa61rwUyisIgYQYENIlJsJElCahA1nNnL\n" +
    "jwTzbfzbJFYy42OzsG5/WliHwXIXI88Py9RWCQaexpB8ikl7QfNQG44KI7Jz\n" +
    "jf/e8P4So7pg4N+u1daRThAqXjKp/CHHJAYUip1iU563MGhxnWJTZbiyaCyi\n" +
    "EtbMsakywImYWU6rzrEpAWLZMFzZytNjwfpRSc6EYALRTm8hnpDkNgKaQN13\n" +
    "3EeTN3IYamcZZpHnw8Cqh5JcErP2sceEIn//kK8szU/wHflYyTpl0krz3GXe\n" +
    "cXXVMqDd6zto9hFtTjZXzdDhtuH8cZkyr9E2r9wt4ofOTo0u4Oew47HhHn5+\n" +
    "WGZbXETvk2NFH8Cn4EO0jinyitqC1IGCUsPsX73/Pr1vDCKHE8cfFFOAjA8b\n" +
    "qVP4pBQjxY8SQM7jExfcEtiRRiahPA1Q4yyVzDsj+cld58TYutWlIQtaAB6Y\n" +
    "9Ey8AlBYRyuiiF4oBPAyGdAmMpfA+flEJKfoSMiZja8LW+DKCGZPJBf2qiHj\n" +
    "DGvUOO+2CbodsGYDF1pME410H5U53EBr7ESSPMvwqiHm3k6Q2yrLPeTf/2FI\n" +
    "pqSMDnnSVvJgnTApRIM2aFt7DwF/hWT6L5LNSC00Rp6QWhqQNBQbFsdk3sIY\n" +
    "QjxCMwX7DZqJTRUugDOpQStl5ZlJT8z02p7vwd6tPiK1NAG3RQoSRwH6edAl\n" +
    "KIgzipwvBCm8IKHlkqTAAiXmTMz8Sa1fSa33D/nKQMXnpVZOebQBv2huehBq\n" +
    "Dp1V+JP46nIoXRnO+p36P00/Ma9j8Ky2RFeEOCwxqZzhnkiZ10nVf1HnvflS\n" +
    "JSl6wxOwwy0zQ5pocmMFSDyhNdr0uzQT4R3TTHMmpKHmpkGnWQmVakaBXQxA\n" +
    "sUG+aZZie2hy7uhHl1rtj6bYvFOYD1Rhk0rjQ+71+AAOLXucdGjYV9jmHsUo\n" +
    "ILFnZVqnj6oywW4kWBDWDpmdMfqZheJa4BwCJh2icmC9NVJJH2VMmRtUpNjV\n" +
    "8zjUOXFWleB/Jt36MfufsPzv2fzzT7iy39pZOuEAXURqzeiI0/FYe8PobMvS\n" +
    "iP/HM07qGhB7mD7k3GKdpJSspthMJ19HXjMBTNVeeD0w/ZWOx56TyVWJftFz\n" +
    "pZElB1HLpE1KqU6MKQvXPhx71OXrHGS6aA7zMnNDuCclnKA6LpkCBqOj/tNb\n" +
    "g4qCZ52lppzfGiQhnk9FMypozj1XMLWVRQMs1Tsl9iSznEphpqAC1HVUBhOF\n" +
    "dCZprXxgWom6ljDsf3xQV//GOK+sq/dFz+CATjPrEfL3Tdu8F1Hdj27aDT47\n" +
    "Iyi6zb4/THPbpBmyYKTWxgthZAJOKBatqRnW8Zcnmv5q7hnAnejyF7d5DDG5\n" +
    "3fP28Vtchdf9uAZnX8d/7+Jm+9Phde/q4Or6hqs63ihh442LQd5oKU3wLup6\n" +
    "dEDua/zx/XV9cEp9Wnr53XodyTxv/f+eJrqIc/u6dc/N8/2KEeMXjVVHHafR\n" +
    "27v/Af+hFAM="



console.log(f(data))



// https://static.waitwaitpay.com/web/sd_se/index.html#/search/searchfor=vendor&keyword=%E7%B1%B3%E7%B2%89



