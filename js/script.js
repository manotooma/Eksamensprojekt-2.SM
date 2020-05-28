/*alert("https://www.youtube.com/watch?v=LSBBDewUwj8")
/*index-----------------------------------------------------------------------------*/

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

/*gameboard-----------------------------------------------------------------------------*/

function pickrandomimg() {
    const imagearray = new Array("img/polygon1.gif", "img/polygon2.gif", "img/polygon3.gif");

    let randomimagesrc = imagearray[Math.floor(Math.random() * imagearray.length)];
console.log(randomimagesrc);

    if (randomimagesrc == "img/polygon1.gif") {

        setTimeout(function () {
            location.replace("./question-dialog.html");
        }, 6000);
    } else if (randomimagesrc == "img/polygon2.gif") {

        setTimeout(function () {
            location.replace("./question-quiz.html");
        }, 6000);

    } else if (randomimagesrc == "img/polygon3.gif") {

        setTimeout(function () {
            location.replace("./question-billede.html");
        }, 6000);
    }




    document.getElementById("mypicture").src = randomimagesrc;

    console.log(randomimagesrc);

}

/*Question-----------------------------------------------------------------------------*/
function sendToScoreFromQuestion() {
    setTimeout(function () {
            location.replace("./scoreboard-host.html");
        }, 20000


    );
};



/*Answer--------------------*/

function answerTimeout() {
    setTimeout(function () {
            location.replace("./wrong-answer-timeout.html");
        }, 20000


    );
};


/*right or wrong--------------------*/
function sendToScore() {
    setTimeout(function () {
            location.replace("./scoreboard-deltager.html");
        }, 4000


    );
};

/*Scoreboard--------------------*/

/*const getUsersBtnElement = document.getElementById("getScore");



getUsersBtnElement.addEventListener("click", getScore);*/



function getScore() {
    fetch('./json/score.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class=""></h2>';
            //console.log(data);
            data.forEach(function (user) {
                output += `
              <div id="score-bar">
                <div class="inside-bar"><span class="place">${user.id}</span></div>
                <div class="inside-bar">${user.name}</div>
                <div class="inside-bar"> ${user.score}</div>
              </div>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })

};

function goToWinner() {
    setTimeout(function () {
            location.replace("./winner.html");
        }, 20000


    );


}



  