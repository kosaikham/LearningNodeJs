const axios = require('axios');

const getExchangeRate = async (from, to) => {
	try{
		const response = await axios.get(`https://api.fixer.io/latest?base=${from}`);
		const rate = response.data.rates[to];
		if(rate){
			return rate;
		}else{
			throw new Error(`Unable to get exchange rate for ${from} and ${to}.`);
		}
	}catch(e){
		throw new Error(`Unable to get exchange rate for ${from} and ${to}.`);
	}
}

const getCountries = async (currencyCode) => {
	try{
		const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
		return response.data.map((country) => country.name);
	}catch(e){
		throw new Error(`Unable to get countries that use ${currencyCode}.`);
	}
}

const convertCurrency = (from, to, amount) => {
	let country;
	return getCountries(to).then((countries) => {
		country = countries;
		return getExchangeRate(from, to);
	}).then((rate) => {
		let res = rate * amount;
		return `${amount} ${from} is worth to ${res} ${to}.You can use in the following countries: ${country}`;
	});
}

const convertCurrencyAlt = async (from, to, amount) => {
	const rate = await getExchangeRate(from, to);
	const country = await getCountries(to);
	let res = rate * amount;
	return `${amount} ${from} is worth to ${res} ${to}.You can use in the following countries: ${country}`;
};

convertCurrencyAlt('USD','CAD',1).then((success) => {
	console.log(success);
}).catch((e) => console.log(e.message));















