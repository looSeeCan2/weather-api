import { weatherApi } from "./weatherApi.js";
import { mainTable } from "../app.js";

export const searchWeather = async () => {
  event.preventDefault();
  const search = document.querySelector("#search-input");

  const x = await weatherApi(search.value);
  console.log(x);

  //TODO: so, I need to work on this part. when I click the button I call the weatherApi function, it is being added to the array,
  // but I have to call the table function so it can be rendered on the table

  // mainTable(); /// does not work. rerenders the whole table/. I have to seperate the rendering of the tr and td's into a function, so I can just call that part
};
