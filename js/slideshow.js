$(function(){


var homeImages = ["img/uni.jpg", "img/house.jpg"];
var counter = 0;
var length = homeImages.length;

var updateImage = function() {

    $("#home-slideshow img").prop("src", homeImages[counter]);

}

// $("#next").click(function(){
//
//     $("#home-slideshow img").prop("src", homeImages[counter+1]);
//     counter++;
//     if(counter > (length - 1)){
//         counter = 0;
//         $("#home-slideshow img").prop("src", homeImages[counter]);
//     }
// });
//
// $("#previous").click(function(){
//
//     $("#home-slideshow img").prop("src", homeImages[counter-1]);
//     counter--;
//     if(counter < 0){
//         counter = (length - 1);
//         $("#home-slideshow img").prop("src", homeImages[counter]);
//
//     }
// });

setInterval(function(){

    if(counter == 0){

        counter++;
        console.log(counter);
        updateImage();

    } else if (counter = (length)){

        counter = 0;
        console.log(counter);
        updateImage();

    }

    else if( 0 < counter < length ){

        counter++;
        console.log(counter);
        updateImage();

    }


}, 1000);


});
