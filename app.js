$(document).ready(function() {
//event listener for the button
 $("#button").on("click", function(){
   //stops page from refreshing
   event.preventDefault()
   //takes the value from the input text
  var city = $("#City").val();
  console.log(city)

//data base where information is stored
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=6b36709c3454a3dde3566cc35c961d4a"
  var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=6b36709c3454a3dde3566cc35c961d4a"
//places on value in the storage
  localStorage.setItem(city, city)

  //Call the functions
  weatherCity(queryURL);
  foreCastCity(queryURL2);

  function weatherCity(queryURL){
   //makes a call to the html
   $.ajax({
    url: queryURL,
    method: "GET"
   }).then(function (response) {
    var city =  response.name
    console.log(response)
    console.log(queryURL)
    //clears the div
      $("#main-city").empty()
      //set the div to a local variable
    var mainCity = $("#main-city")
    //creates h1 text that shows the current city and date
    var date = $("<h1>").text(city + "(" + moment().format('LL') + ")");
    //places the information on the page
    mainCity.append(date);
    //place the data from the object into a local variable
    var temperature = response.main.temp
    //creates a p tage and places the info into the tag
    var temp = $("<p>").text("temperature: " + temperature);
    //places the infomation onto the page
    mainCity.append(temp);
    //places the data from the object into a local variable
    var humdity = response.main.humidity
    //creates a p tage with the information obtained
    var hum = $("<p>").text("humidity: " + humdity + "%")
    //places that information on the page
    mainCity.append(hum)
    // obtian the wind speed from the object
    var wind = response.wind.speed
    // creates a p tag and places the content into that tag
    var speed = $("<p>").text("wind speed: " + wind + "mph")
    //places that content onto the page
    mainCity.append(speed)
   });
  };

  function foreCastCity(queryURL2){
   //making a second call to the html for the forecast
   $.ajax({
    url: queryURL2,
    method: "GET"
   }).then(function (response) {
    console.log(response)
    var i = 5
    for (var index = 1; index < 6; index++) {
      var card = $("#forecast" + index)
      console.log(card)
      $(card).empty();
      var cardDate = moment().add(index,'day').format('L')
    //placing the weather icon into a local variable
    var weatherIcon = response.list[i].weather[0].icon;
    var imgIcon = $("<img>").attr("src", "http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png")
    //placing the temp in a local variable
    var tempFore = response.list[i].main.temp;
    //placing the humidity in a local variable
    var humidityFore = response.list[i].main.humidity;
    //Creating p tags in the cards
    var pTime = $("<p>").text(cardDate);
    var pTemp = $("<p>").text("temperature: " + tempFore + "F");
    var pHumidity = $("<p>").text("Humidity:" + humidityFore + "%");
    //places text on the page
    card.append(pTime,imgIcon,pTemp,pHumidity)
    i=i+8;
    };
   });
  };

  renderCities()
 })
  //function for the local storage
  function renderCities(){
    //empties out the div
    $("#cities").empty();
    //loop that runs through the information in the local storage
    for (var i = 0; i < localStorage.length; i++) {
      var cities = localStorage.getItem(localStorage.key(i));
      var textCities = $("<p>").text(cities)
      $("#cities").prepend(textCities);
      
    }
  }
  
});
