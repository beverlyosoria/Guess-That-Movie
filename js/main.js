/*----- constants -----*/
//Object that stores set of images
const images = {
    set1: {
        'img1': '',
        'img2': '',
        'img3': '',

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

const images = document.getElementById('img1, img2, img3');
/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize the variables 
function init() {
    score = 0;

    imageSet = image.set1;

    answers = [];

    hint = [];

    guesses = 3;
}

function render() {
    // Render score

}