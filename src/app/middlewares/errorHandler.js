"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error(err.stack || err);
    res.status(err.status || 500).json(Object.assign({ message: err.message || 'Internal Server Error' }, (process.env.NODE_ENV === 'development' && { stack: err.stack })));
}
