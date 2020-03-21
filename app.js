$(document).ready(function() {

  var city = $("#city").val();


  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=6b36709c3454a3dde3566cc35c961d4a"
  var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=6b36709c3454a3dde3566cc35c961d4a"



 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(queryURL)
  });

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(queryURL2)
  });



});
