
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

// <th className="col-1">
//     <input type="checkbox">
// </th>
function initCheckBoxes(globalSelector = 'all') {
    const tds = document.querySelectorAll('table tbody tr td:first-child');
    if (tds) {
        tds.forEach((element, index) => {
            element.before(createCheckBoxElement(index+1, 'td'));
        });
    }
    const thead = document.querySelector('table thead tr th:first-child');
    thead.before(createCheckBoxElement(globalSelector));
    const checkBoxAll = document.querySelector('[data-checkboxes="'+globalSelector+'"]');
    if (checkBoxAll) {
        checkBoxAll.addEventListener('change', () => {
            const otherChekBoxes = document.querySelectorAll('table tbody tr td input[data-checkboxes]');
            if (otherChekBoxes) {
                for (const otherChekBox of otherChekBoxes) {
                    otherChekBox.checked = checkBoxAll.checked;
                    // otherChekBox.dispatchEvent(new Event('change')); => déclenche un évènement à la main
                }
            }
        });
    }
}

function createCheckBoxElement(dataAttributeValue, element = 'th') {
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.setAttribute('data-checkboxes', dataAttributeValue);
    const tableElement = document.createElement(element);
    tableElement.className = 'col-1';
    tableElement.appendChild(checkBox);
    return tableElement;
}

window.addEventListener('load', () => {
   calcAverage();
   initCheckBoxes();
});