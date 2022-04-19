window.addEventListener("load", ()=>{
    const m = new madoi.Madoi("rooms/wparty-test");
    const wparty = new Wparty();
    m.register(wparty, [
        {method: Wparty.changeVid, share: {maxLog: 1000}}
    ]);
});



class Wparty{

    constructor(textId,subId,playId,stopId) {
        
      
            this.text = document.querySelector(textId);
            this.link = this.text.value;
            this.link = this.link.replace('watch?v=', 'embed/');
            this.link = this.link + "?controls=0&showinfo=0&fs=0&modestbranding=1&rel=0&enablejsapi=1";
        
        
            
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
            target = document.getElementById("player");
            target.setAttribute("src", link);
        }
    
    
        
    play() {
        document.getElementById('play').addEventListener('click', function() {
            player.playVideo();
        }, false);
            
        }
    stop() {
        document.getElementById('stop').addEventListener('click', function() {
            player.pauseVideo();
        }, false);
    }        
        
    
    
}