var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

var newrelic_license_key, vcaps_services, uri;
newrelic_license_key = process.env.NEW_REILIC_LICENSE_KEY;

if (appEnv.isLocal) {
  uri = 'mongodb://localhost:27017/users';
} else {
  vcaps_services = JSON.parse(process.env.VCAP_SERVICES);
  uri = vcaps_services['mlab'][0].credentials.uri;
  newrelic_license_key = appEnv.getServiceURL("newrelic");
}

module.exports = {
  'db_uri': uri,
  'newrelic_license_key': newrelic_license_key,
}
