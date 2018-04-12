var convert = require('convert-units');
const moment = require('moment');

var Exception = function throwEception(message){
    this.message = message;
    this.name = "Exception";
}


var convertFahrenheitToCelsius = function(temperatureInF){
   var convertedToCelsius = convert(temperatureInF).from('F').to('C');
   var converted = convertedToCelsius.toFixed(2);
   return converted;
}

var convertAndHumanizeSecondsToDuration = function (timeInSeconds) {

    var timeAsDuration = moment.duration(timeInSeconds, 'seconds');
    var result = humanizeDuration(timeAsDuration);
    return result; 
}

var calculateTotalWorkingTime = function(start, stop, pause) {

    var startMoment = moment(start, "HH:mm");
    var stopMoment = moment(stop, "HH:mm");
    var pauseMoment = moment(pause, "HH:mm");

    var duration = stopMoment.diff(startMoment);
    var durationPause = pauseMoment.diff(moment("00:00", "HH:mm"));
    
    var netWorkTime = duration - durationPause;

    var result = moment.duration(netWorkTime, "ms");

    return humanizeDuration(result);
 
}

var humanizeDuration = function(timeAsDuration){

    if (moment.isDuration(timeAsDuration)) {

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

    else {

        return "Exception";
    }
    
}


module.exports.convertFahrenheitToCelsius = convertFahrenheitToCelsius;
module.exports.convertAndHumanizeSecondsToDuration = convertAndHumanizeSecondsToDuration;
module.exports.calculateTotalWorkingTime = calculateTotalWorkingTime;
module.exports.humanizeDuration = humanizeDuration;

