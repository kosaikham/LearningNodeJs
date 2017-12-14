var square = x => x * x;
console.log(square(9));

var user = {
	name: 'Sai',
	sayHi: () => {
		console.log(arguments);
		console.log(`I'm ${this.name}`);
	},
	sayHiAlt(){
		console.log(arguments);
		console.log(`I'm ${this.name}`);
	}
};

user.sayHi(1,2,3);