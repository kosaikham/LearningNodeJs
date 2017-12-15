var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			}else{
				reject('Arguments must be numbers.');
			}
		}, 1500);
	});
};


asyncAdd(5, 7).then((res) => {
	console.log('Result :', res);
	return asyncAdd(res, 33);
}).then((res) => {
	console.log('Result should be :', res);
}).catch((errorMsg) => {
	console.log(errorMsg);
});








// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve('Hey it works.');
// 		reject('Unable to connect');
// 	}, 2500);
	
// });

// somePromise.then((successMsg) => {
// 	console.log(successMsg);
// }, (errorMsg) => {
// 	console.log(errorMsg);
// });