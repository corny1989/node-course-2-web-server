var expect = require('chai').expect;
var geocode = require('../geocode');

/* describe('geocode', function(){
    it('should take an address string as an argument and asyncronically return back longitude, latitude and formatted address', function(done) {
        geocode.geocodeAddress("Kölner Str. 398, 47807 Krefeld", (undefined, result) => {
            expect(result.latitude).to.be.equal(51.3102568);
            expect(result.longitude).to.be.equal(31.123);
            expect(result.address).to.be.equal("insert address string");
            done();
        });

        geocode.geocodeAddress("XXXXXXXXXXXX", (error, undefined) => {
        expect(error).to.be.equal("Unable to get address").to.be.a("string");
        });

        //TODO: Find out how to mock!
    });
});  */