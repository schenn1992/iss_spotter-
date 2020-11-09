const { nextISSTimesForMyLocation } = require('./iss');

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



const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});