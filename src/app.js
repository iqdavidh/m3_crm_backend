const express = require('express');

const bodyParser = require('body-parser');

const routerLogin = require("./controllerApi/login/routerLogin");
const routerApi = require("./controllerApi/routerApi");

const RootAction = require("./controller/RootAction");
const NotFoundAction = require("./controller/NotFoundAction");
const ErrorAction = require("./controller/ErrorAction");


DbCrm = require("./model/DbCrm"); /*<-- solo hace conexion con la base de datos */


const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get("/", RootAction);

app.use("/api", routerLogin);
app.use("/api", routerApi);

app.use(NotFoundAction);
app.use(ErrorAction);


/* servidor ------------------------------------------------------------------ */
const http = require('http');
const ServerConfig = require("./ServerConfig");

let server = http.createServer(app);

server.on('error', error => {
	if (error.syscall !== 'listen') { throw error }

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(`Port ${ServerConfig.back.port} requires elevated privileges`);
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(`Port ${ServerConfig.back.port} is already in use`);
			process.exit(1);
			break;
		default:
			throw error;
	}
});

server.listen(ServerConfig.back.port, () => {
	let d=new Date();
	console.log( `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
	console.log(`Listening on ${ServerConfig.back.url}`);
});
