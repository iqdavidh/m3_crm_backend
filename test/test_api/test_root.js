'use strict';



const supertest = require('supertest');
const assert = require('assert');
const LibTest = require('./LibTest');

let url = "http://localhost:3000"; //<-- es nuestro sitio backend

const request = supertest(url);


describe('index get root /', function () {
	it('ok request get root', function (done) {
		request
			.get('/')
			.expect(200)
			.end(function (err, res) {

				const c = JSON.parse(res.text);

				LibTest.saveResponse(res.text, './root.json');

				assert(c.success, "Se esperada true como tipo de success");
				assert(c.msg === "I'm backend", "No es la respuesat esperada");

				assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

				if (err) return done(err);
				done();
			})
		;
	});

});



