var expect = require('chai').expect;
var unitConverter = require('../unitconverter/unitConverter');
var moment = require('moment');

describe('unitConverter', function(){
    it('should convert a given value in Fahrenheit to Celsius', function(){

        expect(unitConverter.convertFahrenheitToCelsius(66.666)).to.be.equal('19.26');
        expect(unitConverter.convertFahrenheitToCelsius(96.1234)).to.be.equal('35.62');
        expect(unitConverter.convertFahrenheitToCelsius(31)).to.be.equal('-0.56');
        expect(unitConverter.convertFahrenheitToCelsius(32)).to.be.equal('0.00');

    });

    it('should convert a given time in seconds to a humanized duration in the format: HH:mm', function(){
        expect(unitConverter.convertAndHumanizeSecondsToDuration(3600)).to.be.equal("01:00");
        expect(unitConverter.convertAndHumanizeSecondsToDuration(1800)).to.be.equal("00:30");
        expect(unitConverter.convertAndHumanizeSecondsToDuration(30600)).to.be.equal("08:30");
 
    });

    it('should calculate the working time with a start, stop and pause moment and return a duration in the format HH:mm', function(){
        expect(unitConverter.calculateTotalWorkingTime("08:00", "18:00", "00:30")).to.be.equal("09:30");
        expect(unitConverter.calculateTotalWorkingTime("09:00", "17:30", "01:00")).to.be.equal("07:30");
        expect(unitConverter.calculateTotalWorkingTime("00:00", "18:00", "01:00")).to.be.equal("17:00");
        
    });

    it('should humanize a duration to the format "HH:mm"', function(){

        var moment1 = moment.duration(10800000);
        var moment2 = moment.duration(12600000);
        var moment3 = moment.duration(0);
        var moment4 = "bla"
            
        expect(unitConverter.humanizeDuration(moment1)).to.be.equal("03:00");
        expect(unitConverter.humanizeDuration(moment2)).to.be.equal("03:30");
        expect(unitConverter.humanizeDuration(moment3)).to.be.equal("00:00");
        expect(unitConverter.humanizeDuration(moment4)).to.be.equal("Exception");
    });
});