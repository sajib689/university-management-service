import { createLogger, format, transports } from 'winston';
import path from 'path';
import { TransformableInfo } from 'logform';

const { combine, timestamp, label, printf } = format;

// Properly typed custom formatting
const myFormat = printf(
  ({ level, message, label, timestamp }: TransformableInfo) => {
    // Ensure timestamp is valid or provide a default
    const safeTimestamp =
      typeof timestamp === 'string' ||
      typeof timestamp === 'number' ||
      timestamp instanceof Date
        ? new Date(timestamp)
        : new Date();

    const hour = safeTimestamp.getHours();
    const minute = safeTimestamp.getMinutes();
    const seconds = safeTimestamp.getSeconds();

    return `${safeTimestamp.toString()} ${hour}:${minute}:${seconds} [${label}] ${level}: ${message}`;
  }
);

// Logger for informational logs
const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), '/logs/winston/success.log')
    })
  ]
});

// Logger for error logs
const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), '/logs/winston/error.log')
    })
  ]
});

export { logger, errorLogger };
