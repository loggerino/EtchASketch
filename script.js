const blackBtn = document.querySelector('#black');
const randomBtn = document.querySelector('#random');
const resetBtn = document.querySelector('#reset');
const board = document.querySelector('.board');
const colorPicker = document.querySelector('#colorPicker');

let currentColor = 'black';
let userClicked = false;

board.addEventListener('click', () => {
    userClicked = true;
});

blackBtn.addEventListener('click', () => {
    currentColor = 'black';
});

randomBtn.addEventListener('click', () => {
    currentColor = 'random';
});

resetBtn.addEventListener('click', () => {
    const squares = board.querySelectorAll('div');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
    userClicked = false;
});

function populateBoard(size) {
    const squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const amount = size * size;
    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div');

        square.addEventListener('mouseover', () => {
            if (userClicked) {
                if (currentColor === 'random') {
                    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    square.style.backgroundColor = randomColor;
                } else if (currentColor === 'custom') {
                    square.style.backgroundColor = colorPicker.value;
                } else {
                    square.style.backgroundColor = 'black';
                }
            }
        });

        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input) {
    populateBoard(input);
}

colorPicker.addEventListener('input', () => {
    currentColor = 'custom';
});
