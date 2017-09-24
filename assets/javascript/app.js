

//#SearchButton is the button ID.
$("#SearchButton").click( function(){

    console.log("hello world!");
    var queryURL = "";

    //make ajax call
    $.ajax({
        url: queryURL,
        method: 'GET'
   }).done(function() {
        //do something when response comes back.
        //Add buttons to the screen with the name of the phrase on the button
        //Add the gif to the div
    })
});



// //when page is loaded.
// $(document).ready(function() {
//     loadPage();
// });





