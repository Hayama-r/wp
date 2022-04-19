

var bt = document.getElementById("sub");
    bt.addEventListener("click", function () {
    text = document.getElementById("ylink");
        link = text.value;
        link = link.replace('watch?v=', 'embed/');
    target = document.getElementById("iframe");
    target.setAttribute("src", link);
    
    })


window.onload = function () {
    

    const ytiframe= 'iframeタグに付けた任意のid名';
    //iframeで表示しているwindowオブジェクトを取得
    const targetWindow = document.getElementById(ytiframe).contentWindow;
    
    //APIのコマンドを送信する関数
    const ag2ytControl = function(action,arg=null){
    targetWindow.postMessage('{"event":"command", "func":"'+action+'", "args":'+arg+'}', '*');
    };
    
    //クリックイベントで動画を操作
    //再生
    document.getElementById('ytplay').addEventListener('click', function(event){
    ag2ytControl('playVideo');
    });
    //一時停止
    document.getElementById('ytpause').addEventListener('click', function(event){
    ag2ytControl('pauseVideo');
    });
    //停止
    document.getElementById('ytstop').addEventListener('click', function(event){
    ag2ytControl('stopVideo');
    });
    //シークバーの移動
    document.getElementById('ytseek').addEventListener('click', function(event){
    //(secondsパラメータ : 指定の秒数の位置へ移動, allowSeekAheadパラメータ : 未バッファの位置の場合に新しいリクエストを行うか)
    ag2ytControl('seekTo','[60,true]');
    });
    //クリア
    document.getElementById('ytclear').addEventListener('click', function(event){
    ag2ytControl('clearVideo');
    });
    //ミュート
    document.getElementById('ytmute').addEventListener('click', function(event){
    ag2ytControl('mute');
    });
    //アンミュート
    document.getElementById('ytunmute').addEventListener('click', function(event){
    ag2ytControl('unMute');
    });
    //音量を設定
    document.getElementById('ytvolume').addEventListener('click', function(event){
    //(volume : 0～100の整数値を指定)
    ag2ytControl('setVolume','[50]');
    });
}
