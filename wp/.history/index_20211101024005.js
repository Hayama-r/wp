window.addEventListener("load", ()=>{
    const m = new madoi.Madoi("rooms/wparty-test");
    const wparty = new Wparty("#ylink","#sub","#play","#stop");
    m.register(wparty, [
        {method: Wparty.changeVid, share: {maxLog: 1000}}
    ]);
});



class Wparty{

    constructor(textId,subId,playId,stopId) {
        
      
        this.text = document.querySelector(textId);
        const play = document.querySelector(playId);
        const stop = document.querySelector(stopId);
        const submit = document.querySelector(subId);

        submit.addEventListener("click", event => {
            event.preventDefault();
            const link = this.text.value;
            link = link.replace('watch?v=', 'embed/');
            link = link + "?controls=0&showinfo=0&fs=0&modestbranding=1&rel=0&enablejsapi=1";
            this.test.value = "";
            this.changeVid(link);
            return false;
        });
        
        play.addEventListener("click", ytplay => {
            ytplay.preventDefault();
            player.playVideo();
            return false;
        });

        stop.addEventListener("click", ytstop => {
            ytstop.preventDefault();
            player.pauseVideo();
            return false;
        });
            
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            const player;
            function onYouTubeIframeAPIReady() {
                player = new YT.Player('player');
            }
        }
        
        changeVid(link) {
            target = document.getElementById("player");
            target.setAttribute("src", link);
        }
    
    
        
    }        
        
    
    
