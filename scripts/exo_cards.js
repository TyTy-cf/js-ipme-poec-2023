class Card {

    name;
    color;
    value;
    rank;
    image;

    constructor(color, value, rank) {
        this.color = color;
        this.value = value;
        this.rank = rank;
        this.name = this.value + this.color;
        this.image = '../assets/cards/' + this.name + '.gif';
    }
}

class Deck {

    cards = [];

    constructor() {
        const colors = ['c', 'd', 'h', 's'];
        const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        for (const color of colors) {
            for (let i = 0; i < value.length; i++) {
                this.cards.push(new Card(color, value[i], i));
            }
        }
    }

    shuffle() {
        let newDeckShuffled = [];
        while (this.cards.length > 0) {
            let aRandomIndex = Math.floor(Math.random() * (this.cards.length));
            newDeckShuffled.push(this.cards.splice(aRandomIndex, 1)[0]);
        }
        this.cards = newDeckShuffled;
    }

    drawACard() {

    }

    drawManyCard(nbCards = 1) {

    }

}

function displayDeck() {
    const deck = new Deck();
    deck.shuffle();

    const deckField = document.querySelector('div.deck');
    for (const card of deck.cards) {
        const divCard = document.createElement('div');
        divCard.className = 'col-2';
        const img = document.createElement('img');
        img.src = card.image;
        img.className = 'img-fluid';
        divCard.appendChild(img);
        deckField.appendChild(divCard);
    }
}


window.addEventListener('load', () => {
    displayDeck();
});
