/*----- constants -----*/
//Object that stores set of images
const images = {
    set1: {
        'img1': 'images/man.png',
        'img2': 'images/ear.png',
        'img3': 'images/briefcase.png',

        answer: '',
        hint: ''
    },
    set2: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: '',
        hint: ''
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

// select all the img tags 
const imageEl = document.querySelectorAll('img')

/*----- event listeners -----*/
document
    .getElementById("hintbtn")
    .addEventListener("click", handleHint);

document
    .getElementById("submitbtn")
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

    guessesEL.textContent = `You have ${guesses} guesses left`;

}

function displayImages() {
    document.querySelector("main").src = images[imgIndex].src;

}

function handleSubmit(evt) {
    console.log('clicked')
}

function handleHint(evt) {

    console.log('clicked')


}