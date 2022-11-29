import  log4js from "log4js";

log4js.configure({
    appenders:{
        consola: { type: 'console' },
        archivoErrores: { type: 'file', filename: 'error.log' },
        archivoInfo: { type: 'file', filename: 'info.log' },
        archivoWarning: {type: 'file', filename: 'warn.log' },
        loggerConsola: {
          type: 'logLevelFilter',
          appender: 'consola',
          level: 'warn',
        },
        loggerConsola2: {
            type: 'logLevelFilter',
            appender: 'consola',
            level: 'error',
        },
        loggerConsola3: {
            type: 'logLevelFilter',
            appender: 'consola',
            level: 'info',
        },
        loggerArchivo:{
            type:'logLevelFilter',
            appender: 'archivoErrores',
            level:'error'
        },
        loggerInfo:{
            type:'logLevelFilter',
            appender:'archivoInfo',
            level:'info'
        }

    },
    categories:{
        default:{
            appenders:['loggerConsola','loggerConsola2','loggerConsola3'],
            level:'all'
        },
        prod:{
            appenders:['loggerArchivo','loggerInfo'],
            level:'all'
        }
    },
})

let logger = null

if (process.env.NODE_ENV === 'production') {
  logger = log4js.getLogger('prod')
} else {
  logger = log4js.getLogger()
}

export default logger