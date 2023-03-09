const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something Went Wrong Try Again Later!',
    }
    if (err.code && err.code === 1000) {
        customError.msg = `Duplicate value Entered for ${err.keyValue} field, Please Choose another value`
        customError.statusCode = 400
    }
    return res.status(customError.statusCode).json({ msg: customError.msg });
}

module.exports = errorHandlerMiddleware;
