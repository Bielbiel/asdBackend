'use strict';

const userMenager = require('../business/userMenager');
const userJoi = require('./joi.schema');

module.exports = function (server)
{
    server.route({
        method: 'GET', path: '/api/user', handler: function (request, reply)
        {
           const users = userMenager.query();
            reply (users);

        }
    });
    server.route({
        method: 'POST', path: '/api/user', config: {validate: {
            payload: userJoi.user
        }}, handler: function (request, reply)
        {
            userMenager.createUser(request.payload);
            reply()
        }
    });
};
