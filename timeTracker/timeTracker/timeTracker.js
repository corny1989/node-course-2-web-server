var unitConverter = require('../../unitconverter/unitconverter/unitConverter')

var getNetWorkTime = function(start, stop, pause){
    return(unitConverter.calculateTotalWorkingTime(start, stop, pause));
};

var createDTO = function(start, stop, pause, netWorktime){

    var startMoment = moment(start, "HH:mm");
    var stopMoment = moment(stop, "HH:mm");
    var pauseMoment = moment(pause, "HH:mm");    

    var DTO = {

    }

};

module.exports.getNetWorkTime = getNetWorkTime;