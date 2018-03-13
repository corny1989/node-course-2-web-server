var expect = require('chai').expect;
var unitConverter = require('../unitconverter/unitConverter');

describe('unitConverter', function(){
    it('should convert a given value in Fahrenheit to Celsius', function(){

        expect(unitConverter.convertFahrenheitToCelsius(66.666)).to.be.equal('19.26');
        expect(unitConverter.convertFahrenheitToCelsius(96.1234)).to.be.equal('35.62');
        expect(unitConverter.convertFahrenheitToCelsius(31)).to.be.equal('-0.56');
        expect(unitConverter.convertFahrenheitToCelsius(32)).to.be.equal('0.00');

    });

    it('should convert a given time in ms to a humanized duration in the format: hh:mm', function(){
        expect(unitConverter.convertAndHumanizeMillisecondsToDuration(3600000)).to.be.equal("01:00");
        expect(unitConverter.convertAndHumanizeMillisecondsToDuration(1800000)).to.be.equal("00:30");
        expect(unitConverter.convertAndHumanizeMillisecondsToDuration(2880000000+1800000)).to.be.equal("08:30");
 
    });
});