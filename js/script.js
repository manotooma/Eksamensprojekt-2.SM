alert("https://www.youtube.com/watch?v=LSBBDewUwj8")

 function pickrandomimg() {
            const imagearray = new Array("img/polygon1.png", "img/polygon2.png", "img/polygon3.png");
            
            let randomimagesrc = imagearray[Math.floor(Math.random() * imagearray.length)];
            
            document.getElementById("mypicture").src = randomimagesrc;
            
            console.log(randomimagesrc);
        }