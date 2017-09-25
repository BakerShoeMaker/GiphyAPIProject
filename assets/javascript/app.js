
var topics = ["dogs","lions","wolves","tigers"];


function showButtons(){
    $("#ButtonsGoHere").empty();
    for(var i = 0; i < topics.length; i++)
    {
        console.log("hello world");
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
        //console.log(results);
       console.log(results[0].images.fixed_height.url);
        for(var i = 0; i < results; i++){
            //$("#GifContainer").text(JSON.stringify(response));
            //$("#GifContainer").text((response[i].data.images.original_still.url));
            var gifDiv = $("#GifContainer");
            var imageURL = results[i].images.fixed_height.url
            var gifImages = $("img");
            gifImages.attr("src", imageURL);
            gifDiv.append(gifImages);

        }

    })
});

showButtons();

// //when page is loaded.
// $(document).ready(function() {
//     loadPage();
// });





