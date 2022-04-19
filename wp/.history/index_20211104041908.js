

window.addEventListener("load", () => {
    const m = new madoi.Madoi("rooms/wparty-test");
    const wparty = new wParty("#ylink","#sub","#playbt","#stopbt");
    m.register(wparty, [
        { method: wparty.changeVid, share: {} },
        { method: wparty.playvid, share: {} },
        { method: wparty.stopvid, share: {} }
        
    ]);
});


class wParty{
    
    constructor(textId, subId, playId, stopId) {
        
        
        this.text = document.querySelector(textId);
        const play = document.querySelector(playId);
        const stop = document.querySelector(stopId);
        const submit = document.querySelector(subId);
        
        
        submit.addEventListener("click", event => {
            event.preventDefault();
            var link = this.text.value;
            link = link.replace('watch?v=', 'embed/');
            link = link + "?controls=0&showinfo=0&fs=0&modestbranding=1&rel=0&enablejsapi=1";
            this.text.value = "";
            this.changeVid(link);
            return false;
        });
        
        play.addEventListener("click", ytplay => {
            ytplay.preventDefault();
            this.playvid();
            return false;
        });
        
        stop.addEventListener("click", ytstop => {
            ytstop.preventDefault();
            this.stopvid();
            return false;
        });
    }
    changeVid(link) {
        var target = document.getElementById("player");
        target.setAttribute("src", link);
    }
}


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var self = this;
window.onYouTubeIframeAPIReady =() => {
    console.log("1");
    self.player = new YT.Player('player');
}

playvid() {
    this.player.playVideo();
};

stopvid() {
    this.player.pauseVideo();
};


