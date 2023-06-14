var audioinput = document.getElementById('keyboard');

audioinput.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    // console.log(keyCode+ ' was pressed br=efore function');

    switch(keyCode){
        case 65:
            // document.getElementById('letter-a').backgroundColor('blue');
            document.getElementById('sound-a').currentTime=0;
            document.getElementById('sound-a').play();
            // console.log(keyCode+ ' was pressed');
            break;
        case 83:
            document.getElementById('sound-s').currentTime=0;
            document.getElementById('sound-s').play();
            break;
        case 68:
            document.getElementById('sound-d').currentTime=0;
            document.getElementById('sound-d').play();
            break;
        case 75:
            document.getElementById('sound-f').currentTime=0;
            document.getElementById('sound-f').play();
        case 71:
            document.getElementById('sound-g').currentTime=0;
            document.getElementById('sound-g').play();
            break;
        case 72:
            document.getElementById('sound-h').currentTime=0;
            document.getElementById('sound-h').play();
            break;
        case 74:
            document.getElementById('sound-j').currentTime=0;
            document.getElementById('sound-j').play();
            break;
        case 70:
            document.getElementById('sound-k').currentTime=0;
            document.getElementById('sound-k').play();
            break;
        case 76:
            document.getElementById('sound-l').currentTime=0;
            document.getElementById('sound-l').play();
            break;
                
        

    }
});