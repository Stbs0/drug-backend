import logger from '@/utils/logger';
export const requestLogger = (request, response, next) => {
    logger.info(`Method:  ${request.method}`);
    logger.info(`Path:   ${request.path}`);
    logger.info(`Body:  `, request.body);
    next();
};
export const unknownEndpoint = (_request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};
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
//# sourceMappingURL=middleware.js.map