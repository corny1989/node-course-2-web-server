var request = require('request');

var geocodeAddress = function geocodeAddress(address, callback){

var encodedAddress = encodeURIComponent(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBqjDgCjT68o3TCSZAXBKyplRId5w0flEo`,
    json: true
}, (error, response, body) => {

if (error){

callback('Unable to connect');

} else if (body.status === 'ZERO_RESULTS'){
callback('Unable to get address');

} else if (body.status === 'OVER_QUERY_LIMIT'){
    callback('Call to GeoLocationAPI over QUOTA');

} else if (body.status === 'OK'){

callback(undefined, {
    address: body.results[0].formatted_address,
    latitude: body.results[0].geometry.location.lat,
    longitude: body.results[0].geometry.location.lng
});

console.log(body);

}

});

};

module.exports.geocodeAddress = geocodeAddress;