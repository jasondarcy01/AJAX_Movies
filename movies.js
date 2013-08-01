$(function() {

  $('form').submit(function(){
    console.log('form button was clicked');

    var movie_title = $('#movie_title').val();
    var search_string = 'http://www.omdbapi.com/?s=';

    var response = $.ajax({
       type: 'get',
       url: search_string + movie_title,
       dataType: 'json'
     }).done(function(data){
        console.log("i'm done time to use this data to display it on my page")
        console.log(data);
        // code to put the data in my html
        // what is data?
        // does it contain an array?
        // can i loop through that array?
        // can i pull out what's in there
        // can i create new html elements?
        // can i combine the new html and data from the array?
        // and stick it in the html?
     }).fail(function(data){
       // when you fail
     }).always(function(data){
       // always do this
     });

     for (var i=0; i < 5; i++) {
        console.log("in for loop");
        console.log(data.Title[i]);
    }
    return false;

  });

  $('#search_button').click(function() {
    //alert('search button was clicked');
  });

  $('#lucky_button').click(function(){
    alert('lucky button was clicked');
  });

});

//click of form, perform ajax search request for movie title, and display the results//

//use the id on the form to have jqurey find it.
/* $('#name_of_id').event(function())
$('#search_button');
$('#lucky_button'); */






