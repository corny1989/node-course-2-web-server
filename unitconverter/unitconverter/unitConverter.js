var convert = require('convert-units');
const moment = require('moment');

var convertFahrenheitToCelsius = function(temperatureInF){
   var convertedToCelsius = convert(temperatureInF).from('F').to('C');
   var converted = convertedToCelsius.toFixed(2);
   return converted;
}

var convertAndHumanizeMillisecondsToDuration = function (timeInMilliseconds) {

    var timeAsDuration = moment.duration(timeInMilliseconds);
    var asHours = timeAsDuration.hours();

    if (asHours <= 9){
        asHours = "0" + asHours;
    }
    var asMinutes = timeAsDuration.minutes();

    if (asMinutes < 10) {
        asMinutes = asMinutes + "0";
    }

    var humanizedTime = `${asHours}:${asMinutes}`
    return humanizedTime;
}

module.exports.convertFahrenheitToCelsius = convertFahrenheitToCelsius;
module.exports.convertAndHumanizeMillisecondsToDuration = convertAndHumanizeMillisecondsToDuration;

