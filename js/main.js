var counter = 0;

function addButton(){

}

function decrement(){
    console.log("decrement");
    counter--;
    console.log("Counter: ",counter);
    if(counter<10) setNumber(counter);
}

function increment(){
    console.log("INCREMENT");
    counter++;
    if(counter<10) setNumber(counter);
    console.log("Counter: ", counter);
}

function setNumber(counter){
    switch (counter) {
        case 0:
            setZero();
            break;
        case 1:
            setOne();
            break;
        case 2:
            setTwo();
            break;
        case  3:
            setThree();
            break;
        case 4:
            setFour();
            break;
        case 5:
            setFive();
            break;
        case 6:
            setSix();
            break;
        case 7:
            setSeven();
            break;
        case 8:
            setEight();
            break;
        case 9:
            setNine();
            break;
    }
}

function setZero(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="100%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="100%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="100%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="0%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="0%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="100%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="100%";
}

function setOne(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="0%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="100%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="0%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="0%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="0%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="0%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="0%";
}

function setTwo(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="100%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight');
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="0%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="100%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="100%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="0%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="100%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="100%";
}

function setThree(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="100%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="100%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="0%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="100%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="100%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="0%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="100%";
}

function setFour(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="0%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="100%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="100%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="100%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="100%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="0%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="0%";
}

function setFive(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="100%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="0%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="100%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="100%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="100%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="0%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="100%";
}

function setSix(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="100%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="0%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="100%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="100%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="100%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="100%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="100%";
}

function setSeven(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="100%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="100%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="0%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="0%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="0%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="0%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="0%";
}

function setEight(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="100%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="100%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="100%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="100%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="100%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="100%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="100%";
}

function setNine(){
    let sectionTop = document.getElementById('secondNumberSectionTop').style.opacity="100%";
    let sectionTopRight = document.getElementById('secondNumberSectionTopRight').style.opacity="100%";
    let sectionTopLeft = document.getElementById('secondNumberSectionTopLeft').style.opacity="100%";
    let middleTop = document.getElementById('secondNumberMiddleTop').style.opacity="100%";
    let middleBottom = document.getElementById('secondNumberMiddleBottom').style.opacity="100%";
    let sectionBottomRight = document.getElementById('secondNumberSectionBottomRight').style.opacity="100%";
    let sectionBottomLeft = document.getElementById('secondNumberSectionBottomLeft').style.opacity="0%";
    let sectionBottom = document.getElementById('secondNumberSectionBottom').style.opacity="0%";
}