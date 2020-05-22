/*alert("https://www.youtube.com/watch?v=LSBBDewUwj8")*/


/*gameboard-----------------------------------------------------------------------------*/

function pickrandomimg() {
    const imagearray = new Array("img/polygon1.gif", "img/polygon2.gif", "img/polygon3.gif");

    let randomimagesrc = imagearray[Math.floor(Math.random() * imagearray.length)];

    document.getElementById("mypicture").src = randomimagesrc;

    console.log(randomimagesrc);

};

function changeLocation() {
    setTimeout(function () {
            location.replace("https://kahoot.com/");
        }, 6000


    );


}

/*Scoreboard-kopi--------------------*/

const getUsersBtnElement = document.getElementById("getScore");



getUsersBtnElement.addEventListener("click", getScore);



function getScore() {
    fetch('./json/score.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="">Scoreboard</h2>';
            //console.log(data);
            data.forEach(function (user) {
                output += `
              <div id="score-bar">
                <div class="inside-bar">${user.id}</div>
                <div class="inside-bar">${user.name}</div>
                <div class="inside-bar"> ${user.score}</div>
              </div>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })

}
