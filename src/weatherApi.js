export const weatherApi = async (fetchLocation) => {
  try {
    console.log("this is a test");
    console.log(fetchLocation);
    const apiKey = "39b2ffc764b142b8a3b34951230703";
    //prettier-ignore
    let tableLocation = "Manitowoc,Milwaukee,Green Bay,Two Rivers,Appleton,Fresno";

    tableLocation += `,${fetchLocation}`;
    console.log(tableLocation);
    const locationSplit = tableLocation.split(",");

    /// a loop that grabs the apiUrl and throws it in an array of objects
    //prettier-ignore
    const locationsPlacedInAnArrayOfObjects = await Promise.all(locationSplit.map(async(tableLocation) => {
      //prettier-ignore
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(tableLocation)}`
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    }));

    //for the search
    //prettier-ignore
    // const searchLocation = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(fetchLocation)}`
    // console.log(searchLocation);
    console.log(locationsPlacedInAnArrayOfObjects);
    return locationsPlacedInAnArrayOfObjects;
  } catch (error) {
    alert(error);
  }
};
