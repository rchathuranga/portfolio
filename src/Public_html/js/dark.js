
var onDark=false;

var darkButton = document.getElementById('darkTheme');
darkButton.addEventListener('click',function () {
    var css = document.getElementById('mainCSS');
    var list=document.getElementsByClassName('imgComingSoon');
    if(onDark) {
        css.setAttribute('href', 'css/style.css');

        document.getElementById('imgSchool').setAttribute('src','assets/school_building.png');
        document.getElementById('imgDipHat').setAttribute('src','assets/diplomaHat.png');
        document.getElementById('imgCar1').setAttribute('src','assets/car-png.png');
        document.getElementById('imgKnight').setAttribute('src','assets/knight-rider-wide.png');
        document.getElementById('imgBirth').setAttribute('src','assets/birthday_icon.png');
        document.getElementById('imgQuestion').setAttribute('src','assets/Question-Mark-PNG-Picture.png');
        document.getElementById('imgCar2').setAttribute('src','assets/car-icon.png');
        document.getElementById('imgSlider').setAttribute('src','assets/Slideshow-512.png');

        for (var i = 0; i < list.length; ++i) {
            list[i].setAttribute('src', 'assets/comingsoon.png');
        }

        onDark=false;
    }else {
        css.setAttribute('href', 'css/DarkMode/dark.css');

        document.getElementById('imgSchool').setAttribute('src','assets/darkschool.png');
        document.getElementById('imgDipHat').setAttribute('src','assets/darkDiploma.png');
        document.getElementById('imgCar1').setAttribute('src','assets/darkCar.png');
        document.getElementById('imgKnight').setAttribute('src','assets/darkKnight.png');
        document.getElementById('imgBirth').setAttribute('src','assets/darkCake.png');
        document.getElementById('imgQuestion').setAttribute('src','assets/darkQuestion.png');
        document.getElementById('imgCar2').setAttribute('src','assets/darkCar(2).png');
        document.getElementById('imgSlider').setAttribute('src','assets/darkSlideShow.png');

        for (var i = 0; i < list.length; ++i) {
            list[i].setAttribute('src','assets/darkComingSoon.png');
        }

        onDark=true;
    }
});