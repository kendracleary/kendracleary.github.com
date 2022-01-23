(function() {

    const one = document.querySelector('#one');
    const controls = document.querySelector('#controls');
    const playToggle = document.querySelector('.fa-play');
    const paragraph1 = document.querySelector('#paragraph1');
    const paragraph2 = document.querySelector('#paragraph2');
    const paragraph3 = document.querySelector('#paragraph3');
    const intervalID = setInterval(checkTime, 1000);
    let playing = false;

    playToggle.addEventListener('click', function(){
        if (!playing){
            one.play();
            controls.className = "hidden";
        } else {
            one.pause();
            playToggle.className = 'fa-solid fa-play';
        }
        playing = !playing
    })

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

    })();