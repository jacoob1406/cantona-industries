/*var mapButton = document.getElementsByClassName("showButton");
 
 mapButton.click = function () {
 map.style.display = "block";
 };
 
 function butFunction() {
 var map = document.getElementsByClassName("mapPage");
 map.classList.remove("hide");
 }
 
 */
$(document).ready(function () {


    function showMap() {
        // $('.mapPage').removeClass('hide');
        $('.mapPage').fadeIn(3000);
        $('.showButton').addClass('hide');
        $('img').addClass('hide');
        $('.headings').addClass('hide');
    }

    function showPlace(e) {
        $('.place').fadeIn(1000);
        $('header').fadeOut(100);
        $('.placecontainer').css('display', 'flex');
        $('.place').removeClass('hide');
        $('.placename').html($(e).data('key'));
    }

    $('.showButton').on('click', function () {
        showMap();
    });

    $('.backButton').on('click', function () {
        window.location = 'index.html';
        showMap();
    });


    $('.link').on('click', function () {
        showPlace(this);
    });
});