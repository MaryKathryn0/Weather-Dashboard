

$("#add-city").on("click", function (event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box - city
    var city = $("#city-input").val();

    

    // This is our API key: MK- entered my API key from website
    var APIKey = "68498a4d04f4da5284313a372d17c548";

    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    // 5 day forecast 
    var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
  

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // UV index ajax
    $.ajax({
        url: queryURLUv,
        method: "GET"
    })

    .then(function (response) {
        var cityName = $("<li>").text(response.name)
        $(".list-group").append(cityName)
        $(".list-group-item").text(JSON.stringify(response));
        console.log(response.name)

        // Main CITY results details:
        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".cityNameD").html("City: " + response.name);
        $(".humidityD").text("Humidity: " + response.main.humidity);
        $(".windspeedD").text("Wind Speed: " + response.wind.speed);
        // check the uv index response - couldnt find in example.
        // $(".uvindex").text("UV Index: " + response.main.uvindex);
        
        // Convert the temp to fahrenheit
        var tempD = (response.main.temp - 273.15) * 1.80 + 32;
        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempD").text("Temperature (F) " + tempD.toFixed(2));
        // Log the data in the console as well
        console.log("City: " + response.name);
        //console.log("Temperature: " + response.main.temp);
        console.log("Humidity: " + response.main.humidity);
        console.log("Wind Speed: " + response.wind.speed);
        // console.log("UV Index: " + response.);
        console.log("Temperature (F): " + tempD);

        // 5DAY    Here we run our AJAX call to 5 day forecast link:
        $.ajax({
            url: queryURL5,
            method: "GET"
        })
            // We store all of the retrieved data inside of an object called "response"
            .then(function (response) {

                // Log the queryURL
                console.log(queryURL);

                // Log the resulting object
                console.log(response);

                // Transfer content to HTML
                $(".dt").text(" " + response.list[0].dt);
                $(".icon").img(" " + response.list[0].weather.icon);
                $(".humidity5").text(" " + response.list[0].main.humidity);

                
                //Change the date to correct format:
                
                // var date = moment().add(i, "days").format("M/DD/YYYY");
                // $(".date").text(" " + response.);
                
                // Convert the temp to fahrenheit
                var temp5 = (response.main.temp - 273.15) * 1.80 + 32;
                // add temp content to html
                $(".temp").text("Temperature (K) " + response.list[0].main.temp);
                $(".temp5").text("Temperature (F) " + temp5.toFixed(2));
                // Log the data in the console as well
                console.log(" " + response.list[0].dt);
                console.log(" " + response.list[0].weather.icon);
                //console.log(" " + response.list[0].main.temp);
                console.log(" " + response.list[0].main.humidity);
                console.log(" " + temp5);
              
            });


    });

});