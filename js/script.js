/*testalert("hello")
console.log("alert")*/

    <!--Initialize Swiper-- >
    <
    script >
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });


/* Question-----------------------------------------------------------------------------*/
   function pickrandomimg() {
            const imagearray = new Array("img/polygon1.png", "img/polygon2.png", "img/polygon3.png");
            let randomimagesrc = imagearray[Math.floor(Math.random() * imagearray.length)];
            document.getElementById("mypicture").src = randomimagesrc;
            console.log(randomimagesrc);
        }