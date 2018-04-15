var unitConverter = require('../../unitconverter/unitconverter/unitConverter')

var getNetWorkTime = function(start, stop, pause){
    return(unitConverter.calculateTotalWorkingTime(start, stop, pause));
};

module.exports.getNetWorkTime = getNetWorkTime;