const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        error: {
            message: err.message || "Internal Server Error",
        },
    });
};

module.exports = errorHandler;
