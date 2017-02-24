'use strict';

const userDAO = require('../DAO/userDAO');
function query()
{
return userDAO.getAll()
}
function createUser(userData){
    userData.createData =new Date();
    userDAO.save(userData);
}
module.exports = {
    query: query,
    createUser: createUser
};
