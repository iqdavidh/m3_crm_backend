'use strict';

/**
 * Created by David on 18/07/2019.
 */

var assert = require('assert');
const ServerConfig = require("../../src/ServerConfig");

describe('ServerConfig', function() {

	it('propiedades existentes desde env', function() {

		assert(ServerConfig.tipoServer !== undefined, "No esta isServerDev");
		assert(ServerConfig.mongo.urlServer !== undefined, "No esta moongo.urlServer");
		assert(ServerConfig.mongo.user !== undefined, "No esta moongo.user");
		assert(ServerConfig.mongo.pass !== undefined, "No esta moongo.pass");
		assert(ServerConfig.back.port !== undefined, "No esta back.port");
		assert(ServerConfig.back.url !== undefined, "No esta back.url");
		assert(ServerConfig.jwtSecret !== undefined, "No esta jwtSecret");

	});

});
