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
      resolve(crd)
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      reject(err);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  })
};
