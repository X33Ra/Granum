
// API Call #2
/* Our next function, fetchCoordsByIP will be
 one that takes in an IP address and returns the latitude and longitude for it. */
//Define the fetchCoordsByIP function in iss.js.
/* It should take in two arguments: ip (string) and callback
Add the function to the object properties being exported from iss.js
For now, it can have an empty body and do nothing */
const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const errorMessage = `Unexpected status code: ${response.statusCode}`;
      callback(errorMessage, null);
      return;
    }

    try {
      const data = JSON.parse(body);
      const ipAddress = data.ip;
      callback(null, ipAddress);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
};

const fetchCoordsByIP = function(ip, callback) {
  const apiUrl = `https://freegeoip.app/json/${ip}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const errorMessage = `Unexpected status code: ${response.statusCode}`;
      callback(errorMessage, null);
      return;
    }

    try {
      const data = JSON.parse(body);
      const latitude = data.latitude;
      const longitude = data.longitude;
      callback(null, { latitude, longitude });
    } catch (parseError) {
      callback(parseError, null);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
