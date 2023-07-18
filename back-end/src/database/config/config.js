require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: loprocess.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
  test: {
    // username: "seu_usuario_teste",
    // password: "sua_senha_teste",
    // database: "seu_banco_de_dados_teste",
    // host: "localhost",
    // port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: loprocess.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: loprocess.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
};

// const environment = process.env.NODE_ENV || "test";

// const suffix = {
//   prod: "",
//   production: "",
//   dev: "-dev",
//   development: "-dev",
//   test: "-test",
// };

// const options = {
//   host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'localhost',
//   port: process.env.MYSQL_PORT || '3306',
//   database:
//     `${process.env.MYSQL_DB_NAME || 'delivery-app'}${suffix[environment] || suffix.test}`,
//   username: process.env.MYSQL_USER || 'root',
//   password: process.env.MYSQL_PASSWORD || 'password',
//   dialect: 'mysql',
//   dialectOptions: {
//     timezone: 'Z',
//   },
//   logging: false,
// };

// module.exports = {
//   development: {
//     ...options,
//   },
//   test: {
//     ...options,
//   },
//   production: {
//     ...options,
//   },
// };
