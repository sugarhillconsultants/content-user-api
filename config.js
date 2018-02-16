db_uri = (process.env.API_URL || 'localhost');
api_port = (process.env.API_PORT || '3000');

module.exports = {
  'api_url': api_url,
  'api_port': api_port
}
