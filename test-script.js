


// Here we grab the text from the input box - city
var city = $("#city-input").val();

//Lat and Lon 
var lat = $(response.coord.lat)
var lon = $(response.coord.lon)

// This is our API key: MK- entered my API key from website
var APIKey = "68498a4d04f4da5284313a372d17c548";

// Here we construct our URL
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// UV Index 
// var queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
// 5 day forecast 
var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;


$.ajax({
    url: queryURL,
    method: "GET"
})
// UV index ajax
// $.ajax({
//     url: queryURLUv,
//     method: "GET"
// })

    .then(function (response) {
        var cityName = $("<li>").text(response.name)
        $(".list-group").append(cityName)
        $(".list-group-item").text(JSON.stringify(response));
        console.log(response.name)

        // Main CITY results details:
        // Log the resulting object
        console.log(response);

        //Lat and Lon 
        var lat = $(response.coord.lat)
        var lon = $(response.coord.lon)

        var queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
        //uv index ajax
        // UV index ajax
        $.ajax({
            url: queryURLUv,
            method: "GET"
        }).then(function(response) {

            // Storing the rating data
            var uvIndexD = response.value;
  
            // Creating an element to have the rating displayed
            $(".uvindex").text("UV Index: " + response.value);

        // Transfer content to HTML
        $(".cityNameD").html("City: " + response.name);
        $(".humidityD").text("Humidity: " + response.main.humidity);
        $(".windspeedD").text("Wind Speed: " + response.wind.speed);
        // check the uv index response - couldnt find in example.
        

        // Convert the temp to fahrenheit
        var tempD = (response.main.temp - 273.15) * 1.80 + 32;
        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempD").text("Temperature (F) " + tempD.toFixed(2));
        // Log the data in the console as well
        console.log("City: " + response.name);
        
        console.log("Humidity: " + response.main.humidity);
        console.log("Wind Speed: " + response.wind.speed);
        console.log("UV Index: " + response.value);
        console.log("Temperature (F): " + tempD);
