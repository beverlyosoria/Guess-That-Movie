/*----- constants -----*/
//Object that stores set of images
const images = {
    set1: {
        'img1': 'images/man.png',
        'img2': 'images/ear.png',
        'img3': 'images/briefcase.png',

        answer: 'Reservoir Dogs',
        hint: '"Are you gonna bark all day little doggy or are you gonna bite?'
    },
    set2: {
        'img1': 'images/wrestler.png',
        'img2': 'images/greyjoggers.jpg',
        'img3': 'images/chips.jpg',

        answer: 'Nacho Libre',
        hint: '"Do you not realize I have had diarrhea since Easters?"'
    },
    set3: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: '',
        hint: ''
    },
    set4: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: '',
        hint: ''
    },
    set5: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: '',
        hint: ''
    },
    set6: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: '',
        hint: ''
    },
    set7: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: '',
        hint: ''
    },
    set9: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: '',
        hint: ''
    },
    set10: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: '',
        hint: ''
    },
}



/*----- app's state (variables) -----*/

let score, imageSet, answers, guesses;

/*----- cached element references -----*/
// Set elements to variable 
const guessesEL = document.getElementById('guesses');
const imageEl = document.querySelectorAll('img');
const inputEl = document.getElementById('input')

/*----- event listeners -----*/
document
    .getElementById("hint")
    .addEventListener("click", handleHint);

document
    .getElementById("submit")
    .addEventListener("click", handleSubmit)

/*----- functions -----*/
init();

// Initialize the variables 
function init() {
    score = 0;

    imageSet = images.set1;

    answers = [];

    hint = [];

    guesses = 3;
    render();
}


function render() {

    imageEl.forEach(function (element, id) {
        element.src = imageSet[`img${id + 1}`]
    })

    guessesEL.textContent = `Number of guesses remaining: ${guesses}`;
}

function handleSubmit(evt) {
    document.querySelector('input').value;

}

function handleHint(evt) {

    console.log('clicked')


}