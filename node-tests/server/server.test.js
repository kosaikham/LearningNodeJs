const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
	describe('#Get /',() => {
		it('should return error and name', (done) => {
			request(app)
				.get('/')
				.expect(404)
				.expect({
					error: 'Page not found.',
					name: 'Todo App v1.0.0'
				})
				.end(done);
		});
	});
	
	describe('#Get /users',() => {
		it('should return object arrays', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
					name: 'sai',
					age: 22
				});
				})
				.end(done);
		});
	});
	
});
