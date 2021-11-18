import * as dotenv from 'dotenv';

// DB 생성후 ts 로 변환
// const dotenv = require('dotenv');
dotenv.config();

type Config = {
  username: string,
  password: string,
  database: string,
  host: string,
  [kye: string]: string
}

interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfigGroup =  {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "boilerplate_test_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "boilerplate_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "boilerplate_test_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

export default config;