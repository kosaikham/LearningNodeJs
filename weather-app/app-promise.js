const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a:{
			describe: 'Address to fetch weather for ',
			demand: true,
			alias: 'address',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;

var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`;
axios.get(geocodeURL).then((response) => {
	if(response.data.status === 'ZERO_RESULTS'){
		throw new Error('Unable to find address');
	}
	console.log(response.data.results[0].formatted_address);
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherURL = `https://api.darksky.net/forecast/a9b3474b7ea4d10671823015b16c689b/${lat},${lng}`;
	return axios.get(weatherURL);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
	if(e.code === 'ENOTFOUND'){
		console.log('Unable to connect API server');
	}else{
		console.log(e.message);
	}
});





