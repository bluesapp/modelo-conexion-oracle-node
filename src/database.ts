const oracledb = require('oracledb');
require('dotenv').config();

export function connect(){
    //const dato = process.env.DBHOST;
    const connection = oracledb.getConnection({
        user: process.env.DBUSER,
        password: process.env.DBUSER,
        connectString: `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${process.env.DBHOST})(PORT=${process.env.DBPORT}))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${process.env.DBSERVICENAME})))`
      });
      return connection;

}
