import mysql from 'mysql2';

export const db = mysql.createPool({
  host: 'jamuna-bd-cp3.hostever.com',
  user: 'splendi1_bachelors',
  password: 'AsDfGhJkL123',
  database: 'splendi1_bachelors',
});
