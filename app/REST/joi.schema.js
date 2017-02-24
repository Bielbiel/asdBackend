var joi = require('joi');
module.exports = {
    user: {
        firstName: joi.string().alphanum().min(3).max(12).required()
    }
};
