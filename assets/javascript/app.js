
var topics = ["dogs","lions","wolves","tigers"];


function showButtons(){
    $("#ButtonsGoHere").empty();
    for(var i = 0; i < topics.length; i++)
    {
        //console.log("hello world");
        var dynamicButton = $("<button>");
        dynamicButton.text(topics[i]);
        dynamicButton.addClass("buttonProp");
        $("#ButtonsGoHere").append(dynamicButton);
    }

}


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
            console.log(results[i].images.fixed_height.url);
             //console.log(results[0].images.fixed_height.url);
            var imageURL = results[i].images.fixed_height.url;
            var gifRating = results[i].rating;

            var p = $("<p>").text("Rating: " +gifRating);
            p.attr("class", "gifRating");
            //var gifHolder = $("<div>");
            var gifContainer = $("<div class = 'gifText'>");
            var imgTag = $("<img>");
            imgTag.attr("src", imageURL);
            //var imgHolder = gifHolder.attr("src", imageURL);
            //var finalImage = $("#GifContainer").html("<img src =" +imageURL +">");
            //gifHolder.append(imgHolder);
            console.log(gifRating);

            gifContainer.append(p);
            gifContainer.append(imgTag);
            $("#GifContainer").prepend(gifContainer);
        }


    })
});
//1) Display videos from the loop and add the rating. [FINISHED]
//2) Click on the buttons to show the videos.
//3) Click on video for pause/play functionality.


showButtons();

// //when page is loaded.
// $(document).ready(function() {
//     loadPage();
// });





