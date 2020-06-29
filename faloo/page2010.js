/*
@Time    : 2019/12/12 22:13
@Author  : qizai
@File    : page2010.py
@Software: WebStorm
*/


ischange = 1;
function go_mulu()//下页一页
{
    document.location = document.getElementById("huimulu").href;
}
function go_pre()//上一页
{
    document.location = document.getElementById("pre_page").href;
}
function go_next()//下页一页
{
    document.location = document.getElementById("next_page").href;
}
//键盘左右键控制翻页
function change_page() {
    if (document.activeElement.id == 'CommentText0') {
        if ($("#CommentText0") != undefined && $("#CommentText0") != null) {
            if ($("#CommentText0").val() == "") {
                change_page_Left_right();
            }
        } else {
            change_page_Left_right();
        }
    }
    else if (document.activeElement.id == 'Title0') {
        if ($("#Title0") != undefined && $("#Title0") != null) {
            if ($("#Title0").val() == "") {
                change_page_Left_right();
            }
        } else {
            change_page_Left_right();
        }
    } else {
        change_page_Left_right();
    }

}

function change_page_Left_right() {
    if (event.keyCode == 37)
        if (ischange == 1) go_pre();
    if (event.keyCode == 39)
        if (ischange == 1) go_next();
}

$(document).ready(function () {
    login_start();
});
function LeeHover(a, b) {
    b.css("display", "none");
    function hideObj(obj) {
        obj.hide();
    }
    var t;
    a.hover(
        function () { clearTimeout(t); b.show(); },
        function () { t = setTimeout(function () { hideObj(b) }, 100); }
    );
    b.hover(
        function () { clearTimeout(t); },
        function () { t = setTimeout(function () { hideObj(b) }, 100); }
    );
}
//侧边
document_width = 0;
function side_hide() {
    //return;
    $("#side div").hide();
    $("#side").width(0);
    $("#main").css("padding", "0px");
    $("#main").css("margin", "0px");
    $("#main").css("width", "98%");
    // $("#side_bt").html("推<br />荐<br />好<br />书");
    $.cookie("side", 0, { expires: 300 });
}
function side_show() {
    //return;
    $("#side div").show();
    $("#side").width(240);

    $("#main").css("padding-right", "240px");
    $("#main").css("width", "");

    $("#content").css("width", "95%");
    //$("#side_bt").html("全<br />屏<br />阅<br />读");
    $.cookie("side", 1, { expires: 300 });
}
function loginBox() {
    var top = $(document).scrollTop() + document.documentElement.clientHeight - 31;
    $("#login").css("top", top + "px");
    $("#shuqiandiv").css("top", top - 260 + "px");
}
function topbar24margin() {
    $("#topbar2_1").css("margin-bottom", "28px");
}
function image_do(num, o, id, n, en, t, k, u, time, fontsize, fontcolor) {
    image_do3(num, o, id, n, en, t, k, u, time, fontsize, fontcolor,1);
}
function image_do2(num, o, id, n, en, t, k, u, time, fontsize, fontcolor, type) {
    image_do3(num, o, id, n, en, t, k, u, time, fontsize, fontcolor,1);
}
function image_do3(num, o, id, n, en, t, k, u, time, fontsize, fontcolor,chaptertype) {
    var type = 1;
    var domain = "//read.faloo.com/";
    if (chaptertype==0)//免费
        domain = "//read6.faloo.com/";
    if (type == 2)
        domain = "//read2.faloo.com/";
    var url = domain + "Page4VipImage.aspx?num=" + num + "&o=" + o + "&id=" + id + "&n=" + n + "&ct=" + chaptertype+ "&en=" + en + "&t=" + t + "&font_size=" + fontsize + "&font_color=" + fontcolor + "&u=" + u + "&time=" + time + "&k=" + k;
    url = encodeURI(url);
    var ImgID = "img_src_cok_"+n+"_" + num;
    var obj = document.getElementById(ImgID);
    if (typeof (obj) == "undefined" || obj == null) {
        ImgID = "img_src_cok_" + num;
        obj = document.getElementById(ImgID);
    }
    var id_image = setTimeout("document.getElementById('" + ImgID + "').style.backgroundImage='url(" + url + ")';", 1000);
    var image = new Image();
    image.src = url;
    time_image_count = 0;
    var id_inerval = setInterval(function () { chek_imageinfo(num, obj, image, id_inerval, type); }, 500);
    if (type == 1)
        var id_image2 = setTimeout(function () { if (image == null || image.height < 1) image_do2(num, o, id, n, en, t, k, u, time, fontsize, fontcolor, 2); }, 2500);
    //  document.write(url);
}
function chek_imageinfo(num, obj, image, id_inerval, type)    //检测图像属性
{
    try {
        if (image.height > 0) {

            obj.style.width = image.width + "px";
            obj.style.height = image.height + "px";

            // alert(image.height);
            clearInterval(id_inerval);
        }
        if (type == 1) {
            time_image_count = time_image_count + 1;
            if (time_image_count = 6) {
                clearInterval(id_inerval);
            }
        }
    }
    catch (e) { }
}

