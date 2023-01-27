

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
    xhr.open('GET', 'https://kaamelott.reiter.tf/quote/random', true);
    xhr.send();
}).then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value[0] + ' : ' + value[1]);
});

