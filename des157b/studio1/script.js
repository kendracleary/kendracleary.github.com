(function(){
    'use strict';

    const one = document.querySelector('#one');
    const full = document.querySelector('.fa-expand');
    const again = document.querySelector('#again');
    const paragraph1 = document.querySelector('#paragraph1');
    const paragraph2 = document.querySelector('#paragraph2');
    const paragraph3 = document.querySelector('#paragraph3');
    const intervalID = setInterval(checkTime, 1000);

    const quote = {
        start: [1, 5, 9],
        stop: [24, 24, 24],
        line: [paragraph1, paragraph2, paragraph3]
    }

    function checkTime(){
        for (let i=0; i < quote.start.length; i++){
            if (quote.start[i] < one.currentTime && one.currentTime < quote.stop[i]){
                quote.line[i].className = "showing";
            } else {
                quote.line[i].className = "hidden";
            }
        }
    }

    full.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

})();