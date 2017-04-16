$(function(){


var homeImages = ["img/uni.jpg", "img/house.jpg"];
var homeCounter = 0;
var homeLength = homeImages.length;

var accomodationCounter = 0;
var formalPlaceImages = ["img/formal_place/1.jpg", "img/formal_place/2.jpg", "img/formal_place/3.jpg", "img/formal_place/4.jpg", "img/formal_place/5.jpg"];
var formalPlaceLength = formalPlaceImages.length;


var nextImage = function(){

        //find out which page it is

        if($("#next").hasClass("formal-place")){

            if(accomodationCounter > (formalPlaceLength - 1)){

                accomodationCounter = 0;
                $(".column img").prop("src", formalPlaceImages[accomodationCounter]);

            } else {

                $(".column img").prop("src", formalPlaceImages[accomodationCounter]);

            }

        }

        if($("#next").hasClass("henley-court")){

            if(accomodationCounter > (henleyCourtLength - 1)){

                accomodationCounter = 0;
                $(".column img").prop("src", henleyCourtImages[accomodationCounter]);

            } else {

                $(".column img").prop("src", henleyCourtImages[accomodationCounter]);

            }

        }



};



$("#next").click(function(){

    accomodationCounter++;
    nextImage();

});

$("#previous").click(function(){

    accomodationCounter--;

    if(accomodationCounter < 0){

        accomodationCounter = (formalPlaceLength - 1);
        $(".column img").prop("src", formalPlaceImages[accomodationCounter]);

    }
    else{

        $(".column img").prop("src", formalPlaceImages[accomodationCounter]);

    }
});

//Homepage timer slideshow

var updateImage = function() {

    $("#home-slideshow img").prop("src", homeImages[homeCounter]);

}

setInterval(function(){

    if(homeCounter == 0){

        homeCounter++;
        updateImage();

    } else if (homeCounter = (homeLength - 1)){

        homeCounter = 0;
        updateImage();

    }

    else if( 0 < homeCounter < homeLength ){

        homeCounter++;
        updateImage();

    }


}, 1000);


});
