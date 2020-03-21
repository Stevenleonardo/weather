$(document).ready(function() {

 $("#button").on("click", function(){
   event.preventDefault()
  var city = $("#City").val();
  console.log(city)


  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=6b36709c3454a3dde3566cc35c961d4a"
  var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=6b36709c3454a3dde3566cc35c961d4a"

  localStorage.setItem(city, city)

 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var city =  response.name
    console.log(response)
    console.log(queryURL)
    
      $("#main-city").empty()
    var mainCity = $("#main-city")
    var date = $("<h1>").text(city + "(" + moment().format('LL') + ")");
    mainCity.append(date);

    var temperature = response.main.temp
    var temp = $("<p>").text("temperature: " + temperature);
    mainCity.append(temp);

    var humdity = response.main.humidity
    var hum = $("<p>").text("humidity: " + humdity + "%")
    mainCity.append(hum)

    var wind = response.wind.speed
    var speed = $("<p>").text("wind speed: " + wind + "mph")
    mainCity.append(speed)
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
