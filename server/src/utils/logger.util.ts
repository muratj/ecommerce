import { format, transports, createLogger } from 'winston';

const logFormat = format.printf(
  ({ level, message, label, timestamp, stack }) => {
    return `${timestamp} [${label}] ${level}: ${stack || message}`;
  }
);

const loggerOptions = {
  dev: {
    format: format.combine(
      format.label({ label: 'ecommerce' }),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.colorize(),
      format.errors({ stack: true }),
      logFormat
    ),
    transports: [new transports.Console()],
  },
  prod: {
    format: format.combine(
      format.label({ label: 'ecommerce' }),
      format.timestamp(),
      format.errors({ stack: true }),
      logFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({ level: 'info', filename: 'production.logs.txt' }),
    ],
  },
};

type ObjectKey = keyof typeof loggerOptions;

const logger = createLogger(loggerOptions[process.env.NODE_ENV as ObjectKey]);

export default logger;
