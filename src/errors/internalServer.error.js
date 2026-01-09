const BaseError = require('./base.errror')
const { StatusCodes } = require('http-status-codes')

class InternalServerError extends BaseError {
    constructor(details) {
        super("InternalServerError", StatusCodes.INTERNAL_SERVER_ERROR,`Something went  wrong !!`, details)
    }
}


module.exports = InternalServerError;
