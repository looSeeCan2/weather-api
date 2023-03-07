const fetchWeather = async () => {
  try {
    const apiKey = "39b2ffc764b142b8a3b34951230703";
    //prettier-ignore
    const location = "Manitowoc,Milwaukee,Green Bay, Two Rivers";
    const locationSplit = location.split(",");
    console.log(locationSplit);

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

    ///grab the button
    const fetchWeather = document.querySelector(".fetch_weather");
    console.log(fetchWeather);
    ///grab the thead tr
    const theadtr = document.querySelector(".thead_tr");
    console.log(theadtr);

    ///populate the th in the tr by grabbing just one object and using the keys
    for (const key in locationsPlacedInAnArrayOfObjects[0].location) {
      const th = document.createElement("th");
      th.innerText = `${key}`;
      theadtr.appendChild(th);
    }

    ///grab the tr in the body
    const tbodytr = document.querySelector(".tbody_tr");
    console.log(tbodytr);

    ///populate the td in the tr in the tbody
    ///TODO: this is not correct, what I want it to do is; whenever I click the button I want it to add the new object to a new row
    fetchWeather.addEventListener("click", async () => {
      console.log(locationsPlacedInAnArrayOfObjects);
      locationsPlacedInAnArrayOfObjects.forEach((location) => {
        console.log(location.location);
        for (const key in location.location) {
          console.log(key);
          const td = document.createElement("td");
          if (td.innerHTML) {
            console.log(true);
          } else {
            td.innerHTML = `${location.location[key]}`;
            tbodytr.appendChild(td);
          }
        }
      });
    });
    return locationsPlacedInAnArrayOfObjects;
  } catch (error) {
    alert(error);
  }
};
// debugger;
const x = await fetchWeather();
console.log(x);
