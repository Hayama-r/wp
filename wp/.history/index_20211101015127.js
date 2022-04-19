class wparty{

    
    var bt = document.getElementById("sub");
    bt.addEventListener("click", function () {
        text = document.getElementById("ylink");
        link = text.value;
        link = link.replace('watch?v=', 'embed/');
        link = link + "?controls=0&showinfo=0&fs=0&modestbranding=1&rel=0&enablejsapi=1";
        console.log(link);
        target = document.getElementById("player");
        target.setAttribute("src", link);
        
    })
    
    
    // API読み込み
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // API読み込み後にプレーヤーの設定
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player');
    }
    
    // ボタンクリック時の操作
    document.getElementById('play').addEventListener('click', function() {
        player.playVideo();
    }, false);
    
    document.getElementById('stop').addEventListener('click', function() {
        player.pauseVideo();
    }, false);
    
    
}