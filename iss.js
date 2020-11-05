const request = require('request');

const fetchMyIP = function(callback) {
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      console.log(error);
      callback(error);
    } else {
      const data = JSON.parse(body);
      callback(null, data);
    }
  });
};

module.exports = { fetchMyIP };