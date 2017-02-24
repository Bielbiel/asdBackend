'use strict';
var sequence = 1;
var users = [{
    id: sequence++, firstName: 'John'
}

];


function getAll()
{
    return users;
}
function save(user)
{
    user.id = sequence++;
    users.push(user)
}
module.exports = {
    getAll: getAll,
    save: save
};
