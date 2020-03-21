$(document).ready(function() {

 $("#button").on("click", function(){
   event.preventDefault()
  var city = $("#city").val();
  console.log(city)


  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=6b36709c3454a3dde3566cc35c961d4a"
  var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=6b36709c3454a3dde3566cc35c961d4a"

  localStorage.getItem(city, city)

 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(queryURL)
    
      $("#main-city").empty()
    var mainCity = $("#main-city")
    city = response.name;
    var date = $("<h1>").text(city + "(" + moment().format('LL') + ")");
    mainCity.append(date);

    var temperature = response.main.temp
    var temp = $("<p>").text("temperature: " + temperature);
    mainCity.append(temp);
  });

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(queryURL2)
  });

  renderCities()
 })

  function renderCities(){
    $("#cities").empty();
    for (var i = 0; i < localStorage.length; i++) {
      var cities = localStorage.getItem(localStorage.key(i));
      var textCities = $("<p>").text(cities)
      $("#cities").prepend(textCities);
      
    }
  }
  
});
