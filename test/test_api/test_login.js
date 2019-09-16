'use strict';


const supertest = require('supertest');
const assert = require('assert');
const LibTest = require('./LibTest');

let url = "http://localhost:3000"; //<-- es nuestro sitio backend

const request = supertest(url);


describe('login post root /api/login', function () {
	it('ok request get root', function (done) {

		const dataUpdate = {
			"email": "david@productividadti.com.mx",
			"password": "lalocal"
		};

		request
			.post('/api/login')
			.send(dataUpdate)
			.expect(200)
			.end(function (err, res) {

				const c = JSON.parse(res.text);

				LibTest.saveResponse(res.text, './login.json');

				assert(c.success, "Se esperada true como tipo de success");
				assert(c.msg === "I'm backend", "No es la respuesat esperada");

				assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

				LibTest.ValidarTieneProp(c.data,["token","public"])
				if (err) return done(err);
				done();
			})
		;
	});

});



