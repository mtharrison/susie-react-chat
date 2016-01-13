const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();
server.connection({ port: 4000 });

server.register([require('inert'), require('susie')], err => {

    if (err) {
        throw err;
    }

    server.route(require('./routes'));

    server.start(err => {

        if (err) {
            throw err;
        }
        console.log('Started server');
    });
});
