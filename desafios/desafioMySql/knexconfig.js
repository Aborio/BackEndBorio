
const dbConfig = {
    host: '127.0.0.1',
    port: 3309,
    user: 'root',
    password: 'mysqlpassword',
    database: 'BesObjetos'
}

export const knexConfig = {
    client : 'mysql',
    connection: dbConfig,
    useNullAsDefault:true
}

const dbConfigsq = {
    filename : './db.sqlite3'
}

export const knexConfigsq = {
    client : 'sqlite3',
    connection: dbConfigsq,
    useNullAsDefault:true
}