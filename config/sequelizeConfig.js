var Sequelize = require('sequelize'),
    mysql     = require('sequelize-mysql').mysql,
    databaseName = 'weightr',
    user = 'root',
    password = null,
    host = '127.0.0.1',
    port = '3306',
    remoteCredentials;

exports.Sequelize = Sequelize;

if (process.env.VCAP_SERVICES) {
  console.log("INFO " + JSON.parse(process.env.VCAP_SERVICES)['mysql-5.1']);
  remoteCredentials = JSON.parse(process.env.VCAP_SERVICES)['mysql-5.1'];
  remoteCredentials = remoteCredentials[0].credentials;
  user = remoteCredentials.user;
  password = remoteCredentials.password;
  host = remoteCredentials.host;
}

exports.database = new Sequelize(databaseName, user, password, {
  dialect: 'mysql',
  host: host,
  port: port
});