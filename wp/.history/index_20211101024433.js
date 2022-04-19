window.addEventListener("load", ()=>{
    const m = new madoi.Madoi("rooms/wparty-test");
    const wparty = new Wparty("#ylink","#sub","#play","#stop");
    m.register(wparty, [
        {method: wparty.changeVid, share: {maxLog: 1000}}
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
            var link = this.text.value;
            link = link.replace('watch?v=', 'embed/');
            link = link + "?controls=0&showinfo=0&fs=0&modestbranding=1&rel=0&enablejsapi=1";
            this.text.value = "";
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
            
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            var player;
            function onYouTubeIframeAPIReady() {
                player = new YT.Player('player');
            }
        }
        
        changeVid(link) {
            var target = document.getElementById("player");
            target.setAttribute("src", link);
        }
    
    
        
    }        
        
    
    
