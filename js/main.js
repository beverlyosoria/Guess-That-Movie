/*----- constants -----*/
//Object that stores set of images
const images = {
    set1: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
    set2: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
    set3: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
    set4: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
    set5: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
    set6: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
    set7: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
    set9: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
    set10: {
        'img1': '',
        'img2': '',
        'img3': '',

        answer: ''
    },
}



/*----- app's state (variables) -----*/

let score, imageSet, answers;

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init();

// Initializes the variables 
function init() {
    score = 0;

    imageSet = image.set1;

    answers = [];
}

var images = document.getElementById('img1, img2, img3')