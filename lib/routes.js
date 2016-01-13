const Joi = require('joi');
const PassThrough = require('stream').PassThrough;
const Path = require('path');

// Created shared chat stream

const chatStream = new PassThrough({
    objectMode: true
});

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply.file(Path.join(__dirname, '../public/index.html'));
        }
    },
    {
        method: 'GET',
        path: '/{p*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '../public')
            }
        }
    },
    {
        method: 'GET',
        path: '/chat-feed',
        handler: function (request, reply) {

            reply.event(chatStream); // send shared stream
        }
    },
    {
        config: {
            validate: {
                payload: {
                    message: Joi.string(),
                    username: Joi.string()
                }
            }
        },
        method: 'POST',
        path: '/new-message',
        handler: function (request, reply) {

            chatStream.write(request.payload); // Write new message into stream
            reply();
        }
    }
];
