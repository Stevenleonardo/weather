$(document).ready(function(){

    var city = "orlando"
    var apiKeys = "6b36709c3454a3dde3566cc35c961d4a"

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKeys;
    var queryURL2 = 



 $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response)
    }
});