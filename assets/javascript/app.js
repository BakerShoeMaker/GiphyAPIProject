
var topics = ["dogs","lions","wolves","tigers"];
//var gifContainer = $("<div class = 'gifText'>");
//var imgTag = $("<img class='playPause' >");
var buttonClickedSearch ="";
var imageURLstill;
var imageURLanimate;


function showButtons(){
    $("#ButtonsGoHere").empty();
    for(var i = 0; i < topics.length; i++)
    {
        //console.log("hello world");
        var dynamicButton = $("<button id = 'buttonClicked" +i +"'>");
        dynamicButton.text(topics[i]);
        dynamicButton.addClass("buttonProp");
        $("#ButtonsGoHere").append(dynamicButton);
    }

}
//For the dynamic buttons. Takes the context of the button
$('#ButtonsGoHere').on('click', 'button', function() {
    buttonClickedSearch = "";
    buttonClickedSearch = this.textContent;
    searchExistingButtonsClicked();
});


//#SearchButton is the button ID.
$("#SearchButton").click( function(){

    var valueOfSearch = $("#SearchBox").val().trim();
    topics.push(valueOfSearch);
    showButtons();
    console.log(valueOfSearch);
    // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eRJZpx34ZPkPAXT5rQS03wtOJmBQRlvv&rating=q" +valueOfSearch
    //     +"&limit=10&rating=g";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eRJZpx34ZPkPAXT5rQS03wtOJmBQRlvv&rating=g&q=" +valueOfSearch
    +"&limit=10";

    //make ajax call
    $.ajax({
        url: queryURL,
        method: 'GET'
   }).done(function(response) {
        var results = response.data;
       console.log(results);

        for(var i = 0; i < results.length; i++){
            var gifDumpAnimate= [];
            var gifDumpStill= [];
            console.log(results[i].images.fixed_height.url);
             //console.log(results[0].images.fixed_height.url);
            //var imageURL = results[i].images.fixed_height.url;

            imageURLstill = results[i].images.original_still.url;
            //gifDumpAnimate.push(results[i].images.original_still.url);

            imageURLanimate= results[i].images.fixed_height.url;
            //gifDumpStill.push(imageURLanimate= results[i].images.fixed_height.url);

            var gifRating = results[i].rating;

            var gifContainer = $("<div class = 'gifText'>");
            var p = $("<p>").text("Rated: " +gifRating);
            p.attr("class", "gifRating");
            //var gifHolder = $("<div>");

            var imgTag = $("<img class='playPause' data-pause = imageURLstill data-animate = imageURLanimate" +
                "    data-state =" +
                " 'pause'>");
            imgTag.attr("src", imageURLstill);
            //var imgHolder = gifHolder.attr("src", imageURL);
            //var finalImage = $("#GifContainer").html("<img src =" +imageURL +">");
            //gifHolder.append(imgHolder);
            console.log(gifRating);

            gifContainer.append(p);
            gifContainer.append(imgTag);
            $("#GifContainer").prepend(gifContainer);
            //$("#GifContainer").append(gifContainer);
        }
        //Add play/pause toggle ability
        //playPause();

    })
});

<<<<<<< HEAD
$("#GifContainer").on("click", 'img' ,function(){
    var state = $(this).attr("data-state");
    console.log('playPause', state);
    console.log(imageURLanimate);
    if (state === "pause") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        $(this).attr("src",imageURLanimate);
         console.log(state);
    }
    else {

        $(this).attr("src", $(this).attr("data-pause"));
        $(this).attr("data-state", "pause");
        $(this).attr("src", imageURLstill);
    }

});

//play/pause
// function playPause() {
//     $(".playPause").on("click",function(){
//         var state = $(this).attr("data-state");
//         if (state === "pause") {
//             console.log("The state is: " +$(".playPause").attr("data-state"));
//             //$(this).attr("src", $(this).attr("data-animate"));
//              //$(this).attr("data-state", "animate");
//
//         } else {
//
//      $(this).attr("src", $(this).attr("data-pause"));
//             $(this).attr("data-state", "pause");
//         }
//     });
// }; //End playPause

=======
//play/pause


 $("#GifContainer").on("click", 'img' ,function(){
            var state = $(this).attr("data-state");
            console.log('playPause', state);
            console.log(imageURLanimate);
         if (state === "pause") {
             $(this).attr("src", $(this).attr("data-animate"));
             $(this).attr("data-state", "animate");
             $(this).attr("src",imageURLanimate);
             console.log(state);
         }
         else {
             $(this).attr("src", $(this).attr("data-pause"));
             $(this).attr("data-state", "pause");
             $(this).attr("src",imageURLstill);
            }

        });


//TRY THIS -----------------------------------------------------
// $(".playPause").on("click", "img",function(){
//     var state = $(this).attr("data-state");
//     console.log('playPause', state);
//     console.log(imageURLanimate);
//     if(state === "pause") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//         $(this).attr("src",imageURLanimate);
//         console.log(state);
//     }
//     else {
//         $(this).attr("src", $(this).attr("data-pause"));
//         $(this).attr("data-state", "pause");
//         $(this).attr("src",imageURLstill);
//     }
//
// });
//-------------------------------------- END ----------------------
>>>>>>> fb8e4894ac41d7328307dfe0996baaf2582a8193



//Search with the Existing buttons
function searchExistingButtonsClicked(){
   console.log("Now searching ..........");
    var valueOfSearch = buttonClickedSearch;
    console.log(valueOfSearch);

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eRJZpx34ZPkPAXT5rQS03wtOJmBQRlvv&rating=g&q=" +valueOfSearch
        +"&limit=10";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response){
        var results = response.data;
        console.log(results);

        for(var i = 0; i < results.length; i++){

            var imageURLstill = results[i].images.original_still.url;
            var imageURLanimate= results[i].images.fixed_height.url;
            var gifRating = results[i].rating;

            var gifContainer = $("<div class = 'gifText'>");
            var p = $("<p>").text("Rating: " +gifRating);
            p.attr("class", "gifRating");

            var imgTag = $("<img class='playPause' data-pause = imageURLstill data-animate = imageURLanimate data-state =" +
                " 'pause'>");
            imgTag.attr("src", imageURLstill);

            console.log(gifRating);

            gifContainer.append(p);
            gifContainer.append(imgTag);
            $("#GifContainer").prepend(gifContainer);
         }//end of for loop()


    });//end done()
}//end searchExistingButtonsClicked


//1) Display videos from the loop and add the rating. [FINISHED]
//2) Click on the buttons to show the videos.
//3) Click on video for pause/play functionality. [PROBLEM]


showButtons();

// //when page is loaded.
// $(document).ready(function() {
//     loadPage();
// });





