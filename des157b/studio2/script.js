(function(){
    'use strict';

    let globalData;

    var white3 = new Image(); 
    white3.src = 'images/white3.png';

    var white2 = new Image(); 
    white2.src = 'images/white2.png';

    var white1 = new Image(); 
    white1.src = 'images/white1.png';

    async function getData(){
        const myTeeth = await fetch('data/teeth.json');
        const data = await myTeeth.json();
        
        globalData = data;  
        console.log(globalData);

        //document.querySelector('#scroll').innerHTML = createScroll(data);
        document.querySelector('#picker').innerHTML = createSelectList(data);
    }

    getData();
    
   /* function createScroll(data){
        let html = '';
        const dataPoints = Object.keys(data);
        dataPoints.forEach( function(eachPoint){
            html += `<a href="#${data[eachPoint]}">${data[eachPoint].when}</a>`;
        });
        return html;
    }

    document.querySelector("#point1").addEventListener('click', function(){
        const newValue = this.value;
        console.log(newValue);
        updateScroll(newValue, globalData);
        
    });

    function updateScroll(value, jsonData){
        let html = `<div id="${jsonData[value]}">`;
        html += `<p> At ${jsonData[value].when} I brushed my teeth because ${jsonData[value].why} and they were this white ${jsonData[value].whiteness} </p>`;
        html += '</div>';
        document.querySelector('#result2').innerHTML = html;
    }*/

    function createSelectList(data){
        let html = '<option>---</option>';
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach( function(eachPoint){
            html += `<option value="${eachPoint}">${data[eachPoint].when}</option>`;
        } );
        return html;
    }
    
    document.querySelector('#picker').addEventListener('change', function(){
        const newValue = this.value;
        console.log(newValue);
        updateInterface(newValue, globalData);
    });

    
    function updateInterface(value, jsonData){
        let html = '<p id="reason"> Reason for brushing teeth </p>';
        html += `<p id="why">${jsonData[value].why} </p>` 
        html += `<p id="white"> Whiteness after brushing </p>`;
        if (jsonData[value].whiteness == 1) {
            html += `<img id="tooth" src="images/white1.png" alt="Girl in a jacket" width="150" >`;
        }
        if (jsonData[value].whiteness == 2) {
            html += `<img id="tooth" src="images/white2.png" alt="Girl in a jacket" width="150" >`;
        }
        if (jsonData[value].whiteness == 3) {
            html += `<img id="tooth" src="images/white3.png" alt="Girl in a jacket" width="150" >`;
        }
        document.querySelector('#result').innerHTML = html;
    }

    function showWhiteness(point, data){
        const whiteTeeth = [white1, white2, white3];
        document.querySelector('#whiteness').innerHTML = whiteTeeth[data[point].whiteness];
    }

})();