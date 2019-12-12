$(window).on('load', function () {
    setTimeout(function () {
        $('#loading').css('display', 'none');
    }, 3000)

});

$(document).ready(function () {
    $("#liHome").click(function () {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1500);
    });
});

$(document).ready(function () {
    $("#liAbout").click(function () {
        $('html, body').animate({
            scrollTop: $("#About").offset().top
        }, 1500);
    });
});

$(document).ready(function () {
    $("#liSkill").click(function () {
        $('html, body').animate({
            scrollTop: $("#Skills").offset().top
        }, 1500);
    });
});

$(document).ready(function () {
    $("#liAssignment").click(function () {
        $('html, body').animate({
            scrollTop: $("#Assignments").offset().top
        }, 1500);
    });
});

$(document).ready(function () {
    $("#liProject").click(function () {
        $('html, body').animate({
            scrollTop: $("#Project").offset().top
        }, 1500);
    });
});


$(document).ready(function () {
    $("#liContact").click(function () {
        $('html, body').animate({
            scrollTop: $("#Contact").offset().top
        }, 1500);
    });
});