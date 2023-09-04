import mysql from 'mysql2';

export const db = mysql.createPool({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12644305',
  password: '59GVdbDMRK',
  database: 'sql12644305',
});
