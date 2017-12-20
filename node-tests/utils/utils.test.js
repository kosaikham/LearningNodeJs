const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

	describe('#add',() => {
		it('should add two numbers', () => {
		var res = utils.add(33, 11);

		expect(res).toBe(44);
		// if(res !== 44){
		// 	throw new Error(`Expected 44, but got ${res}`);
		// }
		});
	});
	
	it('should async add two numbers', (done) => {
		utils.asyncAdd(3, 4, (sum) => {
			expect(sum).toBe(7);
			done();
		});
	});

	it('should get square number', () => {
		var sqr = utils.square(9);

		expect(sqr).toBe(81);
		// if(sqr !== 81){
		// 	throw new Error(`Expected 81, but got ${sqr}`);
		// }
	});

	it('should get async square number', (done) => {
		utils.asyncSquare(9, (square) => {
			expect(square).toBe(81);
			done();
		});
	});
});

it('should get some values', () => {
	// expect(23).toNotBe(22);
	// expect({name: 'sai'}).toEqual({name: 'sai'});
	// expect([2,3,4]).toExclude(1);
});





