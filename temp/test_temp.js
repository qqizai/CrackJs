function getSrcFromVideo(video) {
    var src = video.src;
    if (src) {
        console.log("src: " + src);
        return src;
    }
    var sources = video.getElementsByTagName("source");
    for (let index = 0; index < sources.length; index++) {
        const source = sources[index];
        if (source.src) {
            console.log("source.src: " + source.src);
            return source.src;
        }
    }
}

function hookVideoInNativeStyle(video){
    video.addEventListener('play' ,function(){
        var src = getSrcFromVideo(video);
        if(!src){return;}
        video.pause();
        if(video.hookWait){return;}
        video.hookWait = true;
        window.webkit.messageHandlers.videoActionHandler.postMessage(src);
        video.hookTimer = setTimeout(function(){
            video.hookWait = false;
        }, 2000);
    });
}


function hookAllVideoInNativeStyle() {
    var allVideo = document.getElementsByTagName("video");
    for (let index = 0; index < allVideo.length; index++) {
        const video = allVideo[index];
        console.log("video: "+video);
        hookVideoInNativeStyle(video);
    }
}

(function () {
    var allVideo = document.getElementsByTagName("video");
    for (let index = 0; index < allVideo.length; index++) {
        const video = allVideo[index];
        hookVideoInNativeStylel(video);
    }
})();