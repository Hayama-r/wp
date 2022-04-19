

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
    
    constructor(textId, subId, playId, stopId,advanceId ,backId ) {
        
        
        this.text = document.querySelector(textId);
        const play = document.querySelector(playId);
        const stop = document.querySelector(stopId);
        const advance = document.querySelector(advanceId);
        const back = document.querySelector(backId);
        const submit = document.querySelector(subId);
        
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        var self = this;
        window.onYouTubeIframeAPIReady =() => {
            console.log("1");
            self.player = new YT.Player('player');
        }

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

        advance.addEventListener("click", ytadv => {
            ytadv.preventDefault();
            this.advvid();
            return false;
        });

        back.addEventListener("click", ytback => {
            ytback.preventDefault();
            this.backvid();
            return false;
        });
    }
    changeVid(link) {
        var target = document.getElementById("player");
        target.setAttribute("src", link);
    }
    playvid() {
        this.player.playVideo();
    }
    
    stopvid() {
        this.player.pauseVideo();
    }

    advvid() {
        this.player.seekTo(5, true);
    }

    backvid() {
        this.player.seekTo(-5, true);
    }

}


     

