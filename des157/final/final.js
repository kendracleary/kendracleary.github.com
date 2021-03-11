(function(){
    'use strict';

    console.log('running');

    const myForm = document.querySelector('#myform');

    const r1 = document.querySelector('#hello');
    const r2 = document.querySelector('#response');
    const r3 = document.querySelector('#ticker');
    const r4 = document.querySelector('#song');

    const s1 = document.querySelector('#s1');
    const s2 = document.querySelector('#s2');
    const s3 = document.querySelector('#s3');
    const s4 = document.querySelector('#s4');
    const s5 = document.querySelector('#s5');

    const currentd = Date.now();

    const first = document.querySelector('.first');
    const third = document.querySelector('.third');
    const second = document.querySelector('.second');

    const yo = document.querySelector('#yo');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        third.className='plsappear';
        second.className='plsdisappear';
        first.className='plsdisappear';

        const good = document.getElementById('good').checked;
        const bad = document.getElementById('bad').checked;
        const fname = document.querySelector('#fname').value;
        const fcol = document.querySelector('#fcol').value;
        const fnum = document.querySelector('#fnum').value;
        const bday = document.querySelector('#bday').value;
        let hello;
        let response;
        let ticker;
        let song;

        document.body.style.background = 'url("images/orange.png") no-repeat fixed center';
        document.getElementById("circle").style.background = `${fcol}`;


        if (fname && bday && fnum && fcol){
            hello = `Hi ${fname}!`;

            if (good == true){
                response = `I'm so happy you had a good day!`;
            }
            if (bad == true){
                response = `I'm so sorry you had a bad day!`;
            }
            if (good == false && bad == false){
                response = `I'm sorry you forgot to tell me how your day was, I hope it was good anyways!`
            }

            var calcdate = currentd - Date.parse(bday);
            calcdate = Math.ceil((((calcdate/1000)/60)/1440));

            ticker = `You've lived ${calcdate} days, that's so many good days and so many more good days to come!`;

            if (fnum == 0){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/3lAun9V0YdTlCSIEXPvfsY" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 1){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/2hSd5IqIBoR5Ck5EDVL4kZ" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 2){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/4gwltSjdrzKtKz9dlk2Wja" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 3){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/1fah1uAs7HeTYDlNftKr3K" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 4){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/0bRXwKfigvpKZUurwqAlEh" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 5){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/36zqSzaPzQWZYDCNm1klgY" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 6){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/1k4OsQujxXPLij0ZsTFlMx" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 7){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/71cUqXJ3h1r0Ees6YdENLU" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 8){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/1QCWihALaWAyDimdSQIs9P" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 9){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/4gT1DmNjSWSECX0KiNSjLI" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }
            if (fnum == 10){
                song = `<p>Here is a song for your day, based on your lucky number ${fnum}</p><iframe src="https://open.spotify.com/embed/track/6aBUnkXuCEQQHAlTokv9or" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            }

        }
        else{
            myText = 'Form filled out incorrectly, please reset';
        }

        r1.innerHTML = hello;
        r2.innerHTML = response;
        r3.innerHTML = ticker;
        r4.innerHTML = song;

    });

    yo.addEventListener("click", function(event){ 
        event.preventDefault();

        first.className='plsdisappear';
        second.className='plsappear';
    });

}());