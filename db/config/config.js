module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'db/database.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: 'db/database.test.sqlite',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
};
