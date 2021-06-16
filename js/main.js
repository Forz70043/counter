var counter = 0;
const MIN = -99;
const MAX = 99;

window.addEventListener('DOMContentLoaded', (event) => {
    hideSign();
    setMinusSign();
    addButtons();
});

function showSign(){
    document.getElementById('sign').style.display='block';
    document.getElementById('sign').style.visibility='visible';
}

function hideSign(){
    document.getElementById('sign').style.display='none';
    document.getElementById('sign').style.visibility='hidden';
}

function addButtons(){
    let colButtonDecrement = document.getElementById('colButtonDecrement');
    let colButtonIncrement = document.getElementById('colButtonIncrement');
    let buttonDecrement = "<button type='button' id='decrement' class='btn btn-outline-dark btn-lg' onclick='decrement()'><strong>-</strong></button>";
    let buttonIncrement = "<button type='button' id='increment' class='btn btn-outline-dark btn-lg' onclick='increment()'><strong>+</strong></button>";

    colButtonDecrement.innerHTML = buttonDecrement;
    colButtonIncrement.innerHTML = buttonIncrement;
}

function decrement(){

    if(counter > MIN) counter--;
    else alert("I have not implemented the count greater than -99");
    
    if(counter<0){
        
        showSign();
        let newCounterValue = Math.abs(counter);

        if(counter<-9) splitNumbers(newCounterValue);
        else setNumber(newCounterValue);
    }
    else {

        hideSign();
        
        if(counter>=0 && counter<10){
            setNumber(0,true)
            setNumber(counter);
        }
        else splitNumbers(counter);
    }
}

function increment(){

    if(counter < MAX) counter++;
    else alert("I have not implemented the count greater than 99");

    if(counter<0){
        let newCounterValue = Math.abs(counter);
        
        if(counter<-9) splitNumbers(newCounterValue);
        else{
            setNumber(0,true);
            setNumber(newCounterValue);
        }
    }
    else hideSign();
    
    if(counter<10) setNumber(counter);
    else splitNumbers(counter);
    
}

function splitNumbers(number){

    let stringNumber = number.toString();
    let tens = stringNumber[0];
    let unit = stringNumber[1];
    setNumber(parseInt(tens),true);
    setNumber(parseInt(unit));
}

function setNumber(counter,unitTens=false){
    switch (counter) {
        case 0:
            setZero(unitTens);
            break;
        case 1:
            setOne(unitTens);
            break;
        case 2:
            setTwo(unitTens);
            break;
        case  3:
            setThree(unitTens);
            break;
        case 4:
            setFour(unitTens);
            break;
        case 5:
            setFive(unitTens);
            break;
        case 6:
            setSix(unitTens);
            break;
        case 7:
            setSeven(unitTens);
            break;
        case 8:
            setEight(unitTens);
            break;
        case 9:
            setNine(unitTens);
            break;
    }
}

function setMinusSign(){
    document.getElementById('signNumberSectionTop').style.opacity="0%";
    document.getElementById('signNumberSectionTopRight').style.opacity="0%";
    document.getElementById('signNumberSectionTopLeft').style.opacity="0%";
    document.getElementById('signNumberMiddleTop').style.opacity="100%";
    document.getElementById('signNumberMiddleBottom').style.opacity="100%";
    document.getElementById('signNumberSectionBottomRight').style.opacity="0%";
    document.getElementById('signNumberSectionBottomLeft').style.opacity="0%";
    document.getElementById('signNumberSectionBottom').style.opacity="0%";
}

function setZero(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="0%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="100%";
}

function setOne(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="0%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="0%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="0%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="0%";
}

function setTwo(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopRight');
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="0%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="100%";
}

function setThree(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="0%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="100%";
}

function setFour(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="0%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="0%";
}

function setFive(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="0%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="100%";
}

function setSix(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="0%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="100%";
}

function setSeven(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="0%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="0%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="0%";
}

function setEight(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="100%";
}

function setNine(unitTens){
    let unit= unitTens ? 'first' : 'second';
    document.getElementById(unit+'NumberSectionTop').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionTopLeft').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleTop').style.opacity="100%";
    document.getElementById(unit+'NumberMiddleBottom').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomRight').style.opacity="100%";
    document.getElementById(unit+'NumberSectionBottomLeft').style.opacity="0%";
    document.getElementById(unit+'NumberSectionBottom').style.opacity="0%";
}