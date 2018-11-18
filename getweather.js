var geocode = require('./weather/geocode');
var weather = require('./weather/weather');
var unitConverter = require('./unitconverter/unitconverter/unitConverter');

var getWeatherForAddress = function(givenAddress, callback){

var lat;
var long;

geocode.geocodeAddress(givenAddress, (errorMessage, results) => {
    if (errorMessage){

        console.log('Error message: ' + errorMessage);

        callback("Error");
        
    } else {
        
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage){
                console.log("Error:" + errorMessage);
            }
            else {
                
                var temperature = unitConverter.convertFahrenheitToCelsius(weatherResults.temperature);
                var apparentTemperature = unitConverter.convertFahrenheitToCelsius(weatherResults.apparentTemp);           
                
                callback(undefined, {
                    temp: temperature,
                    appTemp: apparentTemperature,
                    formattedAddress: results.address
                });       
            }
            });            
    }
});
};

module.exports.getWeatherForAddress = getWeatherForAddress;