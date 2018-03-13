const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'koalas', // CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE
    host: 'localhost',
    port: '5432',
    max: '10',
    idleTimeoutMills: 5000
}

const pool = new Pool(config);

module.exports = pool;