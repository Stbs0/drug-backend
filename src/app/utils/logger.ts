import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.errors({ stack: true }), // Adds stack trace for errors
    format.splat(), // Allows parameterized logging
    format.json()
  ),
});

logger.add(
  new transports.Console({
    format: format.combine(format.colorize(), format.simple()),
  })
);
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(
//     new transports.Console({
//       format: format.combine(format.colorize(), format.simple()),
//     })
//   );
// }

export default logger;
