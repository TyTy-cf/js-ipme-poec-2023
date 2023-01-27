
function loadPokemonPage(url = 'https://pokeapi.co/api/v2/pokemon') {
    new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (!xhr.response) {
                        reject([500, 'Something unknown went wrong']);
                    } else {
                        resolve(JSON.parse(xhr.response));
                    }
                } else {
                    reject([xhr.status, xhr.response]);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    }).then((value) => {

        initButtonPagination('next', value.next);
        initButtonPagination('previous', value.previous);

        const mainContainer = document.createElement('div');
        mainContainer.className = 'row';

        for (const pokemonUrl of value.results) {
            new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            if (!xhr.response) {
                                reject([500, 'Something unknown went wrong']);
                            } else {
                                resolve(JSON.parse(xhr.response));
                            }
                        } else {
                            reject([xhr.status, xhr.response]);
                        }
                    }
                };
                xhr.open('GET', pokemonUrl.url, true);
                xhr.send();
            }).then((value) => {
                const mainDiv = document.createElement('div');
                mainDiv.className = 'col-lg-3 col-md-6 mt-5';

                const img = document.createElement('img');
                img.src = value['sprites']['other']['official-artwork']['front_default'];
                img.className = 'img-fluid';

                const namePokemon = document.createElement('h3');
                namePokemon.className = 'text-center';
                namePokemon.innerText = value['name'].charAt(0).toUpperCase() + value['name'].slice(1);

                mainDiv.appendChild(img);
                mainDiv.appendChild(namePokemon);

                mainContainer.appendChild(mainDiv);
            }).catch((value) => {
                console.log(value[0] + ' : ' + value[1]);
            });
        }

        const paginate = document.querySelector('div.d-flex.justify-content-around');
        paginate.after(mainContainer);

    }).catch((value) => {
        console.log(value[0] + ' : ' + value[1]);
    });
}

function initButtonPagination(destination, url) {
    const btnPagination = document.querySelectorAll('[data-url]');
    if (btnPagination) {
        btnPagination.forEach((btn) => {
            if (btn.innerHTML.toLowerCase().includes(destination)) {
                btn.setAttribute('data-url', url);
                if (url === null) {
                    btn.setAttribute('disabled', '');
                } else {
                    btn.removeAttribute('disabled');
                }
            }
        });
    }
}

function setPaginationButtonEvent() {
    const btnPagination = document.querySelectorAll('[data-url]');
    if (btnPagination) {
        btnPagination.forEach((btn) => {
            btn.addEventListener('click', () => {
                const url = btn.getAttribute('data-url');
                const containerPokedex = document.querySelector('div.row');
                if (containerPokedex) {
                    containerPokedex.remove();
                }
                if (url !== null) {
                    loadPokemonPage(url);
                }
            });
        });
    }
}

window.addEventListener('load', () => {
    setPaginationButtonEvent();
    loadPokemonPage();
});