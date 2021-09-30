fetch('https://icanhazdadjoke.com/slack').
    then(data => data.json())
    .then(data => {
        const joke = data.attachments[0].text;
        const jokeElem = document.getElementById('jokeElem');

        jokeElem.innerHTML = joke;
    });


