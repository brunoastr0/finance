const ApiError = require('./ApiError');

function apiErrorHandler(err, req, res, next) { //4 params in a middleware->error handler middleware in express
    console.error(err)// only in dev; is not async

    if (err instanceof ApiError) {
        res.status(err.code).json(err.message)
        return;
    }

    res.status(500).json('something went wrong')
}

module.exports = apiErrorHandler