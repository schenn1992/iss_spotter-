const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes  } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log("It worked! Returned IP: " , ip);
  
});

fetchCoordsByIP('165.185.173.254', (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  
  console.log("The coordinates are: ", coords);
  return coords;
  
});



fetchISSFlyOverTimes({ latitude: 43.649, longtitude: -79.3818 },(error, result) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  
  console.log("The result is: ", result);
});