const os = require('os');
const unitConverter = require('./unitconverter/unitconverter/unitConverter')

var systeminfo = function getSystemInfo() {

    var mySysteminfo = {
    uptime: unitConverter.convertAndHumanizeSecondsToDuration(os.uptime()),
    starttime: os.starttime,
    currenttime: os.currenttime,
    freemem: os.freemem()
    };

    return mySysteminfo;
    

};


module.exports.systeminfo = systeminfo;