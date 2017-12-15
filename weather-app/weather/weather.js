const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
	url: `https://api.darksky.net/forecast/a9b3474b7ea4d10671823015b16c689b/${lat},${lng}`,
	json: true
	},(error, response, body) => {
		if(error){
			callback('Unable to connect Forecast.io API');
		}else if(response.statusCode === 400){
			callback('Unable to fetch weather');
		}else if(response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	}); 
};

module.exports.getWeather = getWeather;
