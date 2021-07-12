//1.全局搜索OkHttpClient
function findOkHttpClient() {
    console.log("11111111")
    var myclasses = Java.enumerateLoadedClassesSync();
    for (let i = 0; i < myclasses.length; i++) {
        const e = myclasses[i];
        if (e.split(".").length === 2) {
            var temp = Java.use(e).class
            var fields = temp.getDeclaredFields().toString()
            var interface1 = temp.getInterfaces().toString()
            if (interface1.indexOf("java.lang.Cloneable") != -1) { //是否实现了Cloneable
                if (fields.indexOf("java.net.ProxySelector") != -1 && fields.indexOf("Socket") != -1) { //成员是否有ProxySelector，Socket类型
                    return e;
                }
            }
        }
    }
    return undefined;
}


// final List<Interceptor> interceptors;
// final List<Interceptor> networkInterceptors;
var interceptors = []

//2.通过OkHttpClient定位Interceptor
function findInterceptor(client) {
    var temp = Java.use(client).class
    var listtype
    var fields = temp.getDeclaredFields()
    for (let i = 0; i < fields.length; i++) {
        const e = fields[i];
        var type = e.getGenericType().getTypeName()
        if (type.indexOf("java.util.List") != -1) {
            var a = /java.util.List<(.*)>/.exec(type)[1]
            if (Java.use(a).class.isInterface()) { //List的泛型是否为接口
                interceptors.push(e)
                listtype = a //Interceptor的类名
            }
        }
    }
    return listtype;
}


function main() {

    Java.perform(
        function () {
            const Client = findOkHttpClient()
            if (Client === undefined) {
                console.log("未找到OkHttpClient");
                return
            }
            const Interceptor = findInterceptor(Client)
            //3. Interceptor 定位 intercept方法,通过该方法的返回值参数拿到Response，Chain

            //   Response intercept(Chain chain) throws IOException;
            var intercept = Java.use(Interceptor).class.getDeclaredMethods()[0]
            const Response = intercept.getReturnType().getName()
            const Chain = intercept.getParameterTypes()[0].getName()

            var request_chain, process_chain; //Chain的request，process方法
            var Request;

            //4.通过Chain的方法定位 Request
            var chainMethods = Java.use(Chain).class.getDeclaredMethods()
            for (let i = 0; i < chainMethods.length; i++) {
                const element = chainMethods[i];
                Request = /public abstract .*\((.+)\)/.exec(element)
                if (Request != undefined) {
                    Request = Request[1]
                    break
                }

            }

            for (let i = 0; i < chainMethods.length; i++) {
                const element = chainMethods[i];
                if (element.getReturnType().getName() === Request) {
                    //5.拿到 Chain 被混淆的request方法名
                    request_chain = element.getName()
                }
                if (element.getReturnType().getName() === Response) {
                    //6.拿到 Chain 被混淆的process方法名
                    process_chain = element.getName()
                }
            }
            console.log("interceptor", Interceptor);
            console.log("response", Response);
            console.log("chain", Chain);
            console.log("client", Client);
            console.log("request", Request);


            var imple = {}
            //intercept的简单实现
            imple[intercept.getName()] = function (chain) {
                var request = chain[request_chain]();
                var res = chain[process_chain](request)
                console.log("请求:", request);
                return res;
            }

            //注册MyInterceptor
            var http = Java.registerClass({
                name: "okhttp3.MyInterceptor",
                implements: [Java.use(Interceptor)],
                methods: imple
            })

            var ArrayList = Java.use("java.util.ArrayList")
            //内存中寻找OKHttpClient对象
            Java.choose(Client, {
                onMatch(i) {
                    interceptors.forEach(e => {
                        //7.反射修改interceptors，networkInterceptors
                        e.setAccessible(true);
                        var list = Java.cast(e.get(i), Java.use("java.util.List"))
                        var arr = ArrayList.$new()
                        for (let i = 0; i < list.size(); i++) {
                            const element = list.get(i);
                            if (element.toString().indexOf("okhttp3.MyInterceptor") === -1) {
                                arr.add(element)
                            }
                        }
                        //将自己的intercept插入
                        arr.add(http.$new())
                        e.set(i, arr);
                    })

                }
            })

        })

}

main()
