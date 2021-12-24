const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    /* Se configura el header de la solicitus http, para que la documentación del api da, para que la promesa regrese solo un json */
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json();

    jokeEl.innerHTML = data.joke
    //versión usando async/await
}

/* 
versión usando .then
fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
*/