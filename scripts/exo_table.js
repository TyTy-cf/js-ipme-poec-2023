
function getAverage(array) {
    let sum = 0
    for (const element of array) {
        sum += parseInt(element);
    }
    return sum / array.length;
}

function calcAverage() {
    // Je récupère toute mes notes
    const ranks = document.querySelectorAll('[data-ranks]');
    if (ranks) {
        // pour chaque note
        for (const rank of ranks) {
            // je récupère la valeur du data-attribute correspondant
            const idRank = rank.getAttribute('data-ranks');
            // je vais chercher le data-attribute de la moyenne ayant le même ID
            const tdAvg = document.querySelector('[data-avg="'+idRank+'"]');
            // je transforme mes notes en tableau
            const splitStr = rank.innerText.split(',');
            // je calcule la moyenne et je l'ajoute dans le td prévu à cet effet
            tdAvg.innerText = getAverage(splitStr);
        }
    }
}


window.addEventListener('load', () => {
   calcAverage();
});