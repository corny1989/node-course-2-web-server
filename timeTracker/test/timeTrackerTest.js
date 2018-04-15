var expect = require('chai').expect;
var timeTracker = require('../timeTracker/timeTracker');
var moment = require('moment');

describe('timeTracker', function() {
    it('create a DTO object to send to the database', function(){
        expect(timeTracker.getDTO("08:00", "18:00", "00:30", "09:30")).to.be.equal({
            start: "08:00",
            stop: "18:00",
            pause: "00:30",
            netWorkTime:"09:30"
        });
    });
});