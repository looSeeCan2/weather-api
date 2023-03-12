export const fetchWeather = async () => {
  try {
    const apiKey = "39b2ffc764b142b8a3b34951230703";
    //prettier-ignore
    const location = "Manitowoc,Milwaukee,Green Bay,Two Rivers,Appleton";
    const locationSplit = location.split(",");

    /// a loop that grabs the apiUrl and throws it in an array of objects
    //prettier-ignore
    const locationsPlacedInAnArrayOfObjects = await Promise.all(locationSplit.map(async(location) => {
      //prettier-ignore
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    }));
    console.log(locationsPlacedInAnArrayOfObjects);
    return locationsPlacedInAnArrayOfObjects;
  } catch (error) {
    alert(error);
  }
};
