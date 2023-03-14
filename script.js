const blackBtn = document.querySelector('#black');
const randomBtn = document.querySelector('#random');
const resetBtn = document.querySelector('#reset');




function populateBoard(size) {
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input) {
    populateBoard(input);
}