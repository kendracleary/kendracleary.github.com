(function(){
    'use strict';

    console.log('running');

    const myForm = document.querySelector('#myform');

    const r1 = document.querySelector('#hello');
    const r2 = document.querySelector('#response');
    const r3 = document.querySelector('#ticker');

    const currentd = Date.now();

    const dont = document.querySelector('.dont');
    const before = document.querySelector('.before');


    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        dont.className='returned';
        before.className='plsdisappear';

        const good = document.getElementById('good').checked;
        const bad = document.getElementById('bad').checked;
        const badthing = document.querySelector('#badthing').value;
        const goodthing = document.querySelector('#goodthing').value;
        const fname = document.querySelector('#fname').value;
        const bday = document.querySelector('#bday').value;
        let hello;
        let response;
        let ticker;


        if (fname && badthing && goodthing && fname && bday){
            hello = `Hi ${fname}!`;

            if (good == true){
                response = `I'm so happy you had a good day! I'm sorry that ${badthing}. I'm so glad that ${goodthing} made the day better!`;
            }
            if (bad == true){
                response = `I'm so sorry you had a bad day! I'm so glad about ${goodthing}! I'm sorry that ${badthing} ruined your day though.`;
            }
            else{
                response = `You didn't tell me how your day was, please try again`;
            }

            var calcdate = currentd - Date.parse(bday);
            calcdate = Math.ceil((((calcdate/1000)/60)/1440));

            ticker = `You've lived ${calcdate} days, that's so many good days and so many more good days to come!`;

        }
        else{
            myText = 'Form filled out incorrectly, please reset';
        }

        r1.innerHTML = hello;
        r2.innerHTML = response;
        r3.innerHTML = ticker;

    });




}());