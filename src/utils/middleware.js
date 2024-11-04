"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownEndpoint = exports.requestLogger = void 0;
var logger_1 = require("@/utils/logger");
var requestLogger = function (request, response, next) {
    logger_1.default.info("Method:  ".concat(request.method));
    logger_1.default.info("Path:   ".concat(request.path));
    logger_1.default.info("Body:  ", request.body);
    next();
};
exports.requestLogger = requestLogger;
var unknownEndpoint = function (_request, response) {
    response.status(404).send({ error: 'unknown endpoint' });
};
exports.unknownEndpoint = unknownEndpoint;
// export const errorHandler = (error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) => {
//   if ("message" in error) {
//     logger.error(error.message);
//   }
//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' });
//   } else if (error.name === 'ValidationError') {
//     return response.status(400).json({ error: error.message });
//   }
//   next(error);
// };
