const name = document.getElementById('name');
let what = "";

const info = document.getElementById('info');
let why = "";

const cherry = document.getElementById('cherry');

const house = document.getElementById('house');

const frog = document.getElementById('frog');

const bunny = document.getElementById('bunny');

const herbs = document.getElementById('herbs');

const fish = document.getElementById('fish');

document.addEventListener('mousemove', reportPos);

let xPos;
let yPos;

function reportPos(event){
    xPos = parseInt(event.clientX);
    yPos = parseInt(event.clientY);
    if (xPos<=311 && 76<=yPos){
        what = `HARIBO HAPPY CHERRIES`;
        why = `The tastiest gummy candies, shaped like the prettiest fruit`;
        name.innerHTML = what;   
        info.innerHTML = why;
        cherry.src =`images/cherry.png`;
        house.src =`images/house1.png`;
        frog.src =`images/frog1.png`;
        bunny.src =`images/bunny1.png`;
        herbs.src =`images/herbs1.png`;
        fish.src =`images/fish1.png`;
    }
    if (0<=xPos && 413<=yPos){
        what = `HOUSE I GREW UP IN`;
        why = `A sketch I drew of the small happy blue victorian I have lived in my whole life`;
        name.innerHTML = what;   
        info.innerHTML = why;
        cherry.src =`images/cherry1.png`;
        house.src =`images/house.png`;
        frog.src =`images/frog1.png`;
        bunny.src =`images/bunny1.png`;
        herbs.src =`images/herbs1.png`;
        fish.src =`images/fish1.png`;
    }
    if (310<=xPos && 380<=yPos){
        what = `GOLD MEDITATING FROG`;
        why = `A sculpture I found at the Alameda Flea Market, and put a bracelet my friend gave to me on him`;
        name.innerHTML = what;   
        info.innerHTML = why;
        cherry.src =`images/cherry1.png`;
        house.src =`images/house1.png`;
        frog.src =`images/frog.png`;
        bunny.src =`images/bunny1.png`;
        herbs.src =`images/herbs1.png`;
        fish.src =`images/fish1.png`;
    }
    if (627<=xPos && 508<=yPos){
        what = `BUNNY CAMERA`;
        why = `A camera that has survived many adventures, capturing life's best moments`;
        name.innerHTML = what;   
        info.innerHTML = why;
        cherry.src =`images/cherry1.png`;
        house.src =`images/house1.png`;
        frog.src =`images/frog1.png`;
        bunny.src =`images/bunny.png`;
        herbs.src =`images/herbs1.png`;
        fish.src =`images/fish1.png`;
    }
    if (980<=xPos && 508<=yPos){
        what = `HERBS FROM FRANCE`;
        why = `One of the few travel souvenirs I have kept and treasured, I like to think that it still smells like the original herbs`;
        name.innerHTML = what;   
        info.innerHTML = why;
        cherry.src =`images/cherry1.png`;
        house.src =`images/house1.png`;
        frog.src =`images/frog1.png`;
        bunny.src =`images/bunny1.png`;
        herbs.src =`images/herbs.png`;
        fish.src =`images/fish1.png`;
    }
    if (1216<=xPos && 43<=yPos){
        what = `FISH PILLOW`;
        why = `My brother gave me this pillow, one of the most unique stuffed animals I have seen`;
        name.innerHTML = what;   
        info.innerHTML = why;
        cherry.src =`images/cherry1.png`;
        house.src =`images/house1.png`;
        frog.src =`images/frog1.png`;
        bunny.src =`images/bunny1.png`;
        herbs.src =`images/herbs1.png`;
        fish.src =`images/fish.png`;
    }
    if (900>=xPos && 200<=xPos && 508>=yPos){
        what = ``;
        why = ``;
        name.innerHTML = what;   
        info.innerHTML = why;
        cherry.src =`images/cherry1.png`;
        house.src =`images/house1.png`;
        frog.src =`images/frog1.png`;
        bunny.src =`images/bunny1.png`;
        herbs.src =`images/herbs1.png`;
        fish.src =`images/fish1.png`;
    }
}

