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
        hint: 'Quote: "Do you remember that one time when everyone was shouting my name, and I used my strength to rip my blouse?"'
    },
    set4: {
        'img1': 'images/jacket.jpg',
        'img2': 'images/tobias.jpg',
        'img3': 'images/bike.jpg',

        answer: 'E.T.',
        hint: 'Fact: Steven Spielberg shot most of this film from the eye-level of a child.'
    },
    set5: {
        'img1': 'images/priest.jpg',
        'img2': 'images/zombie.jpg',
        'img3': 'images/levitate.jpg',

        answer: 'THE EXORCIST',
        hint: 'Fact: It is based on a true story.'
    },
    set6: {
        'img1': 'images/titanic.jpg',
        'img2': 'images/iceburg.jpg',
        'img3': 'images/girl.jpg',

        answer: 'TITANIC',
        hint: 'Quote: “Jack, I want you to draw me like one of your French girls.” '
    },
    set7: {
        'img1': 'images/yellowbrick.jpg',
        'img2': 'images/redshoes.jpg',
        'img3': 'images/scarecrow.jpg',

        answer: 'WIZARD OF OZ',
        hint: 'Quote: Lions, and tigers, and bears! Oh, my!'
    },
    set8: {
        'img1': 'images/yellowbrick.jpg',
        'img2': 'images/redshoes.jpg',
        'img3': 'images/scarecrow.jpg',

        answer: 'WIZARD OF OZ',
        hint: 'Quote: Lions, and tigers, and bears! Oh, my!'
    },

    set9: {
        'img1': 'images/bruce.jpg',
        'img2': 'images/bride.jpg',
        'img3': 'images/sword.jpg',

        answer: 'KILL BILL',
        hint: 'Quote: "You might not be able to fight like a samurai, but you can at least die like a samurai."'
    },
    set10: {
        'img1': 'images/mask.jpg',
        'img2': 'images/moth.jpg',
        'img3': 'images/straitjacket.jpg',

        answer: 'SILENCE OF THE LAMBS',
        hint: 'Quote: "Whenever feasible, one should always try to eat the rude."'
    },
}



/*----- app's state (variables) -----*/

let score, imageSet, guesses, count, width;

/*----- cached element references -----*/
// Set elements to variable 
const imageEl = document.querySelectorAll('img');
const inputEl = document.getElementById('input')
const guessesEL = document.getElementById('guesses');
const progEl = document.getElementById('fill');

// const filmEl = document.getElementById('film-container');

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
    count = 2;
    guesses = 3;
    width = 10;
    render();
}


function render() {

    imageEl.forEach(function (element, id) {
        element.src = imageSet[`img${id + 1}`]
    })
    guessesEL.textContent = `Number of guesses remaining: ${guesses}`;
    filmCountdown()

}

function filmCountdown() {
    setTimeout(function () {
        document.getElementById('film-container').style.display = 'none';
    }, 3000);
}


function handleSubmit(evt) {
    var checkAnswer = inputEl.value.toUpperCase();
    if (imageSet === images.set10) {
        swal.fire({
            type: 'success',
            text: 'Congratualtions!'
        })
        inputEl.disabled = true;
    } else if (guesses === 1) {
        swal.fire({
            type: 'error',
            text: 'Game Over!'
        })
        guesses = 0;
        inputEl.disabled = true;
    } else if (checkAnswer === imageSet.answer) {
        imageSet = images[`set${count}`]
        swal.fire({
            type: 'success',
            text: 'Correct!',
        })
        width += 10
        progEl.style.width = width + '%'

    } else {
        swal.fire({
            type: 'error',
            text: 'Try Again!',
        })
        guesses = guesses - 1;

    }
    count++
    inputEl.value = '';
    render();
}

function handleHint(evt) {
    swal.fire(imageSet.hint)
}