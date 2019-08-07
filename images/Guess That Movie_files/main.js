/*----- constants -----*/
//Object that stores set of images
const images = {
    set1: {
        'img1': 'images/coat.jpg',
        'img2': 'images/sunglasses.jpg',
        'img3': 'images/pills.jpg',

        answer: 'THE MATRIX',
        hint: 'Quote:"There is a difference between knowing the path and walking the path"'
    },
    set2: {
        'img1': 'images/motel.jpg',
        'img2': 'images/knife.jpg',
        'img3': 'images/psycho.jpg',

        answer: 'PSYCHO',
        hint: 'Fact: Released in 1960 and was directed by Alfred Hitchcock'
    },
    set3: {
        'img1': 'images/wrestler.png',
        'img2': 'images/greyjoggers.jpg',
        'img3': 'images/chips.jpg',

        answer: 'NACHO LIBRE',
        hint: 'Quote: "Do you not realize I have had diarrhea since Easters?"'
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

let score, imageSet, answers, guesses, count;

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

    count = 2;

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
    var checkAnswer = inputEl.value.toUpperCase();
    if (checkAnswer === imageSet.answer) {
        imageSet = images[`set${count}`]
        swal.fire({
            type: 'success',
            text: 'Correct!',
        })
    } else {
        swal.fire({
            type: 'error',
            text: 'Try Again!',
        })
    }
    count++
    inputEl.value = '';
    render();
}

function handleHint(evt) {

    swal.fire(imageSet.hint)


}