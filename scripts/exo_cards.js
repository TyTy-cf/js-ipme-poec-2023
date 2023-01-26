class Card {

    name;

    constructor(name) {
        this.name = name;
    }
}

class Deck {

    cards = [];

    constructor() {
        for (let i = 0; i < 20; i++) {
            this.cards.push(new Card(i));
        }
    }

    shuffle() {
        let newDeckShuffled = [];
        while (this.cards.length > 0) {
            let aRandomIndex = Math.floor(Math.random() * (this.cards.length));
            newDeckShuffled.push(this.cards.splice(aRandomIndex, 1));
        }
        this.cards = newDeckShuffled;
    }

    drawACard() {

    }

    drawManyCard(nbCards = 1) {

    }

}
