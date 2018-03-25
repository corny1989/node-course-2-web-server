var request = require('request');

var getWeather = function getWeather(lat, long, callback){

request({
    url: `https://api.darksky.net/forecast/1777a01dca3803b4feb8649f61f4b592/${lat},${long}`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemp: body.currently.apparentTemperature
        });
    } else {
        callback('Unable to fetch weather');
    }
 
});
};

module.exports.getWeather = getWeather;