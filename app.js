import { fetchWeather } from "./src/weatherApi.js";
import { searchWeather } from "./src/search.js";

const mainTable = async () => {
  ///grab the thead tr
  const theadtr = document.querySelector(".thead-tr");
  console.log(theadtr);

  const locationsPlacedInAnArrayOfObjects = await fetchWeather();
  ///populate the th in the tr by grabbing just one object and using the keys
  for (const key in locationsPlacedInAnArrayOfObjects[0].location) {
    const th = document.createElement("th");
    th.innerText = `${key}`;
    theadtr.appendChild(th);
  }

  const tbody = document.querySelector(".table-body"); ///grab the tbody
  console.log(tbody);

  ///populates the page with the table
  locationsPlacedInAnArrayOfObjects.forEach((location) => {
    ///I want to make the <tr>'s here
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    console.log(location.location);
    for (const key in location.location) {
      // console.log(key);
      const td = document.createElement("td");
      td.innerHTML = `${location.location[key]}`;
      tr.appendChild(td);
    }
  });
};

// debugger;
mainTable();

//TODO: create a search text box that will search for a places weather and display it. Maybe a clickable table to show a paragragh.
///grab the button
const fetchButton = document.querySelector(".fetch-weather");
console.log(fetchButton);

const search = document.querySelector("#search-input");
console.log(search);

fetchButton.addEventListener("click", searchWeather);
