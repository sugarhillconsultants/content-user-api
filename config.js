var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

if (appEnv.isLocal) {
  var uri = 'mongodb://localhost:27017/users';
} else {
  var vcaps_services = JSON.parse(process.env.VCAP_SERVICES);
  var uri = vcaps_services['mlab'][0].credentials.uri;
}

module.exports = {
  'db_uri': ,
}
