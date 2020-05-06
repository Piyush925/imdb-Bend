const success = (res, statusCode, result) => {
    res.status(statusCode).json({
        success: "true",
        data: result
    })
}

const failure = (res, statusCode, error) => {
    res.status(statusCode).json({
        success: "false",
        error: error
    })
}

module.exports = { success, failure }