export const initGeoLocation = () => {
  /*
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(coords => {
        console.log(coords)
        resolve(coords.coords);
      }, err => {
        console.log(err);
        reject(err);
      });
    } else {
      alert('Geolocation is not supported!');
      reject({})
    }
  }); */
  return new Promise((resolve, reject) => {
    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      resolve(crd)
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      reject(err);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  })
};
