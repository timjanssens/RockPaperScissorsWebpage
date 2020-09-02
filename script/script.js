// let picArray = ['../img/rock.svg'];

// let img = document;
// document.querySelector('#pictest').src = picArray[0];

let imgArray = ['../img/rock.svg', '../img/paper.svg', '../img/scissors.svg'];

function loadImagesChoice(){
    document.querySelector('#imgChoiceRock').src = imgArray[0];
    document.querySelector('#imgChoicePaper').src = imgArray[1];
    document.querySelector('#imgChoiceScissors').src = imgArray[2];
}

function removeEventListenersFromChoice(){

    document.querySelector('#imgChoiceRock').removeEventListener('click', playAsRock);

}


function playAsRock(){
    // show image you choose
    let imgEl = document.createElement("img");
    imgEl.src = imgArray[0];
    document.querySelector("#youPic").appendChild(imgEl);
    
    removeEventListenersFromChoice();
    
    
}




// EventListeners
window.addEventListener('load', loadImagesChoice);
document.querySelector('#imgChoiceRock').addEventListener('click', playAsRock);
// document.querySelector('#imgChoicePaper').addEventListener('click', test);
// document.querySelector('#imgChoiceScissors').addEventListener('click', test);
