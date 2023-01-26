
class Piece {

    image;

    constructor(color) {
        this.image = 'assets/chess/' + this.constructor.name.toLowerCase() + '-' + color + '.png';
    }
}

class Pawn extends Piece {
    constructor(color) {
        super(color);
    }
}

class Bishop extends Piece {
    constructor(color) {
        super(color);
    }
}

class Knight extends Piece {
    constructor(color) {
        super(color);
    }
}

class Rook extends Piece {
    constructor(color) {
        super(color);
    }
}

class Queen extends Piece {
    constructor(color) {
        super(color);
    }
}

class King extends Piece {
    constructor(color) {
        super(color);
    }
}

class Square {
    piece = undefined;
    x;
    y;
    color;

    constructor(x, y, color, piece) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.piece = piece;
    }
}

class Chess {

    squares = [];

    constructor() {
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let color = 'white';
        for (let i = 8; i > 0 ; i--) {
            for (const letter of letters) {
                let pieceColor = 'black';
                let piece = undefined;
                if (i === 1 || i === 2) {
                    pieceColor = 'white';
                }
                if (i === 2 || i === 7) {
                    piece = new Pawn(pieceColor);
                }
                if (i === 1 || i === 8) {
                    if (letter === 'a' || letter === 'h') {
                        piece = new Rook(pieceColor);
                    }
                    if (letter === 'b' || letter === 'g') {
                        piece = new Knight(pieceColor);
                    }
                    if (letter === 'c' || letter === 'f') {
                        piece = new Bishop(pieceColor);
                    }
                    if (letter === 'd') {
                        piece = new Queen(pieceColor);
                    }
                    if (letter === 'e') {
                        piece = new King(pieceColor);
                    }
                }
                this.squares.push(new Square(letter, i, color, piece));
                if (letter !== 'h') {
                    if (color === 'white') {
                        color = 'black';
                    } else {
                        color = 'white';
                    }
                }
            }
        }
    }

}


const chess = new Chess();

const divContainer = document.createElement('div');
divContainer.className = 'row';
for (const square of chess.squares) {
    const divSquare = document.createElement('div');
    divSquare.className = 'col-125 ' + square.color;
    divSquare.setAttribute('data-coordinate-x', square.x);
    divSquare.setAttribute('data-coordinate-y', square.y);
    if (divSquare.piece) {
        const img = document.createElement('img');
        img.src = divSquare.piece.image;
        img.className = 'img-fluid';
    }
}
