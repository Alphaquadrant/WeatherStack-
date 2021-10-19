const request = require('request')



const forecast = (latitude,longitude,callback) => {
  const url = "http://api.weatherstack.com/current?access_key=5505b057ccd9454b56c9fb1bba225752&query="+latitude+","+longitude+"&units=m";
  request({url: url, json: true}, (error,response) => {
    if(error){
      callback('unable to connect',undefined);
    }
    else if (response.body.error) {
      callback('Location not found!',undefined);
    }
    else {
      callback(undefined,
        ("The current Weather is "+response.body.current.weather_descriptions+".\n The temperature is "+response.body.current.temperature+ "°C at "
        +response.body.location.name+ " \n \nat the time of "+response.body.location.localtime+
        ".\t  \n Humidity is "+response.body.current.humidity+ "%"+
        " \n with Wind speed of "+response.body.current.wind_speed+ " Km/hr"+
        " at direction "+response.body.current.wind_dir) );
      }

    });
  }



module.exports = forecast;