function IsAppleOrAndroid() {
    var screenWidth = window.screen.width;
    if (screenWidth < 600) {
        var userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('ipod') !== -1 || userAgent.indexOf('ipad') !== -1 || userAgent.indexOf('iphone') !== -1) {
            return 1;
        }
        else if (userAgent.indexOf('android') !== -1)
            return 2;
    }
    return 0;
}
function CloseTag4MobilePage(fontSize, is_vip) {
    if (IsAppleOrAndroid() > 0) {
        side_hide();
        if (fontSize) {
            $("#content").css("fontSize", fontSize.replace("px", "") * 2 + "px");
            $("#content").css("lineHeight", fontSize.replace("px", "") * 3 + "px");
            $("#content").css("background-image", "none");
        }
        if (is_vip != null && is_vip == 1)
           DoVipImage();
    }
}
function DoVipImage() {
    var iframes = document.getElementsByTagName('div');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].id.toLowerCase().indexOf("img_src_cok_") >= 0) {
            iframes[i].style.width = "96%";
            iframes[i].style.margin = "auto";
            iframes[i].style.backgroundSize = "100%";
        }
    }
}
$(function () {

    if (show_menu == 1)
        startmenu();
    LeeHover($("#m_member"), $("#mm_member"));
    for (i = 1; i < 11; i++) {
        LeeHover($("#c" + i), $("#sc_list" + i));
    }
    LeeHover($("#m_channel2"), $("#channel_list2"));

    var fontColor = $.cookie("fontcolor");
    var fontSize = $.cookie("fontsize");
    var fontLine = $.cookie("fontline");
    var side = $.cookie("side");

    if (fontColor) {
        $("body").css("background", fontColor);
        if (fontColor == "#000000")
            $("body").css("color", "#cccccc");
        else
            $("body").css("color", "#000000");

    } else { $("body").css("background", "#E3F9E3"); $("body").css("color", "#000000"); }
    if (fontSize) $("#content").css("fontSize", fontSize);
    // if (is_vip != null && is_vip == 1) {
    if (1 == 1) {
        $("#content").css("background-image", "none");
    }
    else {//普通章节，下划线正常显示。
        if (fontLine) $("#content").css("background-image", fontLine);
    }

    $("#fontline span").click(function () {
        var v = $(this).attr("v");
        $("#content").css("background-image", v);
        $.cookie("fontline", v, { expires: 900000, path: "/" });
    });

    $("#fontcolor span").click(function () {
        var v = $(this).attr("v");
        $("body").css("background", v);
        if (v == "#000000")
            $("body").css("color", "#cccccc");
        else
            $("body").css("color", "#000000");

        $.cookie("fontcolor", v, { expires: 9000000, path: "/" });
        // if (is_vip != null && is_vip == 1)
        if (1 == 1)
            window.location.reload();
    });
    $("#fontsize span").click(function () {
        var v = $(this).attr("v");
        $("#content").css("fontSize", v);
        CloseTag4MobilePage(v, 1);
        $.cookie("fontsize", v, { expires: 900000, path: "/" });
        // if (is_vip != null && is_vip == 1)
        if (1 == 1)
            window.location.reload();
    });
    CloseTag4MobilePage(fontSize, 1);

    if (checkLogin()) { $("#login").hide(); } else { $("#login").show(); }
    //loginBox();
    //window.onscroll=loginBox;
    //window.onresize=loginBox;
});
document.onkeydown = change_page;