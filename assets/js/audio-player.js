// Stop other players automatically
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len; i++){
        
        if(audios[i] != e.target){
            audios[i].pause();
        }

    }
}, true);

// Play the next audio automatically
document.addEventListener('ended', function(e){
    var audios = document.getElementsByTagName('audio');
    var playNext = false;
    for(var i = 0, len = audios.length; i < len; i++){

        if(playNext){
            audios[i].play();
            break;
        }

        if(audios[i] == e.target){
            playNext = true;
        }
    }
}, true);