export const initGeoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(coords => {
      console.log(coords);
    });
  } else {
    alert('Geolocation is not supported!');
  }
};
