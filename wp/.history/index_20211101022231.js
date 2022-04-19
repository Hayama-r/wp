window.addEventListener("load", ()=>{
    const m = new madoi.Madoi("rooms/wparty-test");
    const wparty = new Wparty();
    m.register(wparty, [
        {method: Wparty.changeVid, share: {maxLog: 1000}}
    ]);
});



class Wparty{

    constructor() {
        
      
            text = document.getElementById("ylink");
            link = text.value;
            link = link.replace('watch?v=', 'embed/');
            link = link + "?controls=0&showinfo=0&fs=0&modestbranding=1&rel=0&enablejsapi=1";
        
            
        }
        
        changeVid(link) {
            target = document.getElementById("player");
            target.setAttribute("src", link);
        }
    
    control() {
        
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player');
        }
        
        document.getElementById('play').addEventListener('click', function() {
            player.playVideo();
        }, false);
        
        document.getElementById('stop').addEventListener('click', function() {
            player.pauseVideo();
        }, false);
        
    }
    
}