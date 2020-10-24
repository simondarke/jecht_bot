const winston = require('winston');

// define the custom settings for each transport (file, console)
const options = {
  errorFile: {
    level: 'info',
    filename: './logs/info.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  infoFile: {
    level: 'error',
    filename: './logs/error.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
};

// instantiate a new Winston Logger with the settings defined above
// eslint-disable-next-line new-cap
const logger = new winston.createLogger({
  transports: [
    new winston.transports.File(options.errorFile),
    new winston.transports.File(options.infoFile),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
