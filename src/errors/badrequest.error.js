const BaseError = require('./baseError')
const { StatusCodes } = require('http-status-codes')

class BadRequests extends BaseError {
    constructor(propertyName) {
        super("BadRequest", StatusCodes.BAD_REQUEST,`Invalid structure for ${propertyName} provided`)
    }
}


module.exports = BadRequests;