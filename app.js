import { fetchWeather } from "./weather.js";

const fetchButton = async () => {
  ///grab the button
  const fetchButton = document.querySelector(".fetch_weather");
  console.log(fetchButton);
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

  ///everytime the button is clicked the tbody is populated with another <tr><td></td></tr>
  const tbody = document.querySelector(".table-body"); ///grab the tbody
  console.log(tbody);

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

  //TODO: create a search text box that will search for a places weather and display it. Maybe a clickable table to show a paragragh.

  fetchButton.addEventListener("click", async () => {
    event.preventDefault();
  });
};

fetchButton();
