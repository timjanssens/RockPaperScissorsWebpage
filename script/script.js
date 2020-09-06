// functions
let imgArray = ['../img/rock.svg', '../img/paper.svg', '../img/scissors.svg'];

function loadImagesChoice() {
    document.querySelector('#imgChoiceRock').src = imgArray[0];
    document.querySelector('#imgChoicePaper').src = imgArray[1];
    document.querySelector('#imgChoiceScissors').src = imgArray[2];
}

function removeEventListenersFromChoice() {
    document.querySelector('#imgChoiceRock').removeEventListener('click', play);
    document.querySelector('#imgChoicePaper').removeEventListener('click', play);
    document.querySelector('#imgChoiceScissors').removeEventListener('click', play);

}

function removeQuestionMark() {
    let questionMark = document.querySelectorAll('.questionMark');
    questionMark.forEach((questionMark) => {
        questionMark.style.display = 'none';
    });
}

function replay() {
    location.reload();
}

const getCompChoice = () => Math.floor(Math.random() * 3);


function showCompChoice(compchoice) {
    let imagEl = document.createElement("img");
    imagEl.src = imgArray[compchoice];
    document.querySelector("#compPic").appendChild(imagEl);
}

function showOwnChoice(ownChoice) {
    let imgEl = document.createElement("img");
    imgEl.src = imgArray[ownChoice];
    document.querySelector("#youPic").appendChild(imgEl);
}

function getOwnChoice(idClickedItem) {
    switch (idClickedItem) {
        case 'imgChoiceRock':
            return 0;
            break;
        case 'imgChoicePaper':
            return 1;
            break;
        case 'imgChoiceScissors':
            return 2;
            break;

        default:
            break;
    }
}

const getWinner = (ownChoice, compChoice) => {
    if (ownChoice == compChoice)
        return 'Draw';
    else if ((ownChoice == 0 && compChoice == 2) ||
        (ownChoice == 1 && compChoice == 0) ||
        (ownChoice == 2 && compChoice == 1))
        return 'You win';
    return 'Comp wins'
}

function showWinner(winner) {
    let winnerEl = document.query
    Selector('#winner');
    winnerEl.textContent = winner; 
}

function play() {
    // show image you choose
    let ownChoice = getOwnChoice(this.id);
    showOwnChoice(ownChoice)

    const compChoice = getCompChoice();
    removeQuestionMark();
    showCompChoice(compChoice);

    let winner = getWinner(ownChoice, compChoice)
    showWinner(winner);
    
    removeEventListenersFromChoice();
}





// EventListeners
window.addEventListener('load', loadImagesChoice);

document.querySelector('#imgChoiceRock').addEventListener('click', play);
document.querySelector('#imgChoicePaper').addEventListener('click', play);
document.querySelector('#imgChoiceScissors').addEventListener('click', play);

document.querySelector('#replay').addEventListener('click', replay);